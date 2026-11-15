import { CATEGORIES } from './vocabulary.js';
import { loadStars, saveStars, resetStars } from './storage.js';
import { speak, createRecognition } from './speech.js';

const MODES = {
  listen: 'Listen & Match',
  flashcards: 'Flashcards',
  voice: 'Speak & Check'
};

const LEVEL_LABELS = {
  easy: 'Łatwy',
  medium: 'Średni',
  hard: 'Trudny'
};

const state = {
  category: 'animals',
  mode: 'listen',
  level: 'easy',
  stars: loadStars(),
  round: null,
  flashcardIndex: 0,
  recognition: null,
  answered: false,
  lastWordId: null
};

const $ = (selector) => document.querySelector(selector);
const categoryTabs = $('#categoryTabs');
const modeTabs = $('#modeTabs');
const difficultySelect = $('#difficultySelect');
const starsCount = $('#starsCount');
const resetProgressBtn = $('#resetProgressBtn');
const promptLabel = $('#promptLabel');
const promptText = $('#promptText');
const actionBtn = $('#actionBtn');
const optionsEl = $('#options');
const resultEl = $('#result');
const nextBtn = $('#nextBtn');

const requiredElements = {
  categoryTabs, modeTabs, difficultySelect, starsCount, resetProgressBtn,
  promptLabel, promptText, actionBtn, optionsEl, resultEl, nextBtn
};

function assertMarkup() {
  const missing = Object.entries(requiredElements)
    .filter(([, element]) => !element)
    .map(([name]) => name);
  if (missing.length) {
    throw new Error(`Missing required page elements: ${missing.join(', ')}`);
  }
}

function getWords() {
  return CATEGORIES[state.category].filter((entry) => entry.level === state.level);
}

function setResult(message, kind = 'info') {
  resultEl.textContent = message;
  resultEl.dataset.kind = kind;
}

function updateStars() {
  starsCount.textContent = String(state.stars);
  saveStars(state.stars);
}

function shuffle(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

function chooseWord(words) {
  if (!words.length) return null;
  const options = words.length > 1
    ? words.filter((entry) => entry.id !== state.lastWordId)
    : words;
  const entry = options[Math.floor(Math.random() * options.length)];
  state.lastWordId = entry.id;
  return entry;
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function stopRecognition() {
  if (!state.recognition) return;
  try {
    state.recognition.stop();
  } catch (error) {
    // Recognition may already have stopped or failed.
  }
  state.recognition = null;
}

function removeFlashcard() {
  $('.flashcard-box')?.remove();
}

function renderCategoryTabs() {
  categoryTabs.replaceChildren();
  Object.keys(CATEGORIES).forEach((key) => {
    const button = makeElement('button', `tab-btn${state.category === key ? ' active' : ''}`, `${key[0].toUpperCase()}${key.slice(1)}`);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(state.category === key));
    button.addEventListener('click', () => {
      state.category = key;
      state.flashcardIndex = 0;
      state.lastWordId = null;
      renderCategoryTabs();
      renderGame();
    });
    categoryTabs.append(button);
  });
}

function renderModeTabs() {
  modeTabs.replaceChildren();
  Object.entries(MODES).forEach(([key, label]) => {
    const button = makeElement('button', `mode-btn${state.mode === key ? ' active' : ''}`, label);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(state.mode === key));
    button.addEventListener('click', () => {
      state.mode = key;
      renderModeTabs();
      renderGame();
    });
    modeTabs.append(button);
  });
}

function renderChoices(correct, words) {
  const alternatives = shuffle(words.filter((entry) => entry.id !== correct.id)).slice(0, 3);
  const choices = shuffle([correct, ...alternatives]);
  state.round = { correct, answered: false };
  optionsEl.replaceChildren();
  optionsEl.classList.remove('hidden');

  choices.forEach((entry) => {
    const button = makeElement('button', 'option-btn');
    button.type = 'button';
    button.setAttribute('aria-label', `Wybierz: ${entry.word}, ${entry.pl}`);
    const emoji = makeElement('span', 'option-emoji', entry.emoji);
    emoji.setAttribute('aria-hidden', 'true');
    button.append(emoji, makeElement('span', 'option-word', entry.word));
    button.addEventListener('click', () => handleAnswer(entry, button));
    optionsEl.append(button);
  });
}

function renderListen() {
  const words = getWords();
  const correct = chooseWord(words);
  if (!correct) return showError('Brak słówek na tym poziomie.');

  promptLabel.textContent = `Listen & Match · ${LEVEL_LABELS[state.level]}`;
  promptText.textContent = 'Posłuchaj i wybierz właściwy obrazek!';
  actionBtn.textContent = '🔊 Posłuchaj słowa';
  actionBtn.onclick = () => speak(correct.word, setResult);
  nextBtn.classList.add('hidden');
  nextBtn.textContent = 'Następna runda';
  state.answered = false;
  setResult('Naciśnij głośnik, a potem wybierz odpowiedź.');
  renderChoices(correct, words);
}

function renderFlashcard() {
  const words = getWords();
  if (!words.length) return showError('Brak słówek na tym poziomie.');
  const entry = words[state.flashcardIndex % words.length];
  state.round = { correct: entry };
  promptLabel.textContent = `Fiszki · ${LEVEL_LABELS[state.level]}`;
  promptText.textContent = 'Obejrzyj kartę, posłuchaj i powtórz!';
  actionBtn.textContent = '🔊 Posłuchaj wymowy';
  actionBtn.onclick = () => speak(entry.word, setResult);
  optionsEl.replaceChildren();
  optionsEl.classList.add('hidden');
  removeFlashcard();

  const card = makeElement('section', 'flashcard-box');
  card.setAttribute('aria-label', `${entry.word} — ${entry.pl}`);
  const emoji = makeElement('div', 'flashcard-emoji', entry.emoji);
  emoji.setAttribute('aria-hidden', 'true');
  card.append(emoji, makeElement('h3', 'flashcard-word', entry.word), makeElement('p', 'flashcard-translation', entry.pl));
  optionsEl.before(card);

  setResult(`Słowo ${state.flashcardIndex + 1} z ${words.length}`);
  nextBtn.textContent = 'Następna fiszka';
  nextBtn.classList.remove('hidden');
  nextBtn.onclick = () => {
    state.flashcardIndex = (state.flashcardIndex + 1) % words.length;
    renderFlashcard();
  };
}

function renderVoice() {
  const words = getWords();
  const entry = chooseWord(words);
  if (!entry) return showError('Brak słówek na tym poziomie.');

  state.round = { correct: entry, answered: false };
  promptLabel.textContent = `Speak & Check · ${LEVEL_LABELS[state.level]}`;
  promptText.textContent = `Powiedz po angielsku: ${entry.word}`;
  optionsEl.replaceChildren();
  optionsEl.classList.add('hidden');
  removeFlashcard();
  nextBtn.classList.add('hidden');
  nextBtn.textContent = 'Następne słowo';
  actionBtn.textContent = '🎙️ Nagraj odpowiedź';
  actionBtn.onclick = startVoiceRecognition;
  setResult('Naciśnij przycisk i powiedz słowo. Mikrofon uruchamia się dopiero po Twoim kliknięciu.');
}

function startVoiceRecognition() {
  stopRecognition();
  const recognition = createRecognition();
  if (!recognition) {
    setResult('Rozpoznawanie mowy nie jest obsługiwane w tej przeglądarce. Możesz ćwiczyć z fiszkami.', 'error');
    return;
  }

  state.recognition = recognition;
  recognition.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript?.trim() || '';
    const expected = state.round?.correct?.word || '';
    const normalized = (value) => value.toLocaleLowerCase('en-US').replace(/[^a-z ]/g, '').trim().replace(/\s+/g, ' ');
    const heard = normalized(transcript);
    const target = normalized(expected);
    const correct = heard === target || ` ${heard} `.includes(` ${target} `);
    state.round.answered = true;
    if (correct) {
      state.stars += 1;
      updateStars();
      setResult(`Świetnie! Usłyszałem „${expected}”. ⭐`, 'success');
    } else {
      setResult(`Dobra próba! Usłyszałem „${transcript}”. Spróbuj jeszcze raz.`, 'info');
    }
    nextBtn.textContent = correct ? 'Następne słowo' : 'Spróbuj ponownie';
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = correct ? renderGame : startVoiceRecognition;
  };
  recognition.onerror = (event) => {
    state.recognition = null;
    const messages = {
      'not-allowed': 'Brak dostępu do mikrofonu. Sprawdź uprawnienia przeglądarki.',
      'no-speech': 'Nie wykryto głosu. Spróbuj powiedzieć słowo głośniej.',
      'audio-capture': 'Nie znaleziono mikrofonu. Sprawdź urządzenie.'
    };
    setResult(messages[event.error] || 'Nie udało się rozpoznać mowy. Spróbuj ponownie.', 'error');
  };
  recognition.onend = () => {
    if (state.recognition === recognition) state.recognition = null;
  };

  try {
    recognition.start();
    setResult('Słucham… powiedz słowo po angielsku.');
  } catch (error) {
    state.recognition = null;
    setResult('Nie udało się uruchomić mikrofonu. Spróbuj ponownie.', 'error');
  }
}

function handleAnswer(selected, button) {
  if (!state.round || state.round.answered) return;
  state.round.answered = true;
  const correct = selected.id === state.round.correct.id;
  optionsEl.querySelectorAll('button').forEach((choice) => { choice.disabled = true; });
  if (correct) {
    button.classList.add('correct');
    state.stars += 1;
    updateStars();
    setResult('Brawo! Świetna odpowiedź! ⭐', 'success');
  } else {
    button.classList.add('wrong');
    const correctButton = [...optionsEl.querySelectorAll('button')]
      .find((choice) => choice.getAttribute('aria-label') === `Wybierz: ${state.round.correct.word}, ${state.round.correct.pl}`);
    correctButton?.classList.add('correct');
    setResult('Dobra próba! Zapamiętaj właściwe słowo i graj dalej.', 'info');
  }
  nextBtn.textContent = 'Następna runda';
  nextBtn.classList.remove('hidden');
  nextBtn.onclick = renderGame;
}

function showError(message) {
  setResult(message, 'error');
  optionsEl.replaceChildren();
  nextBtn.classList.add('hidden');
}

function renderGame() {
  stopRecognition();
  removeFlashcard();
  nextBtn.classList.add('hidden');
  optionsEl.classList.remove('hidden');
  state.round = null;
  if (state.mode === 'listen') renderListen();
  else if (state.mode === 'flashcards') renderFlashcard();
  else renderVoice();
}

function bindControls() {
  difficultySelect.value = state.level;
  difficultySelect.addEventListener('change', () => {
    state.level = difficultySelect.value;
    state.flashcardIndex = 0;
    state.lastWordId = null;
    renderGame();
  });

  resetProgressBtn.addEventListener('click', () => {
    if (!window.confirm('Czy na pewno wyzerować wszystkie zdobyte gwiazdki?')) return;
    state.stars = 0;
    resetStars();
    updateStars();
    setResult('Postęp został wyzerowany. Zaczynamy od nowa!');
  });
}

function init() {
  assertMarkup();
  renderCategoryTabs();
  renderModeTabs();
  bindControls();
  updateStars();
  renderGame();
}

try {
  init();
} catch (error) {
  console.error('English Adventure failed to initialize:', error);
  document.body.innerHTML = '<main class="startup-error"><h1>Nie udało się uruchomić gry</h1><p>Odśwież stronę. Jeśli problem wraca, skontaktuj się z opiekunem aplikacji.</p></main>';
}

const CATEGORIES = {
  animals: [
    { id: 'cat', word: 'cat', pl: 'kot', emoji: '🐱', accent: '#ffb067' },
    { id: 'dog', word: 'dog', pl: 'pies', emoji: '🐶', accent: '#7dd3fc' },
    { id: 'elephant', word: 'elephant', pl: 'słoń', emoji: '🐘', accent: '#a5b4fc' },
    { id: 'frog', word: 'frog', pl: 'żaba', emoji: '🐸', accent: '#86efac' },
    { id: 'tiger', word: 'tiger', pl: 'tygrys', emoji: '🐯', accent: '#fbbf24' },
    { id: 'bird', word: 'bird', pl: 'ptak', emoji: '🐦', accent: '#f9a8d4' }
  ],
  colors: [
    { id: 'red', word: 'red', pl: 'czerwony', emoji: '🔴', accent: '#f87171' },
    { id: 'blue', word: 'blue', pl: 'niebieski', emoji: '🔵', accent: '#60a5fa' },
    { id: 'green', word: 'green', pl: 'zielony', emoji: '🟢', accent: '#4ade80' },
    { id: 'yellow', word: 'yellow', pl: 'żółty', emoji: '🟡', accent: '#facc15' },
    { id: 'purple', word: 'purple', pl: 'fioletowy', emoji: '🟣', accent: '#c084fc' },
    { id: 'orange', word: 'orange', pl: 'pomarańczowy', emoji: '🟠', accent: '#fb923c' }
  ],
  food: [
    { id: 'apple', word: 'apple', pl: 'jabłko', emoji: '🍏', accent: '#a3e635' },
    { id: 'bread', word: 'bread', pl: 'chleb', emoji: '🍞', accent: '#fbbf24' },
    { id: 'milk', word: 'milk', pl: 'mleko', emoji: '🥛', accent: '#bfdbfe' },
    { id: 'cake', word: 'cake', pl: 'ciasto', emoji: '🍰', accent: '#f9a8d4' },
    { id: 'banana', word: 'banana', pl: 'banan', emoji: '🍌', accent: '#facc15' },
    { id: 'pizza', word: 'pizza', pl: 'pizza', emoji: '🍕', accent: '#fca5a5' }
  ],
  school: [
    { id: 'book', word: 'book', pl: 'książka', emoji: '📚', accent: '#c4b5fd' },
    { id: 'pencil', word: 'pencil', pl: 'ołówek', emoji: '✏️', accent: '#93c5fd' },
    { id: 'ruler', word: 'ruler', pl: 'linijka', emoji: '📏', accent: '#86efac' },
    { id: 'bag', word: 'bag', pl: 'torba', emoji: '🎒', accent: '#fbbf24' },
    { id: 'chair', word: 'chair', pl: 'krzesło', emoji: '🪑', accent: '#f9a8d4' },
    { id: 'teacher', word: 'teacher', pl: 'nauczyciel', emoji: '👩‍🏫', accent: '#fdba74' }
  ]
};

const MODES = {
  listen: 'Listen & Match',
  flashcards: 'Flashcards',
  voice: 'Speak & Check'
};

const state = {
  category: 'animals',
  mode: 'listen',
  stars: Number(localStorage.getItem('english-adventure-stars') || 0),
  round: null,
  currentFlashcardIndex: 0,
  recognition: null,
  isListening: false
};

const categoryTabs = document.getElementById('categoryTabs');
const modeTabs = document.getElementById('modeTabs');
const starsCount = document.getElementById('starsCount');
const promptLabel = document.getElementById('promptLabel');
const promptText = document.getElementById('promptText');
const actionBtn = document.getElementById('actionBtn');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');

function updateStars() {
  starsCount.textContent = String(state.stars);
  localStorage.setItem('english-adventure-stars', String(state.stars));
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeWord(value) {
  return value.toLowerCase().trim().replace(/[^a-z]/g, '');
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = '';

  Object.entries(CATEGORIES).forEach(([key, words]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `tab-btn ${state.category === key ? 'active' : ''}`;
    button.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    button.addEventListener('click', () => {
      state.category = key;
      renderCategoryTabs();
      renderGame();
    });
    categoryTabs.appendChild(button);
  });
}

function renderModeTabs() {
  modeTabs.innerHTML = '';

  Object.entries(MODES).forEach(([key, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `mode-btn ${state.mode === key ? 'active' : ''}`;
    button.textContent = label;
    button.addEventListener('click', () => {
      state.mode = key;
      renderModeTabs();
      renderGame();
    });
    modeTabs.appendChild(button);
  });
}

function speakWord(word) {
  const synth = window.speechSynthesis;
  if (!synth) {
    resultEl.textContent = 'Your browser does not support voice playback.';
    return;
  }

  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(word.word);
  utterance.lang = 'en-US';
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  synth.speak(utterance);
}

function renderListenRound() {
  const words = CATEGORIES[state.category];
  const correct = words[Math.floor(Math.random() * words.length)];
  const wrongs = shuffle(words.filter((word) => word.id !== correct.id)).slice(0, 3);
  const choices = shuffle([correct, ...wrongs]);

  state.round = { correct, choices };
  promptLabel.textContent = 'Listen & Match';
  promptText.textContent = `Find the ${correct.word}`;
  actionBtn.textContent = '🔊 Hear it again';
  actionBtn.onclick = () => speakWord(correct);
  nextBtn.classList.add('hidden');
  resultEl.textContent = 'Ready to play!';
  optionsEl.classList.remove('hidden');
  optionsEl.innerHTML = '';

  choices.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.innerHTML = `
      <span class="option-emoji">${item.emoji}</span>
      <span>${item.word}</span>
    `;
    button.addEventListener('click', () => handleOptionAnswer(item, button));
    optionsEl.appendChild(button);
  });
}

function renderFlashcards() {
  const words = CATEGORIES[state.category];
  const item = words[state.currentFlashcardIndex % words.length];

  state.round = { correct: item };
  promptLabel.textContent = 'Flashcards';
  promptText.textContent = 'Look, listen and repeat';
  actionBtn.textContent = '🔊 Hear it';
  actionBtn.onclick = () => speakWord(item);
  nextBtn.textContent = 'Next card';
  nextBtn.classList.remove('hidden');
  resultEl.textContent = `${item.pl} = ${item.word}`;
  optionsEl.classList.add('hidden');
  optionsEl.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'flashcard-box';
  card.innerHTML = `
    <div class="flashcard-emoji">${item.emoji}</div>
    <h3 class="flashcard-word">${item.word}</h3>
    <p class="flashcard-translation">${item.pl}</p>
  `;
  optionsEl.parentElement.insertBefore(card, optionsEl);

  nextBtn.onclick = () => {
    state.currentFlashcardIndex += 1;
    const previousCard = document.querySelector('.flashcard-box');
    if (previousCard) previousCard.remove();
    renderFlashcards();
  };
}

function stopRecognition() {
  if (state.recognition) {
    state.recognition.stop();
    state.recognition = null;
  }
  state.isListening = false;
}

function startVoiceQuiz() {
  const words = CATEGORIES[state.category];
  const correct = words[Math.floor(Math.random() * words.length)];

  state.round = { correct };
  promptLabel.textContent = 'Speak & Check';
  promptText.textContent = `Say: ${correct.word}`;
  actionBtn.textContent = '🎙️ Start again';
  actionBtn.onclick = startVoiceQuiz;
  resultEl.textContent = 'Press the microphone and say the word.';
  nextBtn.classList.add('hidden');
  optionsEl.classList.add('hidden');
  optionsEl.innerHTML = '';

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    resultEl.textContent = 'Twoja przeglądarka nie obsługuje rozpoznawania mowy.';
    return;
  }

  const recognition = new SpeechRecognition();
  state.recognition = recognition;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  resultEl.textContent = 'Listening... say the word out loud!';

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(' ');

    const guessed = normalizeWord(transcript);
    const target = normalizeWord(correct.word);

    if (guessed.includes(target) || target.includes(guessed)) {
      state.stars += 1;
      updateStars();
      resultEl.textContent = `Super! You said: "${correct.word}" ⭐`;
    } else {
      resultEl.textContent = `Almost! Try again: "${correct.word}"`;
    }

    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => {
      stopRecognition();
      renderGame();
    };
  };

  recognition.onerror = () => {
    resultEl.textContent = 'I could not hear you. Try again.';
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => renderGame();
  };

  recognition.onend = () => {
    state.recognition = null;
    state.isListening = false;
  };
}

function handleOptionAnswer(selected, buttonEl) {
  const correct = state.round.correct;
  const allButtons = [...document.querySelectorAll('.option-btn')];

  allButtons.forEach((btn) => {
    btn.disabled = true;
  });

  if (selected.id === correct.id) {
    buttonEl.classList.add('correct');
    state.stars += 1;
    updateStars();
    resultEl.textContent = 'Excellent! Great job! ⭐';
  } else {
    buttonEl.classList.add('wrong');
    const correctBtn = allButtons.find((btn) => btn.textContent.includes(correct.word));
    if (correctBtn) {
      correctBtn.classList.add('correct');
    }
    resultEl.textContent = `Try again! Correct answer: ${correct.word}`;
  }

  nextBtn.classList.remove('hidden');
  nextBtn.textContent = 'Next round';
  nextBtn.onclick = () => {
    renderGame();
  };
}

function renderGame() {
  stopRecognition();
  nextBtn.classList.add('hidden');
  optionsEl.classList.remove('hidden');
  const existingFlashcard = document.querySelector('.flashcard-box');
  if (existingFlashcard) {
    existingFlashcard.remove();
  }

  if (state.mode === 'listen') {
    renderListenRound();
    return;
  }

  if (state.mode === 'flashcards') {
    renderFlashcards();
    return;
  }

  startVoiceQuiz();
}

renderCategoryTabs();
renderModeTabs();
updateStars();
renderGame();

const CATEGORIES = {
  animals: [
    { id: 'cat', word: 'cat', pl: 'kot', emoji: '🐱' },
    { id: 'dog', word: 'dog', pl: 'pies', emoji: '🐶' },
    { id: 'elephant', word: 'elephant', pl: 'słoń', emoji: '🐘' },
    { id: 'frog', word: 'frog', pl: 'żaba', emoji: '🐸' },
    { id: 'tiger', word: 'tiger', pl: 'tygrys', emoji: '🐯' },
    { id: 'bird', word: 'bird', pl: 'ptak', emoji: '🐦' },
    { id: 'lion', word: 'lion', pl: 'lew', emoji: '🦁' },
    { id: 'bear', word: 'bear', pl: 'niedźwiedź', emoji: '🐻' },
    { id: 'monkey', word: 'monkey', pl: 'małpa', emoji: '🐵' },
    { id: 'rabbit', word: 'rabbit', pl: 'królik', emoji: '🐰' },
    { id: 'mouse', word: 'mouse', pl: 'mysz', emoji: '🐭' },
    { id: 'horse', word: 'horse', pl: 'koń', emoji: '🐴' },
    { id: 'cow', word: 'cow', pl: 'krowa', emoji: '🐮' },
    { id: 'pig', word: 'pig', pl: 'świnia', emoji: '🐷' },
    { id: 'sheep', word: 'sheep', pl: 'owca', emoji: '🐑' },
    { id: 'duck', word: 'duck', pl: 'kaczka', emoji: '🦆' },
    { id: 'chicken', word: 'chicken', pl: 'kurczak', emoji: '🐔' },
    { id: 'turtle', word: 'turtle', pl: 'żółw', emoji: '🐢' },
    { id: 'snake', word: 'snake', pl: 'wąż', emoji: '🐍' },
    { id: 'penguin', word: 'penguin', pl: 'pingwin', emoji: '🐧' },
    { id: 'dolphin', word: 'dolphin', pl: 'delfin', emoji: '🐬' },
    { id: 'whale', word: 'whale', pl: 'wieloryb', emoji: '🐳' },
    { id: 'fox', word: 'fox', pl: 'lis', emoji: '🦊' },
    { id: 'zebra', word: 'zebra', pl: 'zebra', emoji: '🦓' },
    { id: 'giraffe', word: 'giraffe', pl: 'żyrafa', emoji: '🦒' },
    { id: 'owl', word: 'owl', pl: 'sowa', emoji: '🦉' },
    { id: 'bee', word: 'bee', pl: 'pszczoła', emoji: '🐝' },
    { id: 'butterfly', word: 'butterfly', pl: 'motyl', emoji: '🦋' },
    { id: 'spider', word: 'spider', pl: 'pająk', emoji: '🕷️' },
    { id: 'hamster', word: 'hamster', pl: 'chomik', emoji: '🐹' }
  ],
  colors: [
    { id: 'red', word: 'red', pl: 'czerwony', emoji: '🔴' },
    { id: 'blue', word: 'blue', pl: 'niebieski', emoji: '🔵' },
    { id: 'green', word: 'green', pl: 'zielony', emoji: '🟢' },
    { id: 'yellow', word: 'yellow', pl: 'żółty', emoji: '🟡' },
    { id: 'purple', word: 'purple', pl: 'fioletowy', emoji: '🟣' },
    { id: 'orange', word: 'orange', pl: 'pomarańczowy', emoji: '🟠' },
    { id: 'pink', word: 'pink', pl: 'różowy', emoji: '💗' },
    { id: 'black', word: 'black', pl: 'czarny', emoji: '⚫' },
    { id: 'white', word: 'white', pl: 'biały', emoji: '⚪' },
    { id: 'brown', word: 'brown', pl: 'brązowy', emoji: '🟤' },
    { id: 'grey', word: 'grey', pl: 'szary', emoji: '🩶' },
    { id: 'gold', word: 'gold', pl: 'złoty', emoji: '🌟' },
    { id: 'silver', word: 'silver', pl: 'srebrny', emoji: '✨' },
    { id: 'light-blue', word: 'light blue', pl: 'jasnoniebieski', emoji: '🩵' },
    { id: 'dark-blue', word: 'dark blue', pl: 'ciemnoniebieski', emoji: '🔷' },
    { id: 'light-green', word: 'light green', pl: 'jasnozielony', emoji: '🟩' },
    { id: 'dark-green', word: 'dark green', pl: 'ciemnozielony', emoji: '🌲' },
    { id: 'beige', word: 'beige', pl: 'beżowy', emoji: '🟫' },
    { id: 'turquoise', word: 'turquoise', pl: 'turkusowy', emoji: '🩱' },
    { id: 'navy', word: 'navy', pl: 'granatowy', emoji: '🌌' },
    { id: 'maroon', word: 'maroon', pl: 'bordowy', emoji: '🍷' },
    { id: 'lime', word: 'lime', pl: 'limonkowy', emoji: '🍋' },
    { id: 'coral', word: 'coral', pl: 'koralowy', emoji: '🪸' },
    { id: 'violet', word: 'violet', pl: 'fioletowy', emoji: '🪻' },
    { id: 'cream', word: 'cream', pl: 'kremowy', emoji: '🍦' },
    { id: 'teal', word: 'teal', pl: 'morski', emoji: '🦚' },
    { id: 'magenta', word: 'magenta', pl: 'purpuroworóżowy', emoji: '🌺' },
    { id: 'peach', word: 'peach', pl: 'brzoskwiniowy', emoji: '🍑' },
    { id: 'rainbow', word: 'rainbow', pl: 'tęczowy', emoji: '🌈' },
    { id: 'colorful', word: 'colorful', pl: 'kolorowy', emoji: '🎨' }
  ],
  food: [
    { id: 'apple', word: 'apple', pl: 'jabłko', emoji: '🍏' },
    { id: 'bread', word: 'bread', pl: 'chleb', emoji: '🍞' },
    { id: 'milk', word: 'milk', pl: 'mleko', emoji: '🥛' },
    { id: 'cake', word: 'cake', pl: 'ciasto', emoji: '🍰' },
    { id: 'banana', word: 'banana', pl: 'banan', emoji: '🍌' },
    { id: 'pizza', word: 'pizza', pl: 'pizza', emoji: '🍕' },
    { id: 'orange-fruit', word: 'orange', pl: 'pomarańcza', emoji: '🍊' },
    { id: 'pear', word: 'pear', pl: 'gruszka', emoji: '🍐' },
    { id: 'strawberry', word: 'strawberry', pl: 'truskawka', emoji: '🍓' },
    { id: 'grapes', word: 'grapes', pl: 'winogrona', emoji: '🍇' },
    { id: 'watermelon', word: 'watermelon', pl: 'arbuz', emoji: '🍉' },
    { id: 'lemon', word: 'lemon', pl: 'cytryna', emoji: '🍋' },
    { id: 'peach-fruit', word: 'peach', pl: 'brzoskwinia', emoji: '🍑' },
    { id: 'cherry', word: 'cherry', pl: 'wiśnia', emoji: '🍒' },
    { id: 'pineapple', word: 'pineapple', pl: 'ananas', emoji: '🍍' },
    { id: 'carrot', word: 'carrot', pl: 'marchewka', emoji: '🥕' },
    { id: 'tomato', word: 'tomato', pl: 'pomidor', emoji: '🍅' },
    { id: 'potato', word: 'potato', pl: 'ziemniak', emoji: '🥔' },
    { id: 'cheese', word: 'cheese', pl: 'ser', emoji: '🧀' },
    { id: 'egg', word: 'egg', pl: 'jajko', emoji: '🥚' },
    { id: 'rice', word: 'rice', pl: 'ryż', emoji: '🍚' },
    { id: 'soup', word: 'soup', pl: 'zupa', emoji: '🍲' },
    { id: 'sandwich', word: 'sandwich', pl: 'kanapka', emoji: '🥪' },
    { id: 'cookie', word: 'cookie', pl: 'ciastko', emoji: '🍪' },
    { id: 'ice-cream', word: 'ice cream', pl: 'lody', emoji: '🍦' },
    { id: 'yogurt', word: 'yogurt', pl: 'jogurt', emoji: '🥣' },
    { id: 'chicken-food', word: 'chicken', pl: 'kurczak', emoji: '🍗' },
    { id: 'fish-food', word: 'fish', pl: 'ryba', emoji: '🐟' },
    { id: 'water', word: 'water', pl: 'woda', emoji: '💧' },
    { id: 'juice', word: 'juice', pl: 'sok', emoji: '🧃' }
  ],
  school: [
    { id: 'book', word: 'book', pl: 'książka', emoji: '📚' },
    { id: 'pencil', word: 'pencil', pl: 'ołówek', emoji: '✏️' },
    { id: 'ruler', word: 'ruler', pl: 'linijka', emoji: '📏' },
    { id: 'bag', word: 'bag', pl: 'torba', emoji: '🎒' },
    { id: 'chair', word: 'chair', pl: 'krzesło', emoji: '🪑' },
    { id: 'teacher', word: 'teacher', pl: 'nauczyciel', emoji: '👩‍🏫' },
    { id: 'pen', word: 'pen', pl: 'długopis', emoji: '🖊️' },
    { id: 'pencil-case', word: 'pencil case', pl: 'piórnik', emoji: '🖍️' },
    { id: 'desk', word: 'desk', pl: 'biurko', emoji: '🧾' },
    { id: 'board', word: 'board', pl: 'tablica', emoji: '🧑‍🏫' },
    { id: 'notebook', word: 'notebook', pl: 'zeszyt', emoji: '📓' },
    { id: 'eraser', word: 'eraser', pl: 'gumka', emoji: '🧽' },
    { id: 'school', word: 'school', pl: 'szkoła', emoji: '🏫' },
    { id: 'classroom', word: 'classroom', pl: 'klasa', emoji: '🏫' },
    { id: 'student', word: 'student', pl: 'uczeń', emoji: '🧑‍🎓' },
    { id: 'boy', word: 'boy', pl: 'chłopiec', emoji: '👦' },
    { id: 'girl', word: 'girl', pl: 'dziewczynka', emoji: '👧' },
    { id: 'paper', word: 'paper', pl: 'papier', emoji: '📄' },
    { id: 'scissors', word: 'scissors', pl: 'nożyczki', emoji: '✂️' },
    { id: 'glue', word: 'glue', pl: 'klej', emoji: '🧴' },
    { id: 'crayon', word: 'crayon', pl: 'kredka', emoji: '🖍️' },
    { id: 'marker', word: 'marker', pl: 'marker', emoji: '🖊️' },
    { id: 'clock', word: 'clock', pl: 'zegar', emoji: '🕒' },
    { id: 'computer', word: 'computer', pl: 'komputer', emoji: '💻' },
    { id: 'map', word: 'map', pl: 'mapa', emoji: '🗺️' },
    { id: 'globe', word: 'globe', pl: 'globus', emoji: '🌍' },
    { id: 'calendar', word: 'calendar', pl: 'kalendarz', emoji: '🗓️' },
    { id: 'homework', word: 'homework', pl: 'praca domowa', emoji: '📝' },
    { id: 'lesson', word: 'lesson', pl: 'lekcja', emoji: '📖' },
    { id: 'playground', word: 'playground', pl: 'plac zabaw', emoji: '🛝' }
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
  recognition: null
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
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function normalizeWord(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z ]/g, '')
    .replace(/\s+/g, ' ');
}

function getRandomEntry(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getChoiceOptions(correct, items) {
  const others = items.filter((entry) => entry.id !== correct.id);
  return shuffle([correct, ...shuffle(others).slice(0, 3)]);
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = '';

  Object.keys(CATEGORIES).forEach((key) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `tab-btn ${state.category === key ? 'active' : ''}`;
    button.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    button.addEventListener('click', () => {
      state.category = key;
      state.currentFlashcardIndex = 0;
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
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    resultEl.textContent = 'Voice playback is not supported in this browser.';
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word.word);
  utterance.lang = 'en-US';
  utterance.rate = 0.78;
  utterance.pitch = 1.15;
  window.speechSynthesis.speak(utterance);
}

function renderListenRound() {
  const words = CATEGORIES[state.category];
  const correct = getRandomEntry(words);
  const choices = getChoiceOptions(correct, words);

  state.round = { correct, choices };
  promptLabel.textContent = 'Listen & Match';
  promptText.textContent = `Find the word: ${correct.word}`;
  actionBtn.textContent = '🔊 Hear it again';
  actionBtn.onclick = () => speakWord(correct);
  nextBtn.classList.add('hidden');
  resultEl.textContent = 'Ready to play!';
  optionsEl.classList.remove('hidden');
  optionsEl.innerHTML = '';

  choices.forEach((entry) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.setAttribute('aria-label', `Choose ${entry.word}`);
    button.innerHTML = `
      <span class="option-emoji">${entry.emoji}</span>
      <span>${entry.word}</span>
    `;
    button.addEventListener('click', () => handleOptionAnswer(entry, button));
    optionsEl.appendChild(button);
  });
}

function renderFlashcards() {
  const words = CATEGORIES[state.category];
  const item = words[state.currentFlashcardIndex % words.length];

  state.round = { correct: item };
  promptLabel.textContent = 'Flashcards';
  promptText.textContent = 'Look, listen and repeat!';
  actionBtn.textContent = '🔊 Hear it';
  actionBtn.onclick = () => speakWord(item);
  nextBtn.textContent = 'Next card';
  nextBtn.classList.remove('hidden');
  resultEl.textContent = `${item.pl} — ${item.word}`;
  optionsEl.classList.add('hidden');
  optionsEl.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'flashcard-box';
  card.innerHTML = `
    <div class="flashcard-emoji" aria-hidden="true">${item.emoji}</div>
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
    try {
      state.recognition.stop();
    } catch (error) {
      // no-op: recognition can already be stopped
    }
    state.recognition = null;
  }
}

function startVoiceQuiz() {
  const words = CATEGORIES[state.category];
  const correct = getRandomEntry(words);

  state.round = { correct };
  promptLabel.textContent = 'Speak & Check';
  promptText.textContent = `Say: ${correct.word}`;
  actionBtn.textContent = '🎙️ Try another word';
  actionBtn.onclick = startVoiceQuiz;
  resultEl.textContent = 'Allow microphone access, then say the word in English.';
  nextBtn.classList.add('hidden');
  optionsEl.classList.add('hidden');
  optionsEl.innerHTML = '';

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    resultEl.textContent = 'Speech recognition is not supported in this browser. Try Chrome or Edge.';
    return;
  }

  const recognition = new SpeechRecognition();
  state.recognition = recognition;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  try {
    recognition.start();
    resultEl.textContent = 'Listening... say the word out loud!';
  } catch (error) {
    resultEl.textContent = 'Microphone could not start. Try again.';
    state.recognition = null;
    return;
  }

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(' ');

    const guessed = normalizeWord(transcript);
    const target = normalizeWord(correct.word);

    const isCorrect = guessed === target || guessed.includes(target) || target.includes(guessed);

    if (isCorrect) {
      state.stars += 1;
      updateStars();
      resultEl.textContent = `Brilliant! You said “${correct.word}”! ⭐`;
    } else {
      resultEl.textContent = `Good try! You said “${transcript}”. The answer is “${correct.word}”.`;
    }

    nextBtn.textContent = 'Next word';
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => {
      stopRecognition();
      renderGame();
    };
  };

  recognition.onerror = () => {
    resultEl.textContent = 'I could not hear you clearly. Please try again.';
    nextBtn.textContent = 'Try again';
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = startVoiceQuiz;
  };

  recognition.onend = () => {
    state.recognition = null;
  };
}

function handleOptionAnswer(selected, buttonEl) {
  if (!state.round || !state.round.correct) return;

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
    const correctButton = allButtons.find((btn) => btn.getAttribute('aria-label') === `Choose ${correct.word}`);
    if (correctButton) correctButton.classList.add('correct');
    resultEl.textContent = `Good try! The correct answer is “${correct.word}”.`;
  }

  nextBtn.textContent = 'Next round';
  nextBtn.classList.remove('hidden');
  nextBtn.onclick = renderGame;
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

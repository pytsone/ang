const CATEGORIES = {
  animals: [
    { id: 'cat', word: 'cat', pl: 'kot', emoji: '🐱', accent: '#ffb067' },
    { id: 'dog', word: 'dog', pl: 'pies', emoji: '🐶', accent: '#7dd3fc' },
    { id: 'elephant', word: 'elephant', pl: 'słoń', emoji: '🐘', accent: '#a5b4fc' },
    { id: 'frog', word: 'frog', pl: 'żaba', emoji: '🐸', accent: '#86efac' },
    { id: 'tiger', word: 'tiger', pl: 'tygrys', emoji: '🐯', accent: '#fbbf24' },
    { id: 'bird', word: 'bird', pl: 'ptak', emoji: '🐦', accent: '#f9a8d4' },
    { id: 'lion', word: 'lion', pl: 'lew', emoji: '🦁', accent: '#fdba74' },
    { id: 'bear', word: 'bear', pl: 'niedźwiedź', emoji: '🐻', accent: '#c4a484' },
    { id: 'monkey', word: 'monkey', pl: 'małpa', emoji: '🐵', accent: '#d6a77a' },
    { id: 'rabbit', word: 'rabbit', pl: 'królik', emoji: '🐰', accent: '#f9a8d4' },
    { id: 'mouse', word: 'mouse', pl: 'mysz', emoji: '🐭', accent: '#cbd5e1' },
    { id: 'horse', word: 'horse', pl: 'koń', emoji: '🐴', accent: '#c08457' },
    { id: 'cow', word: 'cow', pl: 'krowa', emoji: '🐮', accent: '#e2e8f0' },
    { id: 'pig', word: 'pig', pl: 'świnia', emoji: '🐷', accent: '#f9a8d4' },
    { id: 'sheep', word: 'sheep', pl: 'owca', emoji: '🐑', accent: '#f1f5f9' },
    { id: 'duck', word: 'duck', pl: 'kaczka', emoji: '🦆', accent: '#facc15' },
    { id: 'chicken', word: 'chicken', pl: 'kurczak', emoji: '🐔', accent: '#fca5a5' },
    { id: 'turtle', word: 'turtle', pl: 'żółw', emoji: '🐢', accent: '#86efac' },
    { id: 'snake', word: 'snake', pl: 'wąż', emoji: '🐍', accent: '#4ade80' },
    { id: 'penguin', word: 'penguin', pl: 'pingwin', emoji: '🐧', accent: '#94a3b8' },
    { id: 'dolphin', word: 'dolphin', pl: 'delfin', emoji: '🐬', accent: '#67e8f9' },
    { id: 'whale', word: 'whale', pl: 'wieloryb', emoji: '🐳', accent: '#7dd3fc' },
    { id: 'fox', word: 'fox', pl: 'lis', emoji: '🦊', accent: '#fb923c' },
    { id: 'zebra', word: 'zebra', pl: 'zebra', emoji: '🦓', accent: '#cbd5e1' },
    { id: 'giraffe', word: 'giraffe', pl: 'żyrafa', emoji: '🦒', accent: '#fbbf24' },
    { id: 'snake', word: 'snake', pl: 'wąż', emoji: '🐍', accent: '#4ade80' },
    { id: 'owl', word: 'owl', pl: 'sowa', emoji: '🦉', accent: '#c4a484' },
    { id: 'bee', word: 'bee', pl: 'pszczoła', emoji: '🐝', accent: '#facc15' },
    { id: 'butterfly', word: 'butterfly', pl: 'motyl', emoji: '🦋', accent: '#c084fc' },
    { id: 'spider', word: 'spider', pl: 'pająk', emoji: '🕷️', accent: '#475569' }
  ],
  colors: [
    { id: 'red', word: 'red', pl: 'czerwony', emoji: '🔴', accent: '#f87171' },
    { id: 'blue', word: 'blue', pl: 'niebieski', emoji: '🔵', accent: '#60a5fa' },
    { id: 'green', word: 'green', pl: 'zielony', emoji: '🟢', accent: '#4ade80' },
    { id: 'yellow', word: 'yellow', pl: 'żółty', emoji: '🟡', accent: '#facc15' },
    { id: 'purple', word: 'purple', pl: 'fioletowy', emoji: '🟣', accent: '#c084fc' },
    { id: 'orange', word: 'orange', pl: 'pomarańczowy', emoji: '🟠', accent: '#fb923c' },
    { id: 'pink', word: 'pink', pl: 'różowy', emoji: '💗', accent: '#f9a8d4' },
    { id: 'black', word: 'black', pl: 'czarny', emoji: '⚫', accent: '#475569' },
    { id: 'white', word: 'white', pl: 'biały', emoji: '⚪', accent: '#e2e8f0' },
    { id: 'brown', word: 'brown', pl: 'brązowy', emoji: '🟤', accent: '#a16207' },
    { id: 'grey', word: 'grey', pl: 'szary', emoji: '🩶', accent: '#94a3b8' },
    { id: 'gold', word: 'gold', pl: 'złoty', emoji: '🌟', accent: '#fbbf24' },
    { id: 'silver', word: 'silver', pl: 'srebrny', emoji: '✨', accent: '#cbd5e1' },
    { id: 'light blue', word: 'light blue', pl: 'jasnoniebieski', emoji: '🩵', accent: '#7dd3fc' },
    { id: 'dark blue', word: 'dark blue', pl: 'ciemnoniebieski', emoji: '🔷', accent: '#2563eb' },
    { id: 'light green', word: 'light green', pl: 'jasnozielony', emoji: '🟩', accent: '#a3e635' },
    { id: 'dark green', word: 'dark green', pl: 'ciemnozielony', emoji: '🌲', accent: '#15803d' },
    { id: 'beige', word: 'beige', pl: 'beżowy', emoji: '🟫', accent: '#d6c3a5' },
    { id: 'turquoise', word: 'turquoise', pl: 'turkusowy', emoji: '🩱', accent: '#2dd4bf' },
    { id: 'navy', word: 'navy', pl: 'granatowy', emoji: '🌌', accent: '#1e3a8a' },
    { id: 'maroon', word: 'maroon', pl: 'bordowy', emoji: '🍷', accent: '#9f1239' },
    { id: 'lime', word: 'lime', pl: 'limonkowy', emoji: '🍋', accent: '#a3e635' },
    { id: 'coral', word: 'coral', pl: 'koralowy', emoji: '🪸', accent: '#fb7185' },
    { id: 'violet', word: 'violet', pl: 'fioletowy', emoji: '🪻', accent: '#8b5cf6' },
    { id: 'cream', word: 'cream', pl: 'kremowy', emoji: '🍦', accent: '#fef3c7' },
    { id: 'teal', word: 'teal', pl: 'morski', emoji: '🦚', accent: '#0f766e' },
    { id: 'magenta', word: 'magenta', pl: 'purpuroworóżowy', emoji: '🌺', accent: '#d946ef' },
    { id: 'peach', word: 'peach', pl: 'brzoskwiniowy', emoji: '🍑', accent: '#fdba74' },
    { id: 'rainbow', word: 'rainbow', pl: 'tęczowy', emoji: '🌈', accent: '#c084fc' },
    { id: 'colorful', word: 'colorful', pl: 'kolorowy', emoji: '🎨', accent: '#f472b6' }
  ],
  food: [
    { id: 'apple', word: 'apple', pl: 'jabłko', emoji: '🍏', accent: '#a3e635' },
    { id: 'bread', word: 'bread', pl: 'chleb', emoji: '🍞', accent: '#fbbf24' },
    { id: 'milk', word: 'milk', pl: 'mleko', emoji: '🥛', accent: '#bfdbfe' },
    { id: 'cake', word: 'cake', pl: 'ciasto', emoji: '🍰', accent: '#f9a8d4' },
    { id: 'banana', word: 'banana', pl: 'banan', emoji: '🍌', accent: '#facc15' },
    { id: 'pizza', word: 'pizza', pl: 'pizza', emoji: '🍕', accent: '#fca5a5' },
    { id: 'orange', word: 'orange', pl: 'pomarańcza', emoji: '🍊', accent: '#fb923c' },
    { id: 'pear', word: 'pear', pl: 'gruszka', emoji: '🍐', accent: '#bef264' },
    { id: 'strawberry', word: 'strawberry', pl: 'truskawka', emoji: '🍓', accent: '#fb7185' },
    { id: 'grapes', word: 'grapes', pl: 'winogrona', emoji: '🍇', accent: '#a78bfa' },
    { id: 'watermelon', word: 'watermelon', pl: 'arbuz', emoji: '🍉', accent: '#f87171' },
    { id: 'lemon', word: 'lemon', pl: 'cytryna', emoji: '🍋', accent: '#fde047' },
    { id: 'peach', word: 'peach', pl: 'brzoskwinia', emoji: '🍑', accent: '#fdba74' },
    { id: 'cherry', word: 'cherry', pl: 'wiśnia', emoji: '🍒', accent: '#e11d48' },
    { id: 'pineapple', word: 'pineapple', pl: 'ananas', emoji: '🍍', accent: '#facc15' },
    { id: 'carrot', word: 'carrot', pl: 'marchewka', emoji: '🥕', accent: '#fb923c' },
    { id: 'tomato', word: 'tomato', pl: 'pomidor', emoji: '🍅', accent: '#ef4444' },
    { id: 'potato', word: 'potato', pl: 'ziemniak', emoji: '🥔', accent: '#d6a77a' },
    { id: 'cheese', word: 'cheese', pl: 'ser', emoji: '🧀', accent: '#fbbf24' },
    { id: 'egg', word: 'egg', pl: 'jajko', emoji: '🥚', accent: '#fef3c7' },
    { id: 'rice', word: 'rice', pl: 'ryż', emoji: '🍚', accent: '#f8fafc' },
    { id: 'soup', word: 'soup', pl: 'zupa', emoji: '🍲', accent: '#fb923c' },
    { id: 'sandwich', word: 'sandwich', pl: 'kanapka', emoji: '🥪', accent: '#a3e635' },
    { id: 'cookie', word: 'cookie', pl: 'ciastko', emoji: '🍪', accent: '#c08457' },
    { id: 'ice cream', word: 'ice cream', pl: 'lody', emoji: '🍦', accent: '#f9a8d4' },
    { id: 'yogurt', word: 'yogurt', pl: 'jogurt', emoji: '🥣', accent: '#fbcfe8' },
    { id: 'chicken', word: 'chicken', pl: 'kurczak', emoji: '🍗', accent: '#fdba74' },
    { id: 'fish', word: 'fish', pl: 'ryba', emoji: '🐟', accent: '#67e8f9' },
    { id: 'water', word: 'water', pl: 'woda', emoji: '💧', accent: '#60a5fa' },
    { id: 'juice', word: 'juice', pl: 'sok', emoji: '🧃', accent: '#fbbf24' }
  ],
  school: [
    { id: 'book', word: 'book', pl: 'książka', emoji: '📚', accent: '#c4b5fd' },
    { id: 'pencil', word: 'pencil', pl: 'ołówek', emoji: '✏️', accent: '#93c5fd' },
    { id: 'ruler', word: 'ruler', pl: 'linijka', emoji: '📏', accent: '#86efac' },
    { id: 'bag', word: 'bag', pl: 'torba', emoji: '🎒', accent: '#fbbf24' },
    { id: 'chair', word: 'chair', pl: 'krzesło', emoji: '🪑', accent: '#f9a8d4' },
    { id: 'teacher', word: 'teacher', pl: 'nauczyciel', emoji: '👩‍🏫', accent: '#fdba74' },
    { id: 'pen', word: 'pen', pl: 'długopis', emoji: '🖊️', accent: '#60a5fa' },
    { id: 'pencil case', word: 'pencil case', pl: 'piórnik', emoji: '🖍️', accent: '#c084fc' },
    { id: 'desk', word: 'desk', pl: 'biurko', emoji: '🪑', accent: '#c4a484' },
    { id: 'board', word: 'board', pl: 'tablica', emoji: '🧑‍🏫', accent: '#4ade80' },
    { id: 'notebook', word: 'notebook', pl: 'zeszyt', emoji: '📓', accent: '#f9a8d4' },
    { id: 'eraser', word: 'eraser', pl: 'gumka', emoji: '🧽', accent: '#fda4af' },
    { id: 'school', word: 'school', pl: 'szkoła', emoji: '🏫', accent: '#fbbf24' },
    { id: 'classroom', word: 'classroom', pl: 'klasa', emoji: '🏫', accent: '#7dd3fc' },
    { id: 'student', word: 'student', pl: 'uczeń', emoji: '🧑‍🎓', accent: '#a5b4fc' },
    { id: 'boy', word: 'boy', pl: 'chłopiec', emoji: '👦', accent: '#60a5fa' },
    { id: 'girl', word: 'girl', pl: 'dziewczynka', emoji: '👧', accent: '#f9a8d4' },
    { id: 'paper', word: 'paper', pl: 'papier', emoji: '📄', accent: '#e2e8f0' },
    { id: 'scissors', word: 'scissors', pl: 'nożyczki', emoji: '✂️', accent: '#f87171' },
    { id: 'glue', word: 'glue', pl: 'klej', emoji: '🧴', accent: '#facc15' },
    { id: 'crayon', word: 'crayon', pl: 'kredka', emoji: '🖍️', accent: '#fb7185' },
    { id: 'marker', word: 'marker', pl: 'marker', emoji: '🖊️', accent: '#c084fc' },
    { id: 'clock', word: 'clock', pl: 'zegar', emoji: '🕒', accent: '#fbbf24' },
    { id: 'computer', word: 'computer', pl: 'komputer', emoji: '💻', accent: '#94a3b8' },
    { id: 'map', word: 'map', pl: 'mapa', emoji: '🗺️', accent: '#86efac' },
    { id: 'globe', word: 'globe', pl: 'globus', emoji: '🌍', accent: '#67e8f9' },
    { id: 'calendar', word: 'calendar', pl: 'kalendarz', emoji: '🗓️', accent: '#fca5a5' },
    { id: 'homework', word: 'homework', pl: 'praca domowa', emoji: '📝', accent: '#a5b4fc' },
    { id: 'lesson', word: 'lesson', pl: 'lekcja', emoji: '📖', accent: '#c4b5fd' },
    { id: 'playground', word: 'playground', pl: 'plac zabaw', emoji: '🛝', accent: '#4ade80' }
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
    resultEl.textContent = 'Odtwarzanie głosu nie jest obsługiwane w tej przeglądarce.';
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
  const correct = words[Math.floor(Math.random() * words.length)];
  const wrongs = shuffle(words.filter((word) => word.id !== correct.id)).slice(0, 3);
  const choices = shuffle([correct, ...wrongs]);

  state.round = { correct, choices };
  promptLabel.textContent = 'Listen & Match';
  promptText.textContent = 'Listen and choose the right picture!';
  actionBtn.textContent = '🔊 Hear the word';
  actionBtn.onclick = () => speakWord(correct);
  nextBtn.classList.add('hidden');
  resultEl.textContent = 'Ready to play! Press the speaker, then choose.';
  optionsEl.classList.remove('hidden');
  optionsEl.innerHTML = '';

  choices.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.setAttribute('aria-label', `Choose ${item.word}`);
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
      // Recognition may already have stopped.
    }
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
  actionBtn.textContent = '🎙️ Try another word';
  actionBtn.onclick = startVoiceQuiz;
  resultEl.textContent = 'Allow microphone access, then say the word in English.';
  nextBtn.classList.add('hidden');
  optionsEl.classList.add('hidden');
  optionsEl.innerHTML = '';

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    resultEl.textContent = 'Rozpoznawanie mowy nie jest obsługiwane w tej przeglądarce. Spróbuj Chrome lub Edge.';
    return;
  }

  const recognition = new SpeechRecognition();
  state.recognition = recognition;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  try {
    recognition.start();
    state.isListening = true;
    resultEl.textContent = 'Listening... say the word out loud!';
  } catch (error) {
    resultEl.textContent = 'Nie udało się uruchomić mikrofonu. Naciśnij „Try another word” i spróbuj ponownie.';
    state.recognition = null;
    return;
  }

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(' ');
    const guessed = normalizeWord(transcript);
    const target = normalizeWord(correct.word);

    if (guessed === target) {
      state.stars += 1;
      updateStars();
      resultEl.textContent = `Brilliant! You said “${correct.word}”! ⭐`;
    } else {
      resultEl.textContent = `Good try! I heard “${transcript}”. The word is “${correct.word}”.`;
    }

    nextBtn.textContent = 'Next word';
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => {
      stopRecognition();
      renderGame();
    };
  };

  recognition.onerror = () => {
    resultEl.textContent = 'Nie udało się usłyszeć odpowiedzi. Sprawdź dostęp do mikrofonu i spróbuj ponownie.';
    nextBtn.textContent = 'Try again';
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = startVoiceQuiz;
  };

  recognition.onend = () => {
    state.recognition = null;
    state.isListening = false;
  };
}

function handleOptionAnswer(selected, buttonEl) {
  if (!state.round || !state.round.correct) return;

  const correct = state.round.correct;
  const allButtons = [...document.querySelectorAll('.option-btn')];
  allButtons.forEach((button) => {
    button.disabled = true;
  });

  if (selected.id === correct.id) {
    buttonEl.classList.add('correct');
    state.stars += 1;
    updateStars();
    resultEl.textContent = 'Excellent! Great job! ⭐';
  } else {
    buttonEl.classList.add('wrong');
    const correctButton = allButtons.find((button) => button.getAttribute('aria-label') === `Choose ${correct.word}`);
    if (correctButton) correctButton.classList.add('correct');
    resultEl.textContent = 'Good try! Have another look and keep learning.';
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
  if (existingFlashcard) existingFlashcard.remove();

  if (state.mode === 'listen') {
    renderListenRound();
  } else if (state.mode === 'flashcards') {
    renderFlashcards();
  } else {
    startVoiceQuiz();
  }
}

renderCategoryTabs();
renderModeTabs();
updateStars();
renderGame();

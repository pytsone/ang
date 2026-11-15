const STORAGE_KEY = 'english-adventure-stars';

export function loadStars() {
  try {
    const value = Number(window.localStorage.getItem(STORAGE_KEY));
    return Number.isSafeInteger(value) && value >= 0 ? value : 0;
  } catch (error) {
    return 0;
  }
}

export function saveStars(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Math.max(0, Math.floor(value))));
  } catch (error) {
    // The game remains playable when storage is disabled or full.
  }
}

export function resetStars() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // The visible score still resets for this page session.
  }
}

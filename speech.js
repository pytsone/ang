export function speak(text, setMessage = () => {}) {
  if (!('speechSynthesis' in window) || typeof window.SpeechSynthesisUtterance === 'undefined') {
    setMessage('Odtwarzanie głosu nie jest obsługiwane w tej przeglądarce.', 'error');
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.78;
    utterance.pitch = 1.08;
    utterance.onerror = () => setMessage('Nie udało się odtworzyć wymowy. Spróbuj ponownie.', 'error');
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    setMessage('Nie udało się uruchomić syntezatora mowy.', 'error');
  }
}

export function createRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;
  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    return recognition;
  } catch (error) {
    return null;
  }
}

# English Adventure

English Adventure to darmowa, przeglądarkowa aplikacja edukacyjna dla dzieci w wieku 7–9 lat. Uczy angielskiego przez krótkie gry, duże ikony, prosty interfejs i odsłuchiwanie wymowy.

**Demo:** https://pytsone.github.io/ang/  ·  **Repozytorium:** https://github.com/pytsone/ang

## Funkcje

- **120 słówek** w czterech kategoriach: Animals, Colors, Food i School (po 30 słów w każdej).
- **Listen & Match** — wybierz obrazek odpowiadający słowu.
- **Flashcards** — ucz się słowa, tłumaczenia i wymowy.
- **Speak & Check** — spróbuj wypowiedzieć słowo; rozpoznawanie mowy zależy od obsługi przeglądarki.
- Gwiazdki za poprawne odpowiedzi, zapisywane lokalnie w przeglądarce.
- Responsywny, kolorowy interfejs na telefon, tablet i komputer.

## Technologie

HTML, CSS, JavaScript, Web Speech API (`speechSynthesis` i opcjonalnie `SpeechRecognition`) oraz `localStorage`. Projekt nie wymaga serwera ani konta użytkownika.

## Uruchomienie

Otwórz `index.html` w nowoczesnej przeglądarce albo opublikuj pliki w GitHub Pages. W trybie Speak & Check przeglądarka może poprosić o dostęp do mikrofonu; rozpoznawanie mowy nie jest dostępne we wszystkich przeglądarkach. Odtwarzanie głosu korzysta z głosu angielskiego zainstalowanego w systemie lub przeglądarce.

## Pliki

```text
ang/
├── index.html   # struktura i punkty wejścia aplikacji
├── style.css    # responsywny interfejs i animacje
├── app.js       # słownik, quizy i logika gry
└── README.md
```

Słownictwo znajduje się na początku `app.js` w obiekcie `CATEGORIES`. Nowe hasła można dodawać, zachowując pola `id`, `word`, `pl` i `emoji`.

## Opis do portfolio

**English Adventure — gra edukacyjna do nauki angielskich słówek**

Zaprojektowałem i zbudowałem lekką aplikację webową dla dzieci w wieku 7–9 lat. Zamiast długich lekcji oferuje krótkie aktywności w trzech trybach oraz zestaw 120 słówek w czterech tematycznych kategoriach. Interfejs wykorzystuje duże, czytelne elementy, wspierające ilustracje emoji i natychmiastową, pozytywną informację zwrotną. Wymowę odtwarza Web Speech API, a wynik zapisuje się lokalnie bez rejestracji.

**Zakres prac:** projekt i implementacja interfejsu, model danych słownictwa, logika quizów i fiszek, integracja API przeglądarki, zapis postępów oraz wdrożenie statycznej aplikacji w GitHub Pages.

**Technologie:** HTML, CSS, JavaScript, Web Speech API, localStorage, GitHub Pages.

## Roadmapa

- układanka literowa Word Builder,
- podział słownictwa na poziomy trudności i krótkie lekcje,
- odznaki i podsumowanie postępów,
- własne ilustracje i dodatkowe zestawy tematyczne,
- testy dostępności i użyteczności z udziałem opiekunów/nauczycieli.

## Ograniczenia

Postęp jest zapisany tylko w danej przeglądarce i urządzeniu. `SpeechRecognition` nie jest jednakowo obsługiwany przez przeglądarki, a rozpoznawanie i synteza mowy mogą wymagać internetu lub odpowiedniego głosu systemowego.

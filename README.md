# English Adventure

**Kolorowa gra przeglądarkowa do nauki angielskich słówek dla dzieci w wieku 7–9 lat.** Krótkie rundy, przyjazna informacja zwrotna i trzy sposoby ćwiczenia pomagają uczyć się we własnym tempie.

**Demo:** https://pytsone.github.io/ang/ · **Kod:** https://github.com/pytsone/ang

## Funkcje

- **120 haseł** w kategoriach Animals, Colors, Food i School (po 30 na kategorię).
- Trzy poziomy trudności: łatwy, średni i trudny; każdy poziom zawiera 10 słów z wybranej kategorii.
- **Listen & Match:** wybieraj spośród czterech odpowiedzi.
- **Flashcards:** przeglądaj angielskie słowo, tłumaczenie i emoji.
- **Speak & Check:** wypowiedz słowo; funkcja zależy od obsługi Web Speech API i dostępu do mikrofonu.
- Gwiazdki za poprawne odpowiedzi, lokalny zapis postępu i przycisk resetowania.
- Interfejs responsywny, obsługa klawiatury, czytelne stany odpowiedzi i komunikaty błędów.

## Technologie

HTML, CSS, JavaScript ES modules, Web Speech API i `localStorage`. Bez frameworka, zależności npm, serwera i kont użytkowników.

## Uruchomienie lokalne

GitHub Pages obsługuje moduły ES. Do lokalnego uruchomienia użyj statycznego serwera (moduły ES często nie działają przez `file://`):

```bash
python3 -m http.server 8000
```

Następnie otwórz `http://localhost:8000`. Możesz też opublikować repozytorium przez **Settings → Pages → Deploy from a branch → main / root**.

## Struktura

```text
.
├── index.html       # dostępny markup i kontrolki
├── style.css        # responsywny styl
├── app.js           # renderowanie widoków i przepływ gry
├── vocabulary.js    # dane słów i walidacja zestawów
├── storage.js      # bezpieczny zapis i reset gwiazdek
├── speech.js        # synteza oraz rozpoznawanie mowy
└── README.md
```

## Dodawanie słówek

W `vocabulary.js` dopisz wiersz w formacie `id|english|polski|emoji`. Pozycje 1–10 są łatwe, 11–20 średnie, a 21–30 trudne. `id` musi być unikalne w obrębie kategorii. Walidacja sprawdza liczbę haseł i unikalność identyfikatorów przy imporcie modułu.

## Opis do portfolio

**English Adventure — aplikacja edukacyjna do nauki angielskiego**

Zaprojektowałem i wdrożyłem statyczną aplikację webową dla dzieci w wieku 7–9 lat. Zawiera 120 haseł w czterech kategoriach, trzy poziomy trudności i trzy tryby ćwiczeń: quiz obrazkowy, fiszki oraz opcjonalny quiz głosowy. Zadbano o responsywny interfejs, komunikaty zachęcające do ponownej próby, obsługę ograniczeń przeglądarkowych API oraz lokalny zapis i reset wyniku. Kod podzielono na moduły danych, logiki aplikacji, mowy i pamięci lokalnej.

**Zakres:** projekt UX/UI, model słownictwa, logika quizów, integracja API przeglądarki, odporność na błędy, dostępność podstawowa i wdrożenie GitHub Pages.

**Stack:** HTML · CSS · JavaScript ES modules · Web Speech API · localStorage · GitHub Pages.

## Ograniczenia i prywatność

Wynik jest przechowywany wyłącznie w lokalnej przeglądarce i nie synchronizuje się między urządzeniami. Aplikacja nie wysyła danych konta, bo nie ma kont użytkowników. Tryb rozpoznawania mowy wymaga kompatybilnej przeglądarki i zgody na mikrofon; niektóre przeglądarki mogą przetwarzać mowę przez swoje usługi. Synteza głosu zależy od głosów dostępnych na urządzeniu.

## Roadmapa

- tryb Word Builder z układaniem liter,
- podsumowanie wyników z podziałem na kategorię i poziom,
- możliwość powtarzania trudnych słów,
- testy automatyczne oraz testy dostępności,
- własne ilustracje i dodatkowe kategorie.

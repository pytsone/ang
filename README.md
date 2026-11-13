# English Adventure

English Adventure to prosty, kolorowy projekt edukacyjny stworzony dla dzieci w wieku 7–9 lat. Aplikacja pomaga uczyć się angielskiego poprzez krótkie, angażujące gry, duże ikony, prosty interfejs i odtwarzanie poprawnej wymowy przez przeglądarkę.

Live demo: https://pytsone.github.io/ang/

## Opis projektu

Celem projektu było stworzenie prostego, bezpłatnego narzędzia do nauki słownictwa angielskiego w formie gry, która:

- jest łatwa w obsłudze dla dzieci,
- nie wymaga logowania ani backendu,
- działa w przeglądarce na komputerze, tablecie i telefonie,
- wykorzystuje darmowe technologie dostępne w każdej nowoczesnej przeglądarce,
- buduje pozytywne doświadczenie ucznia poprzez motywację i natychmiastową nagrodę.

Aplikacja została zaprojektowana zgodnie z potrzebami młodszych dzieci: krótkie zadania, duże przyciski, wyraźne kolory, łatwe słownictwo i szybka informacja zwrotna.

## Główne funkcje

### 1. Kategoria słówek
W projekcie dostępne są cztery podstawowe sekcje:

- Animals
- Colors
- Food
- School

Każda kategoria zawiera zestaw prostych słów i odpowiadających im emoji.

### 2. Tryby gry
Aplikacja zawiera trzy główne tryby:

- Listen & Match — użytkownik słucha słowa po angielsku i wybiera poprawną odpowiedź.
- Flashcards — karta ze słowem, tłumaczeniem i emoji.
- Speak & Check — użytkownik mówi do mikrofonu, a aplikacja próbuje rozpoznać wypowiedź za pomocą Web Speech API.

### 3. Motywacja i nagrody
- licznik gwiazdek,
- zapis postępu w localStorage,
- szybkie feedback po poprawnej odpowiedzi,
- brak negatywnego „wywołania do porażki” — zamiast tego prosty komunikat typu „Try again!”.

## Technologie

- HTML5
- CSS3
- JavaScript (vanilla)
- Web Speech API (`speechSynthesis`)
- Google Fonts
- `localStorage` do zapisywania postępu

## Struktura projektu

```text
ang/
├── index.html
├── style.css
├── app.js
├── README.md
└── .gitignore
```

## Uruchomienie lokalnie

1. Pobierz repozytorium.
2. Otwórz folder projektu.
3. Uruchom plik `index.html` w przeglądarce.

Alternatywnie można wdrożyć projekt na GitHub Pages.

## GitHub Pages

Po podłączeniu GitHub Pages z głównej gałęzi projekt będzie dostępny pod adresem:

https://pytsone.github.io/ang/

## Dlaczego ten projekt jest dobrym projektem do portfolio?

English Adventure to projekt, który pokazuje kilka ważnych umiejętności:

- projektowanie UX dla dzieci,
- tworzenie prostych, ale atrakcyjnych interfejsów,
- pracę z przeglądarkowymi API,
- implementację grywalizacji i feedbacku,
- tworzenie aplikacji edukacyjnej, która ma realną wartość użytkową.

Dodatkowo projekt jest dobrym przykładem pracy w małym, czytelnym projekcie front-endowym, który można rozwijać dalej bez dużej infrastruktury.

## Plan rozwoju

### MVP już gotowe
- 4 kategorie słówek
- 3 tryby gry
- odtwarzanie głosu
- zapis postępu
- responsywny layout

### Kolejne etapy rozwoju
- Word Builder — układanka liter do tworzenia słów
- lepsze ilustracje zamiast emoji
- poziomy trudności i progresja dziecka
- system odznak i certyfikatów za ukończenie kategorii
- panel statystyk dla rodzica
- więcej słów i zdań do nauki
- dźwiękowe efekty i animacje po poprawnej odpowiedzi

## Zastosowanie w praktyce

Projekt może być rozwijany jako:

- mini aplikacja edukacyjna dla dzieci,
- narzędzie do nauki słówek na lekcjach,
- demo technologiczne do portfolio,
- baza do dalszej rozbudowy o gameplay i bardziej zaawansowane mechaniki.

## Podsumowanie

English Adventure łączy w sobie elementy nauki, zabawy i technologii webowej. To prosty, ale bardzo czytelny projekt, który dobrze pokazuje, jak można zbudować angażujące rozwiązanie edukacyjne bez dużych kosztów i bez backendu.

Jest to projekt, który można łatwo rozwijać, rozszerzać o nowe funkcje i wykorzystywać jako materiał do portfolio front-end developera.

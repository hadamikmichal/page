# WebPomoc - formularz kontaktowy w modalu

Statyczny widok strony z formularzem zapytania ofertowego osadzonym w oknie modalnym Bootstrapa. Projekt został przygotowany w HTML, SCSS/CSS, Bootstrap 5 i JavaScript bez backendu.

## Uruchomienie

1. Otwórz plik `index.html` bezpośrednio w przeglądarce.
2. Nie jest wymagany serwer lokalny ani instalowanie zależności do samego podglądu.

Pliki `dist/app.css` i `dist/app.js` są już zbudowane i dołączone w `index.html`.

## Praca developerska

Jeśli chcesz przebudować pliki źródłowe, użyj Node.js 18 lub nowszego:

```bash
npm install
npm run build
```

Główne pliki źródłowe:

- `index.html` - semantyczna struktura strony, siatka Bootstrapa, modal i formularz.
- `assets/scss/parts/pricing_page/page.scss` - dopasowanie motywu, RWD i stany fokusa ponad klasami Bootstrapa.
- `assets/js/parts/page.js` - inicjalizacja modalu Bootstrap i własna walidacja formularza.

## Kluczowe decyzje implementacyjne

Modal korzysta z komponentu Bootstrap 5, bo biblioteka zapewnia sprawdzone zachowania dostepnosciowe: zamykanie klawiszem Escape, obsługe tła, focus trap oraz powrót fokusa po zamknięciu. HTML używa atrybutów `data-bs-toggle`, `data-bs-target` i `data-bs-dismiss`, a JavaScript korzysta z klasy `Modal` do aktualizacji komponentu po wyświetleniu komunikatu sukcesu.

Formularz korzysta z klas Bootstrapa: `form-control`, `form-select`, `form-check`, `invalid-feedback`, `is-invalid` i `alert`. Ma atrybut `novalidate`, ponieważ walidacja jest obsługiwana własnym kodem po próbie wysłania. Komunikaty błędów są umieszczone bezpośrednio przy polach i powiązane z nimi przez `aria-describedby`, a stan błędu jest sygnalizowany przez `aria-invalid`.

Layout strony korzysta z kontenerow, wierszy, kolumn, przycisków i utility classes Bootstrapa.
Style dodatkowe korzystaja z CSS custom properties, żeby uniknąć powtarzania i ułatwić kontrolowanie kolorów. Breakpointy odpowiadają wymaganiom: mobile poniżej 640 px, tablet od 640 px do 1024 px i desktop powyżej 1024 px.

## Weryfikacja dostepności

Rekomendowany scenariusz manualny:

1. Otwórz `index.html` w przeglądarce.
2. Naciśnij `Tab` i sprawdź, czy widoczny jest link "Przejdź do treści głównej".
3. Przejdź klawiaturą do przycisku "Wyślij zapytanie" i otwórz modal klawiszem `Enter` albo `Spacja`.
4. Sprawdź, czy fokus trafia do pierwszego pola formularza.
5. Nawiguj `Tab` i `Shift + Tab` w modalu. Fokus powinien pozostawać w oknie modalnym.
6. Zamknij modal klawiszem `Escape` i sprawdź, czy fokus wraca na przycisk otwierający.
7. Otwórz modal ponownie, wyślij pusty formularz i sprawdź, czy fokus przechodzi do pierwszego niepoprawnego pola, a komunikaty błędów są widoczne przy polach.
8. Wypełnij formularz poprawnie i sprawdź, czy pojawia się komunikat sukcesu.
9. Sprawdź widok w szerokościach: poniżej 640 px, 640-1024 px i powyżej 1024 px.

## Znane ograniczenia

- Wysylka formularza jest symulowana, ponieważ zadanie nie zakłada backendu.
- Komunikat sukcesu nie zapisuje danych ani nie wysyła ich do zewnętrznego systemu.

Przy większej ilości czasu dodałbym testy automatyczne dla walidacji i zachowania fokusa, np. z Playwright, Cypress. Dodałbym lepszy design bo strona sama w sobie jest skromna, nie wiele się na niej dzieje, może nawigacje, więcej treści.

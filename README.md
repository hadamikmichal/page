Kontekst
Twoim zadaniem jest zbudowanie widoku strony zawierającego formularz kontaktowy
osadzony w oknie modalnym. Widok ma być w pełni responsywny oraz dostępny
zgodnie ze standardem WCAG 2.2 na poziomie AA.

Zakres zadania

1. Widok główny (index.html)
   Przygotuj prostą stronę zawierającą:
   ● nagłówek z nazwą firmy / logotypem (może być tekst),
   ● krótki akapit opisujący usługi,
   ● przycisk Wyślij zapytanie otwierający okno modalne.
   Oceniana jest jej poprawność semantyczna i dostępność oraz wygląd.

2. Okno modalne
   Zaimplementuj okno modalne zawierające formularz z sekcji 3. Modal powinien dać się
   otworzyć i zamknąć.
   Uzasadnij w README.md wybór zastosowanego podejścia implementacyjnego.

3. Formularz wewnątrz modalu
   Formularz zapytania ofertowego powinien zawierać następujące pola:
   Pole Typ Wymagane
   Imię i nazwisko text tak
   Adres e-mail email tak
   Numer telefonu tel nie
   Temat zapytania select (min. 3 opcje) tak

Treść wiadomości textarea tak
Zgoda na przetwarzanie
danych

checkbox tak

Walidacja
● Walidacja uruchamia się przy próbie wysłania formularza.
● Błędy są widoczne w pobliżu pól, których dotyczą.
● Pomyślne „wysłanie&quot; (symulacja — brak backendu) wyświetla informację zwrotną
użytkownikowi.

4. Responsywność (RWD)
   Widok powinien poprawnie działa na następujących breakpointach:
   Breakpoint Szerokość
   Mobile &lt; 640 px
   Tablet 640 px - 1024 px
   Desktop &gt; 1024 px
   Zadbaj o to, żeby modal i formularz były wygodne w użyciu na każdym z powyższych
   breakpointów.

5. Dostępność (WCAG 2.2 - poziom AA)
   Całość rozwiązania powinna być zgodna ze standardem WCAG 2.2 na poziomie AA.
   Zadbaj o to, żeby widok był w pełni użyteczny dla osób korzystających wyłącznie z
   klawiatury oraz dla użytkowników czytników ekranu. Przetestuj działanie modalu
   i formularza przy nawigacji klawiaturą — zwróć szczególną uwagę na zachowanie
   fokusa.
   Opisz w README.md, w jaki sposób zweryfikować dostępność rozwiązania.

Wymagania techniczne
● Kod napisany w HTML/CSS/JS.
● Użycie dowolnego frameworka CSS (Bootstrap, Tailwind itp.).
● Projekt uruchamia się przez otwarcie pliku index.html w przeglądarce - plik
README.md musi to jasno opisywać.
● Kod jest sformatowany i czytelny. Komentarze mile widziane przy nieoczywistych
decyzjach.

Dostarczenie zadania

1. Opublikuj kod w publicznym repozytorium GitLab (lub GitHub).
2. Dołącz plik README.md zawierający:
   o instrukcję uruchomienia projektu,
   o opis kluczowych decyzji implementacyjnych i ich uzasadnienie,
   o listę znanych ograniczeń lub rzeczy, które zrobiłbyś inaczej przy większym
   czasie.

3. Opcjonalnie: deploy na GitHub Pages.

Kryteria oceny
HTML / Semantyka (20 pkt)
● Poprawna i logiczna struktura dokumentu (landmark regions, nagłówki
hierarchiczne).
● Właściwe elementy formularza z kompletem potrzebnych atrybutów.
● Uzasadniony wybór podejścia implementacyjnego dla modalu.
CSS / RWD (20 pkt)
● Responsywność na wszystkich wymaganych breakpointach.
● Brak magic numbers - widoczne użycie custom properties (CSS variables) lub
zmiennych SCSS.
● Czytelna organizacja kodu CSS (BEM, utility classes lub inna spójna konwencja).
● Poprawne kontrasty kolorów.
JavaScript (20 pkt)
● Poprawne zarządzanie stanem modalu.
● Logika walidacji po stronie klienta - własna, bez bibliotek.
● Jakość i czytelność kodu JS.
Dostępność WCAG 2.2 (30 pkt)
● Zgodność z poziomem AA weryfikowana podczas przeglądu kodu i testów
manualnych.
● Opisany w README sposób weryfikacji dostępności.
Jakość kodu i README (10 pkt)
● Czytelność, spójność, komentarze przy nieoczywistych fragmentach.
● Kompletność i rzetelność README.md.
● Przemyślane decyzje architektoniczne opisane w README.md.

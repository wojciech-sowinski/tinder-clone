# Tinder Clone

Uproszczony klon mechaniki Tindera: rejestracja i logowanie, profil ze zdjęciami, przeglądanie użytkowników (swipe), dopasowania i czat. **Projekt edukacyjny / portfolio** — bez skalowania, monitoringu ani gwarancji bezpieczeństwa jak w aplikacji produkcyjnej.

## Stack (z `package.json`)

### `client/` — React (Create React App)

- React 18, React Router 6, Redux + Redux Thunk
- Axios, Sass, Framer Motion
- `react-tinder-card`, Splide, Font Awesome
- Kompresja i upload zdjęć (`browser-image-compression`, drag-and-drop)

### `server/` — Node.js

- Express, Mongoose (MongoDB)
- `cookie-session` (sesja z tokenem użytkownika)
- Multer + GridFS / `mongoose-gridfs` (zdjęcia w bazie)
- CORS skonfigurowany pod konkretny origin frontu (Vercel w repozytorium)

## Struktura

```
tinder-clone/
├── client/     # UI React (npm start → port 3000)
└── server/     # API Express (domyślnie port 5000 w config)
```

## Uruchomienie lokalne

1. **MongoDB** — connection string w zmiennych środowiskowych serwera (patrz `server/.env.example`).
2. **Serwer:** `cd server && npm install && npm start`
3. **Klient:** `cd client && npm install && npm start`
4. W `client/src/config.js` ustaw `serverUrl` na adres API (lokalnie np. `http://localhost:5000/`).
5. W `server/app.js` dopasuj `origin` w CORS do URL frontu (localhost lub wdrożenie).

## Funkcje w kodzie

- Rejestracja / logowanie, edycja profilu
- Upload i usuwanie zdjęć profilowych
- Lista użytkowników do swipe, aktualizacja dopasowań
- Wiadomości między dopasowanymi użytkownikami

## Ograniczenia

- To **nie** jest gotowy produkt — hardcoded URL-e wdrożeń w repozytorium mogą być nieaktualne.
- Wymaga własnej bazy MongoDB i bezpiecznej konfiguracji (`MONGODB_URI`, klucze sesji) przez `.env`.
- Historia commitów może zawierać stare wpisy konfiguracyjne — przed publicznym udostępnieniem rozważ rotację poświadczeń DB.

## Linki

- Autor: [owliedev.pl](https://owliedev.pl/)
- Kod: repozytorium GitHub `wojciech-sowinski/tinder-clone`

## Licencja

Projekt portfolio — użycie na własną odpowiedzialność.

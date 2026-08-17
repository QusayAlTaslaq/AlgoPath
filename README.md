# AlgoPath

AlgoPath is a small React application for students who are learning competitive
programming. It provides a short topic roadmap, allows users to search and filter
topics, and remembers completed topics in the browser.

## Live version

https://qusayaltaslaq.github.io/AlgoPath/

## Purpose

New competitive programmers often jump between unrelated tutorials and problems.
AlgoPath keeps the next step visible by organising a short list of foundational
topics, from arrays and strings to binary search and sliding window.

## Features

- Search topics by name or description
- Filter beginner and intermediate topics
- Mark and unmark topics as completed
- Save progress with `localStorage`
- Reset all saved progress
- Responsive layout for desktop and mobile
- Accessible labels and progress information

## Technologies

- React 19
- Vite 8
- JavaScript and JSX
- CSS Grid and Flexbox
- `localStorage`
- GitHub Pages

## React concepts used

- Functional components
- Props for passing topic data and click handlers
- `useState` for search, filter, and progress state
- `useEffect` for saving progress to `localStorage`
- Rendering lists with `map`
- Conditional rendering for results and completed states

## Project structure

```text
AlgoPath/
├── app/
│   ├── index.html
│   └── src/
│       ├── components/
│       │   └── TopicCard.jsx
│       ├── data/
│       │   └── topics.js
│       ├── App.jsx
│       ├── main.jsx
│       └── styles.css
├── public/
│   └── favicon.svg
├── scripts/
│   └── prepare-pages.mjs
├── assets/                 # Generated production files
├── index.html              # Generated production entry page
├── package.json
├── package-lock.json
└── vite.config.js
```

The React source lives in `app/src`. Vite builds the project in `dist`, then the
small `prepare-pages.mjs` script copies the production `index.html`, favicon, and
`assets` folder to the repository root for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Create a production build

```bash
npm run build
```

The build command also prepares the generated files in the repository root
because this project is deployed from the `main` branch and root folder on
GitHub Pages.

## Main code flow

1. `topics.js` stores the roadmap data.
2. `App.jsx` owns the search, difficulty, and completed-topic state.
3. `TopicCard.jsx` receives each topic through props and reports button clicks
   through the `onToggle` callback.
4. `useEffect` saves the completed topic IDs whenever progress changes.

## Possible next steps

- Add links to hand-picked Codeforces problems
- Let users save a short note for each topic
- Add a weekly practice target
- Add an export option for completed topics

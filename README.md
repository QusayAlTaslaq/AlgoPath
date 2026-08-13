# AlgoPath

AlgoPath is a responsive learning roadmap for university students who want to improve their problem solving and competitive programming skills.

Instead of presenting a long list of unrelated tutorials, AlgoPath organises twelve important topics into three learning levels. Students can search and filter the roadmap, open a topic to see what to learn, mark topics as completed, and return later without losing their progress.

## Live demo

Add the GitHub Pages link here after deployment.

## Why I built it

New competitive programmers often know that they need to practise, but they do not know what to learn first or when to move to a harder topic. AlgoPath gives them a simple sequence to follow from arrays and loops to techniques such as binary search, sliding window, greedy thinking, and basic number theory.

## Features

- A structured roadmap with 12 topics and 3 learning levels
- Difficulty filters for beginner, intermediate, and advanced topics
- Search by topic name, description, or roadmap level
- Topic detail dialog with learning goals and suggested practice
- Progress tracking with a visual percentage and checklist
- Progress saved in localStorage on the same browser
- A practice zone with suggested Codeforces rating ranges
- Mobile navigation and responsive layouts
- Keyboard focus styles and accessible labels
- A reduced motion option for users who request it in their device settings

## Technologies

- HTML5
- CSS3
- JavaScript modules
- Web Components with Custom Elements
- localStorage
- CSS Grid and Flexbox

No framework, backend, database, account, or build tool is required.

## Web Components

The project uses two custom HTML elements:

- `<topic-card>` displays each roadmap topic and sends custom events when the user opens or completes it.
- `<progress-panel>` displays the current completion percentage and topic checklist.

Both components are defined in `js/components.js`.

## Project structure

```text
algopath/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── components.js
│   └── data.js
├── .nojekyll
├── DEPLOYMENT.md
├── SUBMISSION_CHECKLIST.md
├── favicon.svg
├── index.html
└── README.md
```

## Run locally

The simplest option is to open `index.html` in a browser.

Because the project uses JavaScript modules, some browsers work better when the folder is served by a small local server. In Visual Studio Code, install the Live Server extension, right click `index.html`, and choose **Open with Live Server**.

## How progress works

Completed topic IDs are stored in the browser under the key `algopath-completed-topics`. No personal information is collected and no data is sent to a server.

Clearing browser storage or selecting **Reset progress** removes the saved progress.

## Main JavaScript flow

1. `data.js` exports the roadmap topics.
2. `components.js` defines the topic card and progress panel custom elements.
3. `app.js` loads saved progress, renders the components, filters topics, opens the dialog, and saves changes.

## Future improvements

- Allow students to add a personal weekly problem goal
- Add links to topic specific problem sets
- Add a light colour theme
- Let students export and import their progress
- Add short code examples inside each topic.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for the exact GitHub Pages steps.

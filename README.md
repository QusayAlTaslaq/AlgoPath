# AlgoPath

AlgoPath is a small front-end project for students who are learning competitive
programming. It organises a short list of topics, lets the user search and filter
them, and remembers completed topics in the browser.

## Live version

https://qusayaltaslaq.github.io/AlgoPath/

## Why we made it

When we started practising competitive programming, it was easy to jump between
random tutorials and problems. We wanted a page that answers one question:

> What should I practise next?

The roadmap begins with arrays and strings, then moves to common patterns such as
prefix sums, two pointers, binary search, and sliding window.

## Features

- Search topics by name or description
- Filter beginner and intermediate topics
- Mark a topic as completed
- Save progress with localStorage
- Responsive layout for desktop and mobile
- A reusable topic card made with Web Components

## Technologies

- HTML
- CSS
- JavaScript modules
- Web Components
- localStorage
- GitHub Pages

## Project structure

```text
AlgoPath/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── components.js
│   └── data.js
├── favicon.svg
├── index.html
└── README.md
```

## Run the project locally

Clone the repository and open the folder in Visual Studio Code. Because the
project uses JavaScript modules, run it with the Live Server extension or another
small local server.

## How the JavaScript is organised

- `data.js` contains the roadmap topics.
- `components.js` defines the `<topic-card>` Web Component.
- `app.js` handles search, filters, progress, and localStorage.

## What we practised

- Breaking a page into clear HTML sections
- Building a responsive card grid
- Listening for input and button events
- Passing data to a Web Component
- Sending a CustomEvent from a component
- Saving a small amount of browser data

## Possible next steps

- Add links to hand-picked Codeforces problems
- Let users write a short note for each topic
- Add a weekly practice target
- Add an export button for completed topics

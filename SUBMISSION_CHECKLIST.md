# AlgoPath resubmission checklist

## React requirement

- [x] The project uses React and Vite.
- [x] The React source is included in `app/src`.
- [x] `App.jsx` uses React state and effects.
- [x] `TopicCard.jsx` is a reusable component that receives props.
- [x] `package.json` lists React, React DOM, and Vite.
- [ ] Run `npm install` successfully on a clean copy.
- [ ] Run `npm run build` successfully.

## Application

- [ ] The deployed home page loads without a blank screen.
- [ ] The layout works on desktop and mobile widths.
- [ ] Navigation links move to the correct sections.
- [ ] Search updates the visible topic cards.
- [ ] All, Beginner, and Intermediate filters work.
- [ ] A topic can be marked and unmarked as completed.
- [ ] The progress count and bar update correctly.
- [ ] Progress remains after refreshing the browser.
- [ ] Reset progress clears the saved topics.
- [ ] The browser Console has no red errors.

## Chingu follow-up

- [ ] Do not submit a new Solo Project form.
- [ ] Open a ticket in `Chingu 🎟open-support-ticket`.
- [ ] Include the GitHub repository URL.
- [ ] Include the deployed application URL.
- [ ] Explain that the requested React conversion is complete.

## Be ready to explain

1. Why `useState` is used for search, filters, and completed topics.
2. How `TopicCard` receives data and an event handler through props.
3. How `filter` and `map` create the visible roadmap cards.
4. How `useEffect` saves progress to `localStorage`.
5. Why Vite's base path is `/AlgoPath/` for GitHub Pages.

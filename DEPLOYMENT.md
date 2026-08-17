# Deploy AlgoPath with GitHub Pages

AlgoPath uses React and Vite. GitHub Pages serves the generated production files
from the repository root.

## Build the project

Install the dependencies once:

```bash
npm install
```

Create the production files:

```bash
npm run build
```

Vite builds into `dist`, then `scripts/prepare-pages.mjs` updates the root
`index.html`, favicon, and `assets` folder. The source files remain inside
`app/src`.

## GitHub Pages settings

1. Open the repository **Settings**.
2. Choose **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings.

Project links:

- Repository: https://github.com/QusayAlTaslaq/AlgoPath
- Website: https://qusayaltaslaq.github.io/AlgoPath/

After each source change, run `npm run build` before committing. Then test the
deployed page in a private browser window and check the browser Console for errors.

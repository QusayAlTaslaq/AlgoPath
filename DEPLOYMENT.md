# Deploy AlgoPath with GitHub Pages

GitHub Pages can host AlgoPath for free because it is a static project.

## 1. Create the repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Name it `algopath`.
4. Set the repository to **Public**.
5. Do not add a second README because this project already includes one.
6. Select **Create repository**.

## 2. Upload the project

1. Extract the ZIP file.
2. Open the extracted `AlgoPath` folder.
3. Upload everything inside that folder to the root of the GitHub repository.
4. Make sure `index.html` appears on the first repository page, not inside another folder.
5. Commit the uploaded files.

The repository should look similar to this:

```text
css/
js/
.nojekyll
DEPLOYMENT.md
SUBMISSION_CHECKLIST.md
favicon.svg
index.html
README.md
```

## 3. Turn on GitHub Pages

1. Open the repository **Settings**.
2. Select **Pages** from the left menu.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch.
5. Select the `/ (root)` folder.
6. Select **Save**.

GitHub may need a few minutes to publish the site.

## 4. Find the deployed link

The link normally follows this format:

```text
https://YOUR-USERNAME.github.io/algopath/
```

Return to **Settings**, then **Pages**, to copy the exact link once the deployment is complete.

## 5. Add the link to the README

Edit the **Live demo** section in `README.md` and replace the sentence there with the deployed link.

## Links for the Chingu form

Use these two different links:

* **GitHub Repository URL:** `https://github.com/YOUR-USERNAME/algopath`
* **Deployed Application URL:** `https://YOUR-USERNAME.github.io/algopath/`

Open both links in a private browser window before submitting them. This confirms that the repository and application are public.

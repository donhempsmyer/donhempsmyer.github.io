# Mobile Development Portfolio Site

A GitHub Pages-ready portfolio site for a mobile developer. This repo uses plain HTML, CSS, and JavaScript so it can be deployed directly with no build tools.

## Files

- `index.html` - main portfolio page
- `styles.css` - site styling
- `script.js` - theme toggle and footer year
- `404.html` - not found page for GitHub Pages
- `.nojekyll` - disables Jekyll processing on GitHub Pages
- `assets/favicon.svg` - favicon
- `assets/preview-card.svg` - social preview image placeholder

## How to use

1. Create a new GitHub repository.
2. Upload all files from this folder to the root of the repository.
3. Edit the placeholder links, email address, project names, and copy in `index.html`.
4. Commit and push to GitHub.
5. In GitHub, go to **Settings > Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select your main branch and the `/ (root)` folder.
8. Save. Your site will publish on GitHub Pages.

## Recommended edits before publishing

- Replace `your.email@example.com`
- Replace GitHub and LinkedIn URLs
- Add your real repository links
- Add project screenshots in the `assets/` folder if desired
- Update the About and Experience sections with final resume language

## Optional next upgrades

- Add project screenshots or device mockups
- Add a downloadable resume button
- Add a custom domain with a `CNAME` file
- Add analytics
- Add a blog or case study section


## Preview locally

### Option 1: Open directly in your browser

Because this is a plain static site, you can double-click `index.html` and open it in a browser.
This is the fastest way to inspect the layout.

### Option 2: Use VS Code with a local preview server

A local preview server is nicer because it refreshes the page as you edit.
In VS Code, a common choice is **Live Server** or **Live Preview**.
Open the repo folder, install one of those extensions, then open `index.html` and start the preview server from VS Code.

### Option 3: Use Python from the terminal

From the repo folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C` in the terminal.

## Working with Codex in VS Code

1. Open this folder in VS Code.
2. Install the Codex extension.
3. Sign in.
4. Start with the prompts in `PROMPTS.md`.
5. Work through `TASKS.md` in order.
6. Preview the site locally after each meaningful change.

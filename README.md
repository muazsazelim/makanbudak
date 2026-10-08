# Makan Budak Studios

Website for Makan Budak Studios — we build whatever we want.

Built with Next.js (static export) and deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

| What | Where |
| --- | --- |
| Projects on "What we're making" | `data/projects.ts` |
| Name, email, year | `data/site.ts` |
| Colours (light + dark) | `app/globals.css` (top of file) |
| Project screenshots | put images in `public/projects/` and set `image: "/projects/name.png"` |

## Deploy

Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**.

### Custom domain (e.g. makanbudak.my)

1. Settings → Pages → Custom domain → enter the domain.
2. Add the DNS records GitHub shows you at your domain registrar.

The workflow picks up the right base path automatically.

### Contact form

By default the form opens the visitor's email app with the message filled in.
To receive submissions without that, create a free form at [Formspree](https://formspree.io),
then add a repo variable **Settings → Secrets and variables → Actions → Variables** named
`FORM_ENDPOINT` with the form URL (e.g. `https://formspree.io/f/abcd1234`).

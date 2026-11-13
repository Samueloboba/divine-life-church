# Divine Life - Giving Church Worldwide (Christ Covenant Church)

A responsive church website starter built with Next.js, Tailwind CSS, Framer Motion and Lucide icons.

## Before publishing

The visual website is ready, but these real-world details must be supplied by the church before the related features can be considered live:

1. **Church contact details:** replace the sample phone, email and address in `src/data/site.ts`.
2. **Giving:** add the church's verified payment/donation URL in `src/data/site.ts`. The giving button is intentionally marked as not yet configured until then.
3. **Live stream:** add the official YouTube/Facebook live-stream URL in `src/data/site.ts`.
4. **Prayer requests:** add a trusted form endpoint (for example, Formspree) in `src/data/site.ts`. Until then, the form explains that submissions are not yet being sent.
5. **Sermons and events:** replace sample content with approved titles, dates and video links.
6. **Gallery:** replace the sample remote photos with church-owned photographs when available.

Do not publish invented contact details, payment links, event dates, or livestream links.

## Run locally (optional)

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel using GitHub

1. Extract this ZIP file.
2. Create a new GitHub repository.
3. Upload the **contents** of the extracted `divine-life-church-website` folder to the repository root (so `package.json` is at the top level).
4. In Vercel, choose **Add New → Project**, import that GitHub repository, and keep the detected Next.js settings.
5. Select **Deploy**.

Vercel will install dependencies and build the site. Future GitHub commits trigger new deployments automatically.

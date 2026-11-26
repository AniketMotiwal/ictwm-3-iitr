# ICTWM 3.0 — Conference Website (IIT Roorkee, 11–13 March 2027)

Front-end only Next.js website for the *International Conference on Transforming Waste Management:
Circular Economy & Energy Sustainability – 3.0*.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit content

**All text lives in [`lib/siteData.ts`](lib/siteData.ts)**: dates, title, themes, speakers, committee,
fees, contacts, links. Change it there and every section updates.

| What | Where |
|---|---|
| Colours (IITR navy / gold / eco green) | `app/globals.css` → `@theme` |
| Hero slider photos | `public/images/slider/` + `heroSlides` in `siteData.ts` |
| IIT Roorkee logo | `public/images/iitr-logo.svg` |
| Conference logo | `public/images/conference-logo.svg` |
| Sections | `components/*.tsx`, order in `app/page.tsx` |

To add a speaker photo, put it in `public/images/speakers/` and swap the `Avatar` icon in
`components/People.tsx` for an `<Image>`.

## Deploy (Vercel)

```bash
vercel --prod
```

Campus photos are from Wikimedia Commons (CC BY-SA / CC0).

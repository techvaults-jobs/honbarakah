# barakatodunuga.com

Official campaign website of Hon. (Barr.) Barakat Odunuga-Bakare, APC candidate for the Lagos State House of Assembly, Surulere Constituency I. Built by Techvaults.

## Stack

- Next.js 16 (App Router, Cache Components), React 19, TypeScript
- Tailwind CSS 4 with shadcn/ui (Radix) components
- Motion for scroll animations, Lucide icons
- Fraunces (headings) and Plus Jakarta Sans (body) via `next/font`
- react-hook-form + zod for forms, Resend for email delivery

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, for live form delivery
npm run dev
```

Open http://localhost:3000.

## Where things live

| What | File |
| --- | --- |
| Name, domain, election date, email, phone, social links | `src/lib/site.ts` |
| Stats, agenda, track record, timeline, gallery, news | `src/lib/content.ts` |
| Brand colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Photos | `public/images/` |
| Form handler | `src/app/api/contact/route.ts` |

Social links and the phone number are hidden until you fill them in `src/lib/site.ts`.

### Adding a news story

Add an entry to `news` in `src/lib/content.ts`. Give it a `body` (array of paragraphs) to publish it as a page on the site, or a `source` with no body to link out to press coverage.

### Adding photos

Drop the file into `public/images/` and add an entry to `gallery` in `src/lib/content.ts` with its width, height, caption and category.

## Before launch

- Confirm the election date in `src/lib/site.ts` against the final INEC timetable
- Add confirmed social handles and, if approved, a public phone line
- Set the Resend environment variables on the host and verify the sending domain
- Have the media office approve the agenda copy and news stories

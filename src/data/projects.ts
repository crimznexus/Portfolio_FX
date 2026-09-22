import type { ImageMetadata } from 'astro';

import milksageLanding from '../assets/shots/milksage-landing.png';
import milksageLandingMobile from '../assets/shots/milksage-landing-mobile.png';
import milksageOverview from '../assets/shots/milksage-overview.webp';
import milksageMilk from '../assets/shots/milksage-milk.webp';
import milksageAnimals from '../assets/shots/milksage-animals.webp';
import milksageFeeding from '../assets/shots/milksage-feeding.webp';
import grainovaHome from '../assets/shots/grainova-home.png';
import grainovaStock from '../assets/shots/grainova-stock.png';
import grainovaSales from '../assets/shots/grainova-sales.png';
import grainovaAccounts from '../assets/shots/grainova-accounts.png';
import delphiConsult from '../assets/shots/delphi-consult.png';
import delphiSetup from '../assets/shots/delphi-setup.png';
import delphiPractice from '../assets/shots/delphi-practice.png';
import nexusDashboard from '../assets/shots/nexushost-dashboard.png';
import nexusStart from '../assets/shots/nexushost-start.png';
import kiwamiAnime from '../assets/shots/kiwami-anime.png';
import kiwamiDetails from '../assets/shots/kiwami-details.png';
import kiwamiHome from '../assets/shots/kiwami-home.png';

export type Shot = {
  src: ImageMetadata;
  alt: string;
  /** "screen" = desktop/browser capture, "phone" = portrait mobile capture */
  kind: 'screen' | 'phone';
  caption?: string;
};

export type Decision = { title: string; body: string };

export type Project = {
  slug: string;
  name: string;
  /** Where the software lives — shown in the index. */
  place: string;
  platform: string;
  year: string;
  /** One sentence, plain words. */
  summary: string;
  /** Brand colour the project’s stage is tinted from. */
  brand: string;
  role: string;
  stack: string[];
  status: string;
  links: { label: string; href: string }[];
  cover: Shot;
  thumbs: Shot[];
  intro: string[];
  built: string[];
  decisions: Decision[];
  gallery: Shot[];
  /** Honest note on how the screenshots were taken. */
  captureNote: string;
};

export const projects: Project[] = [
  {
    slug: 'milksage',
    name: 'MilkSage',
    place: 'a dairy farm',
    platform: 'Web app · PWA',
    year: '2026',
    summary: 'Farm management for dairy farms, from the first milking to the final accounts.',
    brand: '#4E7A35',
    role: 'Product design, frontend and backend',
    stack: ['Next.js 16', 'React 19', 'Convex', 'Clerk', 'AI SDK', 'Serwist', 'shadcn/ui'],
    status: 'In active development',
    links: [],
    cover: {
      src: milksageLanding,
      kind: 'screen',
      alt: 'MilkSage landing page: "Your whole dairy farm. One clear view." beside an isometric farm illustration.',
    },
    thumbs: [
      { src: milksageOverview, kind: 'screen', alt: 'MilkSage farm overview dashboard' },
      { src: milksageMilk, kind: 'screen', alt: 'MilkSage milk recording table' },
    ],
    intro: [
      'A dairy farm runs on a lot of small numbers: litres per cow per milking, feed mixed and fed, stock left in the shed, who has been paid. They tend to end up scattered across notebooks, spreadsheets and people’s heads.',
      'MilkSage puts all of it in one place. I designed and built both the app and the marketing site around it.',
    ],
    built: [
      'Herd register with breeding, pregnancy checks, calving and health reminders tied to each animal.',
      'Milk recording by session, with a live "milking progress" figure so the morning shift knows who is left.',
      'Feed formulas that reserve ingredients when a batch is planned and consume them when it is posted.',
      'Stock that is always consumed oldest-first, across lots.',
      'Spreadsheet import that validates every row before anything is written.',
      'Reports as a live preview or a generated file, and an assistant that answers questions about the farm’s own records.',
    ],
    decisions: [
      {
        title: 'Nothing gets overwritten',
        body: 'Corrections are recorded as reversals, not edits. Reversing a feed application puts the stock back and keeps the original entry, so a balance can always be traced to the records that produced it. It made the data model harder and every screen easier to trust.',
      },
      {
        title: 'Retries are the same attempt',
        body: 'Connections drop and people press Save twice. Each operation carries a submission attempt, and a retry with the same details is recognised instead of recorded again.',
      },
      {
        title: 'Real screens on the landing page',
        body: 'The marketing site shows actual app screenshots taken against a seeded sample farm, not illustrations of a dashboard that doesn’t exist. If the product changes, the pictures have to change with it.',
      },
    ],
    gallery: [
      { src: milksageLanding, kind: 'screen', alt: 'MilkSage landing page hero', caption: 'Landing page' },
      { src: milksageLandingMobile, kind: 'phone', alt: 'MilkSage landing page on a phone', caption: 'Landing page, mobile' },
      { src: milksageOverview, kind: 'screen', alt: 'MilkSage overview with animals, milk today, milking progress and a production chart', caption: 'Farm overview' },
      { src: milksageMilk, kind: 'screen', alt: 'MilkSage milk records table', caption: 'Milk records' },
      { src: milksageAnimals, kind: 'screen', alt: 'MilkSage animal register', caption: 'Animal register' },
      { src: milksageFeeding, kind: 'screen', alt: 'MilkSage feeding screen', caption: 'Feeding' },
    ],
    captureNote: 'App screens show a seeded sample farm, not a real customer.',
  },
  {
    slug: 'grainova',
    name: 'GraiNova',
    place: 'a flour mill',
    platform: 'Android',
    year: '2026',
    summary: 'The whole of a small multigrain flour business, on the owner’s phone.',
    brand: '#A0782F',
    role: 'Design and development',
    stack: ['Expo SDK 57', 'React Native', 'TypeScript', 'expo-sqlite', 'Expo Router'],
    status: 'Preparing v1.0',
    links: [],
    cover: {
      src: grainovaHome,
      kind: 'phone',
      alt: 'GraiNova home screen: September sales of Rs 117,950, quick actions, and a list of items needing attention.',
    },
    thumbs: [
      { src: grainovaSales, kind: 'phone', alt: 'GraiNova sales list' },
      { src: grainovaStock, kind: 'phone', alt: 'GraiNova stock list' },
    ],
    intro: [
      'A mill that turns grain into packed multigrain flour has a lot to keep straight: who owes what, how much wheat is left, which supplier bill is due, whether the last batch lost too much in milling.',
      'It runs on one Android phone, with the records kept on the device and backed up every day.',
    ],
    built: [
      'Stock for grain, flour and packaging, with low-stock alerts and a badge on the tab.',
      'Production batches that consume grain and bags and add finished flour in one step, with milling loss and yield.',
      'Multi-line invoices with drafts, dispatch, returns, credit notes and cancellation.',
      'Customer, supplier and partner statements with a running balance.',
      'Payment reminders the owner can send over WhatsApp or SMS.',
      'A PIN and fingerprint lock that relocks after a minute in the background.',
    ],
    decisions: [
      {
        title: 'Home is a to-do list',
        body: 'The first screen isn’t a dashboard to admire. Under the month’s totals is a "needs attention" list: overdue invoices, supplier bills coming due, low stock, orders waiting to go out. Everything on it is one tap from being dealt with.',
      },
      {
        title: 'The app says no',
        body: 'Overpayments are refused. Voiding a payment asks for a reason. Every change records who made it. For a business ledger, being strict is part of being friendly.',
      },
      {
        title: 'Rules have tests',
        body: 'Twenty-nine unit tests cover the business rules, migrations and backup rotation, and every screen was walked through on the Android emulator before calling a stage done.',
      },
    ],
    gallery: [
      { src: grainovaHome, kind: 'phone', alt: 'GraiNova home', caption: 'Home' },
      { src: grainovaStock, kind: 'phone', alt: 'GraiNova stock with low-stock markers', caption: 'Stock' },
      { src: grainovaSales, kind: 'phone', alt: 'GraiNova invoices with draft, unpaid, part paid, overdue and paid states', caption: 'Sales' },
      { src: grainovaAccounts, kind: 'phone', alt: 'GraiNova customer balances', caption: 'Accounts' },
    ],
    captureNote: 'Captured on an Android emulator using the app’s built-in sample data.',
  },
  {
    slug: 'delphi',
    name: 'Delphi',
    place: 'a dorm room, offline',
    platform: 'Windows desktop',
    year: '2026',
    summary: 'A study companion that answers questions about your course PDFs, with page citations, entirely offline.',
    brand: '#B8954A',
    role: 'Design and development',
    stack: ['Python', 'PySide6', 'ONNX Runtime GenAI', 'Phi-3.5', 'LangChain', 'Chroma', 'Inno Setup'],
    status: 'Windows installer available',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/crimznexus/delphi' }],
    cover: {
      src: delphiConsult,
      kind: 'screen',
      alt: 'Delphi main window: a navy and gold sidebar with a knowledge library, and a "Consult your knowledge" chat panel.',
    },
    thumbs: [
      { src: delphiSetup, kind: 'screen', alt: 'Delphi first-run model download screen' },
      { src: delphiPractice, kind: 'screen', alt: 'Delphi practice tab' },
    ],
    intro: [
      'Students paste their notes into chatbots all the time, and hand their course material to a server to do it. Delphi does the same job on the laptop itself.',
      'You add PDFs, Delphi builds a local knowledge base, and you can ask questions or generate practice quizzes. Answers cite the page they came from.',
    ],
    built: [
      'Phi-3.5 Mini running directly through ONNX Runtime GenAI, with no Ollama, local server, account or API key.',
      'Local document search with BGE Small embeddings and a Chroma vector store.',
      'A Consult tab for grounded answers and a Practice tab that turns the material into questions.',
      'A one-click Windows installer built with PyInstaller and Inno Setup.',
    ],
    decisions: [
      {
        title: 'Ask before downloading 2.8 GB',
        body: 'The first screen says exactly what Delphi needs (a 2.8 GB model, about 5 GB of disk, no account) and waits for a yes. The download is resumable. "Not now" is a real option.',
      },
      {
        title: 'Your library survives upgrades',
        body: 'Models, books and the vector database live in the user’s own app-data folder, so reinstalling or updating never throws away hours of indexing.',
      },
      {
        title: 'Failing politely',
        body: 'If the packaged app can’t start, the launcher writes the full traceback to a log and tells you where it is, instead of closing silently.',
      },
    ],
    gallery: [
      { src: delphiConsult, kind: 'screen', alt: 'Delphi Consult tab', caption: 'Consult' },
      { src: delphiSetup, kind: 'screen', alt: 'Delphi first-run screen', caption: 'First run' },
      { src: delphiPractice, kind: 'screen', alt: 'Delphi Practice tab', caption: 'Practice' },
    ],
    captureNote: 'Run from source without the model downloaded, so these show the first-run and empty states.',
  },
  {
    slug: 'nexushost',
    name: 'NexusHost',
    place: 'a friend’s PC',
    platform: 'Web · Electron',
    year: '2026',
    summary: 'Host a Minecraft server on your own computer and let friends join with a four-character ID.',
    brand: '#1F9D74',
    role: 'Design and development',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Socket.io', 'Docker', 'Electron'],
    status: 'Phase one: the connection layer',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/crimznexus/NexusHost' }],
    cover: {
      src: nexusDashboard,
      kind: 'screen',
      alt: 'NexusHost dashboard: container CPU and RAM gauges, a public address, a Nexus-ID and a live server console.',
    },
    thumbs: [{ src: nexusStart, kind: 'screen', alt: 'NexusHost start screen' }],
    intro: [
      'Running a Minecraft server for friends usually means port forwarding, a static IP and a router admin page nobody remembers the password to. NexusHost tries to make it one button.',
      'The host presses Start. Friends type a short Nexus-ID and they’re in.',
    ],
    built: [
      'An engine on the host’s Windows PC that runs the server in Docker and streams CPU and memory.',
      'A hub that relays state between engines and dashboards over Socket.io.',
      'A React dashboard with live gauges, the public address and a console you can type commands into.',
      'UPnP port mapping when the router allows it, a tunnel when it doesn’t, and a TCP relay for friends joining through the desktop app.',
    ],
    decisions: [
      {
        title: 'Two screens, two people',
        body: 'The first screen asks one question: are you hosting or joining? Hosts get the dashboard. Friends get a single input for a Nexus-ID. Nobody sees settings they don’t need.',
      },
      {
        title: 'The console is the product',
        body: 'Gauges are reassuring, but the live log is what people actually watch while the server boots and friends join, so it gets most of the screen.',
      },
    ],
    gallery: [
      { src: nexusDashboard, kind: 'screen', alt: 'NexusHost host dashboard', caption: 'Host dashboard' },
      { src: nexusStart, kind: 'screen', alt: 'NexusHost start screen', caption: 'Start screen' },
    ],
    captureNote: 'The dashboard was fed by a local stand-in engine, so the numbers and log lines are sample data.',
  },
  {
    slug: 'kiwami',
    name: 'Kiwami',
    place: 'the couch, on a TV',
    platform: 'Android · Android TV',
    year: '2026',
    summary: 'An AniList client for anime and manga, forked from ReDantotsu and made leaner.',
    brand: '#D63357',
    role: 'Maintainer of the fork',
    stack: ['Kotlin', 'Android SDK', 'Media3 ExoPlayer', 'AniList GraphQL', 'Gradle'],
    status: 'Open source, UPL licence',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/crimznexus/Kiwami' }],
    cover: {
      src: kiwamiAnime,
      kind: 'phone',
      alt: 'Kiwami Anime tab: a blurred cover backdrop, Grand Blue Season 3 highlighted, and a recently updated row.',
    },
    thumbs: [{ src: kiwamiDetails, kind: 'phone', alt: 'Kiwami details page' }],
    intro: [
      'Kiwami (極み, "the pinnacle") is my fork of ReDantotsu, an AniList client that streams and downloads anime through extensions and reads manga.',
      'Most of the work is the unglamorous kind that makes an app nicer to live with: smaller, buildable, and usable with a TV remote.',
    ],
    built: [
      'A new crimson launcher icon with a monochrome layer, so Android 13+ themed icons work.',
      'Legacy raster icons, so the icon actually renders on Android 6 and 7.',
      'Remote-control navigation and a player that fits Android TV.',
      'AniList and MyAnimeList sync, Discord presence, offline downloads and auto-skip, carried over from upstream.',
    ],
    decisions: [
      {
        title: 'A 4.6 MB splash screen',
        body: 'The largest file in the repo was an animated WebP splash. Replacing it with a 17 KB raster drawn from the icon vector took the universal APK from 61.2 MB to 56.3 MB, and arm64 from 41.5 MB to 36.5 MB.',
      },
      {
        title: 'Making the F-Droid build build',
        body: 'Firebase plugins were applied project-wide from inside the Google flavour, so the Firebase-free F-Droid build demanded a google-services.json. They now apply only when a Google variant is built.',
      },
      {
        title: 'Writing down the error nobody could read',
        body: 'On JDK 25, Gradle’s Kotlin compiler fails with a bare "IllegalArgumentException: 25.0.2" that names no file. The README now says to use JDK 21 and why.',
      },
    ],
    gallery: [
      { src: kiwamiAnime, kind: 'phone', alt: 'Kiwami Anime tab', caption: 'Anime' },
      { src: kiwamiDetails, kind: 'phone', alt: 'Kiwami details page with AniList and MAL scores', caption: 'Details' },
      { src: kiwamiHome, kind: 'phone', alt: 'Kiwami start screen with AniList login', caption: 'Start' },
    ],
    captureNote: 'Built from source and run on an Android emulator without an AniList login.',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

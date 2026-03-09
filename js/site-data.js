/* ============================================================
   RESONANT LABS — Site Data
   ============================================================

   This is the only file you need to edit for content changes:
     • Add or update a GitHub / live URL for an app
     • Change a release date or description
     • Add a new app or blog post

   After saving, upload only this file to go live.
   ============================================================ */

window.SITE_DATA = {

  /* ----------------------------------------------------------
     APPS
     ----------------------------------------------------------
     To update an existing app (e.g. add a GitHub URL):
       Find the app block below and fill in the value.

     To add a new app:
       Copy one of the blocks below, paste it at the top of
       the list, and fill in all the fields.
  ---------------------------------------------------------- */
  apps: [
    {
      id: 'consentkit',
      name: 'ConsentKit',
      shortDesc: 'Free, open-source GDPR cookie consent widget. Drop one JS file into any site — full consent management, Google Consent Mode v2, four categories. No subscription.',
      tags: ['Open Source', 'GDPR', 'JavaScript'],
      emoji: '🍪',
      status: 'live',
      image: 'Media/Consentkit.png',
      gradientFrom: '#10b981',
      gradientTo: '#06b6d4',
      githubUrl: 'https://github.com/sokiicz/consentkit',
      liveUrl: 'https://github.com/sokiicz/consentkit',
      liveLabel: 'Download',
      detailUrl: 'apps/consentkit.html',
      releaseDate: '6 Mar 2026',
      updates: [
        { date: '2026-03-06', note: 'Initial release — FTP static version, GCM v2, shadow DOM' },
      ],
    },
    {
      id: 'music-mouse',
      name: 'Music Mouse',
      shortDesc: 'An interactive musical canvas inspired by Laurie Spiegel\'s 1986 classic. Move your mouse — make music. No keyboard, no notes, no rules.',
      tags: ['Web App', 'Music', 'Interactive'],
      emoji: '🎵',
      status: 'live',
      image: 'Media/Music-mouse.png',
      gradientFrom: '#8b5cf6',
      gradientTo: '#22d3ee',
      githubUrl: 'https://github.com/sokiicz/music-mouse',
      liveUrl: 'https://sokiicz.github.io/Music-Mouse/',
      liveLabel: 'Open App',
      detailUrl: 'apps/music-mouse.html',
      releaseDate: '3 Mar 2026',
      updates: [
        { date: '2026-03-03', note: 'Initial release — interactive canvas, Web Audio API, Laurie Spiegel-inspired' },
      ],
    },
    {
      id: 'spekplatz',
      name: 'SpekPlatz',
      shortDesc: 'A community map for discovering and sharing hidden spots — rooftops, viewpoints, parks, beaches, and more. Find places worth remembering.',
      tags: ['Web App', 'Community', 'Maps'],
      emoji: '📍',
      status: 'live',
      image: 'Media/Spekplatz.png',
      gradientFrom: '#10b981',
      gradientTo: '#3b82f6',
      githubUrl: 'https://github.com/sokiicz/SpekPlatz',
      liveUrl: 'https://spekplatz.app',
      liveLabel: 'Open App',
      detailUrl: 'apps/spekplatz.html',
      releaseDate: '20 Feb 2026',
      updates: [
        { date: '2026-02-20', note: 'Initial release — community map, spot submission, Firebase backend' },
      ],
    },
    {
      id: 'keepawake-pro',
      name: 'KeepAwake',
      shortDesc: 'Keeps your Windows PC awake when you need it. Smart AFK simulation, system tray, scheduled hours, global hotkeys — invisible until needed.',
      tags: ['Windows', 'Utility', 'Desktop'],
      emoji: '☕',
      status: 'live',
      image: 'Media/KeepAwake.png',
      gradientFrom: '#f59e0b',
      gradientTo: '#ef4444',
      githubUrl: 'https://github.com/sokiicz/keepawake-pro',
      liveUrl: 'https://github.com/sokiicz/keepawake-pro',
      liveLabel: 'Download',
      detailUrl: 'apps/keepawake-pro.html',
      releaseDate: '12 Feb 2026',
      updates: [
        { date: '2026-02-12', note: 'Initial release — system tray, scheduled hours, global hotkeys' },
      ],
    },
    {
      id: 'resonant-labs',
      name: 'Resonant Labs',
      shortDesc: 'This very website — a full portfolio site with dark space theme, animated background, tag filtering, cookie consent, comments, and newsletter. Built entirely with Claude Code.',
      tags: ['Web App', 'Portfolio', 'Open Source'],
      emoji: '🌊',
      status: 'live',
      image: 'Media/ResonantLabs.png',
      gradientFrom: '#8b5cf6',
      gradientTo: '#22d3ee',
      githubUrl: 'https://github.com/sokiicz/resonant-labs',
      liveUrl: 'https://resonantlabs.online',
      liveLabel: 'Home',
      detailUrl: 'apps/resonant-labs.html',
      releaseDate: '1 Mar 2026',
      updates: [
        { date: '2026-03-01', note: 'Initial launch' },
        { date: '2026-03-06', note: 'ConsentKit integrated, screenshots added, WIP tracker added' },
      ],
    },
    {
      id: 'daylog',
      name: 'DayLog',
      shortDesc: 'A private, local-first daily life tracker. Log habits, events, metrics and moods — no accounts, no cloud, no tracking. Everything stays on your device.',
      tags: ['Web App', 'Productivity', 'Local-First'],
      emoji: '◉',
      status: 'wip',
      image: null,
      gradientFrom: '#6366f1',
      gradientTo: '#a855f7',
      githubUrl: null,
      liveUrl: null,
      liveLabel: 'Open App',
      detailUrl: null,
      releaseDate: null,
      updates: [
        { date: '2026-03-09', note: 'Project started — React 19 + Vite + IndexedDB, routing in place' },
      ],
    },
    {
      id: 'timeinvoice',
      name: 'TimeInvoice',
      shortDesc: 'Self-hosted time tracking and invoicing for freelancers. Log hours, manage clients and projects, generate PDF invoices with QR payment codes. Supports CZK, EUR and SEPA.',
      tags: ['Web App', 'Productivity', 'Freelance'],
      emoji: '⏱',
      status: 'wip',
      image: null,
      gradientFrom: '#0ea5e9',
      gradientTo: '#2563eb',
      githubUrl: null,
      liveUrl: null,
      liveLabel: 'Open App',
      detailUrl: null,
      releaseDate: null,
      updates: [
        { date: '2026-03-09', note: 'Core invoicing working — PDF generation, QR payment codes (SPAYD + EPC), 29 tests passing' },
      ],
    },
    {
      id: 'undertow',
      name: 'Undertow',
      shortDesc: 'A music composition system for an AI that thinks in bass lines. Generates original compositions using music theory rules, harmonic progressions and rhythmic patterns.',
      tags: ['Python', 'Music', 'AI'],
      emoji: '🎸',
      status: 'wip',
      image: null,
      gradientFrom: '#1e1b4b',
      gradientTo: '#4c1d95',
      githubUrl: null,
      liveUrl: null,
      liveLabel: 'Open App',
      detailUrl: null,
      releaseDate: null,
      updates: [
        { date: '2026-03-09', note: 'Music composition engine scaffolded — music21 + numpy, bass line generation in progress' },
      ],
    },
  ]

  /* ----------------------------------------------------------
     BLOG POSTS
     ----------------------------------------------------------
     To add a new post:
       Copy one of the blocks below, paste it at the top,
       and fill in the fields. Make sure the url points to
       the actual blog post file you created.
  ---------------------------------------------------------- */
  posts: [
    {
      id: 'art-of-prompting',
      title: 'The Art of Prompting: How I Describe My Vision to Claude',
      excerpt: 'Talking to an AI is a skill in itself. Here\'s how I\'ve learned to communicate ideas clearly enough to get exactly what I imagine.',
      date: '22 Feb 2026',
      readTime: '7 min read',

      // Tag label and style. Styles: badge-primary (purple), badge-amber, badge-cyan
      tag: 'Process',
      tagClass: 'badge-amber',

      // Card gradient colours
      gradientFrom: '#f59e0b',
      gradientTo:   '#ef4444',

      // Path to the blog post file
      url: 'blog/art-of-prompting.html',
    },
    {
      id: 'why-ai-not-code',
      title: 'Why I\'m Building Apps with AI Instead of Learning to Code',
      excerpt: 'I\'ve always had ideas. What I lacked was the technical ability to bring them to life — until Claude Code changed everything.',
      date: '15 Feb 2026',
      readTime: '5 min read',
      tag: 'Thoughts',
      tagClass: 'badge-primary',
      gradientFrom: '#8b5cf6',
      gradientTo:   '#22d3ee',
      url: 'blog/why-ai-not-code.html',
    },
    {
      id: 'open-source-and-ai',
      title: 'Open Source and AI: A New Model for Sharing Software',
      excerpt: 'If an AI wrote every line, should I charge for it? The answer felt obvious — give it all away, and let ideas multiply.',
      date: '28 Jan 2026',
      readTime: '4 min read',
      tag: 'Philosophy',
      tagClass: 'badge-cyan',
      gradientFrom: '#10b981',
      gradientTo:   '#3b82f6',
      url: 'blog/open-source-and-ai.html',
    },
  ],

};

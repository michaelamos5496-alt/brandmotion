// Shared project data — single source of truth for the /work/* pages.
// Mirrors the content hand-authored in the homepage's portfolio section
// (index.html). The homepage itself is not templated from this file —
// it's left untouched so its existing scroll/animation behavior can't
// regress — but any copy edit here should be mirrored there too.
const PROJECTS = [
  {
    slug: 'nyasa-ware',
    title: 'Nyasa Ware',
    type: 'Studio Process',
    desc: "A ceramic studio process film in collaboration with Sunstories — red clay thrown and shaped on the wheel, the quiet rhythm of making distilled into a single visual statement.",
    vimeoId: '1200279135',
  },
  {
    slug: 'chocolate-clothing',
    title: 'Chocolate Clothing',
    type: 'Fashion Film',
    desc: "Global Fashion Campaign '25 — a bold visual identity for Chocolate Clothing, shot with cinematic intention and a global aesthetic.",
    vimeoId: '1123537845',
  },
  {
    slug: 'marvinbrooks-music',
    title: 'MarvinBrooks Music',
    type: 'Music Film',
    desc: "A cinematic music documentary exploring the artist's creative process, live performance, and personal narrative through visual storytelling.",
    vimeoId: '1164509809',
  },
  {
    slug: 'here-we-are-climate-impact',
    title: 'Here We Are x Climate Impact Partners',
    type: 'Post Production',
    desc: "FORM Ghana — a post production collaboration with Here We Are and Climate Impact Partners, weaving together purpose-driven storytelling with cinematic craft.",
    vimeoId: '1091937617',
  },
  {
    slug: 'united-airlines',
    title: 'United Airlines',
    type: 'Documentary',
    desc: "Beacon Donation in Ghana — documenting United Airlines' community impact initiative on the ground in Ghana, told with honesty and cinematic care.",
    vimeoId: '834062800',
  },
  {
    slug: 'aura-collection',
    title: 'Aura Collection',
    type: 'Campaign Film',
    desc: "A campaign film for the Aura Collection — ethereal, considered, and shot with intention. Light, texture, and identity composed into a single visual statement.",
    vimeoId: '1200286016',
  },
];

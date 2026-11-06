# PineryZ Website — Implementation Plan

**Document status:** Proposal for owner review. No application code until this plan is approved.  
**Date:** 2026-11-04  
**Sources read:** `docs/BUSINESS_OVERVIEW.md`, `docs/PRODUCT_OVERVIEW.md`, `docs/PINERYZ_WEBSITE_REQUIREMENTS.md`  
**Repository reviewed:** `C:\Users\Admin\Documents\PineryY Website`

This plan translates the three source documents into a site structure, a design proposal, and a build sequence. It supersedes the earlier draft of this file, which was written before `docs/PINERYZ_WEBSITE_REQUIREMENTS.md` was in the repository. Where that draft differed, this version follows the requirements document.

## How to read labels

| Label | Meaning |
| --- | --- |
| **Confirmed** | Stated in the business overview, product overview, or website requirements. |
| **Proposal** | A design or engineering recommendation in this plan. Not a brand standard and not a business fact. |
| **Assumption** | A default used so the plan can be reviewed. Not approved. |
| **Open question** | Missing information. Do not invent an answer in copy or UI. |
| **Out of bounds** | Must not appear as a fact on the site. |

The requirements document is the source of truth for how confirmed facts are presented. The business and product overviews are the source of truth for the facts themselves. If those conflict, the overviews win on facts and the conflict is recorded as an open question. No such conflict was found.

---

## 1. Project understanding

### Confirmed business identity

PineryZ is the parent company and corporate brand. It is a technology company in blockchain infrastructure, financial technology, and Web3. The approved positioning line is:

> Building the infrastructure for the future of finance.

PineryZ is focused on infrastructure that helps businesses develop, launch, and manage next-generation financial products using blockchain technology. The long-term vision is to make on-chain financial infrastructure more accessible, configurable, and easier for businesses to adopt.

The current stage is **planning and development preparation**.

### Confirmed relationship: PineryZ and VaultOS

| | PineryZ | VaultOS |
| --- | --- | --- |
| Role | Parent company and corporate brand | Planned flagship product |
| Status | Company in planning and development preparation | Product vision / platform under development |
| Job on the website | Primary brand. The site introduces the company. | Introduced as the flagship product vision, under the company brand. |

VaultOS is envisioned as white-label infrastructure that allows businesses to create and manage on-chain financial vaults and related financial products. What “related financial products” includes beyond vaults is **not specified**. What “white-label” includes — branding, deployment, APIs, or a combination — is **not specified**.

### Confirmed audiences

Primary audience: potential business customers in these segments. These are target segments, not a customer list.

- Real-world asset (RWA) platforms
- Digital asset managers
- DeFi companies
- Fintech companies
- Web3 businesses

Secondary audiences: potential partners, developers evaluating the technical direction, and potential investors. Priority among the secondary audiences is not finalized.

**Confirmed conversion goal:** encourage relevant business inquiries. The site is not optimized for token purchases, retail trading, or speculative investment.

### Confirmed business model, and what the site should do with it

The company is **exploring** a B2B infrastructure model. Potential revenue sources under consideration, none priced or contracted:

- SaaS subscriptions
- Platform deployment fees
- Enterprise integration services
- Usage-based fees, or fees related to assets under management

Usage-based or assets-under-management fees are a future plan and remain subject to legal and regulatory review.

**Proposal:** Do not put fee categories or a commercial model section on the first public site. The requirements pages do not ask for them, and a public list can be read as an offer. The model can be discussed in conversation. Revisit only if the owner approves a specific sentence.

### Confirmed product boundaries

Intended direction only. These are not shipped features and not a commitment of scope:

- Create on-chain financial vaults
- Manage those vaults
- Support related financial products on the same infrastructure, scope still open
- Offer the above as white-label infrastructure so a business could present the product under its own brand

The following are undefined and must not be written as product facts: vault strategies, asset types, yield sources, custody, permissioning, compliance workflow, identity requirements, admin console, APIs, integration surfaces, deployment model, networks beyond the proposal below, and security-review status.

Proposed technical direction, not a finalized stack and not evidence of an implementation:

| Layer | Proposed direction |
| --- | --- |
| Blockchain | Base, and other EVM-compatible networks |
| Smart contracts | Solidity |
| Vault standard | ERC-4626 |
| Backend | Node.js and TypeScript |
| Database | PostgreSQL |
| Frontend | React and Next.js |
| Wallet integration | viem and wagmi |

ERC-4626 is under consideration for vault share accounting. No VaultOS implementation, contract address, testnet, or production deployment is documented.

### Out of bounds on every page

Do not state or imply:

- VaultOS is generally available, fully operational, live, or production-ready
- A security audit has been completed
- Customers, design partners, partnerships, or integrations exist
- Production deployments have been verified
- Revenue, funding, assets under management, volume, or other traction exists
- The technology stack is final
- Any regulatory license or registration is held
- Team members, founders, advisors, offices, founding date, or company history
- Performance, security, compliance, or financial guarantees

Preferred public language: “under development,” “product vision,” “planned flagship product,” and “envisioned as.”

### Brand the site must carry

**Confirmed personality:** professional, innovative, trustworthy, technology-driven, modern, institutional, forward-looking.

**Confirmed visual direction:** hybrid.

That means a polished institutional corporate presentation, modern fintech visual language, product storytelling with a diagram only where it clarifies the vision, and restrained motion. It must not look like a meme coin, token launch, trading exchange, casino, or consumer crypto wallet.

**Confirmed website type:** a corporate website. It is not a VaultOS application, product dashboard, token sale page, or speculative-asset marketing site.

### Repository review

Inspected on 2026-11-04. There is no application source to preserve or overwrite.

| Area | Finding |
| --- | --- |
| Framework and dependencies | None. No `package.json`, lockfile, framework config, or `node_modules`. |
| Application structure | None. No `app`, `src`, `pages`, or `public` directory. |
| Components | None. |
| Styling system | None. |
| Assets | None. No logo, favicon, photography, icon set, or brand guideline file. |
| Version control | No `.git` directory in this folder. |
| Documents present | `docs/BUSINESS_OVERVIEW.md`, `docs/PRODUCT_OVERVIEW.md`, `docs/PINERYZ_WEBSITE_REQUIREMENTS.md`, and this plan. |

**Confirmed constraint from the requirements:** if the repository is empty, propose a frontend architecture and wait for approval before installing dependencies or creating application files. That is the situation here.

---

## 2. Website sitemap

**Proposal**, taken from the recommended initial sitemap in the requirements. Page count and labels can still be refined in review.

```text
/                     Home                         Required
/about                About                        Recommended
/vaultos              VaultOS product vision       Required
/contact              Business inquiry             Required

Global
  Header navigation: Home, About, VaultOS, Contact
  Header action: Contact Us → /contact
  Footer
  not-found             Missing-page state
```

### Navigation

| Item | Destination | Role |
| --- | --- | --- |
| Home | `/` | Company introduction and the full narrative. |
| About | `/about` | Company, vision, direction, and the PineryZ–VaultOS relationship. |
| VaultOS | `/vaultos` | Product vision, with status language kept visible. |
| Contact | `/contact` | Primary conversion. Also the header **Contact Us** action. |

### Pages left out of the first release

| Page | Decision |
| --- | --- |
| Technology | Future, and only with approved content. Proposed stack stays on the VaultOS page, labeled as a proposal. |
| Insights / Articles | Future. Do not publish an empty journal. |
| Careers | Future. No roles are recorded. |
| Privacy Policy | Future. Add the route and the footer link only after counsel-approved text exists. |
| Terms of Use | Same rule as Privacy. |
| Pricing | Out. No commercial terms exist. |
| Customers, logos, case studies | Out. None are recorded. |
| Documentation, dashboard, wallet, token, white paper | Out. Those would change the site type. |

Empty marketing pages will not be added to fill the navigation.

---

## 3. Page-by-page content structure

Copy is limited to confirmed points. Intended capabilities stay labeled as intended. Proposed technologies stay labeled as proposals. No page invents team, location, metrics, customers, or features.

### Home — `/`

Purpose: introduce PineryZ, state the vision, explain the problem direction, introduce VaultOS, name the intended customer types, and invite a business conversation.

Section order is specified in section 4. That order is the recommended narrative from the requirements.

### About — `/about`

| Order | Block | Content boundary |
| --- | --- | --- |
| 1 | Company overview | Name, parent-company role, industry, positioning line, and the one-paragraph description from the business overview. |
| 2 | Vision | Make on-chain financial infrastructure more accessible, configurable, and easier for businesses to adopt. Directional, not a claim of demonstrated adoption. |
| 3 | Infrastructure direction | The problem framing in section 4.4, expanded by one paragraph. Directional intent, not market research. |
| 4 | PineryZ and VaultOS | Parent brand and planned flagship. Link to `/vaultos`. Status: under development. |
| 5 | Who the company is preparing to serve | The five segments, described as segments under consideration. Partners, developers, and investors mentioned as additional audiences for the contact page, without audience-specific promises. |
| 6 | Contact | Link to `/contact`. |

Do not add founders, leadership, advisors, offices, funding, milestones, or a founding story.

### VaultOS — `/vaultos`

| Order | Block | Content boundary |
| --- | --- | --- |
| 1 | Product hero | Name, category “white-label on-chain financial infrastructure,” one-sentence explanation, and a visible status: planned flagship product, under development. |
| 2 | Product vision | A configurable way for businesses to develop, launch, and manage on-chain financial vaults and related products, without assembling that infrastructure alone. “Related products” is not expanded. |
| 3 | Intended capabilities | The four intended directions from the product overview. Introduced as intended direction, not a feature list of a live product. |
| 4 | White-label direction | Envisioned so a business could present the product under its own brand. State that branding, deployment, and API scope are not yet defined. |
| 5 | Potential customers | The five segments, with the cautious “may need” relevance notes. No segment is marked first. |
| 6 | Technical direction | The proposed stack, titled “Proposed technical direction.” One line that the choices are not final and that no implementation or deployment is claimed. |
| 7 | Contact | Invitation to discuss the direction. Link to `/contact`. |

No product screenshot. A conceptual diagram is allowed only with the caption in section 4.5. No prices, fee types, audit badges, or network status.

### Contact — `/contact`

| Order | Block | Content boundary |
| --- | --- | --- |
| 1 | Purpose | Invite potential business customers, partners, developers, and investors to contact PineryZ. |
| 2 | Stage expectation | The company is in planning and development preparation. A conversation does not imply a live product or a commercial offer. |
| 3 | Inquiry method | See the contact rules below. |
| 4 | Alternate path | A public email or profile link appears only after the owner supplies it. |

**Confirmed contact rules:**

- Recommended fields, subject to owner approval: name, work email, company, inquiry type, message.
- Inquiry types: business inquiry, partnership, technical discussion, other.
- Required fields are validated.
- Success and error feedback are clear.
- Spam protection and protection of personal information are required once a real submission path exists.
- A form must not look functional unless a real destination and workflow are configured.
- Do not invent an email address or connect the form to an unapproved destination.

**Proposal for the first build:** ship a contact page that explains inquiries are not yet being received online, lists what a future inquiry will ask, and does not render a submit button. When the owner approves an email, the page can add that address as a plain `mailto` link. A working form, spam control, and success state wait for an approved destination. This follows the requirement to avoid a fake submission flow.

### Missing page

A plain institutional not-found page with links to Home and Contact. No illustrated crypto scene.

---

## 4. Homepage section specifications

**Proposal for layout. Confirmed for narrative order.** Desktop reading order is the order below. Narrow screens keep the same order in one column.

### 4.1 Header / navigation

- Brand: text wordmark “PineryZ” until an approved logo file exists. Do not draw a final symbol.
- Links: Home, About, VaultOS, Contact.
- Action: **Contact Us**, visually distinct from the text links, leading to `/contact`.
- Sticky. On scroll, the bar keeps a solid background so links remain readable over both light and dark sections.
- Mobile: a button that opens a menu. The menu is keyboard accessible, labeled, closes on Escape and on navigation, and returns focus to the button.
- Height stays compact. No wallet button, network badge, token price, or announcement ticker.

### 4.2 Hero

Purpose: say what PineryZ is, and the direction it is pursuing, within a few seconds.

| Element | Proposed copy, from the requirements | Status |
| --- | --- | --- |
| Headline | Building the Infrastructure for the Future of Finance. | Confirmed positioning line. |
| Support | PineryZ is developing blockchain-based infrastructure designed to help businesses build and manage next-generation financial products. | Proposed website copy. Must not imply a complete production platform. |
| Primary action | Explore VaultOS → `/vaultos` | Proposal |
| Secondary action | Contact Us → `/contact` | Proposal |
| Visual | Abstract infrastructure motif: layered geometry and a quiet network of nodes. Original SVG, decorative. | Proposal. Not a product screenshot and not stock coin art. |

No statistics, customer logos, or performance claims.

### 4.3 Company introduction

Purpose: explain PineryZ’s role.

Content:

- PineryZ is a technology company and the parent brand.
- The work sits in blockchain infrastructure, financial technology, and Web3.
- The long-term vision is to make on-chain financial infrastructure more accessible, configurable, and easier for businesses to adopt.

Link to About for the longer statement. No founding story, biography, office, or history.

### 4.4 The challenge / opportunity

Purpose: explain the problem the company aims to address.

Intro sentence must frame the following as the company’s problem framing, not as a research finding:

Businesses that want to build on-chain financial products may need to assemble and integrate multiple parts of the infrastructure themselves. PineryZ aims to make that process more accessible and configurable.

Four themes, each one sentence, with no numbers:

| Theme | Boundary |
| --- | --- |
| Infrastructure complexity | Many separate parts have to be assembled and integrated. |
| Configurable foundations | Different financial products and operating models need a foundation that can be shaped. |
| A complete stack | Building the full stack independently is the difficulty the company aims to reduce. |
| Business adoption | The infrastructure is being considered with business adoption in mind. |

### 4.5 VaultOS introduction

- Label: “Planned flagship product.”
- Name: VaultOS.
- Category: white-label on-chain financial infrastructure.
- Intent: help businesses create and manage on-chain financial vaults. Related financial products stay unnamed.
- Status line, visible in the section: “Under development.”
- Action: **Explore VaultOS**.
- Visual: optional conceptual diagram with this caption, verbatim in substance: “Conceptual view of the intended relationship. Not a depiction of a live system.” Three nodes only: a business, VaultOS as infrastructure under development, and on-chain vaults. No screens, balances, or yields.

### 4.6 Intended customer segments

Heading language: “Who we are building for” or “Intended customers.” Avoid “Trusted by.”

Five items, equal weight, short descriptions drawn from the product overview’s “may need” notes:

| Segment | Public description boundary |
| --- | --- |
| RWA platforms | May need vault infrastructure for on-chain representations of assets or related products. |
| Digital asset managers | May need infrastructure to create and operate on-chain vaults. |
| DeFi companies | May need white-label vault infrastructure rather than a one-off build. |
| Fintech companies | May need a path onto on-chain financial products without building the full stack. |
| Web3 businesses | May need configurable infrastructure for vault-based products. |

No logos, testimonials, or case studies.

### 4.7 Company approach / value themes

Four themes, written as intentions:

- Configurable infrastructure
- More accessible on-chain product development
- A white-label product direction
- Infrastructure considered with business adoption in mind

Do not turn these into guarantees or verified outcomes.

### 4.8 Closing call to action

| Element | Proposed copy | Status |
| --- | --- | --- |
| Heading | Building something on-chain? Let's talk. | Suggested in the requirements. |
| Body | Invite businesses interested in on-chain financial infrastructure to contact PineryZ. | Confirmed purpose. |
| Action | Contact Us → `/contact` | Proposal |

Do not promise a response time, a service package, or a deployment.

### 4.9 Footer

- Wordmark and a one-line description using the positioning sentence.
- Links: Home, About, VaultOS, Contact.
- Stage line: “VaultOS is a planned flagship product under development.”
- Copyright line, **proposal:** “© 2026 PineryZ.” Brand name only. No legal entity, address, or registration number until supplied.
- Privacy and Terms links are omitted until those pages exist and are approved.
- No social icons until real profile URLs are supplied.
- No invented email, phone, or postal address.

---

## 5. Design system proposal

**Proposal.** Not an approved brand standard. The requirements ask for this direction to be reviewed before it is treated as final. No logo, color, or type specification was found in the repository.

### Principles

1. Institutional first. The page should feel like a financial-infrastructure company.
2. Hybrid rhythm. Dark sections carry the hero, the product introduction, and the close. Light sections carry explanation.
3. Type and spacing do most of the work. Visuals explain structure. They do not decorate for atmosphere.
4. One accent, used for actions, focus, and small markers.
5. Motion supports orientation. It does not run on a loop.
6. Status language is designed as a normal label, not as a warning banner.

### Spacing

A 4-point scale.

| Token | Value | Use |
| --- | --- | --- |
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Icon and label gaps |
| `space-3` | 12px | Compact stacks |
| `space-4` | 16px | Default gap |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Block gap |
| `space-12` | 48px | Intro to content |
| `space-16` | 64px | Section padding, small screens |
| `space-24` | 96px | Section padding, desktop |
| `space-32` | 128px | Hero vertical padding, desktop |

Content width: `1120px`. Readable text blocks cap near `68ch`. Horizontal page padding: `24px` on small screens, `32px` from tablet up.

### Radius, line, elevation

- Radius: `4px` on buttons, fields, and cards. No full pills.
- Borders: `1px` solid, using the line token for the current surface.
- Shadow: none on marketing sections. A stuck header may use a hairline border only.
- Cards, where used for segments and themes, are flat panels with a border, not floating tiles.

### Core components

| Component | Role |
| --- | --- |
| `Wordmark` | Text “PineryZ”. Swaps to an approved logo later without changing the header layout. |
| `Header` | Brand, nav, Contact Us, mobile menu. |
| `Footer` | Description, nav, stage line, copyright. |
| `Container` | Max width and horizontal padding. |
| `Section` | Vertical rhythm, light or dark surface, heading order. |
| `Eyebrow` | Small label above a title. |
| `Button` | Primary and secondary. Renders a link when the action navigates. |
| `TextLink` | Inline links with a visible underline. |
| `StatusLabel` | “Under development” and “Proposed.” |
| `ThemeGrid` | Challenge themes, value themes, and customer segments. |
| `ConceptDiagram` | The three-node VaultOS diagram, with its caption. |
| `Prose` | Longer About and VaultOS copy. |
| `ContactPlaceholder` | The non-sending contact state. Replaced by `InquiryForm` only after a destination is approved. |
| `Notice` | Honest empty states. Not used to invent policy text. |

### States

Every interactive control defines hover, focus-visible, active, and disabled. Focus is a `2px` accent outline with `2px` offset, visible on both light and dark surfaces. Disabled controls are not used to imitate a broken form. The contact placeholder simply has no submit control.

### Iconography and imagery

**Proposal:** No stock photography and no cryptocurrency imagery. Segment and theme items can use a short numeric or textual marker rather than a metaphor icon. If an icon is required later, use one stroke set at a consistent size. Do not mix sets.

The hero motif and the concept diagram are original SVG, built in code, so they scale and respect reduced motion. Meaningful diagrams have a text caption. Decorative SVG is hidden from assistive technology.

### Motion

- Color and border changes: about 150ms.
- Mobile menu: opacity and a short vertical move, about 200ms.
- No parallax, no looping hero, no count-up numbers, no scroll-jacking.
- `prefers-reduced-motion: reduce` disables the menu travel and any entrance shift. Content is present without animation.

---

## 6. Typography and color direction

**Proposal**, for review. The requirements suggest a modern sans-serif, deep navy, charcoal, off-white, and one restrained blue, teal, or green accent, plus a mix of dark and light sections. The values below are one exploration of that brief.

### Type

One family for headlines, body, and UI: **IBM Plex Sans**, loaded through `next/font`. It is a neutral grotesque with an institutional, technical character and an open license. A second display face is unnecessary for the first site.

| Style | Desktop | Small screen | Weight |
| --- | --- | --- | --- |
| Display | 56 / 1.08, tracking `-0.02em` | 36 / 1.15 | 500 |
| Title | 40 / 1.15 | 32 / 1.2 | 500 |
| Heading | 28 / 1.25 | 24 / 1.3 | 500 |
| Body | 18 / 1.6 | 17 / 1.6 | 400 |
| Small | 15 / 1.5 | 15 / 1.5 | 400 |
| Eyebrow | 12 / 1.4, tracking `0.08em`, uppercase | same | 500 |

Avoid weight 700 on long headlines. Buttons use weight 500.

### Color

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | `#0B1C2C` | Dark sections, header, footer |
| `navy-raised` | `#12283A` | Dark cards and the open mobile menu |
| `ink` | `#1A2330` | Text on light surfaces |
| `ink-soft` | `#3D4A59` | Secondary text on light surfaces |
| `paper` | `#F4F6F8` | Light page background |
| `paper-raised` | `#FBFCFD` | Light panels |
| `line` | `#D5DDE6` | Borders on light surfaces |
| `line-inverse` | `rgba(244, 246, 248, 0.16)` | Borders on navy |
| `text-inverse` | `#F4F6F8` | Text on navy |
| `text-inverse-soft` | `#C5D0DB` | Secondary text on navy |
| `accent` | `#0F5F73` | Primary button fill, links on light, focus |
| `accent-hover` | `#0C4E5E` | Primary button hover |
| `on-accent` | `#F4FBFC` | Text on accent buttons |
| `status` | `#6E6248` | “Under development” on light surfaces |

The accent is a deep teal. It is the single chromatic color. It is not neon, and it is not a trading-green.

**Contrast rule:** body text, navigation, and button labels must meet WCAG 2.2 AA before the tokens are accepted. If the teal pair fails for the button label, darken `accent` until it passes. Do not lighten the button text to compensate with a low-contrast wash.

**Out of direction:** purple-to-cyan gradients, electric green on pure black, glassmorphism, ticker tapes, coin illustrations, and full-bleed 3D renders.

### Section surfaces

| Section | Surface |
| --- | --- |
| Header | Navy, solid |
| Hero | Navy |
| Company introduction | Paper |
| Challenge | Paper, with bordered columns |
| VaultOS introduction | Navy |
| Customer segments | Paper |
| Value themes | Paper-raised band |
| Closing CTA | Navy |
| Footer | Navy, separated from the CTA by a hairline if they touch |

Inner pages use a navy page hero and paper body, so About, VaultOS, and Contact feel like one system.

---

## 7. Component architecture

**Proposal.** Keep approved copy in one typed module. Keep reusable UI separate from page sections.

```text
app/
  layout.tsx                  Root metadata, header, footer, skip link
  page.tsx                    Home, composed from sections
  about/page.tsx
  vaultos/page.tsx
  contact/page.tsx
  not-found.tsx
  globals.css                 Tokens and element defaults
  robots.ts                   noindex until launch is requested
  sitemap.ts                  Added when indexing is approved
components/
  layout/                     Header, Footer, Container, Section, SkipLink
  ui/                         Button, TextLink, Eyebrow, StatusLabel, Notice
  visuals/                    InfrastructureMotif, ConceptDiagram
  sections/home/              One file per homepage section
  contact/                    ContactPlaceholder, later InquiryForm
content/
  site.ts                     Public copy, navigation, segments, themes
lib/
  metadata.ts                 Title and description per route
```

### Content rules

- Public sentences map to a line in the business overview, the product overview, or the suggested copy already written in the requirements.
- Status strings are constants shared with `StatusLabel`.
- Segment descriptions stay conditional (“may need”) until a use case is approved.
- Technical items live under a `proposedTechnicalDirection` field, not `stack` or `features`.
- Pages import content. They do not embed new marketing claims in JSX.

### Composition

The root layout owns the skip link, header, and footer. Pages own their sections. Sections do not fetch remote data. There is no client-side data store.

`Header` and `InquiryForm` are the only client components expected. `InquiryForm` is not built in the first approved slice unless a destination is approved in the same decision.

---

## 8. Frontend architecture

### Recommendation

The repository has no framework. The product overview proposes React and Next.js for VaultOS, and the requirements allow that direction to inform the corporate site without making it a final product decision.

| Choice | Recommendation | Why |
| --- | --- | --- |
| Framework | Next.js, current stable, App Router | File-based routes match the four-page sitemap. Metadata, font loading, and static rendering fit a corporate site. |
| UI | React | Matches the proposed product frontend and the component split above. |
| Language | TypeScript, strict | Keeps the content model and routes typed. |
| Styling | Global CSS variables for tokens, CSS modules per component | Tokens stay in one place. No pre-styled kit is imposed on the brand. |
| Content | `content/site.ts` | Claims can be reviewed in one file. |
| Fonts | `next/font` for IBM Plex Sans | Self-hosted by the framework, no extra runtime request to manage. |
| Rendering | Static | No per-request data on the first site. |

This choice is for the corporate website. It does not finalize the VaultOS product stack.

### Dependencies the foundation will add, after approval

The folder will need, and does not currently have:

- `package.json` and a lockfile
- `next`, `react`, `react-dom`
- `typescript`, plus the types Next.js expects
- `tsconfig.json`, `next.config.ts`, `next-env.d.ts`
- `.gitignore` for dependencies and build output
- `app/globals.css`

No environment variables until a contact destination or an approved analytics tool exists. Analytics stays off by default.

### Excluded from the corporate site

| Item | Why |
| --- | --- |
| viem, wagmi, wallet connection | Product direction only. A connect button would imply a live protocol. |
| Solidity, ABIs, chain RPC | No deployment exists to point at. |
| PostgreSQL, a custom API, authentication | No site data model is approved. |
| A themed component library | The visual system needs to stay specific to this brand. |
| A CMS | No editorial workflow was requested. |
| Blockchain interaction of any kind | The requirements exclude it unless a later request adds it. |

### Contact and conversion flow

Every Contact Us action and the hero’s Explore VaultOS action are ordinary links.

```text
Header, hero, About, VaultOS, closing band
        │
        ▼
     /contact
        │
        ├─ Now: explanation that online inquiries are not yet received.
        │        No submit button. No invented address.
        │
        └─ After approval: either a mailto to an approved address,
                 or a validated form posting only to an approved destination
                 with spam protection, a privacy notice, and clear success
                 and error states.
```

Proposed form fields, when a destination exists: name, work email, company, inquiry type, message. Inquiry type options: business inquiry, partnership, technical discussion, other. Client validation requires name, a valid work email, company, inquiry type, and message. The server, not only the browser, validates again. Submissions are not stored in the repository.

### Routing and metadata

- One route per page in the sitemap. Descriptive URLs as above.
- Titles: `Page — PineryZ`. Home title: `PineryZ`.
- Proposed home description: “PineryZ is a technology company building infrastructure for businesses to develop, launch, and manage on-chain financial products. VaultOS, our planned flagship, is under development.”
- Each page gets its own description. Open Graph title and description reuse that copy.
- No Open Graph image that resembles a product screenshot. A simple brand card can wait for an approved logo.
- Favicon waits for an approved mark. Until then, the browser default is acceptable.
- **Assumption:** `robots` disallows indexing until the owner asks for a public launch. Sitemap generation turns on at the same time.
- No structured data for reviews, ratings, addresses, or social profiles.

---

## 9. Responsive design strategy

**Proposal.** Design the narrow screen and the desktop together. The story order does not change. Only the grid changes.

| Range | Layout |
| --- | --- |
| Below 720px | One column. Header is wordmark plus menu button. Display size uses the small-screen scale. Section padding is `space-16`. Actions in the hero and closing band can sit full width, stacked, with Contact Us still easy to reach. Touch targets are at least 44px. |
| 720px to 1023px | Theme and segment grids use two columns. Header links return if they fit without crowding. If they do not, the menu button remains. |
| 1024px and above | Inline navigation. Challenge and value themes in two columns or a four-up row if the line length stays readable. Segments as a five-item grid that wraps rather than squeezing. Content width capped at 1120px. Hero padding can use `space-32`. |

Requirements carried into implementation:

- Fluid layout. No fixed desktop canvas.
- No horizontal overflow at 320px.
- Readable type at each range. Body does not drop below 16px for form fields.
- Images and SVG scale inside their containers. The hero motif does not force width.
- Hover is never the only way to reach content. The mobile menu and all CTAs work by tap and keyboard.
- Test widths before a phase is called done: 320, 390, 768, 1024, 1280, and 1440.

Laptop and desktop share the 1024px-and-above rules. A 1280px check confirms the content column stays centered with comfortable margins.

---

## 10. Implementation phases

No application file is created until this plan is approved. The overview documents and the requirements document stay unchanged during implementation.

### Phase 0 — Approval

This document. Owner confirms or corrects the sitemap, the proposed copy in section 4, the visual direction, and the contact placeholder.

The visual build can start without a logo or a contact inbox. It cannot start with a form that pretends to send.

### Phase 1 — Design foundation

Maps to requirements Phase 2.

- Add the Next.js, React, and TypeScript toolchain and the token file.
- Load IBM Plex Sans.
- Build `Container`, `Section`, `Eyebrow`, `Button`, `TextLink`, `StatusLabel`, `Header`, `Footer`, and the skip link.
- Implement keyboard behavior for the mobile menu.
- Root layout, not-found page, and a noindex default.
- Home route renders the chrome only, so the header, footer, and tokens can be reviewed before the full narrative is built.

Stop for a short design review if the navy, teal, and type feel wrong. Changing tokens is cheaper here than after every section exists.

### Phase 2 — Homepage

Maps to requirements Phase 3.

- Write `content/site.ts` for the homepage from sections 3 and 4.
- Build sections 4.2 through 4.8 in that order, plus the hero motif and the captioned concept diagram.
- Check that “under development” is visible in the VaultOS section and the footer.
- Review desktop and a 390px-wide layout before inner pages.

### Phase 3 — About and VaultOS

Maps to requirements Phase 4, excluding Contact.

- Add both routes using the shared chrome and the structures in section 3.
- Put the proposed technical direction only on the VaultOS page, under its “proposed” heading.
- No page-specific visual system.

### Phase 4 — Contact

Maps to the contact portion of requirements Phase 4.

- Build the placeholder page described in section 3.
- If, before this phase, an email or a submission destination has been approved, implement that approved method instead of the placeholder, including validation, error and success states, and spam protection.
- Do not add Privacy or Terms routes in this phase.

### Phase 5 — Quality assurance

Maps to requirements Phase 5.

- Run the testing strategy in section 11.
- Fix failures before describing the site as ready for review.
- Read every rendered sentence against the two overview documents.

### Phase 6 — Deployment preparation

Maps to requirements Phase 6. Blocked on owner decisions.

- Confirm domain and host.
- Set production environment values only for tools the owner has approved.
- Enable analytics only if approved.
- Switch indexing on only if a public launch is requested, and add the sitemap then.
- Final content and link check.

### Later, only if requested

Approved logo swap, counsel-written Privacy and Terms, a real inquiry transport, Technology or Insights pages, a CMS, and any product or wallet interface.

---

## 11. Testing strategy

The first release is a static corporate site with a mobile menu and, until a destination is approved, no working form. Tests protect claims, access, and layout.

### Claim review

Read every route and confirm:

- VaultOS is described as under development, a product vision, or the planned flagship.
- The technical list appears only as a proposed direction, on the VaultOS page.
- No customer, partner, audit, deployment, revenue, funding, license, team member, or office appears.
- No price, fee, or assets-under-management figure appears.
- Segment copy does not call those organizations customers.
- “Related financial products” is not expanded into specific products.
- The concept diagram caption says it is not a live system.
- Hero support copy does not say the platform is available.

### Interaction

| Case | Expected result |
| --- | --- |
| Contact Us in the header, About, VaultOS, and the closing band | Each opens `/contact`. |
| Explore VaultOS in the hero and the product section | Each opens `/vaultos`. |
| Contact page before a destination exists | No control submits data. The page states that online inquiries are not yet received. |
| Contact page after a destination is approved | Required fields validate, errors are specific, success is confirmed, and a failed send does not claim success. |
| Mobile menu | Opens from the button, closes on Escape, closes on a link, and returns focus to the button. |
| Keyboard only | Skip link, every nav item, button, and field is reachable and shows the focus outline. |
| Hover unavailable | Menus and disclosures still work by click and keyboard. |

### Layout and display

- At 320, 390, 768, 1024, 1280, and 1440: no clipped wordmark, no overlapping header, no horizontal scroll.
- The headline wraps inside the content width.
- Dark and light sections meet on a clean edge.
- With `prefers-reduced-motion: reduce`, the menu appears without travel.
- Browser zoom to 200% keeps the homepage readable in one column.

### Engineering checks

- TypeScript strict check passes.
- Production build passes.
- Each internal link resolves. An unknown route renders the not-found page.
- No console errors on first load of each route.
- Lighthouse, or an equivalent check, is used for contrast and document titles. A score target is not the release criterion.
- Automated visual regression and wallet tests are out of scope. No design file and no chain integration exist.

### Accessibility checks mapped to the requirements

Aim for WCAG 2.2 AA practices where they apply to this site:

- Semantic regions and a single `h1` per page, with headings in order.
- Skip link to main content.
- Form labels, when a form exists, tied to their controls. Errors use text, not color alone.
- Link text names the destination.
- Decorative visuals are hidden from assistive technology. The concept diagram has a caption.
- Contrast checked for ink on paper, inverse text on navy, and the accent button.
- Reduced motion honored.

---

## Open questions

These are not answered in the source documents. Defaults in this plan are proposals or assumptions, not facts.

### Brand and assets

1. Is there an approved PineryZ logo?
2. Is there an approved VaultOS logo or wordmark treatment?
3. Are official colors or fonts already chosen? If yes, they replace section 6.
4. Are there brand guidelines or other visual assets to use?

### Content

5. Is the hero support sentence in section 4.2 approved?
6. Is the closing headline “Building something on-chain? Let's talk.” approved?
7. Is there a preferred company description beyond the positioning line and the business-overview paragraph?
8. Should any customer segment be emphasized first? **Assumption:** equal weight.
9. Are product diagrams or interface concepts already approved? **Assumption:** no, so the site uses the captioned three-node diagram only.
10. What may the site say “white-label” includes? **Assumption:** use the cautious wording in section 3 and do not list branding, deployment, or APIs as available.
11. Is there approved founder or team information? **Assumption:** omit.
12. Are social or professional-network URLs approved? **Assumption:** omit.

### Contact, legal, and launch

13. What is the approved contact email, if one should be published?
14. Where should form submissions go, and who receives them?
15. Which privacy wording must be in place before any personal data is collected?
16. Which legal pages are required for the operating jurisdiction, and who will supply the text?
17. What legal entity name, if any, should appear in the copyright line?
18. Which domain and hosting provider will be used?
19. Is analytics required? **Assumption:** no.
20. Should the site be indexed at launch? **Assumption:** noindex until you ask for a public launch.

---

## Approval requested

Please approve this plan or mark the sections to change. In particular: the four-page sitemap, the homepage order, the navy and teal proposal, IBM Plex Sans, and the non-sending contact page.

After approval, implementation starts at Phase 1. Until then, no application code, dependencies, or edits to the source documents will be made.

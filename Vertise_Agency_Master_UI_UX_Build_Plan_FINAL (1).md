# Vertise Agency Website — Master UI/UX & Build Plan
*(Final version — includes confirmed Hero → About scroll-merge transition spec §4A, single-page architecture note in §5, and a live-updated Build Status in §25 reflecting what's actually shipped so far.)*

> **Purpose:** Production-ready reference for Claude / Antigravity (AI build agent) and project owner.
>
> **Primary goal:** Build a premium, fast, conversion-focused digital marketing and web agency website that feels distinctive to Vertise—not a clone of the design reference.
>
> **Important:** This document is the source of truth for structure, UX, visual direction, interactions, content organization, responsive behavior, accessibility, performance, and SEO. Do not invent client facts, contact details, portfolio results, testimonials, statistics, or assets.

---

## 1. Project Overview

- **Type:** Digital marketing, web design and digital solutions agency website.
- **Design inspiration:** Crency Agency (`crency.agency`) — dark, expressive, cursor-driven interaction, curved section transitions and strong typography. Use it only as inspiration; do not reproduce its layout or visual identity.
- **Content source:** Existing Vertise Digital `index.html` — services, portfolio, clients, footer and existing content structure.
- **Brand source:** Client logo — interlocking diamond/infinity-style mark using red, yellow/gold, blue and green on black.
- **Tech stack:** Next.js (React) + TypeScript + Tailwind CSS + Three.js via `@react-three/fiber` + GSAP where useful.
- **Primary UX goal:** A first-time visitor should understand what Vertise does within 3–5 seconds and reach a relevant enquiry path with minimal friction.
- **Secondary goals:** Demonstrate capability, establish trust, showcase work, explain the process and support organic search.
- **Status:** Planning locked for the revised UX direction. Existing scaffold includes Nav, Hero, Custom Cursor, Marquee and Three.js hero scene.

### Core experience principle

The site must communicate:

**Business problem → Vertise solution → Proof → Process → Trust → Contact**

It must not feel like an animation showcase where visual effects are more important than useful information.

---

## 2. Brand & Color System

Use the client logo as the primary source of visual identity.

| Role | Name | Hex |
|---|---|---|
| Dark surface | Near-black | `#0A0A0A` |
| Footer / deepest surface | Deep black | `#060606` |
| Light surface | Soft blue tint | `#E8ECFB` |
| Text on dark | Off-white | `#F5F3F0` |
| Text on light | Deep ink | `#12142B` |
| Primary accent | Gold | `#F4B400` |
| Secondary accent | Red | `#E8392B` |
| Tertiary accent | Blue | `#3457D5` |
| Quaternary accent | Green | `#34A853` |

### Color rules

- Dark and light neutrals should carry approximately 80% of the visual surface.
- Use the four brand colors as controlled accents for badges, icons, labels, CTA details, borders, stickers and selected interaction states.
- Do not create random multi-color gradients from the four brand colors.
- Avoid using all four saturated colors in one component unless there is a clear brand reason.
- Maintain readable contrast in every state.
- Accent color must never be the only way information is communicated.

---

## 3. Typography

| Use | Font | Source / Notes |
|---|---|---|
| Display / headlines | **Bricolage Grotesque** | Google Fonts, variable, expressive and rounded |
| UI / body | **Manrope** | Google Fonts, clean and readable |

### Type rules

- Hero and major section headlines may use uppercase for impact.
- Navigation, buttons and body copy use sentence case.
- Keep body text highly readable; do not sacrifice readability for style.
- Marquee text may use outlined/stroked treatment.
- Establish a clear type scale for desktop, tablet and mobile.
- Avoid excessive all-caps paragraphs.
- Never use unverified fonts such as Rocking Royal, Rogue Back, Gismo or Fifty Sans unless the client supplies valid, licensable sources.

---

## 4. Motion & Interaction System

Animation should reinforce brand personality while keeping information easy to consume.

### Approved interactions

1. **Custom cursor**
   - Desktop only.
   - Changes shape/label/color according to interaction target.
   - Must not interfere with normal pointer behavior.
   - Disable on touch devices.

2. **Three.js hero graphic**
   - Rotating/interacting interlocking rings inspired by the logo.
   - Brand colors used selectively.
   - Decorative, not informational.
   - Must have a reduced/static fallback.

3. **Scroll reveal**
   - Subtle fade/translate.
   - Use for headings, cards and selected content.
   - Avoid excessive stagger delays.

4. **Marquee**
   - Continuous horizontal movement between major sections.
   - Pause or reduce motion where appropriate.

5. **Magnetic CTA**
   - Very subtle desktop-only movement.
   - Must remain easy to click.

6. **Micro-interactions**
   - Arrow movement.
   - Card lift.
   - Border/accent transitions.
   - Icon movement.
   - Small hover rotations.

### Interactions to avoid or reduce

- Do not make essential information dependent on animation.
- Do not require users to hover to understand a service.
- Do not use nine mandatory 3D flip cards.
- Avoid excessive parallax.
- Avoid simultaneous text-split, cursor, 3D and marquee effects in the same viewport.
- Do not autoplay heavy videos on mobile.
- Respect `prefers-reduced-motion`.

### Motion priority

**Usability > performance > animation complexity.**

---

## 4A. Hero → About Scroll-Merge Transition (Confirmed Reference Animation)

Client-confirmed reference behavior (see attached screenshot). This is the signature transition of the site and should be treated as a named, reusable pattern — not a one-off effect.

### What it looks like

1. The hero's oversized headline is intentionally cropped by the top edge of the viewport as the user scrolls — the words continue "off-screen" above, reinforcing scale and giving the section weight.
2. A **wave-curve divider** (soft sine-curve SVG, not a hard edge) separates the dark hero from the light About section below it. The curve's fill color matches the section it leads into.
3. **Floating sticker badges** sit right at the seam of the curve, tilted at a fixed rotation:
   - A jagged "starburst" badge ("500+ websites built")
   - A ribbon/flag-shaped badge ("9 years of experience")
   - Small dotted connector lines with circular nodes link related badges/headline words together, reinforcing the "hand-annotated" feel
4. Once past the curve, the **About headline** ("BRANDS AND DIGITAL PRODUCTS THAT SCALE" or equivalent) is set at a huge scale, filling the width of the section.
5. A **floating pill status bar** (rounded capsule, dot-separated segments — e.g. "Open: Menu · get my website · View: Cases") stays pinned mid-viewport as the user scrolls, acting as a persistent contextual control. Segment labels can update based on which section is in view.
6. The custom cursor ("You" pill) remains active and visible throughout this transition.

### Implementation notes for Antigravity

- **Wave divider:** inline SVG `<path>` with a single smooth curve (quadratic or cubic bezier), positioned absolutely at the section boundary. Fill color = the color of the section below it. Do not animate the curve's shape on scroll — keep it static; let the content scroll past it.
- **Headline crop:** achieved naturally by placing the headline near the top of a tall hero section — no special clipping needed, just correct headline scale (`clamp()` sizing) and section height.
- **Sticker badges + dotted connectors:** absolutely positioned divs at a fixed `rotate()` transform, per §4 sticker rules. Dotted connector = SVG `<path>` with `stroke-dasharray` and a small circle marker at each end. These are static-position (not scroll-linked) but may get a very subtle parallax drift per §4's approved parallax use.
- **Floating pill status bar:** `position: fixed` (or `sticky` within a bounded container), centered, `z-index` above section content but below modals. Use IntersectionObserver to swap the segment label(s) as sections change. Must remain keyboard accessible and must not obstruct content or the mobile CTA — hide or collapse it on small viewports if it would overlap primary content (see §19 Responsive rules).
- **Performance:** none of this requires JS-driven scroll animation of the divider or badges themselves — the "merge" effect comes from layout and scroll-past positioning, not continuous re-calculation. This keeps it cheap and consistent with §21 Performance principles.
- **Reduced motion:** badges and pill bar must still render in their resting state with `prefers-reduced-motion` — only remove the parallax drift, not the layout itself.

This pattern should be reused wherever a dark→light or light→dark section boundary occurs (Hero→About, and optionally Clients→Contact), so it reads as a consistent system rather than a one-time hero effect.

---

## 5. User Journey & Page Structure

> **Architecture note:** This is a **single-page site**. Services / Work / About / Process / Contact in the nav are anchor links scrolling within one page (`#services`, `#work`, etc.), not separate routes. Dedicated service pages (`/services/web-development`, etc., see §22) and individual case-study pages (§12) remain optional additions for later, once there's enough real content to justify a standalone page — not required for launch.

The page should follow this order:

1. Navigation
2. Hero
3. Trust / Results
4. What Do You Need?
5. Services
6. How We Work
7. Selected Work
8. Why Vertise?
9. Trusted By / Testimonials
10. FAQ
11. Final CTA
12. Contact
13. Footer

The visitor should always know:
- What Vertise does.
- What Vertise can do for them.
- What Vertise has already done.
- What happens after contacting Vertise.
- How to start a project.

---

## 6. Navigation

### Desktop

- Logo
- Services
- Work
- About
- Process
- Contact
- Primary CTA: **Start a project**

### Mobile

- Logo
- Hamburger menu
- Full-screen or accessible slide-down menu
- Persistent **Start a project** CTA where practical

### Navigation rules

- Keep the main navigation concise.
- Do not include Blog in primary navigation unless there is a maintained blog.
- Active section state should be visible.
- Navigation must remain keyboard accessible.
- Sticky navigation may subtly change appearance after scrolling.

---

## 7. Hero Section

### Objective

Immediately communicate the agency value proposition and provide two clear actions.

### Recommended content structure

**Eyebrow:**

`DIGITAL MARKETING • WEB • BRANDING`

**Main headline:**

**WE BUILD DIGITAL EXPERIENCES THAT HELP BUSINESSES GROW.**

**Supporting copy:**

From branding and websites to SEO, advertising and digital strategy, Vertise helps businesses build a stronger digital presence and grow online.

> Final copy must be confirmed with the client before launch.

### CTAs

Primary:
**Start a project**

Secondary:
**View our work**

### Trust indicators

Use only verified information, for example:
- Projects delivered
- Years of experience
- Businesses served
- Response time
- Client rating

Do not invent numbers.

### Visual

- Three.js interlocking ring/geometry system inspired by the client logo.
- Decorative supporting elements may float around the visual.
- Keep the main headline and CTA visually dominant.
- Ensure text remains readable over the animation.
- Provide a static or lightweight fallback for slow devices.
- Hero exits into the About section via the **Hero → About Scroll-Merge Transition** — see §4A for the full spec (wave-curve divider, cropped headline, sticker badges with dotted connectors, floating pill status bar).

---

## 8. Trust / Results Strip

Immediately after the hero, show concise proof.

Possible items:

- `[Verified number]+ Projects`
- `[Verified number]+ Years`
- `[Verified number]+ Clients`
- `[Verified metric]`

If verified statistics are unavailable, replace them with qualitative trust statements rather than fake numbers.

Example:

`Web • Branding • Marketing • Digital Solutions`

Use sticker-like badges or compact cards, but keep them readable.

This strip physically sits at the Hero → About seam and uses the sticker + dotted-connector treatment defined in **§4A**.

---

## 9. “What Do You Need?” Section

Add a user-intent section before the full service grid.

### Heading

**WHAT ARE YOU LOOKING TO BUILD?**

### Four entry points

**Build**
Website, web application or e-commerce platform.

**Brand**
Brand identity, design, photography and content.

**Grow**
SEO, advertising, social and digital marketing.

**Go Mobile**
Mobile applications and mobile experiences.

Each card should:
- Explain the category in one short sentence.
- Link or scroll to relevant services.
- Have an obvious arrow/action.
- Work without hover.
- Be fully usable on mobile.

This section is a major conversion aid and should feel like a helpful choice, not a sales form.

---

## 10. Services

The existing Vertise service list contains nine services:

1. Photography
2. Graphic Design
3. Content Writing
4. Web Development
5. SEO Optimization
6. E-commerce Solutions
7. Mobile App Development
8. Digital Advertising
9. Email Marketing

### Recommended grouping

**BRAND**
- Graphic Design
- Photography
- Content Writing

**DIGITAL**
- Web Development
- E-commerce Solutions
- Mobile App Development

**GROWTH**
- SEO Optimization
- Digital Advertising
- Email Marketing

### Card design

Each service card should contain:

- Icon
- Service name
- One-line value proposition
- 2–4 key deliverables
- `Explore service →`

Example:

**WEB DEVELOPMENT**

Responsive websites, e-commerce platforms and custom web applications built around business goals.

`Websites` · `E-commerce` · `Web Apps`

`Explore service →`

### Interaction

Use hover elevation, border movement, icon animation and arrow movement.

Do not require a 3D flip to reveal essential information.

---

## 11. How We Work

### Heading

**FROM IDEA TO IMPACT**

Show five clear stages:

**01 — Discover**
Understand the business, audience, goals and requirements.

**02 — Strategy**
Define the right digital direction, priorities and scope.

**03 — Create**
Design, develop and produce the required digital assets.

**04 — Launch**
Test, optimize and launch the finished experience.

**05 — Grow**
Measure performance and continue improving where applicable.

This section must answer the visitor's question:

**“What happens after I contact you?”**

---

## 12. Selected Work / Portfolio

### Objective

Portfolio should demonstrate capability and outcomes, not just display attractive images.

### Categories

- All
- Web
- Branding
- Marketing
- Apps
- Photography

### Project card

Each project should show:

- Project image/video
- Client/project name
- Service/category
- Short challenge/solution summary
- `View case study →` when a real case study exists

### Case-study rule

Only show real results and claims supplied by the client.

Never invent:
- Conversion increases
- Traffic growth
- Revenue
- Client testimonials
- Project outcomes

### Media

- Posters / image projects
- Short-form videos
- Optional horizontal drag/swipe interaction
- Touch-friendly controls
- Lazy loading
- Poster/thumbnail before video playback

---

## 13. Trusted By / Client Proof

Rename the generic “Clients” section to:

**TRUSTED BY BUSINESSES**

Use:
- Real client logos
- Client names
- Relevant service/category where useful

If genuine testimonials are available, add:

**“[Verified client testimonial]”**

— Client Name / Organization

Do not fabricate testimonials.

A dark or light treatment may be selected based on final visual balance.

---

## 14. Why Vertise?

### Heading

**WHY WORK WITH VERTISE?**

Four pillars:

**Strategy First**
Start with business objectives rather than decoration.

**One Digital Partner**
Branding, development, content and marketing under one team.

**Built for Growth**
Create digital experiences that can evolve with the business.

**Human Support**
Clear communication and direct project support.

These claims should be adjusted if the client's actual positioning differs.

---

## 15. FAQ

Add an accessible accordion.

Recommended questions:

- How long does a website project take?
- How much does a website cost?
- Do you provide maintenance after launch?
- Can you manage SEO after building the website?
- Do you work with businesses outside Coimbatore?
- Can I hire Vertise for only one service?
- What information do you need to start a project?

Answers must be based on the client's actual policies and services.

---

## 16. Final CTA

Before the contact form, create a strong conversion moment.

### Suggested copy

**HAVE A PROJECT IN MIND?**

Tell us what you're building, what you're trying to achieve and where you need help.

**Start a project →**

Keep this section visually simple so it does not compete with the contact form.

---

## 17. Contact Form

Do not use a generic four-field form only.

### Recommended fields

**What can we help you with?**

- Website
- Branding
- SEO
- Digital Marketing
- Mobile App
- E-commerce
- Photography / Content
- Other

**Tell us about your project**

Large textarea.

**Name**

**Email**

**Phone**

**Estimated budget** — optional

Possible choices:
- ₹25K–₹50K
- ₹50K–₹1L
- ₹1L–₹3L
- ₹3L+
- Not sure yet

**Submit button:**

**Send project enquiry →**

### Form UX

- Clear labels.
- Helpful validation.
- Useful error messages.
- Success state after submission.
- No unnecessary fields.
- Mobile-friendly input controls.
- Protect against spam.
- Do not expose submitted information in the UI.

---

## 18. Footer

### Columns

**Vertise**
- Short company description
- Logo

**Services**
- Web Development
- Branding
- SEO
- Digital Marketing
- E-commerce
- Mobile Apps

**Quick Links**
- Work
- About
- Process
- Contact

**Contact**
- Verified business address
- Verified email
- Verified phone
- Verified social links

**Social**
- Instagram
- Facebook
- LinkedIn

### Important

The current address, email and phone from the old Vertise source are placeholders and must not be treated as production data.

Do not publish another company's contact details.

---

## 19. Responsive / Mobile UX

Mobile is a first-class experience, not a reduced desktop version.

### Requirements

- Responsive navigation.
- Large tap targets.
- No hover-only functionality.
- No required 3D flips.
- Swipeable portfolio where useful.
- Reduced Three.js complexity.
- Reduced animation intensity.
- Lazy-loaded media.
- Click-to-call phone number.
- Click-to-email email address.
- Comfortable form inputs.
- Sticky or floating project CTA where it does not obstruct content.
- Test at common mobile widths and landscape orientation.

### Touch behavior

Custom cursor and magnetic cursor effects must be disabled on touch devices.

---

## 20. Accessibility

Implement:

- Semantic HTML.
- Correct H1/H2/H3 hierarchy.
- Keyboard navigation.
- Visible focus states.
- Accessible mobile menu.
- Accessible accordions.
- Proper form labels.
- Meaningful button/link names.
- Alt text for meaningful images.
- Decorative images marked appropriately.
- Sufficient color contrast.
- `prefers-reduced-motion` support.
- No content that requires hover to access.
- Do not communicate information using color alone.

Target a strong WCAG-conscious implementation without sacrificing the brand style.

---

## 21. Performance

Performance is a core product requirement.

### Three.js

- Lazy-load where possible.
- Avoid unnecessarily high geometry/detail.
- Reduce animation on mobile and low-power devices.
- Provide fallback content.
- Do not block the first meaningful content render.

### Images

- Use WebP/AVIF where appropriate.
- Compress assets.
- Use responsive image sizes.
- Lazy-load below-the-fold images.
- Define image dimensions to reduce layout shift.

### Video

- Use lightweight thumbnails/posters.
- Lazy-load video.
- Avoid unnecessary autoplay.
- Avoid heavy background video on mobile.

### JavaScript

- Code-split interactive sections.
- Avoid unnecessary dependencies.
- Load GSAP/Three.js only where needed.

### Performance principle

**The site should feel fast before it feels fancy.**

---

## 22. SEO

### Technical SEO

Implement:

- Semantic HTML.
- Correct heading hierarchy.
- Unique title and meta description.
- Open Graph metadata.
- Twitter/social share metadata where appropriate.
- XML sitemap.
- `robots.txt`.
- Canonical URLs.
- Image alt text.
- Structured data.
- LocalBusiness schema where accurate.
- Mobile-friendly rendering.
- Core Web Vitals monitoring.

### Content SEO

Homepage should naturally target the agency's actual services and location without keyword stuffing.

Consider dedicated service pages:

- `/services/web-development`
- `/services/seo`
- `/services/digital-marketing`
- `/services/branding`
- `/services/ecommerce`
- `/services/mobile-app-development`

Only create pages when there is enough genuine content to make each page useful.

---

## 23. Content & Asset Rules

### Must be supplied/verified before launch

- Final hero headline.
- Final company description.
- Real portfolio images.
- Real portfolio videos.
- Real client logos.
- Real testimonials.
- Verified project statistics.
- Real business address.
- Real business email.
- Real phone number.
- Real social links.
- Final service descriptions.

### Never invent

- Client names.
- Client logos.
- Ratings.
- Number of projects.
- Years of experience.
- Revenue or conversion results.
- Testimonials.
- Awards.
- Certifications.

Placeholder content must be visually obvious during development and removed before production.

---

## 24. Existing Content Mapping

Preserve useful content from the existing Vertise Digital source, but rewrite/reorganize it for the new UX.

### Photography
Product/corporate photography, event coverage, drone photo/video, post-production and brand storytelling.

### Graphic Design
Logo and brand identity, business stationery, marketing collateral, packaging, web UI/UX and brand guidelines.

### Content Writing
Blogs/articles, social content, copywriting, email campaigns, SEO content and brand voice.

### Web Development
Responsive websites, e-commerce platforms, custom web apps, database integration, maintenance and performance optimization.

### SEO Optimization
Keyword research, on-page SEO, technical audits, local SEO, content optimization and link building.

### E-commerce Solutions
Online stores, payment gateway integration, inventory management, cart optimization, product catalogues and order tracking.

### Mobile App Development
iOS/Android, cross-platform development, ASO, mobile UI/UX, maintenance and push notifications.

### Digital Advertising
Google Ads, Facebook/Instagram ads, display advertising, retargeting, analytics and landing page optimization.

### Email Marketing
Campaign design, drip automation, newsletters, segmentation, A/B testing and analytics.

---

## 25. Build Status

### Already built

- Next.js project structure.
- Tailwind brand color tokens.
- Navigation component — corrected links (Services / Work / About / Process / Contact), single "Start a project" CTA.
- Hero section — final eyebrow/headline/subcopy per §7, two CTAs ("Start a project" primary, "View our work" secondary).
- Custom cursor system.
- Marquee ticker (IDENTITY / STRATEGY / RESULTS bands).
- Three.js interlocking ring scene.
- **Hero → About scroll-merge transition (§4A):** wave divider component, sticker badge + dotted-connector components, floating pill status bar (appears after hero, hidden on mobile).
- Trust stat badges ("500+ websites built", "9 years of experience") — rendered with a visible **VERIFY** dev marker since these numbers are unconfirmed (§23).
- About / big statement section (light-tint background).
- Accessibility baseline: `prefers-reduced-motion` support, visible focus rings.

### Known issue to check

- Floating pill bar's fade-in currently overlaps the tail end of the hero CTA buttons for a moment as it appears — trigger threshold likely needs nudging so it only shows once fully clear of the hero.

### Rework / verify

- Trust metrics — replace VERIFY-flagged badges with confirmed numbers, or swap to a qualitative line per §8.
- Mobile behavior for the full transition (wave divider, stickers, pill bar) — not yet tested at common breakpoints.
- Three.js performance/fallback on low-power devices.
- Cursor accessibility.

### Not yet built

- Proper Trust / Results strip (currently only the two floating stickers — §8 wants a dedicated strip).
- "What Do You Need?" section (§9).
- Revised Services grid — icon, value prop, deliverables, "Explore service →" (§10).
- How We Work — 5-step process (§11).
- Selected Work / Portfolio, filterable (§12).
- Trusted By (renamed Clients) section (§13).
- Why Vertise (§14).
- FAQ accordion (§15).
- Final CTA (§16).
- Contact form — full version, not placeholder (§17).
- Footer (§18).
- Full responsive implementation across all new sections.
- Accessibility pass.
- Performance pass.
- SEO implementation.

---

## 26. Legacy Reference Site — Content Audit (second old build)

A second, independent old build of the client's site was reviewed (React/Vite app, blue-toned, illustrated hero — distinct from the original static `index.html` used earlier in this plan). Useful content extracted below. Where it conflicts with earlier assumptions, the conflict is called out explicitly rather than silently merged — resolve before build.

### Hero positioning (real client copy — useful for §7)
- Headline used: "Transforming Ideas Into Digital Excellence"
- Subcopy used: "We create stunning digital experiences that drive results. From web development to digital marketing, we're your partner in growth."
- CTA pair used: "Start Your Project →" / "View Our Work" — confirms our CTA pairing pattern is right; wording differs slightly ("Start Your Project" vs our locked "Start a project"). Keep our standardized lowercase version per §16/§17 for consistency, but this confirms "Start Your Project" is close to the client's own established language, not invented.

### ⚠️ Conflict — stats numbers
This build shows: **98% Client Satisfaction · 10+ Team Members · 1+ Years Experience**.
Our current build has a placeholder sticker reading **"9 years of experience"** (flagged VERIFY).
→ These do not match. **Do not assume either is correct.** Get the real number directly from the client before removing the VERIFY flag on any stat. Same applies to "500+ websites built" — not corroborated by this legacy site either.

### About section — 4 pillars (usable content for §5 or §14 Why Vertise)
- **Creativity** — Bold ideas and unique designs that capture attention.
- **Collaboration** — We work closely with clients to deliver the right solutions.
- **Reach** — Strategies that grow your brand locally and globally.
- **Quality** — High standards and measurable results in every project.

These map well onto §14 "Why Vertise" (4 pillars) — good candidate content, pending client confirmation it's still accurate.

### ⚠️ Conflict — services list
This build lists **6 services**: Social Media Marketing, Search Engine Optimization, Paid Advertising, Mobile & Web Design, Web Development, Content Marketing (each with a sub-checklist and "Learn More →").
The original `index.html` used earlier in this plan lists **9 services**: Photography, Graphic Design, Content Writing, Web Development, SEO, E-commerce, Mobile App Development, Digital Advertising, Email Marketing.
→ Two different service catalogs exist across two old builds. **Client must confirm the current, real service list** before §10 is finalized — do not merge or guess a combined list.

### Portfolio filter taxonomy (usable for §12)
Filter tabs observed: **All Projects / Web Development / SEO / Video / Posters**. Reasonable starting taxonomy for the portfolio filter UI — adjust once real project data exists. Note: this legacy build itself shows "No projects found" — confirms no real portfolio data has existed yet, consistent with §23's placeholder rules.

### New section type not in our current plan — Blog/Insights
This build has a **"Latest Insights"** section (blog preview cards, currently "No blog posts yet"). Our page structure (§5) does not currently include a blog section.
→ **Decision needed:** does the client want a blog/insights section on the new site, or was this abandoned in the old build? Don't add it to §5 without confirming — an empty "no posts yet" section live on launch is a real credibility problem per §23.

### Contact form fields — confirms §17
Full Name*, Email Address*, Phone Number, Company Name, Service Interest (dropdown), Message*, Send Message button. Matches the expanded contact form already specified in §17 — no changes needed, this corroborates the spec.

### Footer & contact info (likely real, not placeholder)
Footer columns: **Services** (Photography & Videography, Graphic Design & Branding, Web Development, SEO Optimization, Digital Advertising), **Company** (About Us, Portfolio, Blog, Contact), **Contact** (email, phone, address).
Contact details — email `vertice.digitalmanagement@gmail.com`, phone `+91 87781 47182`, address "Cheran Ma Nagar, Coimbatore, Tamil Nadu, India" — appear **identically** in both this build and the original `index.html`. Two independent old builds agreeing on the same contact info is a good sign this is real, not a placeholder — but still get explicit client confirmation before final deployment per §23/checklist item #4, rather than assuming.

---

## 27. Implementation Rules for Claude / Antigravity

1. **Do not rewrite the entire project unnecessarily.** Reuse existing components where they are good.
2. Build reusable React components instead of one huge page component.
3. Keep content data separate from presentation where practical.
4. Keep the design system consistent across sections.
5. Make every interactive component keyboard and mobile friendly.
6. Never make essential content dependent on hover or animation.
7. Use real assets when supplied; otherwise use clearly marked development placeholders.
8. Never invent client facts.
9. Do not add libraries unless they provide clear value.
10. Prefer CSS/Tailwind for simple effects; reserve GSAP for interactions that genuinely benefit from it.
11. Keep Three.js isolated so it can be lazy-loaded or disabled.
12. Test desktop, tablet and mobile after every major section.
13. Check layout shift, overflow and horizontal scrolling carefully.
14. Do not allow decorative horizontal galleries to create unwanted page-level horizontal scrolling.
15. Ensure all CTAs have a clear destination/action.
16. Keep the final page visually bold but commercially useful.
17. Do not copy Crency's exact layout, text, assets or distinctive design elements.
18. Preserve Vertise's own brand identity.
19. Use verified content only in production.
20. Before final delivery, perform UX, accessibility, performance, responsive and SEO checks.

---

## 28. Definition of Done

The website is ready for launch only when:

### UX
- A new visitor understands the agency offer quickly.
- Services are easy to discover.
- Portfolio demonstrates real capability.
- Process is clear.
- Contact path is obvious.

### UI
- Brand colors and typography are consistent.
- Sections have clear visual hierarchy.
- Animations feel intentional.
- No section feels overloaded.

### Mobile
- Navigation works.
- Forms work.
- Portfolio works.
- No hover-only features.
- No accidental horizontal overflow.
- 3D effects do not make the page unusably slow.

### Accessibility
- Keyboard navigation works.
- Focus states are visible.
- Forms are labelled.
- Reduced motion is supported.
- Contrast is acceptable.

### Performance
- Images are optimized.
- Heavy media is lazy-loaded.
- Three.js is optimized.
- JavaScript is not unnecessarily blocking.

### SEO
- Metadata is complete.
- Heading hierarchy is correct.
- Images have appropriate alt text.
- Sitemap and robots configuration are present.
- Structured data is valid where applicable.

### Content
- No placeholder contact details remain.
- No unverified statistics remain.
- No fake testimonials remain.
- All production assets are supplied and licensed.

---

## 29. Final Design Direction

The final website should feel:

**Bold + Premium + Playful + Modern + Trustworthy + Fast**

The visual language should combine:

**Vertise brand identity**
+
**strong typography**
+
**controlled motion**
+
**logo-inspired 3D geometry**
+
**clear business communication**
+
**high-converting UX**

The final impression should be:

> **“This agency is creative, capable and professional—and I know exactly how to start working with them.”**

---

*Source basis: existing Vertise Digital content, the original agency build plan, client logo/brand direction, and the revised user-focused UX decisions. This document intentionally separates verified client content from design/build recommendations.*

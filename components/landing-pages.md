# Advia Landing Pages — Implementation Specification for Antigravity
*(Source of truth: Advia Content Architecture & Product Storytelling Plan v2. This document is the final content + page architecture specification. It is not a design brief.)*

---

## 🚨 MOST IMPORTANT RULE — PRESERVE THE EXISTING DESIGN

The current Crency website already has a strong visual/interface system. **Antigravity must NOT redesign it.**

The following must remain unchanged unless absolutely required for Advia functionality:

- Typography
- Fonts
- Colors
- Layout
- Components
- Spacing
- Animations
- Motion
- Transitions
- Custom cursor
- Navigation style
- Marquee
- Wave dividers
- Existing visual hierarchy
- Responsive behavior
- Overall design language

The transformation is:

**Crency → Advia**

primarily through:

**CONTENT + INFORMATION ARCHITECTURE + ROUTING**

NOT:

**Crency design → completely new Advia design**

The existing structural patterns identified in the v2 plan must be reused: the pill navigation, stateful cursor, three-tier headline treatment, badge cluster, marquee, wave divider, configurator, and footer all remain untouched at the component/design level — only their content changes.

---

## 1. Purpose of This Document

This Markdown file is the **single source of truth for Antigravity**. Use it to:

1. Replace Crency branding with Advia.
2. Replace the old agency/service content with Advia content.
3. Preserve the existing design.
4. Implement the Advia landing-page sections.
5. Implement the navigation behavior.
6. Implement the required dynamic pages.
7. Implement the content and CTA relationships.
8. Preserve the existing component architecture wherever possible.

**Do NOT redesign anything.**

---

## 2. Advia Product Definition

Use the following as the authoritative product definition:

**Advia is an AI waiting-time monetization and engagement platform.**

Advia allows AI-powered applications to use the time during which an AI model is generating a response to display a useful waiting experience, including advertisements, offers, coupons, and promotional content.

Advia operates alongside AI/LLM applications. **It is NOT itself an LLM.**

The Advia SDK connects an AI application to the Advia backend, which provides eligible, approved campaigns.

---

## 3. Advia Ecosystem

```text
Advertiser
    ↓
Creates Campaign
    ↓
Advia Admin
    ↓
Reviews / Approves
    ↓
Advia Backend
    ↓
Advia SDK
    ↓
AI Application
    ↓
Normal User
    ↓
Waiting Experience
    ↓
Views / Clicks / Coupon Interaction
    ↓
Analytics
```

### Important technical clarification

**Advertisements are NOT sent to the LLM.** Correct architecture:

```text
                AI APPLICATION
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
        LLM                ADVIA SDK
          │                     │
    Generates Response     Requests Ad
                                │
                                ↓
                         Advia Backend
                                │
                                ↓
                       Approved Campaign
                                │
                                ↓
                        SDK displays it
                                │
                                ↓
                       AI Application UI
```

The advertisement is rendered in the AI application's interface **through the SDK**, never through the LLM.

---

## 4. Landing Page Architecture

Implement the landing page using this exact high-level storytelling sequence:

```text
Navigation
    ↓
Hero
    ↓
Marquee
    ↓
About Advia
    ↓
Use Cases
    ↓
Product / Integration Configurator
    ↓
Live Waiting Experience Demo
    ↓
Final CTA
    ↓
Footer
```

---

## 5. Navigation

Keep the existing pill-shaped sticky navigation. **Only change the content.**

### Navigation items

```text
about advia
use cases
product
demo
```

### Primary CTA

```text
get started
```

### Navigation behavior

```text
Click navigation item
        ↓
Smooth scroll
        ↓
Corresponding landing-page section
```

### Navigation mapping

| Navigation | Destination |
|---|---|
| about advia | About Advia |
| use cases | Use Cases |
| product | Product / Configurator |
| demo | Live Waiting Experience Demo |
| get started | Final CTA / onboarding |

The existing Crency navigation contains four center links and one primary CTA; preserve this structure exactly.

---

## 6. Hero Section

Replace all Crency agency messaging.

### Hero badge cluster

Use the existing badge positions and visual treatment.

**Badge 1**
```text
BUILT FOR PRODUCTION AI APPS
```

**Badge 2**
```text
SDK v1.0 · PRODUCTION READY
```
Only use this exact wording if it accurately reflects the current product state. If not, use a qualitative equivalent.

**Badge 3**
```text
FREE INTEGRATION REVIEW ↗
```

**Ribbon**
```text
WORKS WITH ANY LLM APP
```

**Do NOT fabricate:** ratings, review counts, customer numbers, integration counts, certifications, partner logos. Unverified social proof must be replaced with qualitative statements or placeholders.

---

## 7. Hero Headline

Preferred direction:

```text
MOMENTS PEOPLE ENGAGE.
DESIGNED TO CONVERT.
```

Alternative, if more literal communication is preferred:

```text
AI TIME, MADE USEFUL.
DESIGNED TO ENGAGE.
```

Use the existing three-tier typography treatment — do not change the visual treatment:

```text
Solid headline
Outlined / ghost headline
Accent headline
```

---

## 8. Hero CTA

**Primary**
```text
Get Started
```

**Secondary**
```text
See a Live Demo
```

The secondary CTA smoothly navigates to the live demo/showcase section.

---

## 9. Marquee

Preserve the existing three-band marquee and its visual behavior exactly. Replace content only:

**Band 1**
```text
USERS · AI COMPANIES · ADVERTISERS
```

**Band 2**
```text
AI WAITING TIME, MONETIZED
```

**Band 3**
```text
ONE SDK · ZERO DISRUPTION
```

---

## 10. About Advia

**Purpose:** clearly explain what Advia is.

**Main concept:**
```text
AI WAITING-TIME INFRASTRUCTURE
```

Explain that AI applications spend time generating responses, and Advia provides the infrastructure that turns that waiting period into a useful engagement opportunity — connecting Users, AI Companies, and Advertisers.

Keep this section concise and premium. It should answer: **"What exactly is Advia?"**

It should NOT make Advia sound like: an advertising agency, an LLM, a generic ad network, or a digital marketing company.

---

## 11. Use Cases

Reuse the existing "cases" structural destination. Replace agency case studies with AI application categories:

- **AI Chat Apps** — AI-powered conversational applications.
- **Coding Assistants** — AI coding and developer tools.
- **Customer Support Bots** — AI-powered customer service applications.
- **Education Tools** — AI learning and education platforms.
- **Productivity Apps** — AI-powered productivity applications.

Do NOT create fake company logos or fake case studies. CTA where appropriate:

```text
View integration example →
```

Only use actual examples when they exist.

---

## 12. Product / Integration Configurator

Reuse the existing interactive configurator. Do not redesign it — change only its content and behavior where necessary.

### Cursor state

Change:
```text
YOU → CLICK → DRAG
```
to:
```text
YOU → SEND → WAIT
```

### Eyebrow
```text
INTERACTIVE SDK CONFIGURATOR & INTEGRATION ESTIMATE
```

### Headline
```text
READY TO INTEGRATE?
LET'S BUILD
TOGETHER.
```
Preserve the existing three-tier typography treatment.

### Supporting copy
```text
Choose your role, select the capabilities you need, and see your integration path.
```

### Step 1
```text
1. SELECT YOUR ROLE
```
Options:
```text
USER
AI COMPANY
ADVERTISER
```

### Step 2
```text
2. SELECT INTEGRATION NEEDS
```
Options:
```text
SDK INTEGRATION
CAMPAIGN DASHBOARD
ANALYTICS SUITE
COUPON ENGINE
```

### Scale / usage step

If the current Crency configurator contains the implied budget slider, do NOT remove the interaction — transform it into an Advia usage/scale concept.

Suggested label:
```text
3. SELECT EXPECTED SCALE
```
The slider represents usage volume (e.g. expected monthly AI requests), not project budget. Do not invent exact pricing or imply a final price unless pricing has actually been implemented.

### Final CTA
```text
Get My Integration Plan →
```

---

## 13. Live Waiting-Experience Demo

This section replaces the old portfolio showcase. Keep the existing showcase visual/interactive structure — turn it into an interactive simulation of Advia.

```text
User sends prompt
        ↓
AI begins generating
        ↓
Waiting Experience appears
        ↓
Sample advertisement / coupon appears
        ↓
User can interact
        ↓
AI response completes
        ↓
Waiting Experience disappears
```

This is one of the most important sections — visitors should be able to understand Advia without reading extensive technical documentation.

---

## 14. Final CTA

```text
TURN WAITING TIME INTO VALUE.
```

**Primary CTA**
```text
Get Started
```

The CTA routes the visitor toward the appropriate onboarding flow.

---

## 15. Dynamic Page — `/users`

**Purpose:** explain the normal user's Advia experience.

**Content includes:** what Advia does for users, login/register, user dashboard, AI chat, prompt entry, AI response generation, Waiting Experience, advertisement interaction, coupons, chat history, future rewards.

**User flow:**
```text
Login / Register
      ↓
User Dashboard
      ↓
AI Chat
      ↓
Enter Prompt
      ↓
AI Starts Generating
      ↓
Advia Waiting Experience
      ↓
User Interaction
      ↓
AI Response Arrives
      ↓
Waiting Experience Removed
      ↓
Chat Saved
```

**CTA:**
```text
Try Advia
```

---

## 16. Dynamic Page — `/ai-companies`

**Purpose:** explain why AI companies should integrate Advia.

**Main message:**
```text
MONETIZE THE SECONDS YOUR AI SPENDS THINKING.
```

**Explain:** AI waiting time, monetization, Waiting Experience, SDK, API key, application registration, analytics, campaign delivery.

### AI Company SDK flow

```text
Register AI Application
        ↓
Generate API Key
        ↓
Install @advia/sdk
        ↓
Initialize Advia
        ↓
Advia.start()
        ↓
Waiting Experience
        ↓
AI Response Completes
        ↓
Advia.stop()
```

**Installation example:**
```bash
npm install @advia/sdk
```

Do not invent additional API methods.

**CTA:**
```text
Integrate Advia
```

---

## 17. Dynamic Page — `/advertisers`

**Purpose:** explain the advertiser platform.

**Main message:**
```text
REACH USERS DURING MOMENTS OF ATTENTION.
```

**Advertiser workflow:**
```text
Register
 ↓
Advertiser Dashboard
 ↓
Create Campaign
 ↓
Enter Ad Details
 ↓
Upload Banner / Logo
 ↓
Add Coupon Code
 ↓
Select Start Date
 ↓
Select End Date
 ↓
Submit Campaign
 ↓
Waiting For Approval
 ↓
Admin Approval
 ↓
Campaign Available To SDK Network
 ↓
Users See Advertisement
 ↓
Analytics
```

**Features:** campaigns, analytics, profile, advertisement upload, coupon codes, campaign dates, click tracking, lead tracking, campaign performance.

**CTA:**
```text
Create a Campaign
```

---

## 18. Dynamic Page — `/sdk`

**Purpose:** developer-focused Advia SDK introduction.

**Include:** `@advia/sdk` — what the SDK does, why AI applications need it, API key, installation, initialization, `Advia.start()`, Waiting Experience, `Advia.stop()`, analytics.

Keep the page developer-focused.

**CTA:**
```text
Get SDK Access
```

---

## 19. Dynamic Page — `/about`

Explain: what Advia is, why it exists, AI waiting-time infrastructure, the ecosystem, long-term vision.

Keep the content product-focused.

---

## 20. Dynamic Page — `/use-cases`

Explain the AI application categories supported by Advia: AI Chat Apps, Coding Assistants, Customer Support Bots, Education Tools, Productivity Apps.

Do not fabricate actual integrations.

---

## 21. Dynamic Page — `/product`

Detailed product architecture. Include: user experience, AI Company experience, advertiser experience, admin moderation, SDK, campaign delivery, analytics, and the complete ecosystem flow.

---

## 22. Dynamic Page — `/demo`

Provide a detailed live demonstration of:

```text
Prompt
 ↓
AI Generation
 ↓
Advia.start()
 ↓
Waiting Experience
 ↓
Interaction
 ↓
AI Completion
 ↓
Advia.stop()
```

This page should demonstrate the product rather than simply describe it.

---

## 23. Get Started / Onboarding

The main CTA:
```text
get started
```
should eventually lead to role-based onboarding:

```text
Get Started
     ↓
Select Your Role
     ↓
┌───────────────┬────────────────┬────────────────┐
│               │                │
User       AI Company       Advertiser
```

**Suggested routes:**
```text
/signup?role=user
/signup?role=company
/signup?role=advertiser
```

Only implement this if the current application's routing/auth architecture supports it.

---

## 24. Footer

Preserve the existing footer structure.

### Footer description

```text
AI waiting-time infrastructure. Turn the seconds your AI spends thinking into an experience users, developers, and advertisers all get value from.
```

### Contact block

Replace:
```text
CREATIVE DIRECTORS ON CALL
```
with:
```text
INTEGRATION TEAM ON CALL
```

**Email:**
```text
hello@advia.io
```
> Treat this as a placeholder until the real Advia email/domain is confirmed.

Keep:
```text
COPY
SEND EMAIL ↗
```

### Footer columns

**EXPLORE**
```text
About Advia
Use Cases
Product Story
Integration Calculator
```

**PRODUCT**
```text
For Users
For AI Companies
For Advertisers
SDK Docs
```

**PLATFORM**
```text
Cloud Infrastructure
Response Performance
Privacy & Compliance
Works With Any LLM
```
Do NOT invent actual performance numbers or certifications.

**CONNECT**
```text
X / Twitter
LinkedIn
Discord / Developer Community
Contact
```
Only show social links that actually exist.

### Copyright

```text
© 2026 Advia. All rights reserved.
```

---

## 25. Content Rules

### Use consistently

Advia · Advia SDK · AI Application · AI Company · Advertiser · Normal User · Campaign · Coupon · Waiting Experience · Analytics · Integration

### Remove entirely

All Crency-specific agency terminology, including: Webflow, UI/UX services, Digital Marketing, Creative Direction, Design Sprint, GSAP Motion & 3D as a service, Webflow Enterprise, agency ratings, agency response-time claims, agency website statistics.

The v2 architecture specifically identifies these as content that must be removed while retaining their underlying structural components.

---

## 26. No Fabricated Information

Never invent: customer numbers, user numbers, revenue, reviews, ratings, partnerships, certifications, advertiser counts, AI company integrations, performance statistics, testimonials, funding, market share.

If a design requires social proof, use qualitative statements instead.

---

## 27. Tone

Advia should sound like a real technology startup:

**Premium · Technical · Clear · Confident · Modern · Developer-friendly · SaaS-oriented**

**Avoid:** generic agency language, excessive marketing buzzwords, fake urgency, overpromising, "revolutionary," "game-changing," unsupported claims.

---

## 28. Responsive Behavior

Do not create a new responsive design. Use the existing Crency responsive system — only ensure the new Advia content fits naturally within it.

---

## 29. Implementation Priority

```text
1. Replace Crency branding
        ↓
2. Replace navigation content
        ↓
3. Replace hero content
        ↓
4. Replace marquee content
        ↓
5. Replace About section
        ↓
6. Replace Cases → Use Cases
        ↓
7. Transform configurator → Advia Integration Configurator
        ↓
8. Transform Showcase → Live Waiting Experience Demo
        ↓
9. Replace Final CTA
        ↓
10. Replace Footer
        ↓
11. Create required dynamic pages
        ↓
12. Connect navigation
        ↓
13. Connect CTAs
        ↓
14. Verify responsive behavior
        ↓
15. Verify no Crency content remains
```

---

## 30. Final Acceptance Criteria

### Branding
- [ ] Crency branding is removed.
- [ ] Advia branding is present.

### Content
- [ ] Old UI/UX/Web Development/Digital Marketing agency content is removed.
- [ ] Advia product content is present.
- [ ] User experience is explained.
- [ ] AI company benefits are explained.
- [ ] SDK is explained.
- [ ] Advertiser experience is explained.
- [ ] Admin moderation is explained.
- [ ] Analytics are explained.

### Navigation
- [ ] Navbar uses Advia sections.
- [ ] Navbar smoothly scrolls to corresponding sections.
- [ ] CTAs lead to the appropriate dynamic pages.

### Dynamic pages
- [ ] `/users`
- [ ] `/ai-companies`
- [ ] `/advertisers`
- [ ] `/sdk`
- [ ] `/about`
- [ ] `/use-cases`
- [ ] `/product`
- [ ] `/demo`

...are either implemented or mapped according to the existing routing architecture.

### Design
- [ ] Existing typography preserved.
- [ ] Existing colors preserved.
- [ ] Existing components preserved.
- [ ] Existing animations preserved.
- [ ] Existing custom cursor preserved.
- [ ] Existing marquee preserved.
- [ ] Existing wave transitions preserved.
- [ ] Existing responsive behavior preserved.

### Product accuracy
- [ ] Ads are described as being displayed through the SDK.
- [ ] Ads are NOT described as being sent to the LLM.
- [ ] Only approved campaigns are available to the SDK network.
- [ ] No fabricated statistics or partnerships are used.

---

## 31. Final Directive

**Transform the existing Crency website into Advia using this document as the source of truth.**

The existing design is already considered approved. **Do not redesign it.** Preserve the visual language and component architecture.

| Change | To |
|---|---|
| Crency agency | Advia SaaS |
| Services | Advia Product |
| Portfolio | AI Use Cases |
| Project Estimator | SDK Integration Configurator |
| Showcase | Live Waiting Experience |
| Agency CTA | SaaS onboarding |

The final result should feel like **the same high-quality interface evolved into a completely different product** — not like a newly designed website.

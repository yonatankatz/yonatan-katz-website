---
design_system: Israeli Government Design System (IGDS)
doc_type: design-system-master
spec_version: 4.0.0
generated_at: 2026-06-15
language: en
rtl_support: true
status: single source of truth
supersedes:
  - design-system-master-v3.0.md (3.0.0)
  - DESIGN_SYSTEM.md (1.0.0)
benchmark_reference: >
  Google Material Design 3 (M3) — used as a STRUCTURAL benchmark only
  (information architecture, token categories, component taxonomy shape).
  No local `google/design.md` file exists in this repository; structural
  comparisons are derived from general M3 specification knowledge. NO
  Material Design visual tokens (color, type, shape, motion) were adopted.
  IGDS brand identity, palette, typography, and component visual language
  are preserved unchanged.
changelog:
  - "4.0.0: Full reconstruction. Benchmarked structure against Material
    Design 3. Merged design-system-master-v3.0.md (canonical component/
    interaction/accessibility detail) with DESIGN_SYSTEM.md v1.0.0
    (fuller token ramps, extended spacing/radius scales, broader component
    taxonomy). Reorganized into Token Architecture, Component Taxonomy
    (Input/Action/Feedback/Display/Navigation/Layout), Component
    Architecture Rules, Component Derivation Rules, Interaction System,
    Accessibility System, RTL System, Layout System, Screen/Component
    Generation Frameworks, AI Generation Rules, Validation Rules, and
    Governance Rules. No existing token values changed. Added: surface/
    container color tokens, state-layer opacity tokens, icon.size.lg/xl,
    typographic role mapping, hairline border-width scale (reclassified
    from v3.0 radius foundation list), and full taxonomy registration for
    components named in DESIGN_SYSTEM.md §2.2 that lack full specs (all
    flagged MISSING SPEC). All additions and resolutions marked inline and
    logged in Governance Rules → Conflict Log."
sources_merged:
  - design-system-master-v3.0.md (3.0.0)
  - DESIGN_SYSTEM.md (1.0.0)
  - SPEC_Button.md, SPEC_Input.md, DESIGN_atoms.md, IGDS.tokens.json,
    wcag_aa_guidelines.md (via design-system-master-v3.0.md)
  - DESIGN_pattern.md, SPEC_Modal.md, SPEC_Dropdown.md, SPEC_Card.md,
    SPEC_List.md, ai_rules.md (via DESIGN_SYSTEM.md, names only —
    detailed specs from these files were not present in either source
    document and remain MISSING SPEC here)
---

# Israeli Government Design System — `design.md` (Single Source of Truth, v4.0.0)

> **Authority**: This document is the canonical reference for all AI-assisted
> and human-authored generation of components and screens in the Israeli
> Government Design System (IGDS). It supersedes `design-system-master-v3.0.md`
> and `DESIGN_SYSTEM.md`. Where this document is silent, fall back to those
> files **only** for historical provenance — never for new generation.
>
> **Never invent a token, color, spacing value, radius, state, or component
> not listed in this document.** If something is missing, generate the
> literal string `/* MISSING SPEC — clarification needed */` and follow the
> [Component Generation Framework](#component-generation-framework).

---

# Design Philosophy

- **Reduce cognitive load**: Use familiar patterns and predictable layouts.
  Citizens should never have to "learn" a government interface.
- **Earn trust through reliability**: Visually stable, never surprising.
  Identical inputs produce identical outputs across every screen.
- **Prefer restraint**: Use the minimum visual weight needed to communicate.
  Decoration must never compete with content or actions.
- **Feedback is essential**: Every action must have a visible, accessible
  system response — loading, success, error, or change of state.
- **Language is neutral**: Avoid bureaucratic or technical language in UI
  copy. Write for the broadest possible literacy level.
- **Structure travels, style stays home**: Architectural patterns (token
  layering, component taxonomy, state modeling, accessibility contracts) may
  be benchmarked against external systems such as Material Design 3 to find
  gaps. The *visual* language — color, type, shape, motion, brand voice — is
  exclusively IGDS's own and is never replaced by an external system's values.

---

# Design Principles

| Principle | Description |
|-----------|------------|
| **Consistency** | Every color, size, and interaction follows defined tokens. No one-offs. |
| **Accessibility First** | WCAG AA compliance is non-negotiable, not a post-launch task. |
| **RTL Native** | Hebrew (RTL) is a first-class direction, not a mirror of LTR. |
| **Token-Driven** | All visual decisions reference named tokens, never raw values. |
| **Scalability** | New components extend existing patterns; they never contradict them. |
| **Clarity** | Government interfaces must be understood by all citizens, including low-literacy and elderly users. |
| **Benchmarked Architecture** *(new in 4.0.0)* | The system's *information architecture* (token categories, taxonomy, state models, validation) is periodically benchmarked against mature external design systems (e.g. Material Design 3) to surface structural gaps — without importing their visual identity. |

---

# Token Architecture

> **Rule**: Every value in generated code MUST reference a token name from
> this section. Never hardcode hex, px, or duration values inline. All
> tokens use `kebab-case` / `dot.case` namespaced paths. Tokens marked
> **PROVISIONAL** require design confirmation before production use — emit
> `/* PROVISIONAL — confirm with design */` wherever referenced. Tokens
> marked **NEW (4.0.0)** are additions made during this reconstruction to
> close structural gaps identified via the Material Design 3 benchmark; they
> are derived entirely from existing IGDS ramps/values (no foreign colors,
> sizes, or curves were introduced) but are unverified against any source
> spec and are therefore also **PROVISIONAL**.

## Colors

### Reference Color Ramps (Foundation — do not use directly)

Derive semantic tokens from these ramps only. Never reference ramp steps
directly in component code — go through [Semantic Colors](#semantic-colors).

| Family | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|--------|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| `israel-blue` (brand) | `#EBF3FF` | `#B7D6FF` | `#8ABBFF` | `#5CA1FF` | `#2E87FF` | `#0068F5` | `#0057CC` | `#0045A3` | `#00347B` | `#002352` |
| `dawn-blue` | `#F4F9FF` | `#DBECFF` | `#C2DFFF` | `#A9D1FF` | `#90C4FF` | `#6BA3E0` | `#4B81BE` | `#30639C` | `#1B487A` | `#0C3058` |
| `mist-blue` | `#F5F9FF` | `#D7E8FF` | `#B9D6FF` | `#99C2FB` | `#82A9DE` | `#6D90C1` | `#5878A4` | `#466186` | `#344A69` | `#24354C` |
| `dim-grey` | `#F2F6FD` | `#E1EAF4` | `#D2DBE8` | `#BAC3D2` | `#A2ACBB` | `#8C96A4` | `#767F8E` | `#616A77` | `#4D5560` | `#39404A` |
| `bright-grey` | `#FAFCFF` | `#E6F0FF` | `#CEE1FC` | `#B5C7E2` | `#9CAEC9` | `#8091A9` | `#6F7E95` | `#59677C` | `#455163` | `#323B49` |
| `steel-grey` | `#F5F7F9` | `#F0F3F6` | `#EBEFF3` | `#E0E8EF` | `#CED7E0` | `#B6C0CC` | `#8596AF` | `#5C697A` | `#495A73` | `#21324B` |
| `galil-green` | `#F5FFEF` | `#DDFFCD` | `#C6FFAA` | `#AFFF87` | `#96FB63` | `#7AD94A` | `#60B734` | `#499522` | `#347314` | `#22510A` |
| `negev-yellow` | `#FFF9EC` | `#FFECC2` | `#FFDF97` | `#FFD36D` | `#FFC643` | `#DDA82F` | `#BB8C1F` | `#997012` | `#8A6000` | `#553C01` |
| `coral-red` | `#FFF5F5` | `#FFCBCB` | `#FFA6A7` | `#FF8283` | `#FF5E5F` | `#EB4A4B` | `#C93435` | `#A72223` | `#851414` | `#63090A` |

**Single-step / utility ramps:**

| Family | Steps | Usage |
|--------|-------|-------|
| `white` | `000` = `#FFFFFF` | Base white |
| `warm-gray` | `100` = `#E4E4E4`, `900` = `#3B3939` | Scrim base color |
| `strawberry-pink` | `700` = `#FF8497`, `900` = `#F05E81` | Reserved accent |
| `opacity` (alpha of `#3B3939`) | `/2`=20%, `/3`=30%, `/4`=40%, `/5`=50%, `/6`=60%, `/7`=70% (`#3B3939B2`), `/8`=80% | Overlays / scrims |

**Additional accent ramps** (not referenced by any current component — available
for future semantic token derivation only, per §10.6 token-addition rule):

| Family | Steps |
|--------|-------|
| `cyan` | `500`=`#8ADAF4`, `800`=`#38B1F8` |
| `science-blue` | `500`=`#38B1F8` |
| `ocean-blue` | `500`=`#0368B0` |
| `starry-night` | `500`=`#266794` |
| `alice-blue` | `500`=`#F0F8FF` |
| `Ice-blue` | `500`=`#F9FCFF` |
| `snow-gray` | `50`=`#E3F0FF`, `100`=`#F4F9FF`, `900`=`#4E5459` |
| `eclipse-blue` | `500`=`#8385B8`, `600`=`#898AAC` |

### Gradient Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color.gradient.ai-button` | `linear-gradient(0deg, #2754F8, #D90AB3)` | AI-variant button background |
| `color.gradient.ai-button-alt` | `linear-gradient(180deg, #6730C3, #0068F5)` | AI button alternate |
| `color.gradient.ai-vertical` | `linear-gradient(180deg, #6730C3 0%, #0068F5 100%)` | AI-related vertical gradient (cards, banners) |
| `color.gradient.ai-icon` | `radial-gradient(circle, #8E4FDC 0%, #A873EB 50%, #0068F5 100%)` | AI feature icon gradient |
| `color.gradient.ai-feature` | `linear-gradient(135deg, #0068F5 0%, #A873EB 58%, #6730C3 100%)` | AI feature surface gradient |
| `color.gradient.ai-alt-2` | `linear-gradient(135deg, #6730C3 0%, #A873EB 42%, #0068F5 100%)` | AI gradient (alternate composition) |

> Gradient tokens are reserved for **AI-related features only** (badges,
> buttons, icons, banners that indicate AI-assisted functionality). Never use
> for standard brand emphasis — use `color.brand.*` solids instead.

---

## Semantic Colors

### Component-Level Semantic Colors (Used Directly)

| Token | Hex | Role |
|-------|-----|------|
| `color.brand.default` | `#0068F5` | Primary bg (default), focus ring/border |
| `color.brand.hover` | `#0057CC` | Primary bg (hover), Input border hover |
| `color.brand.pressed` | `#0045A3` | Primary bg (pressed), Input border active |
| `color.neutral.default` | `#FFFFFF` | Secondary button bg, Input bg (all interactive) |
| `color.disabled.bg` | `#E0E8EF` | Disabled bg (Button & Input) |
| `color.text.subtle-primary` | `#0C3058` | Secondary/Link label, Input value/label |
| `color.text.subtle-secondary` | `#466186` | Supporting/placeholder text |
| `color.text.inverted-subtle-primary` | `#F5F9FF` | Primary button label/icon (on brand bg) |
| `color.text.disabled` | `#5C697A` | Disabled label/value text |
| `color.border.subtle-default` | `#5C697A` | Secondary button border, Input border (default) |
| `color.border.disabled` | `#5C697A` | Disabled border |
| `color.border.error` *(PROVISIONAL)* | `#EB4A4B` | Input error border — confirm with design |

> `color.border.subtle-default` and `color.border.disabled` share the same
> hex but are distinct semantic tokens — they may diverge in future themes.
> Do not merge them.

### Feedback Tokens

Used for success/warning/error/info states across all components, banners,
badges, and form validation.

| Token | Hex | Usage |
|-------|-----|-------|
| `color.feedback.success.default` | `#7AD94A` | Success borders, icons |
| `color.feedback.success.bg` | `#F5FFEF` | Success surface |
| `color.feedback.success.text` | `#22510A` | Success helper text |
| `color.feedback.warning.default` | `#DDA82F` | Warning borders, icons |
| `color.feedback.warning.bg` | `#FFF9EC` | Warning surface |
| `color.feedback.warning.text` | `#553C01` | Warning text |
| `color.feedback.error.default` | `#EB4A4B` | Error borders, icons |
| `color.feedback.error.bg` | `#FFF5F5` | Error surface |
| `color.feedback.error.text` | `#63090A` | Error text |
| `color.feedback.info.default` | `#0068F5` | Info borders, icons |
| `color.feedback.info.bg` | `#EBF3FF` | Info surface |
| `color.feedback.info.text` | `#002352` | Info text |

**Color logic rule for new components:**

```
feedback bg    → color.feedback.{role}.bg
feedback text  → color.feedback.{role}.text
feedback border/icon → color.feedback.{role}.default
```

Never invent feedback colors — `success | warning | error | info` from this
table covers every status-communication need.

### NEW (4.0.0): Surface & Container Tokens

Closes a benchmark gap: previously only `color.neutral.default` (#FFFFFF)
existed for "any surface," with no differentiation for elevated, sunken,
full-screen, or tinted surfaces — needed by the Display/Layout components
newly registered in [Component Taxonomy](#component-taxonomy) (Card, Modal,
List, Dropdown panel).

| Token | Derived From | Hex / Value | Usage |
|-------|-------------|-------------|-------|
| `color.surface.default` | alias of `color.neutral.default` | `#FFFFFF` | Default card / list / dropdown-panel surface |
| `color.surface.sunken` | `steel-grey/50` | `#F5F7F9` | Page background behind cards/sections (subtle recess) |
| `color.surface.full-screen` | `Ice-blue/500` | `#F9FCFF` | Full-screen modal background |
| `color.surface.raised` | `color.neutral.default` + `shadow.light.level-1` | `#FFFFFF` + shadow | Elevated card / dropdown panel (always pair with a shadow token) |
| `color.surface.tint.brand-50` | `israel-blue/50` | `#EBF3FF` | Selected-option / tag background tint (Dropdown), stamp tint (Card) |
| `color.surface.tint.brand-100` | `israel-blue/100` | `#B7D6FF` | Tag background tint (Dropdown), stamp tint (Card) |
| `color.overlay.scrim` | `warm-gray/900` @ `opacity/7` | `rgba(59,57,57,0.70)` (`#3B3939B2`) | Modal backdrop / scrim |

> **ASSUMPTION — flag for design review.** Every underlying hex value already
> existed in `DESIGN_SYSTEM.md` §1.1.2 (`Colors/Background/full-screen-default`,
> `Colors/Overlay/default`, `Brand/israel-blue/50`, `Brand/israel-blue/100`) —
> only these semantic names and the grouping under `color.surface.*` /
> `color.overlay.*` are new in 4.0.0.

### NEW (4.0.0): Interaction State-Layer Opacity Tokens

For components that do **not** have an explicit per-state color mapping in
this document (Checkbox, RadioButton, Toggle, ListItem, Card,
MediaPlaceholder — see MISSING SPEC entries in Component Taxonomy), apply a
translucent overlay of the relevant foreground/brand color instead of
inventing a new solid color.

**Do not apply state layers to Button or Input Field** — those retain their
explicit state→token tables, which take priority (see
[Component Derivation Rules](#component-derivation-rules)).

| Token | Opacity | Applied Over | Usage |
|-------|---------|-------------|-------|
| `state-layer.hover` | 8% | `color.brand.default` (interactive elements) or `color.text.subtle-primary` (on neutral surfaces) | Hover overlay for unmapped components |
| `state-layer.focus` | 12% | `color.brand.default` | Focus overlay, in addition to the focus ring |
| `state-layer.pressed` | 12% | `color.brand.default` | Pressed/active overlay |
| `state-layer.selected` | 16% | `color.brand.default` | Persistent "on" tint for selected list items / cards |
| `state-layer.disabled-content` | 38% content opacity, fill = `color.disabled.bg` | `color.text.disabled` | Disabled content where the standard disabled bg/text pair is insufficient (e.g. disabled icon-only chip) |

> **PROVISIONAL — confirm with design.** This is a Material-Design-3-style
> state-layer model, included only as a *fallback* for MISSING-SPEC
> components so AI generation never has to invent a color. Once a component
> receives a full state→token table via the
> [Component Generation Framework](#component-generation-framework), that
> table supersedes this fallback for that component.

---

## Typography

**Font families:**
- **Rubik** — primary, all UI text and components
- **Inter** — internal annotations only (never in product UI)

### Component-Level Typography Tokens

| Token | Font | Size | Weight | Line-height | Letter-spacing | Used for |
|-------|------|------|--------|-------------|----------------|----------|
| `type.component.title-small.medium` | Rubik | 16px | Medium | 150% | — | Medium button label; Dropdown selected value; List item label |
| `type.component.title-small.regular` | Rubik | 16px | Regular | 150% | — | Medium button label; Dropdown placeholder |
| `type.component.label.medium` | Rubik | 16px | Medium | 150% | — | Medium button / default input value (emphasis) |
| `type.component.label.regular` | Rubik | 16px | Regular | 150% | — | Medium button / default input value |
| `type.label.medium` | Rubik | 14px | Medium | 160% | — | Small button / field label (emphasis); Dropdown/List small text |
| `type.label.regular` | Rubik | 14px | Regular | 160% | — | Small button / field label; Dropdown/List small text |
| `type.component.title-medium.regular` | Rubik | 18px | Regular | 150% | — | Big input value; Modal header (mobile) |
| `type.component.title-medium.medium` | Rubik | 18px | Medium | 150% | — | Big input value (emphasis) |
| `type.component.title-medium.bold` *(NEW 4.0.0)* | Rubik | 18px | Bold | 150% | — | Card small title |
| `type.component.title-large.bold` *(NEW 4.0.0)* | Rubik | 20px | Bold | 150% | — | Modal header (desktop); Card large title |
| `type.component.subtitle-medium.regular` *(NEW 4.0.0)* | Rubik | 16px | Regular | 150% | — | Card subtitle |
| `type.component.subtitle.regular` *(NEW 4.0.0 — alias of subtitle-medium.regular)* | Rubik | 16px | Regular | 150% | — | List item subtitle |
| `type.body.small.regular` | Rubik | 16px | Regular | 150% | — | Default input value; Modal/Card/List/Dropdown body text |
| `type.body.small.medium` | Rubik | 16px | Medium | 150% | — | Default input value (emphasis) |
| `type.body.large.regular` *(NEW 4.0.0)* | Rubik | 18px | Regular | 150% | — | Modal body text (large) |
| `type.title.small.bold` *(NEW 4.0.0)* | Rubik | 24px | Bold | 150% | — | Modal title (desktop) |
| `type.title.subtitle-large.regular` / `.medium` *(NEW 4.0.0)* | Rubik | 20px | Regular / Medium | 125% | — | Modal subtitle |
| `type.badge.medium.regular` *(NEW 4.0.0)* | Rubik | 12px | Regular | 160% | 0.5px | Tag / badge / stamp text (Dropdown, Card, List) |
| `type.component.label.annotation` | Inter | 12px | Regular | auto | — | Internal annotation only — never in product UI |

> Rows marked **NEW (4.0.0)** were defined in `DESIGN_SYSTEM.md` §1.2 under
> Figma-path names (`Title/Small/Bold`, `Component/Title/Large/Bold`,
> `Component/Subtitle/Medium/Regular`, `Body/Large/Regular`,
> `Badge/Medium/Regular`, etc.) to support Modal, Card, and List — components
> that `design-system-master-v3.0.md` had dropped. They are carried forward
> here, renamed only, into the canonical `type.{family}.{role}.{weight}`
> pattern. No new sizes/weights were invented.

**Canonical naming pattern for new tokens:** `type.{family}.{role}.{weight}`
- `family` ∈ `{component, label, body, heading, display, title, badge}`
- `weight` ∈ `{regular, medium, bold}`
- Do not rename existing tokens — existing names are legacy-valid.

### Foundation Type Scale (Headings & Body)

| Token | Size | Weight | Line-height |
|-------|------|--------|-------------|
| `type.display` | 80px | 700 | auto |
| `type.h1` | 64px | 700 | 150% |
| `type.h2` | 60px | 700 | 72px |
| `type.h3` | 48px | 700 | 150% |
| `type.h4` | 40px | 400 | 150% |
| `type.h5` | 32px | 700 | 150% |
| `type.h5-medium` | 32px | 500 | 150% |
| `type.h5-regular` | 32px | 400 | 150% |
| `type.h6` | 29px | 600 | 42px |
| `type.h7` | 24px | 700 | 150% |
| `type.h7-medium` | 24px | 500 | 150% |
| `type.h7-regular` | 24px | 400 | 150% |
| `type.h8` | 20px | 700 | 150% |
| `type.h8-medium` | 20px | 500 | 125% |

### NEW (4.0.0): Typographic Role Mapping (structural bridge)

Material Design 3 organizes type into five roles — display, headline, title,
body, label — each with large/medium/small steps. IGDS already covers these
roles under different names. This table is an **alias map only**: it does
not rename or replace any existing token. It exists so AI generation can
reason about "what role does this text play" without inventing new type
tokens.

| M3-style role | Maps to existing IGDS token(s) |
|---------------|--------------------------------|
| `role.display` | `type.display` (80px/700) |
| `role.headline.large` | `type.h1` (64px/700) |
| `role.headline.medium` | `type.h3` (48px/700) |
| `role.headline.small` | `type.h5` / `type.h5-medium` / `type.h5-regular` (32px) |
| `role.title.large` | `type.h7` family (24px) / `type.title.small.bold` (24px) |
| `role.title.medium` | `type.h8` family (20px) / `type.component.title-large.bold` (20px) |
| `role.title.small` | `type.component.title-medium.*` (18px) |
| `role.body.large` | `type.body.large.regular` (18px) |
| `role.body.medium` | `type.body.small.*` (16px) / `type.component.title-small.*` (16px) |
| `role.body.small` | `type.label.*` (14px) |
| `role.label.large` | `type.component.label.*` (16px) |
| `role.label.medium` | `type.label.*` (14px) |
| `role.label.small` | `type.badge.medium.regular` (12px) |

> **PROVISIONAL — confirm with design.** This mapping is a navigational aid
> only. When generating code, always emit the left-hand IGDS token
> (`type.h1`, `type.body.small.regular`, etc.) — never emit `role.*` names
> into CSS or components.

---

## Spacing

### Unified Spacing Scale

| Token | Value | Confirmed Usage |
|-------|-------|-----------------|
| `space-minus400` | -32px | Negative spacing — overlap/inset (e.g. avatar overlap, card image bleed) |
| `space-100` | 2px | Hairline gaps; icon-to-badge overlap |
| `space-200` | 4px | Tight icon/text gaps |
| `space-300` | 8px | Small button/input padding; icon gap; label→input gap |
| `space-400` | 12px | Small button/input horizontal padding; grouped button spacing |
| `space-500` | 16px | Default input padding; medium button vertical padding |
| `space-600` | 24px | Big input padding; label-to-control gap; grid gutter |
| `space-700` | 32px | Big input row height; field group gaps; form→action gap |
| `space-800` | 40px | Section padding (large) |
| `space-900` | 48px | Section padding (extra-large) |
| `space-1000` | 56px | Page-level vertical rhythm |
| `space-1100` | 64px | Desktop grid margin |
| `space-1200` | 72px | Large section breaks |
| `space-1300` | 80px | Large section breaks |
| `space-1400` | 88px | Maximum named spacing step |

> `space-300` through `space-700` are confirmed in active use by Button,
> Input, and layout specs (`design-system-master-v3.0.md` §2.3 + §3.5).
> `space-100`, `space-200`, `space-800`–`space-1400`, and `space-minus400`
> come from `DESIGN_SYSTEM.md` §1.3's full `Space/*` scale and follow the
> same +8px stepping pattern; they are available for the newly-registered
> Display/Layout components (Card, Modal, List) but have no confirmed
> component usage yet.

### Component-Specific Spacing Aliases

| Token | Resolves To | Usage |
|-------|-------------|-------|
| `space.component.padding` | `space-600` (24px) | Generic component horizontal padding override (Button, Modal, Dropdown, Card, List, Input) |
| `space.component.button.profile-image-padding` | `space-500` (16px) | Profile image button padding |

### Foundation Dimension Constants

> **Reclassified in 4.0.0.** `design-system-master-v3.0.md` §2.3 listed these
> as a "foundation spacing scale ... round to the nearest value when a new
> spacing is needed." On review, most of these values (26, 27, 37, 42, 44,
> 46, 47, 55, 76, 85, 110, 120, 130, 192, 200, 226, 230) do not fit a spacing
> *gap* pattern — they correspond to measured component **geometry
> constants** (icon sizes, touch targets, control heights, container widths)
> extracted from Figma. They are preserved here as an allow-list for
> component *dimensions* (width/height/min-size), not for gaps — use the
> [Unified Spacing Scale](#unified-spacing-scale) above for gaps/padding/margin.

**Allowed dimension values (px):**
`1, 2, 3, 4, 5, 8, 10, 12, 14, 16, 18, 20, 24, 26, 27, 32, 37, 40, 42, 44, 46, 47, 48, 55, 60, 64, 76, 80, 85, 110, 120, 130, 192, 200, 226, 230`

When a new component dimension is needed, round to the nearest value in this
list. Never interpolate. (`44` = WCAG touch target; `48` = medium icon-button
size; `32`/`40` underpin `icon.size.lg`/`icon.size.xl` — see
[Icons](#icons).)

---

## Radius

### Component Radius Scale (Button & Input only)

| Token | Value | Usage |
|-------|-------|-------|
| `radius.component.xs` | 4px | Small button; small input |
| `radius.component.s` | 6px | Default input |
| `radius.component.m` | 8px | Medium button; big input |
| `radius.component.full` | 100px | Floating button; pill shapes |

> Renamed from `radius.xs` / `radius.s` / `radius.m` / `radius.full` (v3.0
> §2.4) to `radius.component.*` for clarity against `radius.foundation.*`
> below — **values unchanged**.

### Foundation Radius Scale (all other components)

Adopted from `DESIGN_SYSTEM.md` §1.4 — actively used by Modal, Card, List,
Dropdown, MediaPlaceholder, and tags/badges.

| Token | Value | Used By |
|-------|-------|---------|
| `radius.foundation.xxs` | 2px | Dropdown tag badge; Card/List stamp; List item |
| `radius.foundation.xs` | 4px | Small Button; Small Input; Dropdown tag; Card small; List item |
| `radius.foundation.s` | 6px | Default Input; Dropdown trigger; alt small Button rounding |
| `radius.foundation.m` | 8px | Medium Button; Big Input; Dropdown panel; Modal container; Card standard; List card thumbnail |
| `radius.foundation.l` | 16px | Modal container (large); Card large; List item (nested) |
| `radius.foundation.xl` | 32px | Modal full-screen; Card extra-large |
| `radius.foundation.2xl` | 64px | Reserved — not yet used by any component |
| `radius.foundation.full` | 100px | Floating Button; pill tags; pill stamps; Modal close-trigger |

### Border Hairline Width Scale

> **Reclassified in 4.0.0 (see Governance → Conflict Log).**
> `design-system-master-v3.0.md` §2.4 listed `0.5px, 1px, 2px, 3px, 4px, 5px
> (radius-sm)` as part of a "foundation radius scale," alongside `8px
> (radius-md), 16px, 32px, 100px (radius-lg)`. The 8/16/32/100 values map
> cleanly onto `radius.foundation.m/l/xl/full` above. The sub-values
> `0.5px`/`1px`/`2px`/`3px`/`4px` and the orphaned **`radius-sm` = `5px`** do
> not correspond to any corner radius used by any component in either source
> — `5px` was the literal source of the v3.0 §12.2 naming collision with
> `radius.component.s` (6px). Rather than silently drop them, they are
> reclassified here as **border/divider stroke widths** — a real, documented
> need for the new `Divider` component (see Component Taxonomy → Display
> Components).

| Token | Value | Usage |
|-------|-------|-------|
| `border.hairline.thin` | 0.5px | Subtle dividers on high-density displays |
| `border.hairline.default` | 1px | Default Divider, default borders |
| `border.hairline.thick` | 2px | Emphasis dividers, focus underlines |
| `border.hairline.heavy` | 3px | Reserved — heavy emphasis borders |

> **PROVISIONAL — confirm with design.** `radius-sm` (5px) is retired as a
> named token — no component uses it. If a future audit finds a genuine need
> for a 5px corner radius, add it to `radius.foundation.*` via the
> [Component Generation Framework](#component-generation-framework) §10.6 —
> do not resurrect `radius-sm`.

---

## Elevation

### Shadow Tokens

| Token | CSS `box-shadow` | Usage |
|-------|-----------------|-------|
| `shadow.light.level-0.5` | `0px 1px 3px 1px rgba(6,77,173,0.15), 0px 1px 2px 0px rgba(6,77,173,0.15)` | Subtle elevation; disabled floating button |
| `shadow.light.level-1` | `0px 2px 8px 0px rgba(6,77,173,0.1)` | Floating button resting; focused input; dropdown menu; default card; list card item |
| `shadow.light.level-2` | `0px 4px 12px 0px rgba(6,77,173,0.15)` | Floating button hover; card hover; dropdown panel hover |
| `shadow.light.level-3` | `0px 10px 24px 0px rgba(6,77,173,0.15)` | Card focused; Modal (mobile) |
| `shadow.light.level-4` | `0px 16px 36px 0px rgba(6,77,173,0.2)` | Modal (desktop) |
| `shadow.light.level-5` | `0px 4px 4px 0px rgba(6,77,173,0.3), 0px 8px 12px 6px rgba(6,77,173,0.15)` | Modal (highest elevation) |
| `shadow.dark.level-*` | Same structure, `rgba(0,104,245,*)` | Dark-mode equivalents — palette not yet defined, see Governance → Gap Analysis |

> Levels 3–5 were "foundation, not yet component-assigned" in v3.0.
> `DESIGN_SYSTEM.md` §1.5 cross-validates levels 0.5–2 (identical rgba
> structure) and assigns levels 3–5 to **Card (focused)** and **Modal**
> (mobile/desktop/highest) — both newly registered in Component Taxonomy.
> Assignments above are carried forward, not invented, but remain
> PROVISIONAL pending a full Modal/Card spec pass.

### NEW (4.0.0): Surface ↔ Elevation Pairing

IGDS uses **shadow-only elevation** (brand-blue-tinted shadows) rather than
Material Design's tonal-surface elevation — a deliberate brand-identity
choice, preserved not replaced. This table pairs each elevation level with a
[surface token](#new-400-surface--container-tokens) for the newly-registered
Display/Layout components.

| Elevation | Surface | Shadow |
|-----------|---------|--------|
| Resting (cards, default) | `color.surface.default` | `shadow.light.level-1` |
| Hover (cards, dropdown) | `color.surface.default` | `shadow.light.level-2` |
| Focused / raised (card, dropdown open) | `color.surface.raised` | `shadow.light.level-3` |
| Modal (mobile) | `color.surface.default` | `shadow.light.level-3` |
| Modal (desktop) | `color.surface.default` | `shadow.light.level-4` |
| Modal (full-screen) | `color.surface.full-screen` | `shadow.light.level-5` |
| Disabled floating element | `color.disabled.bg` | `shadow.light.level-0.5` |

---

## Motion

| Token | Value |
|-------|-------|
| `motion.duration.fast` | 100ms |
| `motion.duration.base` | 200ms |
| `motion.duration.slow` | 300ms |
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `motion.easing.decelerate` | `cubic-bezier(0, 0, 0.2, 1)` |
| `motion.easing.accelerate` | `cubic-bezier(0.4, 0, 1, 1)` |

**PROVISIONAL — confirm with design.**

**Rule**: All motion must respect `prefers-reduced-motion: reduce`. Spinners
become static; transitions become instant (0ms).

> **Conflict Log note**: `DESIGN_SYSTEM.md` §1.6 stated "no motion tokens are
> defined anywhere in the source design system" and mandated only the
> `prefers-reduced-motion` rule. `design-system-master-v3.0.md` §2.7 (newer)
> introduced the provisional duration/easing tokens above, which supersede
> that finding as canonical-but-provisional. The `prefers-reduced-motion`
> rule from both sources is retained unconditionally.

---

## Z-Index

| Token | Value | Usage |
|-------|-------|-------|
| `z.base` | 0 | Default document flow |
| `z.dropdown` | 100 | Dropdown menus; FloatingButton default |
| `z.sticky` | 200 | Sticky headers/footers; FloatingButton over sticky |
| `z.overlay` | 300 | Generic overlays/scrims |
| `z.modal` | 400 | Modal dialogs |
| `z.toast` | 500 | Toast/snackbar notifications |
| `z.tooltip` | 600 | Tooltips (always topmost) |

**PROVISIONAL — confirm with design.**

> `z.toast` exists but no Toast/Snackbar component is specified anywhere —
> see Component Taxonomy → Feedback Components and Governance → Gap Analysis
> (Critical).

---

## Icons

| Token | Value | Usage |
|-------|-------|-------|
| `icon.size.sm` | 16px | Input trailing icons; small button icons |
| `icon.size.md` | 24px | Button/FloatingButton icons; dropdown chevron |
| `icon.size.lg` *(NEW 4.0.0)* | 32px | Card thumbnails; MediaPlaceholder small icon; Modal header icon |
| `icon.size.xl` *(NEW 4.0.0)* | 40px | MediaPlaceholder default icon; empty-state illustration glyphs |

> **PROVISIONAL — confirm with design.** `icon.size.lg`/`icon.size.xl` are
> new additions supporting the Card/Modal/MediaPlaceholder entries in
> Component Taxonomy. Both values (32px, 40px) already exist in the
> [Foundation Dimension Constants](#foundation-dimension-constants) allow-list
> — only new named aliases were introduced, not new raw numbers.

---

# Component Taxonomy

> Components are grouped by **primary function**, not by Figma file
> structure. Each entry follows the schema in
> [Component Architecture Rules](#component-architecture-rules): Anatomy →
> Variant Axes → Sizes → States & Token Mapping → Sub-elements → ARIA → RTL.
> Entries with a full table are **ready for AI generation**. Entries marked
> `MISSING SPEC` are **registered but not specified** — generating them
> requires first completing the
> [Component Generation Framework](#component-generation-framework)
> (AI Generation Rule 2 / Rule 15).

## Naming Conventions

### Component Family Names

| Normalized Name | Figma Key | Notes |
|----------------|-----------|-------|
| `Button` | `Button` | Base primitive |
| `SplitButton` | `Split Button` | Primary action + dropdown trigger |
| `DropdownButton` | `.Dropdown Button` | Opens dropdown on activation |
| `FloatingButton` | `Floating Button` | FAB, circular/pill |
| `ProgressTimedButton` | `.progress timed button` | Timed action with progress |
| `InputField` | `Input Field` | Single-line text input |
| `TextArea` | `Text Area` | Multi-line text input |
| `ChatInput` | `Chat Input` | Conversational input |
| `Dropdown` | *(implied by trigger)* | The opened menu/listbox |
| `Modal` | `Modal` (Mobile=False) | Desktop modal |
| `MobileModal` | `Modal` (Mobile=True) | Mobile modal |
| `Card` | `Card` | Direction=Vertical/Horizontal × Size=Large/Small |
| `StampedCard` | `Stamped Card` | Card with stamp overlay |
| `FullPictureCard` | `Card Full Picture` | Card with full-bleed image |
| `FullPictureNameCard` | `Card Full Picture+Name` | Full-picture card with name overlay |
| `List` | `Composed List` | Ordered=True/False (`<ul>`/`<ol>`) |
| `ListItem` | `.List Item`, `.List Item Atom` | Icon/Chevron/Slot variants |
| `CardItemList` | `Card Item List` | List of cards |
| `Checkbox` | `.Checkbox/atom` | |
| `RadioButton` | `Radio Button/atom` | |
| `Toggle` | `.Toggle-base` (source typo `.Toogle-base`, corrected) | |
| `ProgressBar` | `.Progress Bar/Track Item` | |
| `Divider` | `Divider` | Position × Style × Width |
| `MediaPlaceholder` | `Media Place Holder` | Size × Proportion |

### Variant / Prop Naming

| Prop | Values | Applies To |
|------|--------|-----------|
| `type` | `primary` \| `secondary` \| `link-button` \| `link` \| `alternative-link-button` | Button |
| `size` | `medium` \| `small` \| `big` (Input) \| `default` (Input) \| `large` (Card/List) | Button, Input, Card, List |
| `iconButton` / `iconOnly` | `true` \| `false` | Button |
| `rtl` | `true` \| `false` | All components |
| `state` | See [Interaction System → States](#states) | All components |
| `selected` | `true` \| `false` \| `neutral` | Button (toggle), Checkbox, RadioButton, Card, ListItem |
| `open` / `expanded` | `true` \| `false` | DropdownButton, SplitButton, Modal |
| `mobile` | `true` \| `false` | Modal |
| `active` | `true` \| `false` | Toggle, Input (legacy alias of `pressed`) |
| `progress` | `0` \| `25` \| `50` \| `75` \| `100` \| `indeterminate` | ProgressBar, ProgressTimedButton |
| `direction` | `vertical` \| `horizontal` | Card, Divider |
| `ordered` | `true` \| `false` | List |
| `nested` | `true` \| `false` | ListItem (Second Level) |

### `link` vs `link-button` vs `alternative-link-button`

| | `link` | `link-button` | `alternative-link-button` |
|-|--------|---------------|--------------------------|
| Renders as | `<a>` inline | `<button>` or `<a>` standalone | `<button>` or `<a>` standalone |
| Has padding/hit-area | No | Yes | Yes |
| States defined | default, disabled | default, disabled | default, hover, focused, disabled |
| Use when | Inline within a text run | Standalone, only default/disabled needed | Standalone, needs full hover/focus feedback |

**Selection rule**: (1) Inline in text → `link`. (2) Standalone,
default/disabled only → `link-button`. (3) Standalone, needs hover/focus →
`alternative-link-button`.

---

## Input Components

### InputField

#### Anatomy

```
Standard Input:
  Label text
  ┌────────────────────────────────────────────┐
  │  [leadingIcon?]  Value / Placeholder  [trailingIcon?]  │
  └────────────────────────────────────────────┘
  helperText / errorMessage
```

#### Variants

- `InputField` — single-line
- `TextArea` — multi-line
- `ChatInput` — conversational; same states as InputField unless overridden

#### Sizes

| `size` | Typography | Padding | Radius |
|--------|-----------|---------|--------|
| `default` | `type.body.small.regular/medium` (16px) | `space-500` (16px) | `radius.component.s` (6px) |
| `small` | `type.label.regular/medium` (14px) | `space-300`/`space-400` (8px/12px) | `radius.component.xs` (4px) |
| `big` | `type.component.title-medium.regular/medium` (18px) | `space-600` (24px) + `space-700` row height | `radius.component.m` (8px) |

#### State × Size Coverage

| State | default | small | big |
|-------|---------|-------|-----|
| `default` / `hover` / `active` / `focused` / `disabled` / `read-only` / `loading` | ✅ | ✅ | ✅ |
| `error` / `success` / `pre-filled` | ✅ | ❌ | ❌ |
| `file-upload` | ❌ | ❌ | ✅ (both RTL) |
| `recording` | ❌ | ❌ | ✅ (RTL=true only) |

#### States & Token Mapping

| State | Background | Text / Value | Border | Label |
|-------|-----------|-------------|--------|-------|
| `default` | `color.neutral.default` (#FFF) | `color.text.subtle-primary` (#0C3058) | `color.border.subtle-default` (#5C697A) | `color.text.subtle-primary` |
| `hover` | `color.neutral.default` | `color.text.subtle-primary` | `color.brand.hover` (#0057CC) | `color.text.subtle-primary` |
| `active` | `color.neutral.default` | `color.text.subtle-primary` | `color.brand.pressed` (#0045A3) | `color.text.subtle-primary` |
| `focused` | `color.neutral.default` | `color.text.subtle-primary` | `color.brand.default` (#0068F5) | `color.brand.default` |
| `pre-filled` | `color.neutral.default` | `color.text.subtle-primary` | `color.border.subtle-default` | `color.text.subtle-primary` |
| `error` | `color.neutral.default` | `color.text.subtle-primary` | `color.border.error` (#EB4A4B) *(PROVISIONAL)* | `color.text.subtle-primary` |
| `disabled` | `color.disabled.bg` (#E0E8EF) | `color.text.disabled` (#5C697A) | `color.border.disabled` (#5C697A) | `color.text.disabled` |

Placeholder: `color.text.subtle-secondary` (#466186), all sizes and states
(when not disabled).

> **Naming rule**: `active` is the legacy alias for `pressed` on Input — do
> not rename. See [Component Derivation Rules](#component-derivation-rules).

#### `success` State (default size only)

| Aspect | Value |
|--------|-------|
| Border | `color.feedback.success.default` (#7AD94A) |
| Trailing icon | Checkmark, `icon.size.sm`, `color.feedback.success.default` |
| Helper text | `color.feedback.success.text` (#22510A) |
| ARIA | `aria-invalid="false"` |

#### `read-only` State (all sizes)

| Aspect | Value |
|--------|-------|
| Colors | Same as `default` |
| Hover/active border | Does NOT change — stays `color.border.subtle-default` |
| Focus border | `color.brand.default` — focus still applies |
| ARIA | `readonly` + `aria-readonly="true"` |
| Tab order | Remains focusable (unlike `disabled`) |
| Affordances | No clear button, no inline validation |

#### `loading` State (all sizes)

| Aspect | Value |
|--------|-------|
| Border | `color.brand.default` (#0068F5) — same as `focused` |
| Trailing icon | Spinner, `icon.size.sm`, `color.text.subtle-secondary` (#466186) |
| Motion | `motion.duration.slow` + `motion.easing.standard` |
| ARIA | `aria-busy="true"` |
| Resolution | Transitions to `success`, `error`, or `default` |

#### Sub-elements

| Slot | Required | Notes |
|------|----------|-------|
| `label` | Yes | Above the control |
| `inputControl` | Yes | `<input>` or `<textarea>` |
| `placeholder` | No | Hidden when value present |
| `leadingIcon` | No | Leading edge |
| `trailingIcon` | No | Clear, show-password, checkmark, spinner |
| `helperText` | No | Below the control |
| `errorMessage` | Conditional | `state=error` only |
| `fileUploadTrigger` | Conditional | `state=file-upload`, `size=big` |
| `recordingIndicator` | Conditional | `state=recording`, `size=big`, `rtl=true` |
| `focusRing` | Conditional | Visible on `focused` |
| `loadingSpinner` | Conditional | `state=loading` |

---

### TextArea

Inherits InputField anatomy, sizes, and state→token mapping in full.

| Difference | Rule |
|-----------|------|
| `Tab` key | Moves focus **out** of the TextArea — no tab character is inserted (see [Interaction System](#interaction-system) keyboard table) |
| Resize | Not specified — `MISSING SPEC`, default to browser-native vertical resize until specified |

---

### ChatInput

Conversational variant of InputField. Applies the same state→token mapping
as InputField unless overridden below.

#### Anatomy

```
Chat Input:
  ┌────────────────────────────────────────────┐
  │  [attach?]  Value / Placeholder  [send]    │
  └────────────────────────────────────────────┘
```

| Slot | Required | Notes |
|------|----------|-------|
| `attachTrigger` | No | Leading icon, `icon.size.sm`, `aria-label="Attach file"` |
| `inputControl` | Yes | `<textarea>` (auto-grow) — inherits InputField `big` typography |
| `sendTrigger` | Yes | Trailing icon-button, reuses Button `primary` `iconButton` token mapping at `icon.size.md`, `aria-label="Send message"` |

`/* MISSING SPEC — clarification needed */`: auto-grow max-height, and
disabled/loading treatment of `sendTrigger` while a message is in flight.
Until specified, reuse InputField `loading` (border → `color.brand.default`,
spinner `icon.size.sm`) on the whole control.

---

### Checkbox

`/* MISSING SPEC — clarification needed */`

**Known from naming conventions:** source `.Checkbox/atom`; variant axis
`selected` ∈ `{true, false, neutral}` (neutral = indeterminate).

**Derivation guidance** (apply until a full spec exists, per
[Component Derivation Rules](#component-derivation-rules)):

| State | Token mapping |
|-------|---------------|
| `default`, unchecked | Border `color.border.subtle-default`, fill `color.neutral.default` |
| `selected=true` (checked) | Fill + border `color.brand.default`, check glyph `color.text.inverted-subtle-primary`, size `icon.size.sm` |
| `selected=neutral` (indeterminate) | Same as `selected=true` but glyph = dash, per same fill |
| `hover` | Apply `state-layer.hover` over border/fill |
| `focused` | Standard focus ring (`color.brand.default`, `focus.ring.width`/`focus.ring.offset`) |
| `disabled` | `color.disabled.bg` fill, `color.border.disabled` border, `color.text.disabled` glyph |
| `error` | Border `color.border.error` *(PROVISIONAL)* |

Touch target: 44×44px hit-area (§Accessibility), visual box may be 16–20px
(round to nearest [dimension constant](#foundation-dimension-constants)).
ARIA: native `<input type="checkbox">` + `<label for>`; `aria-invalid` on
group error.

---

### RadioButton

`/* MISSING SPEC — clarification needed */`

**Known from naming conventions:** source `Radio Button/atom`; single-select
within a named group (`selected=true|false`, mutually exclusive).

**Derivation guidance**: identical token mapping to Checkbox above
(`selected=true` → `color.brand.default` fill/border + inner dot in
`color.text.inverted-subtle-primary`), rendered as a circle
(`radius.foundation.full`). Group semantics: native
`<input type="radio" name="...">` + `<fieldset><legend>` for the group
label; arrow-key navigation moves selection within the group (standard
native behavior — do not override with custom JS unless the group is
visually non-linear).

---

### Toggle (Switch)

`/* MISSING SPEC — clarification needed */`

**Known from naming conventions:** source `.Toggle-base`; variant axis
`active` ∈ `{true, false}`.

**Derivation guidance**:

| State | Token mapping |
|-------|---------------|
| `active=false` | Track `color.border.subtle-default` @ `state-layer` background, thumb `color.neutral.default` |
| `active=true` | Track `color.brand.default`, thumb `color.neutral.default` |
| `hover` | Apply `state-layer.hover` to track |
| `focused` | Standard focus ring |
| `disabled` | Track `color.disabled.bg`, thumb `color.text.disabled` |

Shape: track = `radius.foundation.full`, thumb = circle. ARIA: `role="switch"`
+ `aria-checked` reflects `active`. Motion: thumb slide uses
`motion.duration.base` + `motion.easing.standard` (respect
`prefers-reduced-motion`).

---

### Dropdown (Selection Input / Panel)

The **trigger** (`DropdownButton`) is specified under
[Action Components](#action-components). This entry covers the **panel**
and **selection-mode** behavior.

#### Open/Closed State (Panel)

| `open` | Trigger | Chevron | Menu |
|--------|---------|---------|------|
| `false` | Trigger's own type mapping | At rest | Not rendered |
| `true` | `focused` treatment — border/text → `color.brand.default` | Rotated 180°, `motion.duration.fast` + `motion.easing.standard` | Rendered: `color.surface.default`, `shadow.light.level-1`, `radius.foundation.m`, `z.dropdown` |

**ARIA**: `aria-haspopup` + `aria-expanded` toggle with `open`. On open: focus
moves to first/selected item. On close (`Escape` or selection): focus returns
to trigger. Outside-click close does **not** force focus back.

#### Keyboard Navigation

| Key | Behavior |
|-----|---------|
| `Arrow Down` | Opens menu; navigates down |
| `Arrow Up` | Navigates up |
| `Home` / `End` | Jump to first/last item |
| `Escape` | Close menu; focus returns to trigger |
| `Enter` / `Space` | Select item; close menu; focus returns to trigger |
| `Tab` | Move focus out of TextArea (no tab character inserted) |

#### Selection Variants (`tags`, `active-filterable`)

`/* MISSING SPEC — clarification needed */`

Known from `DESIGN_SYSTEM.md` §2.3 normalized states: `tags` (trigger shows
selected-value tags/chips) and `active-filterable` (searchable/filterable
mode). Derivation guidance:

| Element | Token mapping |
|---------|---------------|
| Selected-value tag/chip | bg `color.surface.tint.brand-50` or `.tint.brand-100`, text `type.badge.medium.regular`, radius `radius.foundation.xxs` |
| Filter input (when `active-filterable`) | Reuses InputField `small` token mapping inline within the trigger |
| Selected list item (in panel) | bg `color.surface.tint.brand-50`, text `color.text.subtle-primary` |

---

## Action Components

### Button

#### Anatomy

```
Standard Button:
┌─────────────────────────────────┐
│  [leadingIcon?]  Label  [trailingIcon?]  │  role="button"
└─────────────────────────────────┘
        ↑ focusRing (visible on focused only)
```

#### Sizes

| `size` | Typography | Padding | Radius |
|--------|-----------|---------|--------|
| `medium` | `type.component.title-small.medium/regular` (16px) | 12px vertical / 20px horizontal | `radius.component.m` (8px) |
| `small` | `type.label.medium/regular` (14px) | 8px all sides | `radius.component.xs` (4px) |

Icon-only (`iconButton=true`): medium = 48×48px; small = 32×32px. Icon size:
`icon.size.md` for medium, `icon.size.sm` for small.

> Medium horizontal padding is **20px**, not `space-600` (24px) — see
> Governance → Conflict Log §12.1. Component geometry is ground truth.

#### States & Token Mapping

**Primary**

| State | Background | Text & Icon | Border |
|-------|-----------|------------|--------|
| `default` | `color.brand.default` (#0068F5) | `color.text.inverted-subtle-primary` (#F5F9FF) | — |
| `hover` | `color.brand.hover` (#0057CC) | `color.text.inverted-subtle-primary` | — |
| `pressed` | `color.brand.pressed` (#0045A3) | `color.text.inverted-subtle-primary` | — |
| `focused` | `color.brand.default` | `color.text.inverted-subtle-primary` | `focusRing`: `color.brand.default`, `focus.ring.width`/`focus.ring.offset` |
| `loading` | `color.brand.default` | `color.text.inverted-subtle-primary` | spinner = text color |
| `disabled` | `color.disabled.bg` (#E0E8EF) | `color.text.disabled` (#5C697A) | — |

**Secondary**

| State | Background | Text & Icon | Border |
|-------|-----------|------------|--------|
| `default` | `color.neutral.default` (#FFFFFF) | `color.text.subtle-primary` (#0C3058) | `color.border.subtle-default` (#5C697A) |
| `hover` | `color.brand.hover` (#0057CC) † | `color.text.subtle-primary` | `color.border.subtle-default` |
| `loading` | `color.neutral.default` | `color.text.subtle-primary` | spinner = text color |
| `disabled` | `color.disabled.bg` | `color.text.disabled` | `color.border.disabled` |

† **Flagged**: dark text (#0C3058) on brand-blue hover bg (#0057CC) likely
fails 4.5:1. Preserved as specified — see Governance → Conflict Log §12.4.
**Verify contrast before shipping.**

**Alternative Link Button** (full state coverage)

| State | Text & Icon | Border/Focus |
|-------|------------|-------------|
| `default` | `color.text.subtle-primary` (#0C3058) | — |
| `hover` | `color.brand.hover` (#0057CC) — text color only | — |
| `focused` | `color.brand.default` (#0068F5) | `color.brand.default` focus ring |
| `loading` | `color.text.subtle-primary` | spinner = text color |
| `disabled` | `color.text.disabled` (#5C697A) | — |

**Link Button / Link**: `default` text = `color.text.subtle-primary`;
`disabled` text = `color.text.disabled`. No background or border.

#### `loading` State Rules (All Button Types)

| Aspect | Rule |
|--------|------|
| Colors | Same as that type's `default` state |
| Spinner color | Matches default text/icon color |
| Spinner size | `icon.size.md` (medium) / `icon.size.sm` (small) |
| Spinner motion | `motion.duration.slow` + `motion.easing.standard`; continuous rotation |
| Reduced motion | Use static loading glyph instead of animation |
| ARIA | `aria-busy="true"` + `aria-disabled="true"` + native `disabled` |
| Label | May be visually hidden, but accessible name via `aria-label` is required |

#### `selected` State Rules (Toggle Buttons)

`selected=true` reuses the **Primary** token set as the "on" treatment,
regardless of the button's own `type`. This is the canonical example of the
[Toggle/Selected Derivation Rule](#component-derivation-rules).

| Condition | Token mapping |
|-----------|--------------|
| `selected=true`, resting | Primary `default`: bg `color.brand.default`, text `color.text.inverted-subtle-primary` |
| `selected=true` + `hover` | Primary `hover`: bg `color.brand.hover` |
| `selected=true` + `pressed` | Primary `pressed`: bg `color.brand.pressed` |
| `selected=true` + `disabled` | Primary `disabled`: bg `color.disabled.bg` |
| `selected=false` | Use the button's own `type` mapping |

ARIA: `aria-pressed="true"/"false"` reflects `selected`.

---

### IconButton

Not a separate component — set `iconButton=true` on `Button`. Sizing,
state→token mapping, and `loading`/`selected` rules are identical to Button
above (medium = 48×48px / `icon.size.md`; small = 32×32px / `icon.size.sm`).

| Aspect | Rule |
|--------|------|
| ARIA | `aria-label` is **required** (no visible text label) |
| Touch target | 32×32px (small) visual size must expand hit-area to 44×44px (see Accessibility System → Touch Targets) |

---

### FloatingButton

Reuses the Button **Primary** token set. Shape: `radius.component.full`
(100px). Icon: `icon.size.md`. `aria-label` **required** (icon-only).

| State | Background | Icon | Shadow |
|-------|-----------|------|--------|
| `default` | `color.brand.default` | `color.text.inverted-subtle-primary` | `shadow.light.level-1` |
| `hover` | `color.brand.hover` | `color.text.inverted-subtle-primary` | `shadow.light.level-2` |
| `pressed` | `color.brand.pressed` | `color.text.inverted-subtle-primary` | `shadow.light.level-1` |
| `focused` | `color.brand.default` | `color.text.inverted-subtle-primary` | `shadow.light.level-1` |
| `disabled` | `color.disabled.bg` | `color.text.disabled` | `shadow.light.level-0.5` |

**Stacking**: `z.dropdown` (default), `z.sticky` when a sticky bar is
present.

---

### SplitButton

#### Anatomy

```
Split Button:
┌──────────────────────┬──────────┐
│  [icon?]  Label      │    ▾     │  primary action | dropdownTrigger
└──────────────────────┴──────────┘
```

**Derivation** (see [Component Derivation Rules](#component-derivation-rules)):
- Primary segment = `Button` with its own `type` token mapping (full
  Primary/Secondary/etc. state table applies).
- Dropdown segment = `DropdownButton` open/expanded mapping (below).

`/* MISSING SPEC — clarification needed */`: the combined visual treatment
where the two segments meet. **Derivation guidance** until specified:

| Aspect | Guidance |
|--------|---------|
| Outer corners | `radius.component.m` (medium) / `radius.component.xs` (small) — only the two outer corners of the combined shape |
| Inner corners | `0` (square) where segments meet |
| Segment divider | `border.hairline.default` (1px), color = the primary segment's own border/text color at the type's `default` state |
| Disabled (whole control) | Both segments → their respective `disabled` mapping; divider → `color.border.disabled` |

---

### DropdownButton

Trigger for the [Dropdown panel](#dropdown-selection-input--panel). Open/closed
token mapping:

| `open` | Trigger | Chevron | Menu |
|--------|---------|---------|------|
| `false` | Button's own `type` mapping | At rest | Not rendered |
| `true` | `focused` treatment — border/text → `color.brand.default` | Rotated 180°, `motion.duration.fast` + `motion.easing.standard` | Rendered, `shadow.light.level-1`, `z.dropdown` |

**ARIA**: `aria-haspopup` + `aria-expanded` toggle with `open`. See
[Dropdown Keyboard Navigation](#keyboard-navigation) for full key table.

---

### ProgressTimedButton

`/* MISSING SPEC — clarification needed */`

**Known from naming conventions:** source `.progress timed button`; variant
axis `progress` ∈ `{0, 25, 50, 75, 100, indeterminate}` (shared with
ProgressBar, see Feedback Components).

**Derivation guidance**: `Button` (`primary`, `medium`) as the base token
mapping, with a `ProgressBar` fill (see Feedback Components) rendered as an
overlay/underlay inside the button bounds (`radius.component.m` clipped),
filling left→right (LTR) / right→left (RTL) per `progress`. At
`progress=indeterminate`, apply the Button `loading` state rules (spinner,
`aria-busy="true"`) instead of a fill animation.

---

## Feedback Components

### Loading Indicator

The canonical spinner pattern, referenced by Button, InputField,
ProgressTimedButton, and ChatInput `loading` states.

| Aspect | Rule |
|--------|------|
| Size | `icon.size.sm` (small contexts) / `icon.size.md` (medium contexts) |
| Color | Matches the host component's `default`-state text/icon color |
| Motion | `motion.duration.slow` + `motion.easing.standard`; continuous rotation |
| Reduced motion | Replace with a static loading glyph (no rotation) |
| ARIA | `aria-busy="true"` on the host element; `aria-live="polite"` announces start/stop |
| Resolution | Host transitions to `default`, `success`, or `error` on completion |

---

### Form Error Summary

For forms with **2 or more fields** that can error:

| Aspect | Rule |
|--------|------|
| Placement | Top of form, before first field |
| Container | `role="alert"`, `aria-live="assertive"` |
| Heading | `type.h7-medium` (24px/500) — e.g. "Please fix the following errors" |
| Content | `<ul>` of `<li><a href="#fieldId">{field label}</a></li>` |
| Per-field errors | Remain inline via `aria-describedby` — summary supplements, not replaces |
| Focus on submit fail | Programmatically focus the summary container (`tabindex="-1"` + `.focus()`) |
| Color | `color.feedback.error.bg` / `color.feedback.error.text` |

---

### Inline Validation Messages

| Role | Background | Text | Border / Icon | ARIA |
|------|-----------|------|---------------|------|
| Success | `color.feedback.success.bg` | `color.feedback.success.text` | `color.feedback.success.default` | `aria-live="polite"` |
| Warning | `color.feedback.warning.bg` | `color.feedback.warning.text` | `color.feedback.warning.default` | `aria-live="polite"` |
| Error | `color.feedback.error.bg` | `color.feedback.error.text` | `color.feedback.error.default` | `role="alert"` (assertive) |
| Info | `color.feedback.info.bg` | `color.feedback.info.text` | `color.feedback.info.default` | `aria-live="polite"` |

Per [Feedback Tokens color logic rule](#feedback-tokens). Applies to
InputField `error`/`success` states and to any standalone inline message
(helper-text augmentation).

---

### ProgressBar

`/* MISSING SPEC — clarification needed */`

**Known**: source `.Progress Bar/Track Item`; variant axis `progress` ∈
`{0, 25, 50, 75, 100, indeterminate}` (shared with ProgressTimedButton).

| Element | Token mapping |
|---------|---------------|
| Track | bg `color.disabled.bg` (#E0E8EF), radius `radius.foundation.full` |
| Fill | bg `color.brand.default`, radius `radius.foundation.full`, width = `progress`% |
| Indeterminate | Fill animates via `motion.duration.slow` + `motion.easing.standard`, looping; static half-fill bar under `prefers-reduced-motion` |
| ARIA | `role="progressbar"` + `aria-valuenow`/`aria-valuemin`/`aria-valuemax`; `aria-busy="true"` when indeterminate |
| RTL | Fill direction mirrors — use `inset-inline-start`, never `left` |

---

### Toast/Snackbar

`/* MISSING SPEC — clarification needed */` — **CRITICAL GAP**

Not named in either source document, but `z.toast` (Z-Index = 500) exists
and implies this component is required.

| Element | Token mapping |
|---------|---------------|
| Container | bg `color.surface.default`, `shadow.light.level-2`, `radius.foundation.m`, `z.toast` |
| Status variant | Left border or icon per [Feedback Tokens](#feedback-tokens) (`success`/`warning`/`error`/`info`) |
| Text | `type.body.small.regular`, `color.text.subtle-primary` |
| Action (optional) | `alternative-link-button` token mapping |
| Dismiss | `IconButton` at `icon.size.sm`, `aria-label="Dismiss notification"` |
| ARIA | `role="status"` (non-error) or `role="alert"` (error); `aria-live` matching |
| Motion | Enter/exit via `motion.duration.base` + `motion.easing.decelerate`/`accelerate`; instant under `prefers-reduced-motion` |
| Position | Bottom-center (mobile) / bottom inline-end logical (desktop) — see [Layout System](#layout-system) |

Must go through the
[Component Generation Framework](#component-generation-framework) before
production use — see Governance → Gap Analysis (Critical).

---

### Badge/Tag

`/* MISSING SPEC — clarification needed */`

Referenced as a sub-element of Dropdown (selected-value chips) and Card/List
(stamps); typography token `type.badge.medium.regular` already exists.

| Variant | Background | Text | Radius |
|---------|-----------|------|--------|
| Neutral tag | `color.surface.tint.brand-50` | `color.text.subtle-primary` | `radius.foundation.xxs` (2px) |
| Emphasis tag | `color.surface.tint.brand-100` | `color.text.subtle-primary` | `radius.foundation.xxs` |
| Status badge | `color.feedback.{role}.bg` / `.text` | — | `radius.foundation.full` (pill) |

Typography: `type.badge.medium.regular` (12px/160%/0.5px letter-spacing) for
all variants. Padding: `space-100`–`space-200` (2–4px) vertical, `space-300`
(8px) horizontal.

---

## Display Components

### Card / StampedCard / FullPictureCard / FullPictureNameCard

`/* MISSING SPEC — clarification needed */` — **CRITICAL GAP**

#### Known Variant Axes

| Axis | Values |
|------|--------|
| `direction` | `vertical` \| `horizontal` |
| `size` | `large` \| `small` (standard) |
| `selected` | `true` \| `false` \| `neutral` |
| `state` | `default` \| `hover` \| `focused` \| `not-pressable` |

#### Known Token Anchors

| Element | Token |
|---------|-------|
| Large title | `type.component.title-large.bold` (20px/700) |
| Small title | `type.component.title-medium.bold` (18px/700) |
| Subtitle | `type.component.subtitle-medium.regular` (16px/400) |
| Standard radius | `radius.foundation.m` (8px) |
| Large radius | `radius.foundation.l` (16px) |
| Extra-large radius (FullPicture variants) | `radius.foundation.xl` (32px) |
| Stamp tint | `color.surface.tint.brand-50` / `.tint.brand-100` |
| Stamp radius | `radius.foundation.xxs` (2px) |
| Default / hover / focused elevation | `shadow.light.level-1` / `-2` / `-3` |
| Surface | `color.surface.default` (`color.surface.raised` when elevated) |
| Selected state | `state-layer.selected` (16% `color.brand.default`) over surface |
| Hover / pressed (interactive cards) | `state-layer.hover` / `state-layer.pressed` |
| `not-pressable` | No hover/focus/pressed treatment; `tabindex="-1"`, no `role="button"` |

#### FullPictureCard / FullPictureNameCard (Derivation)

`FullPictureCard` = `Card` with the image filling the full bounds
(`object-fit: cover`, clipped to the card's radius). `FullPictureNameCard` =
`FullPictureCard` + a name label using `type.component.title-small.medium`
on a `color.overlay.scrim` gradient at the bottom edge for contrast.

> **Action required**: full state×token tables, anatomy diagrams, and ARIA
> roles (`role="article"` vs `role="button"` for pressable cards) must be
> produced via the
> [Component Generation Framework](#component-generation-framework) before
> this family can be reliably AI-generated. See Governance → Gap Analysis
> (Critical).

---

### List/ListItem/CardItemList

`/* MISSING SPEC — clarification needed */` — **CRITICAL GAP**

#### Known Variant Axes

| Axis | Values |
|------|--------|
| `ordered` | `true` (`<ol>`) \| `false` (`<ul>`) |
| `nested` | `true` \| `false` (Second Level) |
| `state` (ListItem) | `default` \| `hover` \| `while-pressing` \| `selected` \| `not-pressable` \| `disabled` |

#### Known Token Anchors

| Element | Token |
|---------|-------|
| Item label | `type.component.title-small.medium` (16px/500) |
| Item subtitle | `type.component.subtitle.regular` (16px/400) |
| Small text | `type.label.regular` (14px) |
| Item radius (nested) | `radius.foundation.xxs` (2px) |
| Card thumbnail in list | `radius.foundation.m` (8px) |
| Default / hover elevation (card-style item) | `shadow.light.level-1` / `-2` |
| Hover / pressed / selected | `state-layer.hover` / `.pressed` / `.selected` |
| `while-pressing` | Treat as `pressed` (`state-layer.pressed`) — mid-transition between `default` and the released state |
| `not-pressable` | No interaction states; `<li>` with no `role="button"` / `tabindex` |
| Chevron (navigational item) | `icon.size.sm`, mirrors in RTL |

#### CardItemList (Derivation)

`CardItemList` = a `List` whose items are `Card` instances, laid out per
[Grid](#grid) columns. No additional tokens beyond Card + List.

> **Action required**: full anatomy, state×token table, and chevron/icon
> slot rules must be produced via the
> [Component Generation Framework](#component-generation-framework). See
> Governance → Gap Analysis (Critical).

---

### MediaPlaceholder

`/* MISSING SPEC — clarification needed */`

#### Known Variant Axes

| Axis | Values |
|------|--------|
| `size` | `large` \| `medium` \| `small` |
| `proportion` | `1:1` \| `16:9` |

#### Derivation Guidance

| Element | Token mapping |
|---------|---------------|
| Background | `color.surface.sunken` (steel-grey/50) |
| Placeholder icon | `icon.size.xl` (large) / `icon.size.lg` (medium/small), `color.text.subtle-secondary` |
| Radius | `radius.foundation.m` (default) — match the radius of the containing Card/List/Modal |
| ARIA | `role="img"` + `aria-label` describing the pending/missing media |

---

### Divider

`/* MISSING SPEC — clarification needed */`

#### Known Variant Axes

| Axis | Values |
|------|--------|
| `position` | `vertical` \| `horizontal` |
| `style` | `default` \| `inverted` |
| `width` | `full` \| `inset` |

#### Derivation Guidance

| Element | Token mapping |
|---------|---------------|
| Thickness | `border.hairline.default` (1px) — `border.hairline.thick` (2px) for emphasis |
| Color (`default` style) | `color.border.subtle-default` |
| Color (`inverted` style) | `color.neutral.default` (for use on dark/brand surfaces) |
| `inset` width | Apply `space-500` (16px) logical inline margin on both ends |
| ARIA | `role="separator"`; `aria-orientation` = `position` |

---

## Navigation Components

### Dropdown Menu (Navigation Role)

Cross-reference: open/closed states and keyboard navigation are specified
under [Input Components → Dropdown](#dropdown-selection-input--panel).

| Element | Role / Tag |
|---------|-----------|
| Menu container | `role="menu"` or `role="listbox"` |
| Menu item | `role="menuitem"` or `role="option"` |

---

### Skip Link

| Aspect | Rule |
|--------|------|
| Position | First focusable element on the page |
| Visibility | Visually hidden until focused |
| Target | Jumps to `<main>` |
| Token mapping (on focus) | `alternative-link-button` token mapping + standard focus ring |

---

### Breadcrumbs

`/* MISSING SPEC — clarification needed */` — **CRITICAL GAP**

Not defined in either source document, despite being essential for the
multi-step government service flows that are this system's primary use case
(see [Design Philosophy](#design-philosophy)).

| Element | Token mapping |
|---------|---------------|
| Crumb (non-current) | `link` token mapping (`color.text.subtle-primary` default, `color.brand.hover` on hover) |
| Separator | `color.text.subtle-secondary`, `icon.size.sm` chevron (mirrors in RTL) or `/` glyph |
| Current page | `color.text.subtle-primary`, non-interactive, `aria-current="page"` |
| Container | `<nav aria-label="Breadcrumb"><ol>...</ol></nav>` |

---

### Tabs

`/* MISSING SPEC — clarification needed */` — **IMPORTANT GAP**

| Element | Token mapping |
|---------|---------------|
| Tab list | `role="tablist"` |
| Tab (inactive) | `color.text.subtle-secondary`, `type.component.label.regular` |
| Tab (active) | `color.brand.default` text + `border.hairline.thick` (2px) underline in `color.brand.default`, `type.component.label.medium` |
| Tab | `role="tab"` + `aria-selected` |
| Panel | `role="tabpanel"` + `aria-labelledby` |
| Keyboard | Arrow-key navigation between tabs (native roving-tabindex pattern) |

---

### Pagination

`/* MISSING SPEC — clarification needed */` — **IMPORTANT GAP**

Relevant to List / CardItemList.

| Element | Token mapping |
|---------|---------------|
| Page button | `Button` `link-button`/`secondary`, `size=small` |
| Current page | `selected=true` (reuses Primary token set per [Toggle/Selected Derivation Rule](#component-derivation-rules)) |
| Prev/next | `IconButton` `size=small`, chevrons mirror in RTL |
| Container | `<nav aria-label="Pagination">` |

---

### Step Indicator (Wizard Progress)

`/* MISSING SPEC — clarification needed */` — **IMPORTANT GAP**

Relates to [ProgressBar](#progressbar).

| Step state | Token mapping |
|-----------|---------------|
| Completed | Circle (`radius.foundation.full`, `icon.size.md`) filled `color.brand.default` + checkmark `color.text.inverted-subtle-primary` |
| Current | `color.brand.default` border on `color.neutral.default` fill, text/number `color.brand.default`, focus-ring-style emphasis |
| Upcoming | `color.border.subtle-default` border, text `color.text.subtle-secondary` |
| Connector line | `border.hairline.default`, `color.border.subtle-default` (completed segments → `color.brand.default`) |
| Container | `<nav aria-label="..."><ol>` with `aria-current="step"` on the active item |

---

## Layout Components

### Modal / MobileModal

`/* MISSING SPEC — clarification needed */` for full interaction behavior —
substantial token anchors are known.

#### Known Variant Axes

| Axis | Values |
|------|--------|
| `mobile` | `true` (MobileModal) \| `false` (Modal/desktop) |
| `size` | standard \| large \| full-screen |

#### Known Token Anchors

| Element | Token |
|---------|-------|
| Desktop title | `type.title.small.bold` (24px/700) |
| Desktop header | `type.component.title-large.bold` (20px/700) |
| Mobile header | `type.component.title-medium.regular` (18px/400) |
| Subtitle | `type.title.subtitle-large.regular` / `.medium` (20px) |
| Body (large) | `type.body.large.regular` (18px) |
| Body (default) | `type.body.small.regular` (16px) |
| Container radius (standard) | `radius.foundation.m` (8px) |
| Container radius (large) | `radius.foundation.l` (16px) |
| Container radius (full-screen) | `radius.foundation.xl` (32px) |
| Close-trigger | `IconButton`, `icon.size.md`, radius `radius.foundation.full` |
| Surface (standard/large) | `color.surface.default` |
| Surface (full-screen) | `color.surface.full-screen` (#F9FCFF) |
| Overlay / scrim | `color.overlay.scrim` (`rgba(59,57,57,0.70)`) |
| Elevation (mobile) | `shadow.light.level-3` |
| Elevation (desktop) | `shadow.light.level-4` |
| Elevation (full-screen) | `shadow.light.level-5` |
| Stacking | `z.modal` (400) — above `z.overlay` (300) scrim |
| Breakpoint driver | `mobile=true` below `breakpoint.tablet` (600px) — cross-ref [Breakpoints](#breakpoints) |

#### Accessibility (Known)

| Aspect | Rule |
|--------|------|
| Focus containment | Modal traps focus within (`z.modal`) |
| ARIA | `role="dialog"` or `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby` → title |
| Close | `Escape` closes; focus returns to the trigger that opened the modal |
| Reduced motion | Open/close transitions become instant under `prefers-reduced-motion` |

`/* MISSING SPEC — clarification needed */`: click-outside-to-close behavior,
initial focus target inside the modal, and footer button-row composition
(reuse [Button Grouping](#responsive-rules)) must be confirmed via the
[Component Generation Framework](#component-generation-framework).

---

### Page / Screen Containers

Cross-reference: see [Layout System](#layout-system) for Grid, Breakpoints,
Container widths, Page Templates, and Composition Patterns — these apply at
the Layout-Component level and are not duplicated here.

---

# Component Architecture Rules

Every component specification in [Component Taxonomy](#component-taxonomy) —
existing or newly generated — MUST satisfy the following structural contract.

| # | Rule |
|---|------|
| 1 | **Anatomy first.** Define an ASCII anatomy diagram listing every sub-element as required or conditional before specifying variants. |
| 2 | **Closed variant axes.** Enumerate variant props using the normalized naming pattern from [Naming Conventions](#naming-conventions). Every axis has a closed set of allowed values — AI must never invent a new value without flagging it. |
| 3 | **Token-only styling.** Every color, font, spacing, radius, shadow, motion, z-index, and icon-size value MUST reference a token from [Token Architecture](#token-architecture). No raw hex codes, arbitrary px, or ad-hoc durations. |
| 4 | **Full state coverage.** Map every applicable state from [Interaction System → States](#states) to background/text/border/icon tokens. Loading reuses the canonical [Loading Indicator](#loading-indicator) pattern. |
| 5 | **Sizing table.** Provide size → typography token → padding → radius, using only [Spacing](#spacing) and [Radius](#radius) foundation scales (non-Button/Input components use `radius.foundation.*`). |
| 6 | **Accessibility contract.** Assign ARIA role/attributes per [Accessibility System](#accessibility-system); define keyboard support (Tab order, Enter/Space activation, Escape for overlays); confirm touch targets and focus visibility for every state. |
| 7 | **RTL pass.** Confirm `rtl=true` and `rtl=false` versions exist for every variant; use logical CSS properties throughout; confirm DOM order matches logical RTL reading order. See [RTL System](#rtl-system). |
| 8 | **Family before new.** Check [Component Family Names](#naming-conventions) before creating a new component — extend an existing family rather than create a parallel one. |
| 9 | **Stacking.** Any component that opens an overlay (dropdown, modal, toast, tooltip) MUST be assigned a `z.*` token from [Z-Index](#z-index). |
| 10 | **Register on completion.** New tokens, components, or patterns must be run through the [Component Generation Framework](#component-generation-framework) and recorded in [Governance Rules](#governance-rules) (Conflict Log and/or Provisional Token Register). |

---

# Component Derivation Rules

These rules resolve every `/* MISSING SPEC — clarification needed */` entry
in [Component Taxonomy](#component-taxonomy) when a concrete implementation
is required before formal specification lands. They are **non-binding
fallbacks** — an explicit spec, when written, always wins.

| # | Rule | Applies to (examples) |
|---|------|------------------------|
| 1 | **Selected = Primary token set.** A `selected=true` (or `active=true`) state reuses the Primary Button token set for background/text/border, regardless of the component's own `type`. | Toggle Button, Tabs (active tab), Pagination (current page), List/Card (`selected` item) |
| 2 | **Open = Focused treatment.** An `open=true`/`expanded=true` state reuses the `focused` treatment: border/text → `color.brand.default`, chevron rotates 180° (`motion.duration.fast` + `motion.easing.standard`). | DropdownButton, Dropdown trigger, SplitButton dropdown segment |
| 3 | **Loading = spinner-in-place.** Replace the label/content with a spinner, preserve the component's resting dimensions, set `aria-busy="true"`, animate with `motion.duration.slow` + `motion.easing.standard` (static under `prefers-reduced-motion`). | Button, ProgressTimedButton, Input, any async action trigger |
| 4 | **Disabled = 38% content opacity, no affordances.** Apply `state-layer.disabled-content` (38%) to text/icon content over `color.disabled.bg`; remove hover/focus/pressed treatment; set `aria-disabled="true"` (and `tabindex="-1"` for non-native elements). | All interactive components |
| 5 | **Read-only ≠ disabled.** Remains focusable and announced via `aria-readonly="true"`; value cannot be edited; never enters `active`/`pressed`. | InputField, TextArea |
| 6 | **Standalone vs inline link selection.** Inline within a text run → `link`. Standalone, only `default`/`disabled` needed → `link-button`. Standalone, needs full hover/focus feedback → `alternative-link-button`. See [Action Components → Button](#action-components) comparison table. | Breadcrumbs, Skip Link, footer/legal links |
| 7 | **Nearest structural analog.** When no rule above applies, derive from the closest analog already specified: Breadcrumbs ← `link`; Tabs ← Toggle Button (#1); Step Indicator ← ProgressBar + Badge; Pagination ← Button + #1. | Navigation Components |
| 8 | **Precedence order.** (1) Explicit spec in this document → (2) rules #1–7 above → (3) nearest structural analog (#7) → (4) escalate via [Component Generation Framework](#component-generation-framework). Never skip to (4) if (1)–(3) resolve the case. | All MISSING SPEC entries |
| 9 | **Log every applied derivation.** Any derivation used to ship a MISSING SPEC component must be recorded in [Governance Rules → Provisional Token Register](#governance-rules), citing the rule number used. | All MISSING SPEC entries |

---

# Interaction System

## States

The canonical state vocabulary, normalized across all components (see
[State Enum](#naming-conventions) in Naming Conventions):

| State | Meaning | General rule |
|-------|---------|--------------|
| `default` | Resting state | Baseline tokens |
| `hover` | Pointer over, not pressed | See [Hover](#hover) |
| `focused` | Keyboard focus or programmatic focus | See [Focus](#focus) |
| `pressed` / `active` | Pointer-down or activation in progress | See [Pressed](#pressed) |
| `selected` | Persistent "on"/chosen state | [Derivation Rule #1](#component-derivation-rules) — Primary token set |
| `disabled` | Non-interactive | See [Disabled](#disabled) |
| `loading` | Async operation in progress | See [Loading](#loading) |
| `read-only` | Focusable, value not editable | [Derivation Rule #5](#component-derivation-rules) |
| `error` / `success` | Validation result | [Feedback Patterns](#feedback-components) |
| `open` / `expanded` | Overlay/menu visible | [Derivation Rule #2](#component-derivation-rules) — Focused treatment |

**General click/tap rules**:
- Activating a `default` element triggers its primary action; `disabled`/`loading` elements take no action.
- `read-only` Inputs remain focusable; value cannot change.
- `SplitButton`: primary segment → primary action; dropdown segment → opens menu (`open=true`).
- Clicking a `<label>` moves focus to its associated `inputControl`.

---

## Focus

| Token | Value | Notes |
|-------|-------|-------|
| `focus.ring.width` | 2px | All components; derived from WCAG 2.4.11. Not provisional. |
| `focus.ring.offset` | 2px | `/* PROVISIONAL — confirm with design */` |
| `focus.ring.color` | `color.brand.default` (#0068F5) | Applies to all components |

- Visible focus ring is mandatory on every interactive element, in every state where it can receive focus (including `selected`, `error`, `success`).
- `Enter` or `Space` activates a focused Button (not when `loading` or `disabled`).
- Typing while an Input is focused updates its value and keeps `focused`.
- Tab away from an Input: if it has a value → `pre-filled` (default size); if valid → `success`; if invalid → `error`.
- Modal/overlay components trap focus while open (cross-ref [Modal / MobileModal](#modal--mobilemodal)) and return focus to the trigger on close.
- The [Skip Link](#skip-link) is the first focusable element on every screen.

---

## Hover

- `default` → `hover` on pointer-over, for both Button and Input families.
- Apply `state-layer.hover` (8%) over the element's border/fill for components without an explicit hover token.
- Primary Button hover: background → `color.brand.hover`.
- Alternative Link Button hover: text color → `color.brand.hover` (background unchanged).
- Input hover: border → `color.brand.hover`.
- `disabled`, `loading`, and `read-only` elements never enter `hover`.
- Hover transitions use `motion.duration.base` (200ms) + `motion.easing.standard`.

---

## Pressed

- Button (Primary, or any `selected=true` toggle): pointer-down → `pressed`, background → `color.brand.pressed`. Apply `state-layer.pressed` (12%) for components without an explicit pressed token.
- Input: pointer-down → `active`, border → `color.brand.pressed`, then releases into `focused`. `read-only` Inputs never enter `active`.
- **`while-pressing`**: treat as `pressed` (`state-layer.pressed`) — the mid-transition state between `default`/`focused` and the released state.
- `pressed` is the canonical name for new components; Input's legacy `active` naming is retained as-is (not a renamed token — see [Governance Rules](#governance-rules) conflict log).

---

## Disabled

- Apply [Derivation Rule #4](#component-derivation-rules): `state-layer.disabled-content` (38%) over `color.disabled.bg`, content color → `color.text.disabled`.
- Set `aria-disabled="true"`; remove from hover/focus/pressed treatment.
- `disabled` Buttons take no action on activation; `disabled` Inputs are non-interactive.

---

## Loading

- Apply [Derivation Rule #3](#component-derivation-rules): replace label/content with a spinner (`icon.size.sm`/`icon.size.md`), preserve resting dimensions.
- Set `aria-busy="true"`; announce via `aria-live="polite"`.
- Spinner motion: continuous rotation, `motion.duration.slow` (300ms) + `motion.easing.standard`; becomes a static indicator under `prefers-reduced-motion: reduce`.
- On completion, transition to `default`, `success`, or `error` (cross-ref [Loading Indicator](#loading-indicator), [Feedback Components](#feedback-components)).

> **Reduced motion**: every rule in this section that specifies motion MUST
> degrade to `0ms`/instant under `prefers-reduced-motion: reduce` — this
> applies system-wide, including page/route transitions ([Screen-Level
> Accessibility](#accessibility-system)).

---

# Accessibility System

## ARIA Roles & Required Attributes

| Element | Role / Tag | Notes |
|---------|-----------|-------|
| Standard Button | `<button>` | Prefer native |
| Link Button / Link (navigation) | `<a href>` | Never `<a>` without `href` |
| FloatingButton, IconButton | `<button>` + `aria-label` | Required — icon-only |
| InputField | `<input type="...">` | Prefer native |
| TextArea | `<textarea>` | Prefer native |
| Field label | `<label for="...">` | Linked via `for`/`id` |
| Error message | `<span role="alert">` | Announced on appearance |
| Success message | `<span aria-live="polite">` | Announced politely |
| Form error summary | `<div role="alert">` | Heading + list of links — see [Form Error Summary](#form-error-summary) |
| Dropdown menu | `role="menu"` or `role="listbox"` | With `menuitem`/`option` children |
| Modal | `role="dialog"` / `role="alertdialog"` | `aria-modal="true"`, `aria-labelledby` |

| Attribute | Applied to | Value |
|-----------|-----------|-------|
| `aria-disabled` | Button, Input (`disabled` or `loading`) | `"true"` |
| `aria-pressed` | Toggle Button | `"true"`/`"false"` |
| `aria-haspopup` | DropdownButton, SplitButton trigger | `"menu"` or `"listbox"` |
| `aria-expanded` | DropdownButton, SplitButton trigger | `"true"`/`"false"` |
| `aria-label` | Icon-only Button, FloatingButton, ChatInput icons | Required when no visible label |
| `aria-busy` | Loading Button/Input, ProgressTimedButton | `"true"` during loading |
| `aria-describedby` | Input, TextArea | References helper/error/success message id |
| `aria-invalid` | Input, TextArea | `"true"` in error; `"false"` in success |
| `aria-required` | Input, TextArea (mandatory) | `"true"` |
| `aria-readonly` | Input, TextArea (read-only) | `"true"` |
| `aria-current` | Breadcrumbs (current page), Step Indicator (active step) | `"page"` / `"step"` |
| `aria-live` | Live regions | `"polite"` or `"assertive"` |

---

## Color Contrast (WCAG AA)

- Normal text: **4.5:1** minimum.
- Large text (18pt+/24px+, or bold 14pt+/18.66px+): **3:1** minimum.
- UI components (borders conveying state, icons): **3:1** minimum.
- Never use color alone to convey information — always pair with icon, label, or text.

**Key checks at implementation time**:

| Pair | Tokens | Status |
|------|--------|--------|
| Primary button | `#F5F9FF` on `#0068F5` | Verify 4.5:1 |
| Secondary/Input text | `#0C3058` on `#FFFFFF` | Verify 4.5:1 |
| Placeholder | `#466186` on `#FFFFFF` | Aim for 4.5:1 (not WCAG-required) |
| Focus ring | `#0068F5` on adjacent surfaces | Verify 3:1 |
| Secondary hover | `#0C3058` on `#0057CC` | **Flagged risk** — see [Governance Rules](#governance-rules) conflict log §12.4 |
| Feedback pairs | e.g. `#22510A` on `#F5FFEF` | Verify 4.5:1 |

---

## Touch Targets

- Minimum: **44×44px** (system baseline — stricter than WCAG 2.5.8's 24×24px absolute floor).
- Small icon-only controls (e.g. 32×32px visual) must expand their hit-area to 44×44px via padding or a pseudo-element, without changing visual size.
- Minimum spacing between adjacent targets: `space-400` (12px) — cross-ref [Button Grouping](#responsive-rules).

---

## Live Regions

| Trigger | Behavior |
|---------|----------|
| Input → `error` | `role="alert"` on the error message — assertive, interrupts |
| Input → `success` | `aria-live="polite"` on the success message |
| Button/Input → `loading` | `aria-live="polite"` + `aria-busy` |
| Recording start/stop | `aria-live="assertive"` on `recordingIndicator` |
| Dropdown open | `aria-expanded` change is sufficient — no separate live region |
| Toast/Snackbar appears | `aria-live="polite"` (or `"assertive"` for errors) — cross-ref [Toast/Snackbar](#toastsnackbar) |

**Rule**: use one live region per logical message channel — not one per field.

For forms with 2 or more fields that can error, use the [Form Error
Summary](#form-error-summary) component (Feedback Components). Per-field
errors remain inline via `aria-describedby` — the summary supplements, never
replaces, inline errors.

---

## Screen-Level Accessibility

| Aspect | Rule |
|--------|------|
| Landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`; exactly one `<main>` per screen |
| Skip link | [Skip Link](#skip-link) — first focusable element, visually hidden until focused, jumps to `<main>` |
| Heading hierarchy | Single `<h1>` per screen; no skipped levels |
| `lang` attribute | `<html lang="he">` / `<html lang="en">`, matching screen direction |
| Focus order vs visual order | DOM order IS the logical reading order — no CSS reordering |
| Modal focus containment | Modals (`z.modal`) trap focus within — cross-ref [Modal / MobileModal](#modal--mobilemodal) |
| Reduced motion (screen level) | Page/route transitions become instant under `prefers-reduced-motion` |

---

# RTL System

## Core Principles

- Apply `dir="rtl"` at the wrapper level whenever `rtl=true`.
- Use **logical CSS properties exclusively** — `padding-inline-start`, `margin-inline-end`, `inset-inline-start`, `border-inline-end`, etc. Never hardcode physical `left`/`right`.
- DOM order **is** the logical RTL reading order — never reorder visually with CSS alone.
- Mixed-direction content (URLs, numbers, codes) → `dir="auto"` on the `<input>` or wrapping `<span>`.
- `rtl` is a closed-set variant axis (`true`/`false`) on every interactive component — see [Naming Conventions](#naming-conventions) and [Component Architecture Rules #7](#component-architecture-rules).

## Mirroring Rules

| Element | RTL behavior |
|---------|--------------|
| Icon/label positions | Mirror (swap inline-start ↔ inline-end) |
| Dropdown chevron | Rotates per [open/expanded derivation](#component-derivation-rules) — rotation direction unaffected by `rtl` |
| Breadcrumb / pagination chevrons | Mirror (point toward reading-start) |
| Button group primary action | LTR → rightmost; RTL → leftmost (cross-ref [Button Grouping](#responsive-rules)) |
| ChatInput `recordingIndicator` | RTL-only sub-element (`size=big`, `state=recording`) |

## Content & Copy

- Hebrew is the primary language for government services — all copy defaults to Hebrew (RTL).
- English terms inline in Hebrew text must be wrapped in `<span lang="en" dir="ltr">`.
- Number and date formatting follows Hebrew conventions (e.g. date order DD/MM/YYYY).
- Buttons and field labels use standard Hebrew government terminology — do not translate informally.

---

# Layout System

## Grid

`/* PROVISIONAL — confirm with design */`

| Aspect | Value |
|--------|-------|
| Columns | 12 |
| Gutter | `space-600` (24px) |
| Margin — mobile | `space-600` (24px) |
| Margin — desktop | 64px |

---

## Breakpoints

`/* PROVISIONAL — confirm with design */`

### CSS Media-Query Breakpoints (canonical for responsive code)

| Token | Range |
|-------|-------|
| `breakpoint.mobile` | 0–599px |
| `breakpoint.tablet` | 600–1023px |
| `breakpoint.desktop` | 1024px+ |

### Reference Viewport Widths (Figma frames)

These are fixed design-canvas widths used in source mockups — most notably
for [Modal / MobileModal](#modal--mobilemodal)'s `mobile=true/false` split.
They are **reference points within** the ranges above, not a competing
breakpoint scale — see [Governance Rules](#governance-rules) conflict log
§12.10.

| Frame | Width | Maps to |
|-------|-------|---------|
| `Mobile-360` | 360px | `breakpoint.mobile` |
| `Tablet-784` | 784px | `breakpoint.tablet` |
| `Desktop-1440` | 1440px | `breakpoint.desktop` |
| `XL Desktop-1920` | 1920px | `breakpoint.desktop` |

---

## Responsive Rules

| Breakpoint | Input size | Button size | Button group | Grid cols | Container |
|-----------|-----------|------------|-------------|-----------|-----------|
| mobile | `small` | `small` | Vertical stack, full-width | 4 | 100% minus margins |
| tablet | `default` | `medium` | Horizontal | 8 | 600px or 100% |
| desktop | `default` or `big` | `medium` | Horizontal | 12 | 600px |

**Rule**: component **states** are identical across all breakpoints — only size, layout, and grouping change.

### Container Widths

`/* PROVISIONAL — confirm with design */`

| Token | Value | Notes |
|-------|-------|-------|
| `container.max-width.form` | 600px | Form containers, aligned per `rtl` |
| `container.max-width.content` | 1024px | Default content container, centered |
| `container.max-width.full` | none | Full-bleed sections |

### Form Spacing

| Relationship | Spacing |
|-------------|---------|
| Label → Input | `space-300` (8px) |
| Input → helper/error text | `space-300` (8px) |
| Field → next field | `space-600` (24px) |
| Field group → next field group | `space-700` (32px) |
| Section heading → first field | `space-600` (24px) |
| Form → action button row | `space-700` (32px) |

### Button Grouping

| Aspect | Rule |
|--------|------|
| Spacing between grouped buttons | `space-400` (12px) |
| Primary action placement (LTR) | Rightmost in group |
| Primary action placement (RTL) | Leftmost in group |
| Vertical stacking (narrow) | Primary on top; `space-300` between |
| Max actions per group | 3 — overflow goes into [DropdownButton](#dropdownbutton) |
| Alignment | Match the form's `inputControl` edge — do not center |

---

## Page Templates

`/* MISSING SPEC — clarification needed */`

No source document defines named page templates (e.g. "Form Page", "List
Page", "Dashboard"). Until specified, compose pages directly via the
[Screen Generation Framework](#screen-generation-framework) using:

- A single `<main>` landmark, `container.max-width.form` (600px) for
  form-centric government screens, `container.max-width.content` (1024px)
  for content/list screens.
- [Composition Patterns](#composition-patterns) below for recurring
  arrangements within those containers.

---

## Composition Patterns

| Pattern | Composition |
|---------|------------|
| **Form field** | `<label>` + `inputControl` (`space-300` gap) + helper/error/success text (`space-300` gap) — see [Form Spacing](#responsive-rules) |
| **Form section** | Section heading (`type.heading.h7.medium`+) + `space-600` + first field; `space-700` between field groups |
| **Action row** | [Button Grouping](#responsive-rules) — primary + up to 2 secondary actions, overflow → DropdownButton |
| **Multi-step form** | [Form Error Summary](#form-error-summary) at top + [Step Indicator](#step-indicator-wizard-progress) + form sections + action row |
| **List/grid of cards** | [List / ListItem / CardItemList](#listlistitemcarditemlist) within `grid.columns` (4/8/12 per breakpoint), `space-600` gutter |
| **Overlay** | [Modal / MobileModal](#modal--mobilemodal) over `color.overlay.scrim`, `z.modal`, focus-trapped |

---

# Screen Generation Framework

Use this when composing components into a full screen or page.

### Step 1 — Direction & Language
- Set `rtl` for the screen: Hebrew → `rtl=true`, English → `rtl=false`.
- Apply `dir` and `lang` at root. Mixed-direction inputs → `dir="auto"`. See [RTL System](#rtl-system).

### Step 2 — Layout Grid & Spacing
- Use [Grid](#grid) and [Breakpoints](#breakpoints).
- Use only [Spacing](#spacing) scale values for gaps, margins, and padding between components.
- Prefer flex/grid with `gap` over manual margins.

### Step 3 — Typography Hierarchy
- Use the [Foundation Type Scale](#typography) for headings/body; [Component-Level Typography](#typography) for in-component text.
- Single `<h1>` per screen. No skipped heading levels.

### Step 4 — Compose From Existing Components
- Use only components from [Component Taxonomy](#component-taxonomy) (and any additions made via the [Component Generation Framework](#component-generation-framework)).
- No ad-hoc buttons/inputs with custom styling.
- Pair every InputField/TextArea with a `<label>`, helper text, and `error`/`success` wiring.
- Apply [Form Spacing](#responsive-rules) and [Button Grouping](#responsive-rules).
- For multi-field forms: add [Form Error Summary](#form-error-summary).
- Select a [Composition Pattern](#composition-patterns) for each major region of the screen.

### Step 5 — State Coverage Per Screen
- Every interactive component needs: `default`, `hover`, `focused`, `disabled`, `loading` — see [States](#states).
- Form fields: implement `error`, `success`, `pre-filled` where applicable.
- Dropdown/menu triggers: implement both `open=false` and `open=true`.

### Step 6 — Accessibility Pass (Screen-Level)
- Verify DOM order matches visual order for the chosen direction.
- Verify a visible focus indicator on every interactive element.
- Verify contrast for all actual rendered color combinations.
- Verify touch targets with spacing.
- Check `prefers-reduced-motion` on all transitions.
- Verify live regions and error summary.
- Verify landmarks, skip link, and `lang` attribute — see [Screen-Level Accessibility](#accessibility-system).

### Step 7 — Elevation & Depth
- Cards/dropdowns/FABs/tooltips/modals: apply [Shadow Tokens](#elevation) per the [Surface↔Elevation Pairing](#elevation) table.
- Apply `z.*` tokens consistently from [Z-Index](#z-index).

### Step 8 — Document Additions
- Any new token, component, or pattern must follow the [Component Generation Framework](#component-generation-framework) before use.
- Do not silently introduce undocumented values — register via [Governance Rules](#governance-rules).

---

# Component Generation Framework

Use this when generating a **new** component, or formally specifying one
currently marked `/* MISSING SPEC — clarification needed */` in [Component
Taxonomy](#component-taxonomy).

### Step 1 — Identify Family & Anatomy
- Does an equivalent already exist in [Component Taxonomy](#component-taxonomy)? If yes, extend it — do not create a parallel component ([Component Architecture Rules #8](#component-architecture-rules)).
- Define an ASCII anatomy diagram listing every sub-element as required or conditional.
- Add new slot/component names to [Naming Conventions](#naming-conventions).

### Step 2 — Define Variant Axes
- Enumerate variant props using the normalized pattern from [Naming Conventions](#naming-conventions).
- List the **closed set** of allowed values per axis.
- Never invent a new value for an existing axis without flagging it.

### Step 3 — Map States to Tokens
- For every applicable state from [States](#states), define: background, text/icon, border, label color.
- Every color MUST come from [Colors](#colors) / [Semantic Colors](#semantic-colors) (including [Feedback Tokens](#semantic-colors)).
- For `loading`: apply [Derivation Rule #3](#component-derivation-rules) — `motion.duration.slow`/`motion.easing.standard` + `icon.size.sm`/`icon.size.md`.

### Step 4 — Apply Sizing & Spacing
- Padding/gap: values from the [Spacing](#spacing) foundation scale only.
- Radius: `radius.foundation.*` for non-Button/Input components — see [Radius](#radius).
- Build a Size table: size → typography token → padding → radius.

### Step 5 — Define Interaction Behavior
- Write interaction rules per [Interaction System](#interaction-system) structure (hover, focus, pressed, loading, error/success).
- Reuse the unified focus ring (`focus.ring.color`, `focus.ring.width`/`focus.ring.offset`) — see [Focus](#focus).
- Assign a `z.*` token from [Z-Index](#z-index) for any overlay-opening component.

### Step 6 — Define Accessibility Contract
- ARIA role from [ARIA Roles & Required Attributes](#accessibility-system).
- Required `aria-*` attributes per the same table.
- Keyboard support: Tab order, Enter/Space activation, Escape for overlays.
- Focus visibility ([Focus](#focus)) for every state.
- Touch target ([Touch Targets](#accessibility-system)) for every tappable element.
- Live regions and error summary if applicable.
- Icon ARIA labeling.

### Step 7 — RTL Pass
- Confirm `rtl=true` and `rtl=false` versions exist for every variant — see [RTL System](#rtl-system).
- Use logical CSS properties throughout.
- Confirm DOM order matches logical RTL reading order.

### Step 8 — Document & Register
- Add to [Component Taxonomy](#component-taxonomy) following the existing structure for its category (Input / Action / Feedback / Display / Navigation / Layout).
- If new tokens are introduced, add them to [Token Architecture](#token-architecture) and register in [Governance Rules](#governance-rules).

### Adding a New Token

| Situation | Action |
|-----------|--------|
| Need a shade of an existing semantic color | Reference the ramp in [Colors](#colors) at the needed step — no new raw hex |
| Need a font size between existing steps | Use the closer existing token from [Typography](#typography) — no interpolation |
| Need a one-off spacing value | Round to the nearest value in the [Spacing](#spacing) scale |
| Need a new feedback role | Check [Semantic Colors → Feedback Tokens](#semantic-colors) — `success`/`warning`/`error`/`info` likely already covers it |
| Need a new icon size | Use `icon.size.sm`–`icon.size.xl` ([Icons](#icons)); add a new step only if none fits the real geometry |
| Need a new stacking layer | Use the existing [Z-Index](#z-index) scale; insert between values only if justified |
| Pattern used 3+ times | Promote to [Component Taxonomy](#component-taxonomy) as a full component section per Steps 1–8 above |

---

# AI Generation Rules

> These are **hard constraints** for any AI generating code or designs from
> this document. They supersede equivalent rules in
> `design-system-master-v3.0.md` §8 and `DESIGN_SYSTEM.md` §7.

1. **Token-only styling.** Every color, font size, spacing, radius, shadow, motion, z-index, and icon-size value MUST reference a token from [Token Architecture](#token-architecture). No raw hex codes, arbitrary px, or ad-hoc durations.

2. **Closed variant sets.** Only generate `type`, `size`, `state`, `rtl`, `selected`, `open`/`expanded` values explicitly listed in [Naming Conventions](#naming-conventions) and [Component Taxonomy](#component-taxonomy). If a requested variant doesn't exist (e.g. "large button"), map to the closest existing size with a note, OR follow the [Component Generation Framework](#component-generation-framework) to formally extend the system — never silently fabricate.

3. **State completeness.** When generating an interactive component, implement at minimum: `default`, `disabled`, `focused` (with a visible focus ring per [Focus](#focus)), `hover`, `pressed`/`active`, and any component-specific states (`loading`, `error`, `success`, `read-only`, `selected`, `open`/`expanded`) defined for that component in [Component Taxonomy](#component-taxonomy).

4. **Provisional tokens must be flagged.** Any token marked `/* PROVISIONAL — confirm with design */` in [Token Architecture](#token-architecture) — including `color.border.error`, `focus.ring.offset`, all `motion.*`, all `z.*`, and Grid/Breakpoint/Container values — must carry that exact comment when used in generated output. See [Provisional Token Register](#governance-rules).

5. **RTL is not optional.** Every component must support both `rtl=true` and `rtl=false`. Use logical CSS properties (`padding-inline-start`, `margin-inline-end`, etc.). Never hardcode `left` or `right`. See [RTL System](#rtl-system).

6. **Accessibility is mandatory, not polish.** Apply [Accessibility System](#accessibility-system) rules at generation time: `aria-label` on icon-only controls, `aria-disabled`/`aria-busy` on loading/disabled, `aria-invalid`/`aria-describedby` on error/success inputs, `aria-readonly` on read-only inputs, live regions, and form error summary for multi-field forms.

7. **No `<a>`/`<button>` substitution.** Links that navigate → `<a href>`. In-page action triggers → `<button>`. See the `link` vs `link-button` vs `alternative-link-button` rule in [Naming Conventions](#naming-conventions) and [Component Derivation Rule #6](#component-derivation-rules).

8. **Resolve aliases, don't guess.** All color aliases are pre-resolved in [Colors](#colors) and [Semantic Colors](#semantic-colors). If a new alias is needed, derive it from the ramps in [Colors](#colors) and document it per [Adding a New Token](#component-generation-framework).

9. **Touch target compliance.** Any tappable element smaller than 44×44px visually must have an invisible hit-area expansion to 44×44px ([Touch Targets](#accessibility-system)). Maintain `space-400` (12px) between grouped buttons ([Button Grouping](#responsive-rules)).

10. **Conflict awareness.** Before deviating from a token table based on "what looks right," check [Governance Rules → Conflict Log](#governance-rules) — many values are already reconciled and are authoritative over any prior source.

11. **Naming consistency.** Use canonical patterns from [Naming Conventions](#naming-conventions) for any new tokens, props, or components. Do not rename existing tokens to match a new request.

12. **This document is the single source of truth.** `design.md` (this file) wins on all conflicts with `design-system-master-v3.0.md`, `DESIGN_SYSTEM.md`, or any other source file present in context.

13. **Never invent feedback colors.** Feedback states (`success`/`warning`/`error`/`info`) use only tokens from [Semantic Colors → Feedback Tokens](#semantic-colors). Do not create custom color values for these states.

14. **Prefer reuse over creation.** Before building a new component, check [Component Taxonomy](#component-taxonomy) and [Component Derivation Rules](#component-derivation-rules) — if a variant or derivation of an existing component solves the problem, use it. New components must go through the [Component Generation Framework](#component-generation-framework).

15. **Ask when spec is missing.** If a required variant, state, or layout is not defined in this document, output the literal string `/* MISSING SPEC — clarification needed */` rather than inventing a solution, and apply [Component Derivation Rules](#component-derivation-rules) as a non-binding fallback.

16. **Structure-only benchmarking.** Material Design 3 (or any external system) may inform *information architecture* (token categories, taxonomy shape, state models) when extending this document — never its *visual* values. IGDS color, type, shape, motion, and brand voice are authoritative and exclusive. See [Design Philosophy](#design-philosophy) — "Structure travels, style stays home."

---

# Validation Rules

Apply these checks to any AI-generated or human-authored output before it is
considered compliant with this design system. Modeled on the audit pattern
from `design-system-master-v3.0.md` §9.5.

| # | Check | Verify | Fail condition |
|---|-------|--------|-----------------|
| 1 | **Token reference** | Every color/spacing/radius/shadow/motion/z-index/icon-size value resolves to a token in [Token Architecture](#token-architecture) | Any raw hex, px (outside the [Foundation Dimension Constants](#spacing) allow-list), or ad-hoc duration |
| 2 | **Variant closure** | Every `type`/`size`/`state`/`rtl`/`selected`/`open` value exists in [Naming Conventions](#naming-conventions) or the component's own table | Any value not in the closed set, without a documented extension via [Component Generation Framework](#component-generation-framework) |
| 3 | **State completeness** | All states required by [AI Generation Rule #3](#ai-generation-rules) are implemented | Missing `default`, `disabled`, `focused`, `hover`, or `pressed`/`active` on an interactive component |
| 4 | **ARIA correctness** | Roles/attributes match [ARIA Roles & Required Attributes](#accessibility-system) | Missing `aria-label` on icon-only controls; missing `aria-invalid`/`aria-describedby`/`aria-busy`/`aria-readonly` where applicable |
| 5 | **RTL logical properties** | No physical `left`/`right`/`margin-left`/etc.; `dir`/`lang` set at root per [RTL System](#rtl-system) | Any physical-direction CSS property on a component with `rtl` as a variant axis |
| 6 | **Touch target** | Interactive elements ≥44×44px effective hit-area, ≥`space-400` (12px) apart | Any tappable element <44×44px without hit-area expansion |
| 7 | **Contrast** | Rendered color pairs meet [Color Contrast (WCAG AA)](#accessibility-system) ratios | <4.5:1 normal text, <3:1 large text/UI components, or color-only state signaling |
| 8 | **Naming consistency** | New tokens/components/props follow [Naming Conventions](#naming-conventions) | Renamed existing token, or new name that doesn't match the canonical pattern |
| 9 | **MISSING SPEC flagging** | Any unspecified variant/state/component outputs the literal string `/* MISSING SPEC — clarification needed */` | Silent invention of layout, copy, or behavior not in this document |
| 10 | **Provisional flagging** | Any token marked PROVISIONAL in [Token Architecture](#token-architecture) carries `/* PROVISIONAL — confirm with design */` when used | Provisional token used without the comment |
| 11 | **Reduced motion** | All motion (transitions, spinners, route changes) degrades to instant under `prefers-reduced-motion: reduce` | Motion with no reduced-motion fallback |
| 12 | **Visual-language isolation** | No Material Design (or other external system) color/type/shape/motion values appear in output | Any non-IGDS visual token introduced — violates [AI Generation Rule #16](#ai-generation-rules) |

---

# Governance Rules

## Authority Order

When generating code or designs, resolve ambiguity in this priority order:

1. **[Token Architecture](#token-architecture)** — canonical values, no overrides.
2. **[Component Taxonomy](#component-taxonomy)** — state/token mapping tables.
3. **[Interaction System](#interaction-system) / [Accessibility System](#accessibility-system) / [RTL System](#rtl-system)** — behavior rules.
4. **[Layout System](#layout-system)** — composition and responsive rules.
5. **[Screen Generation Framework](#screen-generation-framework) / [Component Generation Framework](#component-generation-framework)** — for new work.
6. **[AI Generation Rules](#ai-generation-rules) / [Validation Rules](#validation-rules)** — enforcement at generation and review time.

**Never invent a token, color, spacing value, or radius not listed in
[Token Architecture](#token-architecture). Never invent a state, variant, or
sub-element not listed in [Component Taxonomy](#component-taxonomy).**

Where this document is silent, `design-system-master-v3.0.md` and
`DESIGN_SYSTEM.md` may be consulted for historical provenance only — never
for new generation (see front matter `supersedes`).

---

## Brand Identity Preservation Directive

This directive is binding for all current and future maintenance of this
document:

1. **IGDS visual language is exclusive and final.** Color ramps ([Colors](#colors)), typography ([Typography](#typography)), shape ([Radius](#radius)), elevation ([Elevation](#elevation)), motion ([Motion](#motion)), and content voice ([Content & Voice — see provenance in `design-system-master-v3.0.md` §7]) originate solely from IGDS source files (`IGDS.tokens.json`, `DESIGN_pattern.md`, `DESIGN_atoms.md`, SPEC files).
2. **External systems are structural references only.** Material Design 3 (or any future benchmark system) may inform information architecture — token category names, taxonomy shape, state-modeling patterns, derivation logic — when a structural gap is identified. Its color/type/shape/motion *values* are never imported.
3. **New tokens derive from existing ramps.** Per [Component Generation Framework → Adding a New Token](#component-generation-framework), any new token must be a reference into an existing IGDS ramp/scale — never a new raw value borrowed from an external system.
4. **Additions inspired by structural benchmarking must be marked.** Tokens or patterns added because a structural gap was found (e.g. [Surface & Container Tokens](#semantic-colors), [Interaction State-Layer Opacity Tokens](#semantic-colors), [Typographic Role Mapping](#typography)) are labeled **NEW (4.0.0)** and use only IGDS-derived values — see [Conflict Log](#governance-rules) §12.14.

---

## Versioning Policy

`spec_version` follows semantic versioning:

| Bump | Meaning | Example |
|------|---------|---------|
| **MAJOR** | Breaking restructure: required top-level sections change, taxonomy reorganized, or a previously-canonical token/component is removed or renamed without alias | v3.0.0 → v4.0.0 |
| **MINOR** | Additive: new components, new tokens (derived per [Adding a New Token](#component-generation-framework)), new MISSING SPEC registrations, resolved PROVISIONAL tokens | v4.0.0 → v4.1.0 |
| **PATCH** | Non-structural: typo fixes, clarified wording, corrected cross-references — no token value or taxonomy change | v4.0.0 → v4.0.1 |

Every version bump MUST add an entry to the front-matter `changelog` and, if
it resolves, adds, or supersedes a rule, an entry to the [Conflict
Log](#governance-rules) below.

---

## Conflict Log

### Carried Forward from `design-system-master-v3.0.md` §12

| # | Conflict | Resolution | Status |
|---|----------|-----------|--------|
| 12.1 | Button medium horizontal padding: 24px (spec) vs 20px (geometry) | **20px horizontal / 12px vertical** — component geometry is ground truth | Incorporated — [Action Components → Button](#action-components) |
| 12.2 | Radius naming collision: `radius-s` (6px) vs `radius-sm` (5px) | Retained as distinct namespaces: `radius.component.*` vs `radius.foundation.*` | Incorporated — [Radius](#radius). 4.0.0 further reclassified `radius-sm` (5px) into `border.hairline.*` — see §12.11 |
| 12.3 | Input error-state border undefined in source | Provisional `color.border.error` = `#EB4A4B`, aliased as `color.feedback.error.default` | Incorporated — [Semantic Colors](#semantic-colors); still PROVISIONAL, see [Provisional Token Register](#governance-rules) |
| 12.4 | Secondary Button hover contrast risk (dark text on `color.brand.hover` bg) | Preserved as specified; **verify contrast before shipping**. Likely fix: hover text → `color.text.inverted-subtle-primary` (needs design confirmation) | Open risk — [Action Components → Button](#action-components), [Color Contrast](#accessibility-system) |
| 12.5 | Touch target: 24×24px (WCAG 2.5.8 floor) vs 44×44px (project baseline) | Adopted **44×44px** as system baseline | Incorporated — [Touch Targets](#accessibility-system) |
| 12.6 | `pressed` vs `active` naming | `pressed` canonical for new components; Input's `active` retained as legacy alias | Incorporated — [Pressed](#pressed) |
| 12.7 | `link` / `link-button` / `alternative-link-button` ambiguity | Disambiguated via comparison table + 3-step selection rule | Incorporated — [Action Components → Button](#action-components), [Component Derivation Rule #6](#component-derivation-rules) |
| 12.8 | Shadow token format (spec vs foundation) | Adopted CSS `box-shadow` strings as canonical | Incorporated — [Elevation](#elevation) |
| 12.9 | Provisional tokens introduced in v2.0.0 | `focus.ring.offset`, all `motion.*`, all `z.*`, grid/breakpoint/container values remain provisional; `focus.ring.width` and `icon.size.*` are not | Incorporated — [Provisional Token Register](#governance-rules) |

### Carried Forward from `DESIGN_SYSTEM.md` §0

| # | Conflict | Resolution | Status |
|---|----------|-----------|--------|
| DS-1 | Named IGDS reference palette vs. generic secondary palette (`accent-*`, `text-primary=#151515`, `space-1`–`space-230`, `radius-sm*` in `DESIGN_atoms.md` §3–5/§11) | Named IGDS palette is canonical; generic palette excluded, except shadow/elevation rgba translations (consistent, retained) | Incorporated — [Colors](#colors), [Elevation](#elevation) |
| DS-2 | Touch target 24×24 vs 44×44 | Duplicate of §12.5 — 44×44px canonical | Merged into §12.5 |
| DS-3 | Unresolved color aliases across SPEC files | All aliases resolved via `IGDS.tokens.json` | Incorporated — [Colors](#colors), [Semantic Colors](#semantic-colors) |
| DS-4 | Generic state-treatment guidance (`DESIGN_atoms.md` §8) vs per-component state→token mappings | Per-component explicit mappings are canonical; generic guidance discarded | Incorporated — [Component Taxonomy](#component-taxonomy) |
| DS-5 | "Toogle-base" typo in `DESIGN_atoms.md` | Corrected to `Toggle` | Incorporated — [Input Components → Toggle/Switch](#input-components) (MISSING SPEC) |
| DS-6 | "No motion tokens defined" (`DESIGN_pattern.md`) vs master's provisional motion tokens | Master's provisional `motion.*` tokens retained as canonical; DS-6 gap superseded | Incorporated — [Motion](#motion) |

### New in v4.0.0

| # | Conflict / Change | Resolution |
|---|---|---|
| 12.10 | Two breakpoint scales: CSS media-query ranges (`breakpoint.mobile/tablet/desktop`, master §3.2) vs. Figma reference frame widths (`Mobile-360`/`Tablet-784`/`Desktop-1440`/`XL Desktop-1920`, `DESIGN_SYSTEM.md` §1.7) | CSS ranges remain the canonical responsive-code breakpoints; frame widths are reference viewports **within** those ranges, used primarily for [Modal / MobileModal](#modal--mobilemodal)'s `mobile=true/false` split. Both retained — see [Breakpoints](#breakpoints) |
| 12.11 | `radius-sm` (5px, foundation) duplicated the role of a hairline border width rather than a corner radius | Reclassified into a new `border.hairline.*` scale (0.5/1/2/3px); `radius.foundation.*` (2–100px+full) covers true corner radii only | [Radius](#radius) |
| 12.12 | `DESIGN_SYSTEM.md` §1.2 typography tokens used ad-hoc names (e.g. `Title/Small/Bold`, `Component/Title/Large/Bold`) not matching master's `type.{family}.{role}.{weight}` pattern | Renamed into canonical pattern (e.g. `type.title.small.bold`, `type.component.title-large.bold`); no values changed | [Typography](#typography) |
| 12.13 | `DESIGN_SYSTEM.md` §2.2 names ~15 additional components (Modal, Card family, List family, Checkbox, RadioButton, Toggle, ProgressBar, Divider, MediaPlaceholder, SplitButton, Badge, etc.) with no full specs in either source | Registered in [Component Taxonomy](#component-taxonomy) under the appropriate category, each marked `/* MISSING SPEC — clarification needed */` with [Component Derivation Rules](#component-derivation-rules) guidance | [Component Taxonomy](#component-taxonomy) — see [Gap Analysis](#governance-rules) below |
| 12.14 | Structural gap vs M3 benchmark: no surface/container tonal system, no state-layer opacity model, no typography role mapping, no formal derivation rules | Added, using only IGDS-derived values: [Surface & Container Tokens](#semantic-colors), [Interaction State-Layer Opacity Tokens](#semantic-colors), [Typographic Role Mapping](#typography), [Component Derivation Rules](#component-derivation-rules) — all marked **NEW (4.0.0)** | Closes structural gap identified in Phase 1 comparative analysis |

---

## Provisional Token Register

All tokens below require design confirmation before production use. AI
output referencing them MUST include the literal comment `/* PROVISIONAL —
confirm with design */` ([AI Generation Rule #4](#ai-generation-rules)).

| Token(s) | Current value | Location |
|----------|---------------|----------|
| `color.border.error` | `#EB4A4B` | [Semantic Colors](#semantic-colors) — §12.3 |
| `focus.ring.offset` | 2px | [Focus](#focus) — §12.9 |
| `motion.duration.fast/base/slow`, `motion.easing.standard/decelerate/accelerate` | 100/200/300ms; cubic-béziers | [Motion](#motion) — §12.9 |
| `z.base/dropdown/sticky/overlay/modal/toast/tooltip` | 0/100/200/300/400/500/600 | [Z-Index](#z-index) — §12.9 |
| Grid: columns, gutter, margins | 12 cols, `space-600` gutter, 24px/64px margins | [Grid](#grid) |
| `breakpoint.mobile/tablet/desktop` | 0–599 / 600–1023 / 1024+ | [Breakpoints](#breakpoints) |
| `container.max-width.form/content/full` | 600px / 1024px / none | [Responsive Rules](#responsive-rules) |

Not provisional (explicitly confirmed): `focus.ring.width` (2px), all
`icon.size.*`, all `space-*`, `radius.component.*`, `radius.foundation.*`,
`border.hairline.*`, all `shadow.*`.

---

## Gap Analysis

Phase 2 deliverable — classification of every open gap identified during the
Phase 1 comparative analysis and the [Component Taxonomy](#component-taxonomy)
build-out. **Critical** = blocks reliable AI generation. **Important** =
affects consistency but has a workable derivation. **Optional** = nice-to-have.

### Critical

| Gap | Why it's critical | Current mitigation |
|-----|--------------------|---------------------|
| [Toast/Snackbar](#toastsnackbar) | No spec anywhere; transient feedback is used across nearly every flow ([Live Regions](#accessibility-system) already assumes it exists) | MISSING SPEC + derivation guidance |
| [Card / StampedCard / FullPictureCard / FullPictureNameCard](#display-components) | Core building block for list/dashboard screens; zero anatomy or token mapping in either source | MISSING SPEC + known token anchors |
| [List / ListItem / CardItemList](#listlistitemcarditemlist) | Core building block for nearly all data-display screens | MISSING SPEC + known token anchors |
| [Breadcrumbs](#breadcrumbs) | Essential for the multi-step government flows that are this system's primary use case | MISSING SPEC + derivation guidance |
| [Modal / MobileModal](#modal--mobilemodal) full interaction table | Token anchors are known, but open/close transitions, initial focus target, and footer composition are not | Known anchors documented; interaction table MISSING SPEC |

### Important

| Gap | Why it matters | Current mitigation |
|-----|------------------|---------------------|
| [Checkbox](#input-components), [RadioButton](#input-components), [Toggle/Switch](#input-components) | Common form inputs with no full state/token spec | MISSING SPEC + derivation tables |
| [ProgressBar](#progressbar) | Used for uploads and multi-step flows ([Step Indicator](#step-indicator-wizard-progress) depends on it) | MISSING SPEC + derivation guidance |
| [Badge/Tag](#badgetag) | Used inside Cards/Lists/Step Indicator | MISSING SPEC + derivation guidance |
| [Tabs](#tabs), [Pagination](#pagination), [Step Indicator](#step-indicator-wizard-progress) | Common navigation patterns, currently undefined | MISSING SPEC + derivation guidance |
| [ChatInput](#chatinput) auto-grow behavior | Anatomy defined, growth behavior undefined | MISSING SPEC |
| [Dropdown](#dropdown-selection-input--panel) tags/active-filterable variant | Anatomy defined, multi-select/filter behavior undefined | MISSING SPEC + derivation guidance |
| [SplitButton](#splitbutton), [DropdownButton](#dropdownbutton), [ProgressTimedButton](#progresstimedbutton) | Anatomy/cross-refs defined, full state coverage incomplete | MISSING SPEC + derivation guidance |
| [MediaPlaceholder](#mediaplaceholder), [Divider](#divider) | Layout helpers with no token mapping | MISSING SPEC + derivation guidance |
| [Page Templates](#page-templates) | No named page-level templates exist | Composition Patterns provided as interim guidance |

### Optional

| Gap | Notes |
|-----|-------|
| Additional accent ramps (`cyan`, `science-blue`, `ocean-blue`, `starry-night`, `alice-blue`, `Ice-blue`, `snow-gray`, `eclipse-blue`) | Present in [Colors](#colors) reference ramps but have no documented usage context — retained for completeness, not yet mapped to semantic roles |
| Grid / Breakpoint / Container / Motion / Z-Index confirmation | Tracked centrally in [Provisional Token Register](#governance-rules) — resolving these is a design-team task, not a structural gap |
| `icon.size.lg`/`icon.size.xl` usage guidance beyond Modal/FAB | New in 4.0.0; additional usage contexts may be documented as they arise |

### Resolved in v4.0.0 (Phase 1 structural gaps vs. M3, closed by Phase 3)

| Former gap | Resolution |
|-----------|-----------|
| No surface/container tonal elevation system | [Surface & Container Tokens](#semantic-colors) added |
| No state-layer opacity model for interaction states | [Interaction State-Layer Opacity Tokens](#semantic-colors) added |
| No role-based typography mapping (display/headline/title/body/label) | [Typographic Role Mapping](#typography) added |
| No formal component derivation/reuse rules | [Component Derivation Rules](#component-derivation-rules) added |
| No explicit component architecture contract | [Component Architecture Rules](#component-architecture-rules) added |

---

*End of `design.md` v4.0.0.*

# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Antigravity Lab
**Theme:** Dreamy Space Glass (Glassmorphism + Neumorphic Glows)

---

## Global Rules

### Color Palette (DREAMY SPACE)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Background** | `#05070A` | `--color-background` | Deep space black-blue |
| **Titles (Gold)** | `#FCD34D` | `--color-accent` | **Amber/Gold** - Warm sun-like headers |
| **Primary Text** | `#FFFFFF` | `--color-foreground` | Pure white |
| **Secondary Text** | `#94A3B8` | `--color-muted` | Soft slate |
| **Glow (Warm)** | `#F59E0B` | `--glow-warm` | Orange/Gold radial glows |
| **Glow (Cool)** | `#06B6D4` | `--glow-cool` | Cyan/Teal radial glows |
| **Glass** | `rgba(255, 255, 255, 0.03)` | `--glass-bg` | High-blur translucent base |

---

## Component Specs

### 🌌 Dreamy Glass Cards
- **Blur**: `backrop-filter: blur(24px)`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)` (Top-left heavy)
- **Rounded**: `24px` to `32px` (Extra rounded as per images)
- **Shadow**: Soft outer glow corresponding to the accent color.

### 🔘 Neumorphic Accents
- Buttons should feel like "bubbles" or floating glass orbs.
- Use `box-shadow: inset ...` for depth.

### 🪐 Floating Planets (Background)
- Use absolute positioned `div` items with large `blur(100px)` to create the dreamy lighting seen in the images.

---

## Style Guidelines

**Style:** Dreamy, Futuristic, Premium

**Keywords:** Glassmorphism, Rounded, Soft-lighting, High-contrast Gold, Depth, Translucency.

**Anti-Patterns (STRICT):**
- ❌ **Sharp corners** — Always use `rounded-3xl` or more.
- ❌ **Solid colors** — Use gradients and transparency for everything.
- ❌ **Flat icons** — Use icons with subtle drop shadows or glows.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

---

## Component Specs

### Cards (Glass Morphism)

```css
.card-glass {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  transition: all 200ms ease;
  cursor: pointer;
}

.card-glass:hover {
  border-color: rgba(45, 212, 191, 0.5); /* teal */
  transform: translateY(-2px);
}
```

### Buttons

```css
/* Primary Button (Gold/Amber) */
.btn-primary {
  background: #F59E0B;
  color: #000;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #D97706;
  transform: translateY(-1px);
}

/* Secondary Button (Outline Teal) */
.btn-secondary {
  background: transparent;
  color: #2DD4BF;
  border: 2px solid #2DD4BF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Tables

```css
.table-glass {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.table-glass th {
  color: #94A3B8; /* muted */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-glass td {
  color: #FFFFFF; /* white */
}
```

---

## Style Guidelines

**Style:** Galaxy Dark / Space Theme

**Keywords:** Dark, space, galaxy, premium, high-contrast, glass morphism, neon accents, tech, futuristic

**Best For:** Developer tools, documentation sites, AI products, tech platforms

**Key Effects:** 
- Glass morphism cards (blur + transparency)
- Subtle glow on hover (teal/gold)
- Smooth transitions (200ms)
- Space/galaxy background image
- Pure black (#000) base color

---

## Anti-Patterns (Do NOT Use)

### ❌ Forbidden Patterns

- ❌ **Light backgrounds** — Always use pure black (#000) with galaxy image
- ❌ **Gray/muted primary text** — Primary text must be white (#FFF)
- ❌ **Low contrast colors** — Maintain high contrast for readability
- ❌ **Emojis as icons** — Use Lucide SVG icons only
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Instant state changes** — Always use transitions (150-300ms)

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] Background is pure black with galaxy image
- [ ] Primary text is white (#FFFFFF)
- [ ] Links use teal (#2DD4BF)
- [ ] CTAs use gold/amber (#F59E0B)
- [ ] Cards have glass morphism effect
- [ ] No emojis as icons (Lucide SVG only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Transitions are smooth (150-300ms)
- [ ] Dark theme ONLY (no light mode)
- [ ] Responsive: 375px, 768px, 1024px, 1440px

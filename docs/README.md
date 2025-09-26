GameVerse Codebase Documentation

Overview
- This document catalogs all public components, pages, and store APIs exposed by the project.
- Tech stack: Next.js (App Router), React, TypeScript, Tailwind CSS, Zustand, Lucide React.

Conventions
- All components are React Function Components.
- Components marked "use client" run on the client.
- Import paths use base alias `@` mapped to `src/`.

App
- `src/app/layout.tsx` (RootLayout)
  - Exports: `metadata`, `RootLayout(props)`
  - Usage: Wraps all pages with `Header`, `Footer`, and `<main>`.
  - Example:
    ```tsx
    // next/app layout is auto-wired by Next.js
    export const metadata = { title: 'BitStake Landing Page', description: 'Modern staking platform' };
    ```

- `src/app/page.tsx` (HomePage)
  - Exports: `HomePage()`
  - Renders sections: `Hero`, `Features`, `Classes`, `HowItWorks`, `Roadmap`, `CTA`.
  - Example:
    ```tsx
    import Hero from '@/components/home/Hero';
    export default function HomePage() {
      return (
        <main>
          <Hero />
          {/* ...other sections... */}
        </main>
      );
    }
    ```

Layout Components
- `src/components/layout/Header.tsx`
  - Client component. Uses `useMenuStore` for mobile menu state.
  - Public API: default export `Header()`.
  - Example:
    ```tsx
    import Header from '@/components/layout/Header';
    export default function Page() {
      return <Header />;
    }
    ```

- `src/components/layout/Footer.tsx`
  - Server-compatible component. Static footer links.
  - Public API: default export `Footer()`.
  - Example:
    ```tsx
    import Footer from '@/components/layout/Footer';
    export default function Page() {
      return <Footer />;
    }
    ```

Home Sections
- `src/components/home/Hero.tsx`
  - Client component. Displays headline, description, CTA button, and hero image.
  - Public API: default export `Hero()`.
  - Example:
    ```tsx
    import Hero from '@/components/home/Hero';
    <Hero />
    ```

- `src/components/home/Features.tsx`
  - Server-compatible. Lists feature cards with Lucide icons.
  - Public API: default export `Features()`.
  - Example:
    ```tsx
    import Features from '@/components/home/Features';
    <Features />
    ```

- `src/components/home/Classes.tsx`
  - Server-compatible. Shows three class cards using `next/image` fill.
  - Public API: default export `Classes()`.
  - Example:
    ```tsx
    import Classes from '@/components/home/Classes';
    <Classes />
    ```

- `src/components/home/HowItWorks.tsx`
  - Client component. Three-step process with Lucide icons.
  - Public API: default export `HowItWorks()`.
  - Example:
    ```tsx
    import HowItWorks from '@/components/home/HowItWorks';
    <HowItWorks />
    ```

- `src/components/home/Roadmap.tsx`
  - Client component. Milestones grid.
  - Public API: default export `Roadmap()`.
  - Example:
    ```tsx
    import Roadmap from '@/components/home/Roadmap';
    <Roadmap />
    ```

- `src/components/home/CTA.tsx`
  - Client component. Call-to-action section with link button.
  - Public API: default export `CTA()`.
  - Example:
    ```tsx
    import CTA from '@/components/home/CTA';
    <CTA />
    ```

State Management
- `src/store/useMenuStore.ts`
  - Zustand store for mobile menu state.
  - Public API: `useMenuStore` hook with shape `{ isOpen: boolean; toggle(): void; close(): void }`.
  - Usage:
    ```tsx
    'use client';
    import { useMenuStore } from '@/store/useMenuStore';
    export function MenuToggle() {
      const { isOpen, toggle, close } = useMenuStore();
      return (
        <>
          <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
          {isOpen && <button onClick={close}>Close menu</button>}
        </>
      );
    }
    ```

Assets
- Public images and SVGs are in `public/`. Reference with absolute `src` paths like `/hero-image.jpg`.

Styling
- Tailwind CSS classes are used across components. Global styles in `src/app/globals.css`.

Import Aliases
- Ensure `tsconfig.json` sets `baseUrl` and `paths` so `@/` resolves to `src/`.

Notes
- All listed components are currently prop-less. To extend, add typed props and export types alongside the component.


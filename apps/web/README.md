# Next.js + Base UI + PandaCSS Template

A modern React template with Next.js, Base UI, and PandaCSS for building design systems and applications.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Base UI** - Headless UI components
- **PandaCSS** - Build-time CSS-in-JS with design tokens
- **TypeScript** - Type safety
- **Storybook** - Component development
- **oxlint / oxfmt** - Fast linting and formatting

## Quick Start

```bash
# Install dependencies (from repository root)
pnpm install

# Generate PandaCSS styles
pnpm --filter @saving-pet/web prepare

# Start development server
pnpm dev:web
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm prepare      # Generate PandaCSS styles
pnpm lint         # Run oxlint
pnpm format       # Format code with oxfmt
pnpm storybook    # Start Storybook
pnpm studio       # Launch Panda Studio (design tokens editor)
```

## Project Structure

```
src/
  components/
    primitives/        # Reusable UI components
      Button/
      Select/
styled-system/         # Generated PandaCSS files
panda.config.ts        # PandaCSS configuration
```

## Features

- 🎨 **Design System Ready** - Built-in design tokens and theming
- 🧩 **Primitive Components** - Button, Select with shorthand props support
- 📱 **Responsive** - 8px grid system with responsive utilities
- ♿ **Accessible** - Base UI components with built-in accessibility
- 🔧 **Developer Experience** - TypeScript, Storybook, hot reload

## Usage Example

```tsx
import { Button, Select } from "@/components/primitives";

// Use shorthand props (mt, px, py, etc.)
<Button
  variant="primary"
  mt="lg"
  px={4}
  onClick={() => {}}
>
  Click me
</Button>

<Select
  items={options}
  placeholder="Choose option"
  mt="md"
  onValueChange={handleChange}
/>
```

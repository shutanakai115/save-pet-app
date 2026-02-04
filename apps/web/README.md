# Next.js + ArkUI + PandaCSS Template

A modern React template with Next.js, ArkUI, and PandaCSS for building design systems and applications.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **ArkUI** - Headless UI components  
- **PandaCSS** - Build-time CSS-in-JS with design tokens
- **TypeScript** - Type safety
- **Storybook** - Component development
- **Biome** - Fast linting and formatting

## Quick Start

```bash
# Install dependencies
npm install

# Generate PandaCSS styles
npm run prepare

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run prepare      # Generate PandaCSS styles
npm run lint         # Run Biome linter
npm run format       # Format code with Biome
npm run storybook    # Start Storybook
npm run studio       # Launch Panda Studio (design tokens editor)
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
- ♿ **Accessible** - ArkUI components with built-in accessibility
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

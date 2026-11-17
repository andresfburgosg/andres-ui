# Andres UI

A React component library in progress, built around reusable interface components and a token-based styling system. The project currently focuses on a configurable `Button` component, with Storybook stories and tests for exploring its variants and behavior.

## Highlights

- **Composable button styles:** choose a visual variant, size, density, corner radius, elevation, and full-width layout.
- **Useful states:** disabled and loading states, plus optional leading or icon-only Material icons.
- **Design tokens:** primitive color palettes map to semantic colors, with light defaults and a `.dark` theme.
- **Interactive component docs:** Storybook provides a playground and examples for button variants, sizes, states, icons, and interactions.
- **Typed React API:** components and variants are written in TypeScript.

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · Storybook · Vitest

## Getting started

Requires Node.js and npm.

```bash
git clone https://github.com/andresfburgosg/andres-ui.git
cd andres-ui
npm install
```

Run the Vite app:

```bash
npm run dev
```

Open Storybook to browse and interact with the components:

```bash
npm run storybook
```

## Button example

The component is available from `src/components/Button`. Include the project stylesheet so its component classes and design tokens are applied.

```tsx
import { Button } from './components/Button'
import './styles/main.css'

export function Actions() {
  return (
    <div className="flex gap-3">
      <Button variant="primary" onClick={() => console.log('Saved')}>
        Save changes
      </Button>
      <Button variant="secondary" prevIcon="close">
        Cancel
      </Button>
      <Button variant="primary" loading>
        Saving
      </Button>
    </div>
  )
}
```

`Button` also accepts standard HTML button attributes. Its design props include:

| Prop | Options |
| --- | --- |
| `variant` | `default`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info` |
| `size` | `xs`, `sm`, `md`, `lg`, `xl` |
| `density` | `reduced`, `comfortable`, `default` |
| `rounded` | `zero`, `xs`, `sm`, `default`, `lg`, `xl` |
| `elevation` | `0`, `2`, `3`, `4`, `5` |
| `fullWidth` | `true` or `false` |
| `loading`, `disabled` | `true` or `false` |
| `prevIcon` | Material icon name displayed before the button label |
| `icon` | `true` for an icon-only button; use with `prevIcon` to choose the icon |

## Design tokens and themes

Styles are organized under `src/styles`: primitive tokens define the color palette, semantic tokens assign design roles, and theme tokens override semantic values for dark mode. Apply the `dark` class to an ancestor to use the dark theme:

```html
<div class="dark">
  <!-- themed UI -->
</div>
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the app |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build the Storybook site |
| `npm test` | Run Vitest in watch mode |
| `npm run test:storybook` | Run the Storybook Vitest project |

## Project status

This repository is an actively developing UI library. The current implementation includes a Button component, a dynamic Material icon helper, design tokens, and Storybook examples. It is not yet configured as a published npm package.

## Author

Created by [Andres Burgos](https://github.com/andresfburgosg).

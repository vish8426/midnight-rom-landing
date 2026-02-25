# Midnight ROM - Landing Page

An immersive landing page for Midnight ROM, an automotive photography and cinematography brand. Features stunning visual effects including animated shader gradients, twinkling stars, and ransom-style text.

## 🎨 Features

- **Animated Shader Gradient Background** - Dynamic 3D gradient sphere using Three.js
- **Twinkling Star Field** - Custom canvas-rendered 8-pointed stars with glow effects
- **Ransom-Style Typography** - Custom "Midnight ROM" text with unique letterforms
- **Glass Morphism UI** - Modern frosted glass button design
- **Smooth Animations** - Fade-in effects and floating animations
- **Fully Responsive** - Optimized for all screen sizes

## 🚀 Tech Stack

- **React** + **TypeScript** + **Vite**
- **Framer Motion** - Animation library
- **ShaderGradient** - WebGL gradient animations
- **React Router** - Client-side routing
- **CSS3** - Custom animations and effects

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/vish8426/midnight-rom-landing.git

# Navigate to project directory
cd midnight-rom-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🔧 Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com) with automatic deployments from the main branch.

## 📝 Project Structure
```
automotive-portfolio/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Stars.tsx    # Star field canvas
│   │   └── Ransomizer.tsx  # Ransom-style text
│   ├── pages/           # Page components
│   │   └── LandingPage.tsx
│   └── App.tsx          # Main app component
├── public/              # Static assets
└── package.json
```

## 🎯 Features in Detail

### Shader Gradient
Powered by `@shadergradient/react`, creates a dynamic 3D sphere with customizable colors and animations.

### Star Field
Custom HTML5 Canvas implementation with:
- 800 individual stars
- 8-pointed star shapes
- Glow effects
- Slow twinkling animation

### Typography
Ransom-style "MIDNIGHT ROM" text with:
- Individual letter styling
- Hover effects
- Fade-in animation
- Custom fonts from Google Fonts
- Animated background

## 🔗 Links

- **Live Site:** [Your Vercel URL]
- **Main Portfolio:** [Your Framer Site URL]

## 👤 Author

**Vishant** - [GitHub](https://github.com/vish8426)

## 📄 License

This project is private and proprietary.

---

*Midnight ROM - Cinematography Through Emotion 💿*

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

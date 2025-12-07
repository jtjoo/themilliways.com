# themilliways.com

Official website for **themilliways** (Jintae Joo) - South Korean artist, composer, and audio engineer.

## 🛠 Tech Stack

- **[React 18](https://react.dev/)** - Component-based UI library
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Sass/SCSS](https://sass-lang.com/)** - CSS preprocessor with variables and nesting

## 📁 Project Structure

```
themilliways.com/
├── public/
│   └── images/              # Static assets (album art, logos, etc.)
├── src/
│   ├── components/          # React components
│   ├── context/             # React Context (language state)
│   ├── data/                # Static data (translations)
│   └── styles/              # SCSS + Tailwind styles
├── index.html               # Original static HTML (backup)
├── index-vite.html          # Vite entry HTML
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jtjoo/themilliways.com.git
cd themilliways.com

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173/index-vite.html](http://localhost:5173/index-vite.html) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Documentation

- [Components Guide](./src/components/README.md) - React component documentation
- [Styles Guide](./src/styles/README.md) - SCSS + Tailwind styling guide
- [Translations](./src/data/README.md) - Multi-language support

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark BG | `#13001A` | Background |
| Yellow | `#F2D143` | Highlights, titles |
| Pink | `#FF56FF` | Primary accent, links |
| Purple | `#C994FE` | Secondary accent |
| Blue | `#7DBCFB` | Links, social |
| Text Gray | `#C0C6CC` | Body text |

### Using Colors

**In SCSS:**
```scss
.my-element {
  color: $pink-color;
  background: $background-color;
}
```

**In Tailwind:**
```jsx
<div className="text-milliways-pink bg-dark-bg">
```

## 🌐 Multi-language Support

The site supports English and Korean. Language preference is stored in `localStorage`.

Toggle language using the button at the top of the page, or programmatically:

```jsx
import { useLanguage } from './context/LanguageContext';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return <p>{t.tagline}</p>;
}
```

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM renderer

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility CSS framework
- `postcss` - CSS processor
- `autoprefixer` - CSS vendor prefixes
- `sass` - SCSS preprocessor

## 🔗 Useful Links

- **Vite Documentation**: https://vitejs.dev/guide/
- **React Documentation**: https://react.dev/learn
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Sass Documentation**: https://sass-lang.com/documentation/

## 📝 License

© 2025 The Milliways (Jintae Joo). All rights reserved.

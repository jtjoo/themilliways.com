# React Components

This folder contains all React components for the themilliways website.

## 📁 Structure

```
components/
├── LanguageToggle.jsx    # Language switcher widget
├── Header.jsx            # Site header with title, tagline, bio
├── DisappearSection.jsx  # "Disappear" album section
├── BandcampSection.jsx   # Bandcamp promotion
├── PatreonSection.jsx    # Patreon support section
├── PaypalSection.jsx     # PayPal donation section
├── ThirdAirSection.jsx   # "3rd air" EP section
├── BlueskySection.jsx    # BlueSky social link
└── Footer.jsx            # Site footer with social links
```

## 🧩 Component Overview

### LanguageToggle
Toggle between English and Korean.

```jsx
import LanguageToggle from './components/LanguageToggle';

<LanguageToggle />
```

### Header
Main header with site title, tagline, and artist bio.

```jsx
import Header from './components/Header';

<Header />
```

### Content Sections
All content sections follow a similar pattern:

```jsx
import DisappearSection from './components/DisappearSection';
import BandcampSection from './components/BandcampSection';
import PatreonSection from './components/PatreonSection';
import PaypalSection from './components/PaypalSection';
import ThirdAirSection from './components/ThirdAirSection';
import BlueskySection from './components/BlueskySection';

<main className="container">
  <DisappearSection />
  <BandcampSection />
  <PatreonSection />
  <PaypalSection />
  <ThirdAirSection />
  <BlueskySection />
</main>
```

### Footer
Site footer with social links and copyright.

```jsx
import Footer from './components/Footer';

<Footer />
```

## 🌐 Using Translations

All components use the `useLanguage` hook to access translations:

```jsx
import { useLanguage } from '../context/LanguageContext';

export default function MyComponent() {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <h1>{t.mySection.title}</h1>
      <p>{t.mySection.description}</p>
    </div>
  );
}
```

### Rendering HTML in translations

Some translations contain HTML. Use `dangerouslySetInnerHTML`:

```jsx
<p dangerouslySetInnerHTML={{ __html: t.bio }} />
```

## 🎨 Styling Components

Components use a mix of:

1. **CSS classes** defined in SCSS files
2. **Tailwind utility classes**

```jsx
// Using SCSS class
<section className="content-block">

// Using Tailwind utilities
<img className="responsive-image max-w-[400px]" />

// Combining both
<h3 className="disappear-title highlight-purple">
```

## 📖 References

- [React Documentation](https://react.dev/learn)
- [React Hooks](https://react.dev/reference/react)
- [useContext Hook](https://react.dev/reference/react/useContext)

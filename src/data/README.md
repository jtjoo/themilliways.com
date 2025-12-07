# Data & Translations Guide

This folder contains translations and content data for the multi-language support.

## 📁 Structure

```
data/
└── translations.js    # All text content in English/Korean
```

## 🌍 How Multi-Language Works

1. **LanguageContext** (`src/context/LanguageContext.jsx`) manages the current language
2. **translations.js** stores all text in both languages
3. Components use the `useLanguage()` hook to access translations

### Language Flow
```
User clicks toggle → setLanguage() → Context updates → 
All components re-render → localStorage saves preference
```

## 📝 translations.js Structure

```javascript
const translations = {
  en: {
    // English translations
    tagline: "The English tagline",
    bio: "English biography...",
    // ... more keys
  },
  ko: {
    // Korean translations (same keys!)
    tagline: "한국어 태그라인",
    bio: "한국어 바이오그래피...",
    // ... same keys in Korean
  }
};
```

## ✏️ Adding New Translations

### Step 1: Add to translations.js

```javascript
const translations = {
  en: {
    // ... existing translations
    newSection: {
      title: "New Section Title",
      description: "New section description"
    }
  },
  ko: {
    // ... existing translations
    newSection: {
      title: "새 섹션 제목",
      description: "새 섹션 설명"
    }
  }
};
```

### Step 2: Use in Component

```jsx
import { useLanguage } from '../context/LanguageContext';

function NewSection() {
  const { t } = useLanguage();
  
  return (
    <section>
      <h2>{t.newSection.title}</h2>
      <p>{t.newSection.description}</p>
    </section>
  );
}
```

## 📋 Current Translation Keys

| Key | Type | Description |
|-----|------|-------------|
| `tagline` | string | Main site tagline |
| `taglineSub` | string | Sub-tagline |
| `bio` | string[] | Biography paragraphs (array) |
| `disappear.title` | string | Disappear section title |
| `disappear.description` | string | Disappear section description |
| `listenOn` | string | Listen button label |
| `bandcamp.title` | string | Bandcamp section title |
| `bandcamp.description` | string | Bandcamp section description |
| `patreon.title` | string | Patreon section title |
| `patreon.description` | string | Patreon section description |
| `patreon.button` | string | Patreon button text |
| `paypal.title` | string | PayPal section title |
| `paypal.description` | string | PayPal section description |
| `paypal.button` | string | PayPal button text |
| `thirdAir.title` | string | Third Air section title |
| `thirdAir.description` | string | Third Air section description |
| `bluesky.title` | string | Bluesky section title |
| `bluesky.description` | string | Bluesky section description |
| `bluesky.button` | string | Bluesky button text |
| `footer.links` | string | Footer links label |
| `footer.copyright` | string | Copyright text |
| `footer.contactLabel` | string | Contact label |
| `languageToggle.en` | string | English label |
| `languageToggle.ko` | string | Korean label |

## 🔍 Accessing Nested Translations

Translations can be nested for organization:

```javascript
// In translations.js
en: {
  footer: {
    links: "Links",
    copyright: "All rights reserved",
    contactLabel: "Contact"
  }
}

// In component
const { t } = useLanguage();
<span>{t.footer.links}</span>
<span>{t.footer.copyright}</span>
```

## 📚 Array Translations (Biography)

For content with multiple paragraphs:

```javascript
// In translations.js
en: {
  bio: [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph..."
  ]
}

// In component
{t.bio.map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}
```

## 🔧 LanguageContext API

### Hook: `useLanguage()`

Returns an object with:

| Property | Type | Description |
|----------|------|-------------|
| `language` | `'en'` \| `'ko'` | Current language code |
| `setLanguage` | `function` | Change language |
| `t` | `object` | Current translations object |

### Example Usage

```jsx
import { useLanguage } from '../context/LanguageContext';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <p>Current: {language}</p>
      <p>{t.tagline}</p>
      <button onClick={() => setLanguage('ko')}>Korean</button>
    </div>
  );
}
```

## 💾 Language Persistence

The selected language is saved to `localStorage`:

```javascript
// Automatically saved when language changes
localStorage.setItem('language', 'ko');

// Retrieved on page load
const saved = localStorage.getItem('language') || 'en';
```

## 🌐 Adding a New Language

### Step 1: Add language object

```javascript
const translations = {
  en: { /* ... */ },
  ko: { /* ... */ },
  ja: {  // New: Japanese
    tagline: "日本語のタグライン",
    bio: "日本語のバイオ...",
    // ... all other keys
  }
};
```

### Step 2: Update LanguageToggle component

Modify `src/components/LanguageToggle.jsx` to include the new language option.

## 📖 References

- [React Context API](https://react.dev/reference/react/useContext)
- [React useState Hook](https://react.dev/reference/react/useState)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [i18n Best Practices](https://www.w3.org/International/quicktips/)

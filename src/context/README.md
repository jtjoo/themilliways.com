# Context Guide

This folder contains React Context providers for global state management.

## 📁 Structure

```
context/
└── LanguageContext.jsx    # Language state management
```

## 🌍 LanguageContext

Manages the current language state and provides translations throughout the app.

### Provider Setup (in App.jsx)

```jsx
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      {/* All child components can access language */}
      <Header />
      <Footer />
    </LanguageProvider>
  );
}
```

### Using the Context

```jsx
import { useLanguage } from '../context/LanguageContext';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <p>{t.tagline}</p>
      <button onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}>
        Switch Language
      </button>
    </div>
  );
}
```

## 📖 API Reference

### `LanguageProvider`

The context provider component. Wrap your app with this.

**Props:**
- `children` - React children to render

**Features:**
- Initializes language from `localStorage` (defaults to `'en'`)
- Saves language preference to `localStorage` on change

### `useLanguage()`

Custom hook to access language context.

**Returns:**
```typescript
{
  language: 'en' | 'ko',           // Current language code
  setLanguage: (lang) => void,     // Function to change language
  t: TranslationsObject            // Translations for current language
}
```

## 🔧 How It Works

```jsx
// LanguageContext.jsx (simplified)

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Get translations for current language
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
```

## ➕ Creating New Contexts

If you need additional global state:

### Step 1: Create context file

```jsx
// src/context/ThemeContext.jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Step 2: Add provider to App.jsx

```jsx
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {/* Components */}
      </ThemeProvider>
    </LanguageProvider>
  );
}
```

### Step 3: Use in components

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

## 📖 References

- [React Context](https://react.dev/reference/react/createContext)
- [useContext Hook](https://react.dev/reference/react/useContext)
- [useState Hook](https://react.dev/reference/react/useState)
- [useEffect Hook](https://react.dev/reference/react/useEffect)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

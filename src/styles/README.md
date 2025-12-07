# Styles Guide

This folder contains all styling for the themilliways website using **SCSS + Tailwind CSS**.

## 📁 Structure

```
styles/
├── main.scss              # Main entry file (imports Tailwind + partials)
├── main.css               # Alternative pure Tailwind file (not used)
├── _variables.scss        # SCSS variables (colors, fonts, spacing)
├── _base.scss             # Base styles (reset, body, links)
├── _language-toggle.scss  # Language toggle widget styles
├── _header.scss           # Header and typography styles
├── _content.scss          # Content block and section styles
├── _buttons.scss          # Button styles
└── _footer.scss           # Footer styles
```

## 🎨 How It Works

The `main.scss` file imports both Tailwind and your SCSS partials:

```scss
// Tailwind CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

// SCSS Partials
@import 'variables';
@import 'base';
@import 'language-toggle';
// ... etc
```

## 📐 Variables (`_variables.scss`)

### Colors
```scss
$background-color: #13001A;
$yellow-color: #F2D143;
$pink-color: #FF56FF;
$purple-color: #C994FE;
$blue-color: #7DBCFB;
$text-gray: #C0C6CC;
$gold-color: #ffdd00;
```

### Fonts
```scss
$font-primary: Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$font-serif: "Georgia", "Times New Roman", serif;
$font-title: "dldt", "Georgia", serif;      // Adobe font
$font-subtitle: "ldlk", "Georgia", serif;   // Adobe font
$font-content: "bjpg", "Georgia", serif;    // Adobe font
```

### Spacing & Layout
```scss
$container-max-width: 900px;
$container-width: 90%;
$border-radius-sm: 5px;
$border-radius-md: 8px;
$border-radius-pill: 25px;
```

### Transitions
```scss
$transition-fast: 0.2s ease;
$transition-normal: 0.3s ease;
```

## 🔧 Using SCSS Variables

In any SCSS partial file:

```scss
.my-component {
  color: $pink-color;
  background-color: $background-color;
  font-family: $font-primary;
  border-radius: $border-radius-md;
  transition: all $transition-normal;
  
  &:hover {
    color: $purple-color;
  }
}
```

## 🌬 Using Tailwind Classes

### In JSX
```jsx
<div className="bg-dark-bg text-milliways-pink p-4 rounded-lg">
  Content
</div>
```

### Custom Tailwind Colors (from `tailwind.config.js`)
- `bg-dark-bg` / `text-dark-bg`
- `bg-milliways-yellow` / `text-milliways-yellow`
- `bg-milliways-pink` / `text-milliways-pink`
- `bg-milliways-purple` / `text-milliways-purple`
- `bg-milliways-blue` / `text-milliways-blue`
- `bg-text-gray` / `text-text-gray`
- `bg-gold` / `text-gold`

### Using @apply in SCSS
Mix Tailwind utilities with SCSS:

```scss
.my-component {
  @apply p-4 rounded-lg flex items-center;
  color: $pink-color;
  background: $background-color;
}
```

## 📝 Key CSS Classes

### Layout
- `.container` - Centered container with max-width
- `.content-block` - Section wrapper with bottom border

### Typography
- `.title` - Main site title
- `.tagline` - Subtitle/tagline
- `.bio` - Biography text
- `.text-description` - Content descriptions

### Highlights
- `.highlight-yellow` - Yellow text
- `.highlight-pink` - Pink text
- `.highlight-purple` - Purple text
- `.highlight-blue` - Blue text
- `.bold-underline` - Bold + underlined text

### Buttons
- `.button` - Primary button (pink gradient)
- `.button-footer` - Footer button (dark)

### Images
- `.responsive-image` - Responsive image with rounded corners

## ⚠️ Sass Deprecation Warnings

You may see deprecation warnings about `@import`. These are informational only and won't affect your build. To fix them in the future, migrate to `@use`:

```scss
// Old way (deprecated but still works)
@import 'variables';

// New way (future)
@use 'variables' as *;
```

See: [Sass @import Deprecation](https://sass-lang.com/documentation/at-rules/import)

## 📖 References

- [Sass Documentation](https://sass-lang.com/documentation/)
- [Sass Variables](https://sass-lang.com/documentation/variables)
- [Sass Nesting](https://sass-lang.com/documentation/style-rules#nesting)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind @apply Directive](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply)
- [Tailwind Custom Colors](https://tailwindcss.com/docs/customizing-colors)

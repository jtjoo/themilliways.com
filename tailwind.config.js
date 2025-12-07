/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index-vite.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#13001A',
        'milliways-yellow': '#F2D143',
        'milliways-pink': '#FF56FF',
        'milliways-purple': '#C994FE',
        'milliways-blue': '#7DBCFB',
        'text-gray': '#C0C6CC',
        'gold': '#ffdd00',
      },
      fontFamily: {
        'primary': ['Verdana', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'title': ['dldt', 'Georgia', 'Times New Roman', 'serif'],
        'subtitle': ['ldlk', 'Georgia', 'Times New Roman', 'serif'],
        'content': ['bjpg', 'Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        'container': '900px',
      },
    },
  },
  plugins: [],
}

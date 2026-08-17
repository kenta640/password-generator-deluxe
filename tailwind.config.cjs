const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ensure the slate palette is available for utility classes
        slate: colors.slate || colors.gray,
        // Provide a neutral alias for semantic usage
        neutral: colors.slate || colors.gray,
        accent: {
          DEFAULT: '#2563EB',
          50: '#eef5ff',
          100: '#e6f0ff',
          200: '#bcd7ff',
          300: '#8bb8ff',
          400: '#4f8fff',
          500: '#2563EB',
          600: '#1f4fd6',
          700: '#183fb0',
          800: '#123185',
          900: '#0b245d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};

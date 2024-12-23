/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Catppuccin Mocha Colors
        'ctp-rosewater': '#f5e0dc',
        'ctp-flamingo': '#f2cdcd',
        'ctp-pink': '#f5c2e7',
        'ctp-mauve': '#cba6f7',
        'ctp-red': '#f38ba8',
        'ctp-maroon': '#eba0ac',
        'ctp-peach': '#fab387',
        'ctp-yellow': '#f9e2af',
        'ctp-green': '#a6e3a1',
        'ctp-teal': '#94e2d5',
        'ctp-sky': '#89dceb',
        'ctp-sapphire': '#74c7ec',
        'ctp-blue': '#89b4fa',
        'ctp-lavender': '#b4befe',
        'ctp-text': '#cdd6f4',
        'ctp-subtext1': '#bac2de',
        'ctp-subtext0': '#a6adc8',
        'ctp-overlay2': '#9399b2',
        'ctp-overlay1': '#7f849c',
        'ctp-overlay0': '#6c7086',
        'ctp-surface2': '#585b70',
        'ctp-surface1': '#45475a',
        'ctp-surface0': '#313244',
        'ctp-base': '#1e1e2e',
        'ctp-mantle': '#181825',
        'ctp-crust': '#11111b',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '200% 50%',
            'backdrop-filter': 'blur(2px)',
          },
          '50%': {
            'background-position': '-200% 50%',
            'backdrop-filter': 'blur(4px)',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': '50% 200%',
            'backdrop-filter': 'blur(3px)',
          },
          '50%': {
            'background-position': '50% -200%',
            'backdrop-filter': 'blur(5px)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-position': '0% 50%',
            'backdrop-filter': 'blur(2px)',
          },
          '50%': {
            'background-position': '100% 50%',
            'backdrop-filter': 'blur(4px)',
          },
        },
      },
    },
  },
  plugins: [
    typography,
    aspectRatio,
  ],
}
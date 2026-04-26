
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: {
          950: '#000000',
          900: '#050505',
          800: '#0A0A0A',
          700: '#111111',
          600: '#1A1A1A',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          900: '#4C1D95',
        },
        glass: {
          5: 'rgba(255, 255, 255, 0.03)',
          10: 'rgba(255, 255, 255, 0.08)',
          20: 'rgba(255, 255, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(139, 92, 246, 0.5)',
        'glow-sm': '0 0 10px -2px rgba(139, 92, 246, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

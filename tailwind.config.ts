import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F6EF7',
        'primary-light': '#7B96FF',
        accent: '#F5C842',
        mint: '#3DDC97',
        dark: '#0B0E1A',
        bg: {
          dark: '#0B0E1A',
          light: '#F4F7FF',
          card: '#FFFFFF',
        },
        text: {
          primary: '#0D1117',
          secondary: '#6B7280',
          onDark: '#E8EEFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        'radius-lg': '24px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(79, 110, 247, 0.10)',
        strong: '0 8px 40px rgba(79, 110, 247, 0.18)',
        glow: '0 0 32px rgba(79, 110, 247, 0.35)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #E8EEFF 0%, #F4F7FF 60%, #D9E4FF 100%)',
        'gradient-blue': 'linear-gradient(135deg, #4F6EF7, #7B96FF)',
        'gradient-cta': 'linear-gradient(135deg, #0B0E1A 0%, #1A2040 100%)',
      }
    },
  },
  plugins: [],
}
export default config

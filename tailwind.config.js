/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(30 60% 97%)',
        foreground: 'hsl(0 0% 20%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(0 0% 20%)',
        primary: {
          DEFAULT: 'hsl(24 100% 63%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(30 80% 92%)',
          foreground: 'hsl(24 60% 35%)',
        },
        muted: {
          DEFAULT: 'hsl(30 40% 94%)',
          foreground: 'hsl(25 5% 45%)',
        },
        accent: {
          DEFAULT: 'hsl(30 80% 92%)',
          foreground: 'hsl(24 60% 35%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        border: 'hsl(30 30% 88%)',
        input: 'hsl(30 30% 88%)',
        ring: 'hsl(24 100% 63%)',
        success: 'hsl(130 54% 42%)',
      },
      borderRadius: {
        lg: '0.75rem',
        md: 'calc(0.75rem - 2px)',
        sm: 'calc(0.75rem - 4px)',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['ZCOOL KuaiLe', 'cursive'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

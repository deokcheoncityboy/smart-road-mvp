import type { Config } from 'tailwindcss';
import { designTokens } from './src/lib/design-tokens';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Smart Road Design System Colors
        primary: {
          50: designTokens.colors.primary[50],
          100: designTokens.colors.primary[100],
          200: designTokens.colors.primary[200],
          300: designTokens.colors.primary[300],
          400: designTokens.colors.primary[400],
          500: designTokens.colors.primary[500],
          600: designTokens.colors.primary[600],
          700: designTokens.colors.primary[700],
          800: designTokens.colors.primary[800],
          900: designTokens.colors.primary[900],
          DEFAULT: designTokens.colors.primary[500],
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          50: designTokens.colors.secondary[50],
          100: designTokens.colors.secondary[100],
          200: designTokens.colors.secondary[200],
          300: designTokens.colors.secondary[300],
          400: designTokens.colors.secondary[400],
          500: designTokens.colors.secondary[500],
          600: designTokens.colors.secondary[600],
          700: designTokens.colors.secondary[700],
          800: designTokens.colors.secondary[800],
          900: designTokens.colors.secondary[900],
          DEFAULT: designTokens.colors.secondary[500],
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          50: designTokens.colors.accent[50],
          100: designTokens.colors.accent[100],
          200: designTokens.colors.accent[200],
          300: designTokens.colors.accent[300],
          400: designTokens.colors.accent[400],
          500: designTokens.colors.accent[500],
          600: designTokens.colors.accent[600],
          700: designTokens.colors.accent[700],
          800: designTokens.colors.accent[800],
          900: designTokens.colors.accent[900],
          DEFAULT: designTokens.colors.accent[500],
          foreground: 'hsl(var(--accent-foreground))',
        },
        gray: {
          50: designTokens.colors.grayscale[50],
          100: designTokens.colors.grayscale[100],
          200: designTokens.colors.grayscale[200],
          300: designTokens.colors.grayscale[300],
          400: designTokens.colors.grayscale[400],
          500: designTokens.colors.grayscale[500],
          600: designTokens.colors.grayscale[600],
          700: designTokens.colors.grayscale[700],
          800: designTokens.colors.grayscale[800],
          900: designTokens.colors.grayscale[900],
          950: designTokens.colors.grayscale[950],
        },
        // Semantic colors
        success: designTokens.colors.semantic.success,
        warning: designTokens.colors.semantic.warning,
        error: designTokens.colors.semantic.error,
        info: designTokens.colors.semantic.info,
        // shadcn/ui colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: designTokens.typography.fontFamilies.sans,
        mono: designTokens.typography.fontFamilies.mono,
      },
      fontSize: designTokens.typography.fontSizes,
      fontWeight: designTokens.typography.fontWeights,
      lineHeight: designTokens.typography.lineHeights,
      letterSpacing: designTokens.typography.letterSpacings,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;

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
        // Smart Road Design System Colors - KOREATECH Blue 기반
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
        },
        // System colors
        success: designTokens.colors.system.success,
        warning: designTokens.colors.system.warning,
        danger: designTokens.colors.system.danger,
        accent: designTokens.colors.system.accent,
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
      spacing: designTokens.spacing,
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

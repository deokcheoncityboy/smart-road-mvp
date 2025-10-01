/**
 * Smart Road Design System Tokens
 * 
 * 이 파일은 Smart Road 프로젝트의 디자인 시스템 토큰을 정의합니다.
 * KOREATECH 학생들을 위한 지능형 학습·경력 관리 플랫폼의 브랜드 아이덴티티를 반영합니다.
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

/**
 * Primary Colors - 메인 브랜드 컬러
 * 신뢰성과 전문성을 강조하는 블루 계열
 */
export const primaryColors = {
  50: '#eff6ff',   // 매우 연한 블루
  100: '#dbeafe',  // 연한 블루
  200: '#bfdbfe',  // 중간 연한 블루
  300: '#93c5fd',  // 중간 블루
  400: '#60a5fa',  // 중간 진한 블루
  500: '#3b82f6',  // 메인 블루 (Primary)
  600: '#2563eb',  // 진한 블루
  700: '#1d4ed8',  // 매우 진한 블루
  800: '#1e40af',  // 어두운 블루
  900: '#1e3a8a',  // 가장 어두운 블루
} as const;

/**
 * Secondary Colors - 보조 브랜드 컬러
 * 성장과 발전을 상징하는 그린 계열
 */
export const secondaryColors = {
  50: '#f0fdf4',   // 매우 연한 그린
  100: '#dcfce7',  // 연한 그린
  200: '#bbf7d0',  // 중간 연한 그린
  300: '#86efac',  // 중간 그린
  400: '#4ade80',  // 중간 진한 그린
  500: '#22c55e',  // 메인 그린 (Secondary)
  600: '#16a34a',  // 진한 그린
  700: '#15803d',  // 매우 진한 그린
  800: '#166534',  // 어두운 그린
  900: '#14532d',  // 가장 어두운 그린
} as const;

/**
 * Accent Colors - 강조 컬러
 * 주의와 중요성을 나타내는 오렌지 계열
 */
export const accentColors = {
  50: '#fff7ed',   // 매우 연한 오렌지
  100: '#ffedd5',  // 연한 오렌지
  200: '#fed7aa',  // 중간 연한 오렌지
  300: '#fdba74',  // 중간 오렌지
  400: '#fb923c',  // 중간 진한 오렌지
  500: '#f97316',  // 메인 오렌지 (Accent)
  600: '#ea580c',  // 진한 오렌지
  700: '#c2410c',  // 매우 진한 오렌지
  800: '#9a3412',  // 어두운 오렌지
  900: '#7c2d12',  // 가장 어두운 오렌지
} as const;

/**
 * Grayscale Colors - 그레이스케일
 * 텍스트와 배경에 사용되는 중성 컬러
 */
export const grayscaleColors = {
  50: '#fafafa',   // 거의 흰색
  100: '#f5f5f5',  // 매우 연한 그레이
  200: '#e5e5e5',  // 연한 그레이
  300: '#d4d4d4',  // 중간 연한 그레이
  400: '#a3a3a3',  // 중간 그레이
  500: '#737373',  // 중간 진한 그레이
  600: '#525252',  // 진한 그레이
  700: '#404040',  // 매우 진한 그레이
  800: '#262626',  // 어두운 그레이
  900: '#171717',  // 가장 어두운 그레이
  950: '#0a0a0a',  // 거의 검은색
} as const;

/**
 * Semantic Colors - 의미적 컬러
 * 상태와 피드백을 나타내는 컬러
 */
export const semanticColors = {
  success: secondaryColors[500],
  warning: accentColors[500],
  error: '#ef4444',    // Red-500
  info: primaryColors[500],
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

/**
 * Font Families
 */
export const fontFamilies = {
  sans: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  mono: [
    'JetBrains Mono',
    'Fira Code',
    'Monaco',
    'Cascadia Code',
    'Roboto Mono',
    'Oxygen Mono',
    'Ubuntu Monospace',
    'Source Code Pro',
    'Fira Mono',
    'Droid Sans Mono',
    'Courier New',
    'monospace',
  ],
};

/**
 * Font Sizes - 타이포그래피 스케일
 * 1.125 (18px) 배수 기반의 모듈러 스케일
 */
export const fontSizes = {
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem',    // 72px
  '8xl': '6rem',      // 96px
  '9xl': '8rem',      // 128px
} as const;

/**
 * Font Weights
 */
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

/**
 * Line Heights
 */
export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

/**
 * Letter Spacing
 */
export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ============================================================================
// TYPOGRAPHY SCALE - 실제 사용을 위한 스케일
// ============================================================================

/**
 * Heading Typography Scale
 */
export const headingScale = {
  h1: {
    fontSize: fontSizes['5xl'],      // 48px
    fontWeight: fontWeights.bold,    // 700
    lineHeight: lineHeights.tight,   // 1.25
    letterSpacing: letterSpacings.tight, // -0.025em
  },
  h2: {
    fontSize: fontSizes['4xl'],      // 36px
    fontWeight: fontWeights.bold,    // 700
    lineHeight: lineHeights.tight,   // 1.25
    letterSpacing: letterSpacings.tight, // -0.025em
  },
  h3: {
    fontSize: fontSizes['3xl'],      // 30px
    fontWeight: fontWeights.semibold, // 600
    lineHeight: lineHeights.snug,    // 1.375
    letterSpacing: letterSpacings.normal, // 0em
  },
  h4: {
    fontSize: fontSizes['2xl'],      // 24px
    fontWeight: fontWeights.semibold, // 600
    lineHeight: lineHeights.snug,    // 1.375
    letterSpacing: letterSpacings.normal, // 0em
  },
  h5: {
    fontSize: fontSizes.xl,          // 20px
    fontWeight: fontWeights.medium,  // 500
    lineHeight: lineHeights.normal,  // 1.5
    letterSpacing: letterSpacings.normal, // 0em
  },
  h6: {
    fontSize: fontSizes.lg,          // 18px
    fontWeight: fontWeights.medium,  // 500
    lineHeight: lineHeights.normal,  // 1.5
    letterSpacing: letterSpacings.normal, // 0em
  },
} as const;

/**
 * Body Typography Scale
 */
export const bodyScale = {
  body: {
    fontSize: fontSizes.base,        // 16px
    fontWeight: fontWeights.normal,  // 400
    lineHeight: lineHeights.relaxed, // 1.625
    letterSpacing: letterSpacings.normal, // 0em
  },
  bodyLarge: {
    fontSize: fontSizes.lg,          // 18px
    fontWeight: fontWeights.normal,  // 400
    lineHeight: lineHeights.relaxed, // 1.625
    letterSpacing: letterSpacings.normal, // 0em
  },
  bodySmall: {
    fontSize: fontSizes.sm,          // 14px
    fontWeight: fontWeights.normal,  // 400
    lineHeight: lineHeights.normal,  // 1.5
    letterSpacing: letterSpacings.normal, // 0em
  },
  caption: {
    fontSize: fontSizes.xs,          // 12px
    fontWeight: fontWeights.normal,  // 400
    lineHeight: lineHeights.normal,  // 1.5
    letterSpacing: letterSpacings.wide, // 0.025em
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const designTokens = {
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
    accent: accentColors,
    grayscale: grayscaleColors,
    semantic: semanticColors,
  },
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    headingScale,
    bodyScale,
  },
} as const;

export default designTokens;

/**
 * Smart Road Design System Tokens V1.0
 * 
 * 이 파일은 Smart Road 프로젝트의 디자인 시스템 토큰을 정의합니다.
 * KOREATECH 학생들을 위한 지능형 학습·경력 관리 플랫폼의 브랜드 아이덴티티를 반영합니다.
 * 
 * 브랜드 핵심 가치: '성장', '신뢰', '내비게이션'
 * 슬로건: "데이터로 밝히는 너의 커리어 여정"
 */

// ============================================================================
// COLOR PALETTE - KOREATECH Blue 기반
// ============================================================================

/**
 * Primary Colors - KOREATECH Blue
 * 신뢰성과 기술 전문성을 나타내는 메인 컬러
 */
export const primaryColors = {
  50: '#DEEBFF',   // 매우 연한 블루
  100: '#B3D4FF',  // 연한 블루
  200: '#4C9AFF',  // 중간 연한 블루
  300: '#4C9AFF',  // 중간 블루
  400: '#0065FF',  // 중간 진한 블루
  500: '#0052CC',  // 메인 블루 (KOREATECH Blue)
  600: '#0052CC',  // 진한 블루
  700: '#003D99',  // 매우 진한 블루
  800: '#002966',  // 어두운 블루
  900: '#001A4D',  // 가장 어두운 블루
} as const;

/**
 * Grayscale - 명확한 정보 전달을 위한 그레이스케일
 * 체계적인 정보 위계를 표현
 */
export const grayscaleColors = {
  50: '#F4F5F7',   // Background
  100: '#F4F5F7',  // Background
  200: '#DFE1E6',  // Borders
  300: '#DFE1E6',  // Borders
  400: '#7A869A',  // Placeholder
  500: '#7A869A',  // Placeholder
  600: '#42526E',  // Body Text
  700: '#42526E',  // Body Text
  800: '#172B4D',  // Headings
  900: '#172B4D',  // Headings
} as const;

/**
 * System Colors - 목적별 시스템 컬러
 * 명확한 상태 표현을 위한 컬러
 */
export const systemColors = {
  success: '#00875A',   // 성공, 완료
  warning: '#FFAB00',   // 주의, 경고
  danger: '#DE350B',    // 오류, 위험
  accent: '#FFAB00',    // 강조, 포인트 컬러
} as const;


// ============================================================================
// TYPOGRAPHY
// ============================================================================

/**
 * Font Families - Pretendard 기반
 * 가독성이 뛰어난 한글 폰트 사용
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
 * Typography Scale - 역할별 타이포그래피
 * 명확한 정보 전달을 위한 체계적인 타이포그래피
 */
export const typography = {
  // Headings
  h1: {
    fontSize: '2.25rem',    // 36px
    fontWeight: '700',      // Bold
    lineHeight: '1.4',      // 140%
  },
  h2: {
    fontSize: '1.75rem',    // 28px
    fontWeight: '700',      // Bold
    lineHeight: '1.4',      // 140%
  },
  subtitle1: {
    fontSize: '1.25rem',    // 20px
    fontWeight: '600',      // SemiBold
    lineHeight: '1.5',      // 150%
  },
  // Body Text
  body1: {
    fontSize: '1rem',       // 16px
    fontWeight: '400',      // Regular
    lineHeight: '1.6',      // 160%
  },
  body1Medium: {
    fontSize: '1rem',       // 16px
    fontWeight: '500',      // Medium
    lineHeight: '1.6',      // 160%
  },
  body2: {
    fontSize: '0.875rem',   // 14px
    fontWeight: '400',      // Regular
    lineHeight: '1.6',      // 160%
  },
  body2Medium: {
    fontSize: '0.875rem',   // 14px
    fontWeight: '500',      // Medium
    lineHeight: '1.6',      // 160%
  },
  // Caption
  caption: {
    fontSize: '0.75rem',    // 12px
    fontWeight: '400',      // Regular
    lineHeight: '1.5',      // 150%
  },
} as const;

// ============================================================================
// SPACING SYSTEM
// ============================================================================

/**
 * Spacing System - 8px 기반 배수 시스템
 * 일관된 시각적 리듬감과 컴포넌트 간 위계 표현
 */
export const spacing = {
  '1x': '0.5rem',    // 8px
  '2x': '1rem',      // 16px
  '3x': '1.5rem',    // 24px
  '4x': '2rem',      // 32px
  '6x': '3rem',      // 48px
  '8x': '4rem',      // 64px
} as const;

// ============================================================================
// LAYOUT & GRID SYSTEM
// ============================================================================

/**
 * Layout System - 사이드 내비게이션 고정 레이아웃
 */
export const layout = {
  minWidth: '1280px',        // 최소 너비
  maxContentWidth: '1440px', // 최대 콘텐츠 너비
  sidebarWidth: '260px',     // 사이드 내비게이션 너비
  gridColumns: 12,           // 12 Column Grid System
  gutter: '24px',           // 그리드 간격
} as const;

// ============================================================================
// ICONOGRAPHY
// ============================================================================

/**
 * Icon System - Lucide Icons 기반
 */
export const iconography = {
  library: 'Lucide Icons',
  strokeWidth: '1.5px',
  style: 'Line-based',
  sizes: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const designTokens = {
  colors: {
    primary: primaryColors,
    grayscale: grayscaleColors,
    system: systemColors,
  },
  typography: {
    fontFamilies,
    scale: typography,
  },
  spacing,
  layout,
  iconography,
} as const;

export default designTokens;

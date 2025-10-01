/**
 * Smart Road Design System Tokens V2.0
 * 
 * 이 파일은 Smart Road 프로젝트의 디자인 시스템 토큰을 정의합니다.
 * KOREATECH 학생들을 위한 지능형 학습·경력 관리 플랫폼의 브랜드 아이덴티티를 반영합니다.
 * 
 * 브랜드 페르소나: 신뢰할 수 있는 커리어 멘토
 * 디자인 키워드: Reliable, Structured, Insightful, Empowering, Clarity
 */

// ============================================================================
// COLOR PALETTE - 신뢰할 수 있는 커리어 멘토
// ============================================================================

/**
 * Primary Colors - Deep Blue (#0A3D62)
 * 신뢰성과 전문성을 나타내는 메인 컬러
 */
export const primaryColors = {
  50: '#E8F4FD',   // 매우 연한 블루
  100: '#D1E9FB',  // 연한 블루
  200: '#A3D3F7',  // 중간 연한 블루
  300: '#75BDF3',  // 중간 블루
  400: '#47A7EF',  // 중간 진한 블루
  500: '#0A3D62',  // 메인 블루 (Deep Blue)
  600: '#08314E',  // 진한 블루
  700: '#06253A',  // 매우 진한 블루
  800: '#041926',  // 어두운 블루
  900: '#020D13',  // 가장 어두운 블루
} as const;

/**
 * Secondary Colors - Muted Teal (#3C6E71)
 * 사용자의 상호작용을 유도하는 보조 컬러
 */
export const secondaryColors = {
  50: '#F0F7F7',   // 매우 연한 틸
  100: '#E1EFEF',  // 연한 틸
  200: '#C3DFDF',  // 중간 연한 틸
  300: '#A5CFCF',  // 중간 틸
  400: '#87BFBF',  // 중간 진한 틸
  500: '#3C6E71',  // 메인 틸 (Muted Teal)
  600: '#30585A',  // 진한 틸
  700: '#244243',  // 매우 진한 틸
  800: '#182C2D',  // 어두운 틸
  900: '#0C1616',  // 가장 어두운 틸
} as const;

/**
 * Grayscale - 명확한 정보 전달을 위한 그레이스케일
 * 체계적인 정보 위계를 표현
 */
export const grayscaleColors = {
  50: '#F5F5F5',   // Background
  100: '#F5F5F5',  // Background
  200: '#E0E0E0',  // Border
  300: '#E0E0E0',  // Border
  400: '#757575',  // Text Secondary
  500: '#757575',  // Text Secondary
  600: '#212121',  // Text Primary
  700: '#212121',  // Text Primary
  800: '#212121',  // Text Primary
  900: '#212121',  // Text Primary
} as const;

/**
 * System Colors - 목적별 시스템 컬러
 * 명확한 상태 표현을 위한 컬러
 */
export const systemColors = {
  accent: '#4CAF50',    // Vibrant Green - 목표 달성, 성장 지표
  success: '#4CAF50',   // 성공, 완료
  warning: '#FF9800',   // 주의, 경고
  danger: '#F44336',    // 오류, 위험
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
    fontSize: '2rem',       // 32px - Display
    fontWeight: '700',      // Bold
    lineHeight: '1.4',      // 140%
  },
  h2: {
    fontSize: '1.5rem',     // 24px - Headline
    fontWeight: '700',      // Bold
    lineHeight: '1.4',      // 140%
  },
  h3: {
    fontSize: '1.125rem',   // 18px - Sub-headline
    fontWeight: '600',      // Semi-Bold
    lineHeight: '1.5',      // 150%
  },
  // Body Text
  body: {
    fontSize: '1rem',       // 16px - Default
    fontWeight: '400',      // Regular
    lineHeight: '1.6',      // 160%
  },
  // Caption
  caption: {
    fontSize: '0.875rem',   // 14px
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
    secondary: secondaryColors,
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

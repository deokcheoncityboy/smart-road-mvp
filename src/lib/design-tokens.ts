/**
 * Smart Road Design System Tokens V3.0
 * 
 * 이 파일은 Smart Road 프로젝트의 디자인 시스템 토큰을 정의합니다.
 * KOREATECH 학생들을 위한 지능형 학습·경력 관리 플랫폼의 브랜드 아이덴티티를 반영합니다.
 * 
 * 브랜드 페르소나: 신뢰할 수 있는 커리어 파트너
 * 디자인 키워드: Trustworthy, Clear, Warm, Progressive, Smart
 */

// ============================================================================
// COLOR PALETTE - 신뢰할 수 있는 커리어 파트너
// ============================================================================

/**
 * Primary Colors - Blue (#3B82F6)
 * 신뢰감, 집중력, 성장, 미래 지향성을 나타내는 메인 컬러
 */
export const primaryColors = {
  50: '#EFF6FF',   // 매우 연한 블루
  100: '#DBEAFE',  // 연한 블루
  200: '#BFDBFE',  // 중간 연한 블루
  300: '#93C5FD',  // 중간 블루
  400: '#60A5FA',  // 중간 진한 블루
  500: '#3B82F6',  // 메인 블루 (Blue 500)
  600: '#2563EB',  // 진한 블루
  700: '#1D4ED8',  // 매우 진한 블루
  800: '#1E40AF',  // 어두운 블루
  900: '#1E3A8A',  // 가장 어두운 블루
} as const;

/**
 * Secondary Colors - Violet (#8B5CF6)
 * AI 인사이트, 추천 배지, 특별 기능 강조를 위한 컬러
 */
export const secondaryColors = {
  50: '#F5F3FF',   // 매우 연한 바이올렛
  100: '#EDE9FE',  // 연한 바이올렛
  200: '#DDD6FE',  // 중간 연한 바이올렛
  300: '#C4B5FD',  // 중간 바이올렛
  400: '#A78BFA',  // 중간 진한 바이올렛
  500: '#8B5CF6',  // 메인 바이올렛 (Violet 500)
  600: '#7C3AED',  // 진한 바이올렛
  700: '#6D28D9',  // 매우 진한 바이올렛
  800: '#5B21B6',  // 어두운 바이올렛
  900: '#4C1D95',  // 가장 어두운 바이올렛
} as const;

/**
 * Grayscale - 명확한 정보 전달을 위한 그레이스케일
 * 체계적인 정보 위계를 표현
 */
export const grayscaleColors = {
  50: '#F9FAFB',   // Background
  100: '#F9FAFB',  // Background
  200: '#E5E7EB',  // Border
  300: '#E5E7EB',  // Border
  400: '#6B7280',  // Text Secondary
  500: '#6B7280',  // Text Secondary
  600: '#1F2937',  // Text Primary
  700: '#1F2937',  // Text Primary
  800: '#1F2937',  // Text Primary
  900: '#1F2937',  // Text Primary
} as const;

/**
 * System Colors - 목적별 시스템 컬러
 * 명확한 상태 표현을 위한 컬러
 */
export const systemColors = {
  accent: '#F97316',    // Orange - 따뜻함, 활력, 긍정 피드백
  success: '#10B981',   // Success - 성공, 완료 상태, 긍정 지표
  warning: '#F59E0B',   // Warning - 주의 필요, 학사경고 "주의" 단계
  danger: '#EF4444',    // Error - 오류, 필수 입력 누락, 학사경고 "위험" 단계
  info: '#06B6D4',      // Info - 정보성 팁, 도움말, 안내 메시지
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
    lineHeight: '1.4',      // 140% (44.8px)
  },
  h2: {
    fontSize: '1.5rem',     // 24px - Heading
    fontWeight: '700',      // Bold
    lineHeight: '1.4',      // 140% (33.6px)
  },
  h3: {
    fontSize: '1.25rem',    // 20px - Subheading
    fontWeight: '600',      // SemiBold
    lineHeight: '1.4',      // 140% (28px)
  },
  // Body Text
  bodyLarge: {
    fontSize: '1rem',       // 16px - Body Large
    fontWeight: '500',      // Medium
    lineHeight: '1.6',      // 160% (25.6px)
  },
  body: {
    fontSize: '0.875rem',   // 14px - Body
    fontWeight: '400',      // Regular
    lineHeight: '1.6',      // 160% (22.4px)
  },
  // Caption
  caption: {
    fontSize: '0.75rem',    // 12px - Caption
    fontWeight: '400',      // Regular
    lineHeight: '1.5',      // 150% (18px)
  },
  // Button
  button: {
    fontSize: '0.9375rem',  // 15px - Button
    fontWeight: '600',      // SemiBold
    lineHeight: '1',        // 100% (15px)
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

# Smart Road Design System - 사용 가이드

이 문서는 Smart Road 프로젝트의 디자인 시스템 토큰을 React 컴포넌트에서 어떻게 사용하는지 설명합니다.

## 📦 Import 방법

```typescript
// 디자인 토큰 전체 import
import { designTokens } from '@/lib/design-tokens';

// 특정 토큰만 import
import { primaryColors, headingScale, bodyScale } from '@/lib/design-tokens';
```

## 🎨 컬러 사용법

### 1. Tailwind CSS 클래스 사용 (권장)

```tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ColorExample() {
  return (
    <div className="space-y-4">
      {/* Primary Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Primary Colors</h3>
        <div className="flex gap-2">
          <Button className="bg-primary-500 hover:bg-primary-600">
            Primary Button
          </Button>
          <Button variant="outline" className="border-primary-500 text-primary-500">
            Outline Button
          </Button>
        </div>
      </div>

      {/* Secondary Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Secondary Colors</h3>
        <div className="flex gap-2">
          <Button className="bg-secondary-500 hover:bg-secondary-600">
            Secondary Button
          </Button>
          <Button variant="outline" className="border-secondary-500 text-secondary-500">
            Outline Button
          </Button>
        </div>
      </div>

      {/* Accent Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Accent Colors</h3>
        <div className="flex gap-2">
          <Button className="bg-accent-500 hover:bg-accent-600">
            Accent Button
          </Button>
          <Button variant="outline" className="border-accent-500 text-accent-500">
            Outline Button
          </Button>
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Semantic Colors</h3>
        <div className="flex gap-2">
          <Button className="bg-success text-white">Success</Button>
          <Button className="bg-warning text-white">Warning</Button>
          <Button className="bg-error text-white">Error</Button>
          <Button className="bg-info text-white">Info</Button>
        </div>
      </div>

      {/* Grayscale */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Grayscale</h3>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded"></div>
          <div className="w-8 h-8 bg-gray-300 rounded"></div>
          <div className="w-8 h-8 bg-gray-500 rounded"></div>
          <div className="w-8 h-8 bg-gray-700 rounded"></div>
          <div className="w-8 h-8 bg-gray-900 rounded"></div>
        </div>
      </div>
    </div>
  );
}
```

### 2. 인라인 스타일 사용

```tsx
'use client';

export function InlineStyleExample() {
  return (
    <div 
      style={{ 
        backgroundColor: designTokens.colors.primary[500],
        color: designTokens.colors.primary[50]
      }}
      className="p-4 rounded-lg"
    >
      <h2 style={{ 
        fontSize: designTokens.typography.headingScale.h2.fontSize,
        fontWeight: designTokens.typography.headingScale.h2.fontWeight,
        lineHeight: designTokens.typography.headingScale.h2.lineHeight
      }}>
        인라인 스타일 예시
      </h2>
    </div>
  );
}
```

## 📝 타이포그래피 사용법

### 1. Tailwind CSS 클래스 사용 (권장)

```tsx
'use client';

export function TypographyExample() {
  return (
    <div className="space-y-6">
      {/* Headings */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          H1 Heading (48px)
        </h1>
        <h2 className="text-4xl font-bold leading-tight tracking-tight">
          H2 Heading (36px)
        </h2>
        <h3 className="text-3xl font-semibold leading-snug">
          H3 Heading (30px)
        </h3>
        <h4 className="text-2xl font-semibold leading-snug">
          H4 Heading (24px)
        </h4>
        <h5 className="text-xl font-medium leading-normal">
          H5 Heading (20px)
        </h5>
        <h6 className="text-lg font-medium leading-normal">
          H6 Heading (18px)
        </h6>
      </div>

      {/* Body Text */}
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          Body Large Text (18px) - 큰 본문 텍스트에 사용합니다.
        </p>
        <p className="text-base leading-relaxed">
          Body Text (16px) - 일반적인 본문 텍스트에 사용합니다.
        </p>
        <p className="text-sm leading-normal">
          Body Small Text (14px) - 작은 본문 텍스트에 사용합니다.
        </p>
        <p className="text-xs leading-normal tracking-wide">
          Caption Text (12px) - 캡션이나 부가 설명에 사용합니다.
        </p>
      </div>

      {/* Font Weights */}
      <div className="space-y-2">
        <p className="text-base font-thin">Thin (100)</p>
        <p className="text-base font-extralight">Extra Light (200)</p>
        <p className="text-base font-light">Light (300)</p>
        <p className="text-base font-normal">Normal (400)</p>
        <p className="text-base font-medium">Medium (500)</p>
        <p className="text-base font-semibold">Semibold (600)</p>
        <p className="text-base font-bold">Bold (700)</p>
        <p className="text-base font-extrabold">Extra Bold (800)</p>
        <p className="text-base font-black">Black (900)</p>
      </div>
    </div>
  );
}
```

### 2. CSS-in-JS 또는 인라인 스타일 사용

```tsx
'use client';

import { headingScale, bodyScale } from '@/lib/design-tokens';

export function TypographyInlineExample() {
  return (
    <div className="space-y-4">
      <h1 style={headingScale.h1}>
        인라인 스타일 H1
      </h1>
      <h2 style={headingScale.h2}>
        인라인 스타일 H2
      </h2>
      <p style={bodyScale.body}>
        인라인 스타일 본문 텍스트입니다.
      </p>
      <p style={bodyScale.caption}>
        인라인 스타일 캡션 텍스트입니다.
      </p>
    </div>
  );
}
```

## 🎯 실제 컴포넌트 예시

### 1. 카드 컴포넌트

```tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function SmartRoadCard() {
  return (
    <Card className="border-gray-200 hover:border-primary-300 transition-colors">
      <CardHeader className="bg-primary-50">
        <CardTitle className="text-primary-900 text-xl font-semibold">
          학습 진단 리포트
        </CardTitle>
        <Badge className="bg-secondary-100 text-secondary-800 w-fit">
          새로운 분석
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          당신의 학습 패턴을 분석한 결과, 시험형 과목에서 상위 15%의 강점을 보이고 있습니다.
        </p>
        <div className="flex gap-2">
          <Button className="bg-primary-500 hover:bg-primary-600">
            자세히 보기
          </Button>
          <Button variant="outline" className="border-primary-500 text-primary-500">
            공유하기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

### 2. 알림 컴포넌트

```tsx
'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

export function SmartRoadAlerts() {
  return (
    <div className="space-y-4">
      {/* Success Alert */}
      <Alert className="border-success bg-success/10">
        <CheckCircle className="h-4 w-4 text-success" />
        <AlertTitle className="text-success">성공</AlertTitle>
        <AlertDescription className="text-success/80">
          포트폴리오가 성공적으로 생성되었습니다.
        </AlertDescription>
      </Alert>

      {/* Warning Alert */}
      <Alert className="border-warning bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertTitle className="text-warning">주의</AlertTitle>
        <AlertDescription className="text-warning/80">
          학사경고 위험이 감지되었습니다. 상담센터를 방문해주세요.
        </AlertDescription>
      </Alert>

      {/* Error Alert */}
      <Alert className="border-error bg-error/10">
        <XCircle className="h-4 w-4 text-error" />
        <AlertTitle className="text-error">오류</AlertTitle>
        <AlertDescription className="text-error/80">
          데이터 연동 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </AlertDescription>
      </Alert>

      {/* Info Alert */}
      <Alert className="border-info bg-info/10">
        <Info className="h-4 w-4 text-info" />
        <AlertTitle className="text-info">정보</AlertTitle>
        <AlertDescription className="text-info/80">
          새로운 추천 로드맵이 준비되었습니다.
        </AlertDescription>
      </Alert>
    </div>
  );
}
```

### 3. 대시보드 위젯

```tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function DashboardWidget() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* GPA 위젯 */}
      <Card className="border-primary-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-primary-900 text-lg font-semibold">
            현재 GPA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary-600 mb-2">3.85</div>
          <Progress value={85} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">목표: 4.0</p>
        </CardContent>
      </Card>

      {/* 비교과 활동 위젯 */}
      <Card className="border-secondary-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-secondary-900 text-lg font-semibold">
            비교과 활동
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-secondary-600 mb-2">12</div>
          <p className="text-sm text-gray-600">이번 학기 완료</p>
        </CardContent>
      </Card>

      {/* 경고 위젯 */}
      <Card className="border-accent-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-accent-900 text-lg font-semibold">
            학사 경고
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-accent-600 mb-2">안전</div>
          <p className="text-sm text-gray-600">현재 위험도: 낮음</p>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🌙 다크 모드 지원

디자인 토큰은 자동으로 다크 모드를 지원합니다. CSS 변수를 통해 라이트/다크 테마가 자동으로 전환됩니다.

```tsx
'use client';

export function DarkModeExample() {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg">
      <h2 className="text-primary text-2xl font-semibold mb-4">
        다크 모드 지원
      </h2>
      <p className="text-muted-foreground">
        이 텍스트는 다크 모드에서 자동으로 색상이 변경됩니다.
      </p>
    </div>
  );
}
```

## 📱 반응형 디자인

```tsx
'use client';

export function ResponsiveExample() {
  return (
    <div className="space-y-4">
      {/* 모바일: 작은 텍스트, 데스크톱: 큰 텍스트 */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
        반응형 제목
      </h1>
      
      {/* 모바일: 세로 배치, 데스크톱: 가로 배치 */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-primary-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary-900 mb-2">
            카드 1
          </h3>
          <p className="text-primary-700">
            모바일에서는 세로로, 데스크톱에서는 가로로 배치됩니다.
          </p>
        </div>
        <div className="flex-1 bg-secondary-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            카드 2
          </h3>
          <p className="text-secondary-700">
            반응형 디자인으로 모든 화면 크기에 최적화됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
```

## 🎨 커스텀 컴포넌트 스타일링

```tsx
'use client';

import { cn } from '@/lib/utils';

interface SmartRoadButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function SmartRoadButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className 
}: SmartRoadButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
}
```

## 📋 체크리스트

디자인 토큰을 사용할 때 다음 사항들을 확인하세요:

- [ ] Tailwind CSS 클래스를 우선적으로 사용
- [ ] 컬러는 의미에 맞는 semantic color 사용 (success, warning, error, info)
- [ ] 타이포그래피는 headingScale과 bodyScale 사용
- [ ] 다크 모드 지원 확인
- [ ] 반응형 디자인 적용
- [ ] 접근성 고려 (색상 대비, 폰트 크기 등)
- [ ] 일관된 spacing과 border-radius 사용

이 가이드를 따라 Smart Road 프로젝트의 디자인 시스템을 일관성 있게 사용하세요!

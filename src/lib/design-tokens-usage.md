# Smart Road Design System V1.0 사용 가이드

이 문서는 Smart Road 프로젝트의 새로운 디자인 시스템을 React 컴포넌트에서 어떻게 사용하는지 설명합니다.

## 🎯 브랜드 아이덴티티

- **서비스명**: 스마트 로드 (Smart Road)
- **슬로건**: "데이터로 밝히는 너의 커리어 여정"
- **핵심 가치**: 성장, 신뢰, 내비게이션
- **캐릭터**: 내비 (Navi) - 부엉이 + 학사모 + 나침반

## 📦 Import 방법

```typescript
// 디자인 토큰 전체 import
import { designTokens } from '@/lib/design-tokens';

// 특정 토큰만 import
import { primaryColors, grayscaleColors, systemColors, typography, spacing, layout } from '@/lib/design-tokens';
```

## 🎨 색상 사용법

### KOREATECH Blue 기반 컬러 시스템

```tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ColorExample() {
  return (
    <div className="space-y-6">
      {/* Primary Colors - KOREATECH Blue */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">Primary Colors - KOREATECH Blue</h3>
        <div className="flex gap-3">
          <Button className="bg-primary-500 hover:bg-primary-400 text-white">
            Primary Button
          </Button>
          <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50">
            Outline Button
          </Button>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-primary-100 rounded"></div>
          <div className="w-8 h-8 bg-primary-200 rounded"></div>
          <div className="w-8 h-8 bg-primary-500 rounded"></div>
          <div className="w-8 h-8 bg-primary-700 rounded"></div>
          <div className="w-8 h-8 bg-primary-900 rounded"></div>
        </div>
      </div>

      {/* System Colors */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">System Colors</h3>
        <div className="flex gap-3">
          <Button className="bg-success text-white">Success</Button>
          <Button className="bg-warning text-white">Warning</Button>
          <Button className="bg-danger text-white">Danger</Button>
          <Button className="bg-accent text-white">Accent</Button>
        </div>
      </div>

      {/* Grayscale */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">Grayscale</h3>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded"></div>
          <div className="w-8 h-8 bg-gray-300 rounded"></div>
          <div className="w-8 h-8 bg-gray-500 rounded"></div>
          <div className="w-8 h-8 bg-gray-700 rounded"></div>
          <div className="w-8 h-8 bg-gray-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}
```

## ✍️ 타이포그래피 사용법

### 역할별 타이포그래피 시스템

```tsx
'use client';

export function TypographyExample() {
  return (
    <div className="space-y-6">
      {/* Headings */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold leading-tight text-gray-800">
          H1 Heading (36px) - 페이지 메인 타이틀
        </h1>
        <h2 className="text-3xl font-bold leading-tight text-gray-800">
          H2 Heading (28px) - 섹션 타이틀
        </h2>
        <h3 className="text-xl font-semibold leading-normal text-gray-800">
          Subtitle 1 (20px) - 카드, 컴포넌트 타이틀
        </h3>
      </div>

      {/* Body Text */}
      <div className="space-y-4">
        <p className="text-base font-normal leading-relaxed text-gray-700">
          Body 1 (16px) - 본문, 긴 설명에 사용합니다.
        </p>
        <p className="text-base font-medium leading-relaxed text-gray-700">
          Body 1 Medium (16px) - 강조가 필요한 본문에 사용합니다.
        </p>
        <p className="text-sm font-normal leading-relaxed text-gray-700">
          Body 2 (14px) - 부가 설명, 인풋 텍스트에 사용합니다.
        </p>
        <p className="text-sm font-medium leading-relaxed text-gray-700">
          Body 2 Medium (14px) - 강조가 필요한 부가 설명에 사용합니다.
        </p>
        <p className="text-xs font-normal leading-normal text-gray-500">
          Caption (12px) - 도움말, 저작권 정보에 사용합니다.
        </p>
      </div>
    </div>
  );
}
```

## 📐 간격 사용법

### 8px 기반 배수 시스템

```tsx
'use client';

export function SpacingExample() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Spacing System (8px 기반)</h3>
      
      <div className="space-y-2">
        <div className="bg-primary-100 p-1x rounded">
          <span className="text-sm">spacing-1x (8px)</span>
        </div>
        <div className="bg-primary-200 p-2x rounded">
          <span className="text-sm">spacing-2x (16px)</span>
        </div>
        <div className="bg-primary-300 p-3x rounded">
          <span className="text-sm">spacing-3x (24px)</span>
        </div>
        <div className="bg-primary-400 p-4x rounded">
          <span className="text-sm">spacing-4x (32px)</span>
        </div>
        <div className="bg-primary-500 p-6x rounded">
          <span className="text-sm text-white">spacing-6x (48px)</span>
        </div>
        <div className="bg-primary-600 p-8x rounded">
          <span className="text-sm text-white">spacing-8x (64px)</span>
        </div>
      </div>
    </div>
  );
}
```

## 🏗️ 레이아웃 사용법

### 사이드 내비게이션 고정 레이아웃

```tsx
'use client';

export function LayoutExample() {
  return (
    <div className="min-w-[1280px] max-w-[1440px] mx-auto">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[260px] bg-gray-100 p-3x">
          <h3 className="text-lg font-semibold text-gray-800 mb-2x">사이드바</h3>
          <nav className="space-y-1x">
            <div className="p-2x bg-primary-100 text-primary-700 rounded">대시보드</div>
            <div className="p-2x text-gray-600 rounded hover:bg-gray-200">포트폴리오</div>
            <div className="p-2x text-gray-600 rounded hover:bg-gray-200">리포트</div>
            <div className="p-2x text-gray-600 rounded hover:bg-gray-200">로드맵</div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-3x">
          <h1 className="text-4xl font-bold text-gray-800 mb-4x">메인 콘텐츠</h1>
          <p className="text-base leading-relaxed text-gray-700">
            사이드 내비게이션 고정 레이아웃을 사용한 메인 콘텐츠 영역입니다.
            최소 너비 1280px, 최대 콘텐츠 너비 1440px로 설정되어 있습니다.
          </p>
        </main>
      </div>
    </div>
  );
}
```

## ✨ 아이콘 사용법

### Lucide Icons 기반

```tsx
'use client';

import { 
  Home, 
  User, 
  Settings, 
  ChevronRight,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';

export function IconExample() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Icon System - Lucide Icons</h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Home size={16} strokeWidth={1.5} className="text-primary-500" />
          <span className="text-sm">16px 아이콘 (sm)</span>
        </div>
        <div className="flex items-center gap-3">
          <User size={20} strokeWidth={1.5} className="text-primary-500" />
          <span className="text-sm">20px 아이콘 (md)</span>
        </div>
        <div className="flex items-center gap-3">
          <Settings size={24} strokeWidth={1.5} className="text-primary-500" />
          <span className="text-sm">24px 아이콘 (lg)</span>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-2x p-2x bg-primary-50 rounded-lg">
          <TrendingUp className="w-5 h-5 text-primary-500" />
          <span className="text-sm font-medium text-primary-700">성장</span>
        </div>
        <div className="flex items-center gap-2x p-2x bg-success/10 rounded-lg">
          <Award className="w-5 h-5 text-success" />
          <span className="text-sm font-medium text-success">성취</span>
        </div>
        <div className="flex items-center gap-2x p-2x bg-warning/10 rounded-lg">
          <BookOpen className="w-5 h-5 text-warning" />
          <span className="text-sm font-medium text-warning">학습</span>
        </div>
      </div>
    </div>
  );
}
```

## 🎯 실제 컴포넌트 예시

### 1. 대시보드 카드

```tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Award } from 'lucide-react';

export function DashboardCard() {
  return (
    <Card className="border-gray-200 hover:border-primary-300 transition-colors">
      <CardHeader className="bg-primary-50 pb-2x">
        <CardTitle className="text-xl font-semibold leading-normal text-gray-800">
          학업 성과
        </CardTitle>
        <Badge className="bg-success text-white w-fit">
          상승 추세
        </Badge>
      </CardHeader>
      <CardContent className="space-y-2x">
        <div className="flex items-center gap-2x">
          <TrendingUp className="w-5 h-5 text-primary-500" />
          <span className="text-base font-medium leading-relaxed text-gray-700">
            GPA 3.8
          </span>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">
          이번 학기 0.2 상승했습니다.
        </p>
        <Button className="bg-primary-500 hover:bg-primary-400 text-white w-full">
          자세히 보기
        </Button>
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
    <div className="space-y-3x">
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
      <Alert className="border-danger bg-danger/10">
        <XCircle className="h-4 w-4 text-danger" />
        <AlertTitle className="text-danger">오류</AlertTitle>
        <AlertDescription className="text-danger/80">
          데이터 연동 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
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
import { TrendingUp, BookOpen, AlertTriangle } from 'lucide-react';

export function DashboardWidget() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3x">
      {/* GPA 위젯 */}
      <Card className="border-primary-200">
        <CardHeader className="pb-2x">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2x">
            <TrendingUp className="w-5 h-5 text-primary-500" />
            현재 GPA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary-500 mb-2x">3.85</div>
          <Progress value={85} className="h-2 mb-2x" />
          <p className="text-sm text-gray-600">목표: 4.0</p>
        </CardContent>
      </Card>

      {/* 비교과 활동 위젯 */}
      <Card className="border-success/20">
        <CardHeader className="pb-2x">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2x">
            <BookOpen className="w-5 h-5 text-success" />
            비교과 활동
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-success mb-2x">12</div>
          <p className="text-sm text-gray-600">이번 학기 완료</p>
        </CardContent>
      </Card>

      {/* 경고 위젯 */}
      <Card className="border-warning/20">
        <CardHeader className="pb-2x">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2x">
            <AlertTriangle className="w-5 h-5 text-warning" />
            학사 경고
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-warning mb-2x">안전</div>
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
    <div className="bg-background text-foreground p-3x rounded-lg">
      <h2 className="text-primary text-2xl font-semibold mb-2x">
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
    <div className="space-y-3x">
      {/* 모바일: 작은 텍스트, 데스크톱: 큰 텍스트 */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500">
        반응형 제목
      </h1>
      
      {/* 모바일: 세로 배치, 데스크톱: 가로 배치 */}
      <div className="flex flex-col md:flex-row gap-3x">
        <div className="flex-1 bg-primary-50 p-3x rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2x">
            카드 1
          </h3>
          <p className="text-gray-700">
            모바일에서는 세로로, 데스크톱에서는 가로로 배치됩니다.
          </p>
        </div>
        <div className="flex-1 bg-success/10 p-3x rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2x">
            카드 2
          </h3>
          <p className="text-gray-700">
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
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'outline';
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
    primary: 'bg-primary-500 hover:bg-primary-400 text-white focus:ring-primary-500',
    success: 'bg-success hover:bg-success/90 text-white focus:ring-success',
    warning: 'bg-warning hover:bg-warning/90 text-white focus:ring-warning',
    danger: 'bg-danger hover:bg-danger/90 text-white focus:ring-danger',
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

디자인 시스템을 사용할 때 다음 사항들을 확인하세요:

- [ ] KOREATECH Blue 기반 컬러 시스템 사용
- [ ] 역할별 타이포그래피 시스템 적용 (h1, h2, subtitle1, body1, body2, caption)
- [ ] 8px 기반 간격 시스템 사용 (1x, 2x, 3x, 4x, 6x, 8x)
- [ ] 사이드 내비게이션 고정 레이아웃 (최소 1280px, 최대 1440px)
- [ ] Lucide Icons 사용 (16px, 20px, 24px, strokeWidth: 1.5px)
- [ ] 시스템 컬러 사용 (success, warning, danger, accent)
- [ ] 다크 모드 지원 확인
- [ ] 반응형 디자인 적용
- [ ] 접근성 고려 (색상 대비, 폰트 크기 등)
- [ ] 일관된 spacing과 border-radius 사용

이 가이드를 따라 Smart Road 프로젝트의 디자인 시스템을 일관성 있게 사용하세요!
# 🎨 Smart Road Design System V1.0

> **한 줄 요약:** KOREATECH 학생들을 위한 지능형 학습·경력 관리 플랫폼의 일관된 디자인 시스템

- **버전:** V1.0
- **작성일:** 2025년 1월 1일
- **최종 수정일:** 2025년 1월 1일

---

## 1. 브랜딩 및 아이덴티티

### 1.1. 브랜드 핵심 가치

- **성장 (Growth)**: 학생들의 지속적인 발전과 성취
- **신뢰 (Trust)**: 데이터 기반의 객관적이고 신뢰할 수 있는 정보
- **내비게이션 (Navigation)**: 명확한 방향 제시와 가이드

### 1.2. 서비스 정보

- **서비스명**: 스마트 로드 (Smart Road)
- **슬로건**: "데이터로 밝히는 너의 커리어 여정"
- **타겟**: 한국기술교육대학교(KOREATECH) 재학생

### 1.3. 캐릭터

- **이름**: 내비 (Navi)
- **컨셉**: 지식과 지혜를 상징하는 **부엉이**가 졸업을 의미하는 **학사모**를 쓰고, 길을 안내하는 **나침반**을 들고 있는 모습
- **역할**: 학생들의 커리어 여정을 현명하게 안내하는 가이드

---

## 2. 색상 시스템 (Color System)

### 2.1. Primary Colors - KOREATECH Blue

KOREATECH의 신뢰성과 기술 전문성을 나타내는 메인 컬러

| 색상명 | Hex 코드 | 사용처 |
|--------|----------|--------|
| Blue-50 | #DEEBFF | 매우 연한 배경 |
| Blue-100 | #B3D4FF | 연한 배경 |
| Blue-200 | #4C9AFF | 중간 연한 배경 |
| Blue-300 | #4C9AFF | 중간 배경 |
| Blue-400 | #0065FF | 중간 진한 배경 |
| **Blue-500** | **#0052CC** | **메인 컬러 (KOREATECH Blue)** |
| Blue-600 | #0052CC | 진한 배경 |
| Blue-700 | #003D99 | 매우 진한 배경 |
| Blue-800 | #002966 | 어두운 배경 |
| Blue-900 | #001A4D | 가장 어두운 배경 |

### 2.2. Grayscale - 정보 위계 표현

명확한 정보 전달을 위한 체계적인 그레이스케일

| 색상명 | Hex 코드 | 사용처 |
|--------|----------|--------|
| Gray-50 | #F4F5F7 | Background |
| Gray-100 | #F4F5F7 | Background |
| Gray-200 | #DFE1E6 | Borders |
| Gray-300 | #DFE1E6 | Borders |
| Gray-400 | #7A869A | Placeholder |
| Gray-500 | #7A869A | Placeholder |
| Gray-600 | #42526E | Body Text |
| Gray-700 | #42526E | Body Text |
| Gray-800 | #172B4D | Headings |
| Gray-900 | #172B4D | Headings |

### 2.3. System Colors - 목적별 컬러

명확한 상태 표현을 위한 컬러

| 색상명 | Hex 코드 | 사용처 |
|--------|----------|--------|
| Success | #00875A | 성공, 완료 상태 |
| Warning | #FFAB00 | 주의, 경고 상태 |
| Danger | #DE350B | 오류, 위험 상태 |
| Accent | #FFAB00 | 강조, 포인트 컬러 |

---

## 3. 타이포그래피 (Typography)

### 3.1. 폰트 패밀리

**Pretendard** - 가독성이 뛰어난 한글 폰트

```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
```

### 3.2. 타이포그래피 스케일

역할별로 명확하게 구분된 타이포그래피 시스템

| 역할 | 크기 | 굵기 | 행간 | 사용처 |
|------|------|------|------|--------|
| **H1** | 36px | Bold | 140% | 페이지 메인 타이틀 |
| **H2** | 28px | Bold | 140% | 섹션 타이틀 |
| **Subtitle 1** | 20px | SemiBold | 150% | 카드, 컴포넌트 타이틀 |
| **Body 1** | 16px | Regular | 160% | 본문, 긴 설명 |
| **Body 1 Medium** | 16px | Medium | 160% | 강조가 필요한 본문 |
| **Body 2** | 14px | Regular | 160% | 부가 설명, 인풋 텍스트 |
| **Body 2 Medium** | 14px | Medium | 160% | 강조가 필요한 부가 설명 |
| **Caption** | 12px | Regular | 150% | 도움말, 저작권 정보 |

---

## 4. 간격 시스템 (Spacing System)

### 4.1. 8px 기반 배수 시스템

일관된 시각적 리듬감과 컴포넌트 간 위계 표현

| 간격명 | 크기 | 사용처 |
|--------|------|--------|
| spacing-1x | 8px | 최소 간격 |
| spacing-2x | 16px | 기본 간격 |
| spacing-3x | 24px | 중간 간격 |
| spacing-4x | 32px | 큰 간격 |
| spacing-6x | 48px | 매우 큰 간격 |
| spacing-8x | 64px | 최대 간격 |

---

## 5. 레이아웃 시스템 (Layout System)

### 5.1. 사이드 내비게이션 고정 레이아웃

| 요소 | 크기 | 설명 |
|------|------|------|
| 최소 너비 | 1280px | 반응형 UI 고려 |
| 최대 콘텐츠 너비 | 1440px | 콘텐츠 과도 확장 방지 |
| 사이드 내비게이션 | 260px | 고정 너비 |
| 그리드 시스템 | 12 Column | 12 Column Grid System |
| 그리드 간격 | 24px | Gutter |

---

## 6. 아이콘 시스템 (Iconography)

### 6.1. Lucide Icons 기반

- **라이브러리**: Lucide Icons
- **스타일**: Line-based (모서리가 부드러운 선 기반)
- **Stroke Width**: 1.5px
- **기본 크기**: 16px, 20px, 24px

### 6.2. 아이콘 사용 가이드

```tsx
// 16px 아이콘 (sm)
<Home size={16} strokeWidth={1.5} />

// 20px 아이콘 (md)
<User size={20} strokeWidth={1.5} />

// 24px 아이콘 (lg)
<Settings size={24} strokeWidth={1.5} />
```

---

## 7. 컴포넌트 가이드라인

### 7.1. 버튼 (Button)

```tsx
// Primary Button
<Button className="bg-primary-500 hover:bg-primary-400 text-white">
  Primary Button
</Button>

// Success Button
<Button className="bg-success text-white">
  Success Button
</Button>

// Warning Button
<Button className="bg-warning text-white">
  Warning Button
</Button>

// Danger Button
<Button className="bg-danger text-white">
  Danger Button
</Button>

// Outline Button
<Button variant="outline" className="border-primary-500 text-primary-500">
  Outline Button
</Button>
```

### 7.2. 카드 (Card)

```tsx
<Card className="border-gray-200 hover:border-primary-300 transition-colors">
  <CardHeader className="bg-primary-50 pb-2x">
    <CardTitle className="text-xl font-semibold leading-normal text-gray-800">
      카드 제목
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-2x">
    <p className="text-base leading-relaxed text-gray-700">
      카드 내용
    </p>
  </CardContent>
</Card>
```

### 7.3. 알림 (Alert)

```tsx
// Success Alert
<Alert className="border-success bg-success/10">
  <CheckCircle className="h-4 w-4 text-success" />
  <AlertTitle className="text-success">성공</AlertTitle>
  <AlertDescription className="text-success/80">
    성공 메시지
  </AlertDescription>
</Alert>

// Warning Alert
<Alert className="border-warning bg-warning/10">
  <AlertTriangle className="h-4 w-4 text-warning" />
  <AlertTitle className="text-warning">주의</AlertTitle>
  <AlertDescription className="text-warning/80">
    경고 메시지
  </AlertDescription>
</Alert>
```

---

## 8. 다크 모드 지원

### 8.1. 자동 테마 전환

CSS 변수를 통해 라이트/다크 테마가 자동으로 전환됩니다.

```css
:root {
  --primary: 220 100% 40%;  /* Light theme */
}

.dark {
  --primary: 220 100% 50%;  /* Dark theme - 더 밝은 색상 */
}
```

### 8.2. 다크 모드 사용법

```tsx
// 자동으로 다크 모드 지원
<div className="bg-background text-foreground">
  <h1 className="text-primary">제목</h1>
  <p className="text-muted-foreground">본문</p>
</div>
```

---

## 9. 반응형 디자인

### 9.1. 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: > 1024px

### 9.2. 반응형 예시

```tsx
// 반응형 텍스트
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  반응형 제목
</h1>

// 반응형 레이아웃
<div className="flex flex-col md:flex-row gap-3x">
  <div className="flex-1">콘텐츠 1</div>
  <div className="flex-1">콘텐츠 2</div>
</div>
```

---

## 10. 접근성 (Accessibility)

### 10.1. 색상 대비

- **일반 텍스트**: 최소 4.5:1 대비율
- **큰 텍스트**: 최소 3:1 대비율
- **UI 요소**: 최소 3:1 대비율

### 10.2. 키보드 네비게이션

- 모든 인터랙티브 요소는 키보드로 접근 가능
- 포커스 표시가 명확하게 보임
- 논리적인 탭 순서

### 10.3. 스크린 리더 지원

- 의미있는 HTML 시맨틱 태그 사용
- 적절한 ARIA 라벨 제공
- alt 텍스트 제공

---

## 11. 사용 가이드

### 11.1. 개발자 가이드

1. **디자인 토큰 사용**: `@/lib/design-tokens`에서 토큰 import
2. **Tailwind CSS 우선**: 가능한 한 Tailwind 클래스 사용
3. **컴포넌트 재사용**: 기존 shadcn/ui 컴포넌트 활용
4. **일관성 유지**: 디자인 시스템 가이드라인 준수

### 11.2. 체크리스트

- [ ] KOREATECH Blue 기반 컬러 시스템 사용
- [ ] 역할별 타이포그래피 시스템 적용
- [ ] 8px 기반 간격 시스템 사용
- [ ] 사이드 내비게이션 고정 레이아웃
- [ ] Lucide Icons 사용 (strokeWidth: 1.5px)
- [ ] 시스템 컬러 사용 (success, warning, danger, accent)
- [ ] 다크 모드 지원 확인
- [ ] 반응형 디자인 적용
- [ ] 접근성 고려
- [ ] 일관된 spacing과 border-radius 사용

---

## 12. 업데이트 히스토리

### V1.0 (2025-01-01)
- 초기 디자인 시스템 구축
- KOREATECH Blue 기반 컬러 시스템
- Pretendard 폰트 적용
- 8px 기반 간격 시스템
- 사이드 내비게이션 고정 레이아웃
- Lucide Icons 기반 아이콘 시스템
- 다크 모드 지원
- 반응형 디자인

---

이 디자인 시스템을 통해 Smart Road 프로젝트의 일관된 사용자 경험을 제공할 수 있습니다.

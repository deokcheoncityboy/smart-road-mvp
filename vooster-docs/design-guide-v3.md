**프로젝트:** 한국기술교육대학교 학생을 위한 지능형 학습·경력 관리 플랫폼

---

## 1. 디자인 원칙 및 키워드

### 1.1. 브랜드 페르소나

**스마트 로드는 "신뢰할 수 있는 커리어 파트너"입니다.**

Toss가 복잡한 금융을 쉽고 명확하게 만들고, 당근이 지역 커뮤니티에 따뜻함과 친근함을 더한 것처럼, 스마트 로드는 학생들의 불확실한 진로 여정에 **명확한 방향성과 따뜻한 지원**을 제공합니다.

### 1.2. 핵심 디자인 키워드

| 디자인 키워드 | 선정 이유 | 시각적/경험적 표현 예시 |
| --- | --- | --- |
| **Trustworthy (신뢰감)** | 학생들의 민감한 학업·경력 데이터를 다루므로, 안정감과 신뢰성이 최우선이다. | • 차분한 블루 계열의 Primary Color<br>• 명확한 정보 계층 구조<br>• 예측 가능한 인터랙션 패턴<br>• 데이터 출처 명시 및 투명한 처리 과정 표시 |
| **Clear (명확성)** | 복잡한 학사 시스템과 진로 정보를 다루기에, "복잡함을 단순하게" 만드는 것이 핵심이다. | • 높은 대비의 타이포그래피<br>• 충분한 여백(White Space)<br>• 명확한 CTA 버튼<br>• 시각적 데이터 시각화 |
| **Warm (따뜻함)** | 학생들이 스트레스 받는 진로 준비 과정에서 따뜻한 응원과 격려를 느껴야 한다. | • 부드러운 라운드 처리<br>• 긍정적이고 격려하는 마이크로카피<br>• 일러스트레이션 활용<br>• 따뜻한 Accent Color |
| **Progressive (성장 지향)** | 학생들의 지속적인 성장을 돕는 플랫폼으로서, "앞으로 나아가는" 느낌이 중요하다. | • 우상향 화살표, 경로 메타포<br>• 프로그레스 인디케이터<br>• Before/After 비교 시각화<br>• 마일스톤 및 뱃지 시스템 |
| **Smart (지능적)** | AI 기반 분석과 추천이 핵심 가치이므로, 기술적 신뢰성과 정교함이 느껴져야 한다. | • 정교한 그라데이션 효과<br>• 스무스한 애니메이션 전환<br>• AI 인사이트 카드<br>• 데이터 기반 추천 근거 표시 |

---

## 2. 시각 디자인 시스템

### 2.1. 컬러 팔레트

### Primary Color - Blue 500

```
HEX: #3B82F6
RGB: 59, 130, 246

```

**용도:** 주요 CTA 버튼, 링크, 브랜드 정체성

**심리적 효과:** 집중력, 신뢰, 성장, 미래 지향성

**선정 이유:** 금융과 교육 플랫폼에서 검증된 색상으로 안정감과 전문성을 동시에 전달

### Secondary Color - Violet 500

```
HEX: #8B5CF6
RGB: 139, 92, 246

```

**용도:** AI 인사이트 카드, 추천 배지, 특별 기능 강조

**심리적 효과:** 지능, 창의성, 혁신

**선정 이유:** AI와 데이터 분석을 상징하며 일반 교육 플랫폼과 차별화

### Accent Color - Orange 500

```
HEX: #F97316
RGB: 249, 115, 22

```

**용도:** 알림 뱃지, 진행률 100% 달성, 긍정 피드백, 긴급 CTA

**심리적 효과:** 활력, 따뜻함, 주의 환기

**선정 이유:** 당근의 친근한 느낌처럼 따뜻하고 격려하는 경험 제공

### Grayscale

| 용도 | HEX Code | 사용 예시 |
| --- | --- | --- |
| Text Primary | `#1F2937` | 본문, 헤드라인, 주요 텍스트 |
| Text Secondary | `#6B7280` | 부가 설명, 캡션, 메타 정보 |
| Border | `#E5E7EB` | 카드 테두리, 구분선, 입력창 테두리 |
| Background | `#F9FAFB` | 페이지 배경, 카드 내부 배경 |

### Semantic Colors

| 상태 | HEX Code | 용도 |
| --- | --- | --- |
| Success | `#10B981` | 성공 메시지, 완료 상태, 긍정 지표 |
| Warning | `#F59E0B` | 주의 필요, 학사경고 "주의" 단계 |
| Error | `#EF4444` | 오류, 필수 입력 누락, 학사경고 "위험" 단계 |
| Info | `#06B6D4` | 정보성 팁, 도움말, 안내 메시지 |

---

### 2.2. 타이포그래피

### 서체 시스템

**Pretendard (단일 서체 시스템)**

```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

```

**선정 이유:**

- Toss, 당근 등 국내 대표 서비스에서 사용하는 검증된 서체
- 한글과 영문, 숫자 모두에 최적화
- 9가지 굵기(100~900) 지원으로 명확한 위계 구조 표현
- 오픈소스 & CDN 제공으로 무료 사용 및 빠른 로딩
- 단일 서체 사용으로 시각적 일관성 극대화

### 폰트 스케일 및 위계

| 요소 | Font Size | Font Weight | Line Height | 사용 예시 |
| --- | --- | --- | --- | --- |
| **H1 (Display)** | 32px | 700 (Bold) | 140% (44.8px) | 페이지 타이틀 |
| **H2 (Heading)** | 24px | 700 (Bold) | 140% (33.6px) | 섹션 제목 |
| **H3 (Subheading)** | 20px | 600 (SemiBold) | 140% (28px) | 카드 제목, 서브섹션 |
| **Body Large** | 16px | 500 (Medium) | 160% (25.6px) | 중요 본문, 리드 텍스트 |
| **Body** | 14px | 400 (Regular) | 160% (22.4px) | 일반 본문, 설명 텍스트 |
| **Caption** | 12px | 400 (Regular) | 150% (18px) | 메타 정보, 날짜, 부가 설명 |
| **Button** | 15px | 600 (SemiBold) | 100% (15px) | 모든 버튼 텍스트 |

### 타이포그래피 원칙

1. **충분한 여백**: 텍스트 블록 간 최소 24px 간격 유지
2. **제한된 위계**: 한 화면에 최대 3단계 위계까지만 사용
3. **색상 대비**:
    - Body 텍스트: 최소 4.5:1 대비율
    - 큰 텍스트(18px+): 최소 3:1 대비율 (WCAG AA 준수)
4. **길이 제한**: 본문 텍스트는 최대 60-70자/줄
5. **숫자 강조**: 중요 수치(GPA, 백분율)는 Weight 600 이상 사용

---

## 3. UX 및 인터랙션 원칙

### 3.1. 핵심 UX 원칙

### 원칙 1: 명확성을 통한 신뢰 구축 (Clarity Builds Trust)

**설명:**

모든 정보와 기능은 모호함 없이 명확하게 전달되어야 합니다. 사용자는 자신의 데이터가 어떻게 처리되고, AI 추천이 어떤 근거로 이루어지는지 직관적으로 이해할 수 있어야 합니다.

**실천 방법:**

- 데이터 출처 명시 (예: "출처: 학사 DB")
- AI 근거 제공 (예: "이 추천은 [당신의 전공 과목 3개]와 [NCS 직무 요구사항]을 비교한 결과입니다")
- 예측 가능한 구조 (모든 페이지가 동일한 레이아웃 패턴)
- 명확한 라벨링 ("저장", "다운로드" 등 행동 결과가 명확한 동사 사용)

### 원칙 2: 점진적 정보 공개 (Progressive Disclosure)

**설명:**

사용자가 한 번에 압도당하지 않도록, 필요한 정보를 필요한 순간에만 단계적으로 제공합니다.

**실천 방법:**

- 스마트 온보딩 (3단계 분리: 연동 → 목표 설정 → 수동 입력)
- 카드 확장 패턴 (기본: 요약 / 클릭: 상세)
- 고급 기능 숨기기 ("더보기" 메뉴 활용)
- 맥락 기반 팁 (첫 진입 시에만 툴팁 표시)

### 원칙 3: 긍정적 강화와 심리적 안전감 (Positive Reinforcement & Psychological Safety)

**설명:**

실패나 부족함을 지적하기보다는, 작은 성취를 축하하고 다음 단계를 격려하는 톤으로 사용자를 지원합니다.

**실천 방법:**

- 긍정적 마이크로카피 (예: "학점이 낮습니다" → "다음 학기 목표 학점을 설정해보세요!")
- 성취 시각화 (프로그레스 바, 마일스톤 축하 모달)
- 실패의 재정의 (예: "학사경고 위험" → "학습 지원이 필요한 시기입니다")
- 빈 상태 디자인 (일러스트 + 격려 메시지)

---

### 3.2. 인터랙션 가이드라인

### 피드백 (Feedback)

| 액션 유형 | 피드백 방식 | 타이밍 |
| --- | --- | --- |
| **버튼 클릭** | Scale 애니메이션 (98% 축소) + 배경색 변화 | 즉시 (0ms) |
| **데이터 저장** | 체크 아이콘 + "저장 완료" 스낵바 (2초 후 자동 사라짐) | 0.3초 |
| **데이터 로딩** | 스켈레톤 UI (3초 초과 시 프로그레스 바) | 즉시 |
| **오류 발생** | 붉은색 테두리 + 오류 메시지 + 진동 애니메이션 | 즉시 |
| **성공 액션** | 초록색 체크 + 축하 애니메이션 | 0.5초 |

### 상태 변화 (States)

**버튼 상태**

| 상태 | 시각적 표현 |
| --- | --- |
| Default | Primary Color 배경, White 텍스트 |
| Hover | 배경 밝기 10% 증가, 커서 pointer |
| Focused | 2px 두께 파란색 외곽선 |
| Pressed | Scale 98%, 배경 밝기 20% 감소 |
| Disabled | 배경 Gray 300, 텍스트 Gray 400, 커서 not-allowed |
| Loading | Spinner 아이콘 + "처리 중..." |

**입력창 상태**

| 상태 | 시각적 표현 |
| --- | --- |
| Default | Border Gray 200, 배경 White |
| Focused | Border Primary Color, 2px 두께 |
| Error | Border Error Color, 하단 오류 메시지 |
| Disabled | 배경 Gray 50, 텍스트 Gray 400 |

### 로딩 (Loading)

**로딩 우선순위:**

1. **스켈레톤 UI** (추천) - 페이지 첫 로딩, 카드 리스트
2. **스피너** - 버튼 클릭 후 처리, 모달 내부
3. **프로그레스 바** - 3초 이상 소요 작업 (PDF 생성 등)

**로딩 시간별 전략:**

| 예상 시간 | 전략 |
| --- | --- |
| 0-0.5초 | 피드백 없음 |
| 0.5-2초 | 스켈레톤 UI 또는 작은 스피너 |
| 2-5초 | 스켈레톤 UI + "잠시만 기다려주세요" |
| 5초 이상 | 프로그레스 바 + 상세 단계 설명 + 취소 버튼 |

### 애니메이션 & 전환

**표준 전환 타이밍:**

| 용도 | Duration | Easing |
| --- | --- | --- |
| 빠른 피드백 | 150ms | ease-out |
| 일반 전환 | 250ms | ease-in-out |
| 느린 연출 | 400ms | ease-in-out |

**핵심 애니메이션 패턴:**

- **Fade In/Out**: 모달, 툴팁 등장/사라짐
- **Slide Up**: 카드가 아래에서 위로 등장
- **Scale**: 버튼 클릭 피드백
- **Expand/Collapse**: 아코디언, 상세 내용 펼치기

---

## 4. 핵심 UI 컴포넌트 스타일

### 4.1. 버튼 (Button)

### Primary Button ⭐ 추천

**스타일:**

```
배경: #3B82F6 (Primary Color)
텍스트: #FFFFFF (White)
폰트: 15px / 600 (SemiBold)
패딩: 12px 24px
Border Radius: 8px
그림자: 없음

Hover:
  배경: #2563EB (Primary Color -10% 밝기)

Pressed:
  transform: scale(0.98)
  배경: #1D4ED8 (Primary Color -20% 밝기)

Disabled:
  배경: #D1D5DB (Gray 300)
  텍스트: #9CA3AF (Gray 400)
  cursor: not-allowed

```

**사용 예시:** "포트폴리오 생성하기", "저장", "다음 단계"

---

### Secondary Button

**스타일:**

```
배경: #FFFFFF (White)
테두리: 2px solid #3B82F6
텍스트: #3B82F6 (Primary Color)
폰트: 15px / 600 (SemiBold)
패딩: 12px 24px
Border Radius: 8px

Hover:
  배경: #EFF6FF (Blue 50)

Pressed:
  배경: #DBEAFE (Blue 100)

```

**사용 예시:** "취소", "뒤로가기", "편집"

---

### Text Button

**스타일:**

```
배경: 투명
텍스트: #3B82F6 (Primary Color)
폰트: 15px / 600 (SemiBold)
패딩: 8px 16px
Border Radius: 4px

Hover:
  배경: #EFF6FF (Blue 50)
  텍스트: #2563EB

```

**사용 예시:** "자세히 보기", "더보기", "건너뛰기"

---

### 4.2. 카드 (Card)

### 기본 정보 카드 ⭐ 추천

**스타일:**

```
배경: #FFFFFF (White)
테두리: 1px solid #E5E7EB (Border)
Border Radius: 12px
패딩: 24px
그림자: 없음

Hover:
  테두리: 1px solid #3B82F6 (Primary Color)
  그림자: 0 2px 8px rgba(59, 130, 246, 0.12)
  transition: all 250ms ease-in-out

```

**내부 구조:**

```
┌─────────────────────────────────┐
│ [아이콘] 카드 제목 (H3, 20px)     │ ← 상단
│                                  │
│ 본문 설명 텍스트 (Body, 14px)     │ ← 중단
│ Text Secondary (#6B7280)        │
│                                  │
│ 출처: 학사 DB (Caption, 12px)    │ ← 하단
│ Text Secondary (#6B7280)        │
└─────────────────────────────────┘

```

**사용 예시:** 학점 요약 카드, 최근 활동 카드

---

### AI 인사이트 카드

**스타일:**

```
배경: #F5F3FF (Violet 50)
테두리: 1px solid #8B5CF6 (Secondary Color)
Border Radius: 12px
패딩: 20px
좌측 강조선: 4px solid #8B5CF6 (Secondary Color)

```

**내부 구조:**

```
┌|──────────────────────────────┐
│| [AI 아이콘] AI 추천 (H3)      │
│|                               │
│| "당신은 [시험형] 과목에서      │
│| 상위 15%의 강점을 보입니다!"  │
│|                               │
│| • 근거 1                      │
│| • 근거 2                      │
│|                               │
│| [자세히 보기 버튼]            │
└|──────────────────────────────┘

```

**특징:**

- 좌측 강조선(4px)으로 일반 카드와 시각적 차별화
- 아이콘은 Secondary Color (#8B5CF6) 사용
- 근거를 불릿 포인트로 간결하게 제시

**사용 예시:** 강/약점 분석 카드, 학사경고 조기경보, 추천 활동

---

### 통계 카드

**스타일:**

```
배경: #FFFFFF (White)
테두리: 1px solid #E5E7EB
Border Radius: 12px
패딩: 20px

```

**내부 구조:**

```
┌─────────────────────────┐
│ 전공 평균 학점           │ ← Caption (12px)
│                          │
│ 3.82                     │ ← Display 수치
│                          │   32px / 700 Bold
│                          │   Primary Color
│ ▲ 0.15 (지난 학기 대비) │ ← 변화량
│                          │   Caption / Success Color
└─────────────────────────┘

```

**특징:**

- 숫자를 크고 굵게 (32px / 700) 표시하여 한눈에 파악 가능
- 변화량은 화살표 + 색상(상승: Success, 하락: Error)으로 표현

**사용 예시:** 학점 요약, 이수 학점 현황, 활동 개수

---

### 4.3. 입력창 (Input Field)

**스타일:**

```
배경: #FFFFFF (White)
테두리: 1px solid #E5E7EB (Border)
Border Radius: 8px
패딩: 12px 16px
폰트: 14px / 400 (Body)

Focused:
  테두리: 2px solid #3B82F6 (Primary Color)
  그림자: 0 0 0 3px rgba(59, 130, 246, 0.1)

Error:
  테두리: 2px solid #EF4444 (Error Color)
  하단 오류 메시지: Caption / Error Color

```

**구조:**

```
Label (Body / 600 SemiBold)
┌─────────────────────────────┐
│ Placeholder 텍스트          │ ← 입력창
└─────────────────────────────┘
Helper text / Error message    ← Caption (12px)

```

**사용 예시:** 검색창, 폼 입력, 목표 설정

---

### 4.4. 프로그레스 바 (Progress Bar)

**스타일:**

```
배경 (트랙): #E5E7EB (Border)
진행 바: #3B82F6 (Primary Color)
높이: 8px
Border Radius: 4px

애니메이션:
  width transition 400ms ease-out

```

**구조:**

```
이수 학점 현황 (Body / 600)      70/120 학점 (Caption)
┌────────────────────────────────────────┐
│███████████████████░░░░░░░░░░░░░░░░░░░│ 58%
└────────────────────────────────────────┘

```

**변형:**

- **단계형**: 여러 단계를 점으로 표시 (온보딩, 다단계 작업)
- **색상 변경**: 100% 달성 시 Accent Color (#F97316) 사용

**사용 예시:** 졸업 요건 진행도, 포트폴리오 완성도, 온보딩 단계

---

### 4.5. 뱃지 (Badge)

**스타일:**

```
배경: Primary/Secondary/Accent Color (상황별)
텍스트: White
폰트: 12px / 600 (SemiBold)
패딩: 4px 12px
Border Radius: 12px (pill 형태)

```

**종류:**

| 용도 | 배경 색상 | 예시 |
| --- | --- | --- |
| 일반 상태 | Primary (#3B82F6) | "진행 중" |
| AI/추천 | Secondary (#8B5CF6) | "AI 추천" |
| 긴급/주목 | Accent (#F97316) | "마감 임박" |
| 성공 | Success (#10B981) | "완료" |
| 경고 | Warning (#F59E0B) | "주의" |

**사용 예시:** 활동 상태 표시, 알림 개수, 특별 태그

---

### 4.6. 모달 (Modal)

**스타일:**

```
배경 오버레이: rgba(0, 0, 0, 0.5)
모달 창:
  배경: #FFFFFF
  Border Radius: 16px
  패딩: 32px
  최대 너비: 480px
  그림자: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

애니메이션:
  Fade In (오버레이) + Slide Up (모달)
  Duration: 250ms / ease-out

```

**구조:**

```
┌───────────────────────────────┐
│ [X] 닫기                       │ ← 우상단
│                                │
│ 모달 제목 (H2, 24px)           │
│                                │
│ 본문 내용...                   │
│                                │
│ [취소] [확인]                  │ ← 하단 우측 정렬
└───────────────────────────────┘

```

**사용 예시:** 확인/취소 대화상자, 상세 정보 표시, 폼 입력

---

### 4.7. 스낵바 (Snackbar)

**스타일:**

```
배경: #1F2937 (Text Primary)
텍스트: #FFFFFF (White)
폰트: 14px / 500 (Medium)
패딩: 14px 20px
Border Radius: 8px
위치: 화면 하단 중앙
그림자: 0 10px 15px -3px rgba(0, 0, 0, 0.3)

애니메이션:
  Slide Up + Fade In
  Duration: 250ms
  2-3초 후 자동 Fade Out

```

**구조:**

```
┌─────────────────────────────────┐
│ ✓ 저장 완료! [취소]             │
└─────────────────────────────────┘

```

**사용 예시:** 저장 완료, 삭제 실행, 오류 알림

---

## 5. 적용 예시

### 5.1. 대시보드 메인 화면

### 화면 구조

```
┌─────────────────────────────────────────────────────────┐
│ 🚀 스마트 로드        [검색] [알림🔔] [프로필]        │ ← Header
├─────────────────────────────────────────────────────────┤
│                                                           │
│  안녕하세요, 송재호님! (H1, 32px, Bold)                  │
│  오늘도 한 걸음 성장하고 계시네요 🚀 (Body, 14px)       │ ← 인사 영역
│                                                           │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐│
│  │ 전공 평균 학점 │ │   비교과      │ │  이수 학점    ││
│  │               │ │               │ │               ││ ← 통계 카드
│  │    3.82       │ │    12개       │ │   70/120      ││
│  │ ▲ 0.15        │ │  ▲ 2개 증가   │ │     58%       ││
│  └───────────────┘ └───────────────┘ └───────────────┘│
│                                                           │
│  AI 진단 리포트 (H2, 24px, Bold) ────────────[전체보기]│
│                                                           │
│  ┌|─────────────────────────────────────────────────┐  │
│  │| 🤖 AI 인사이트                                   │  │
│  │|                                                  │  │
│  │| 당신은 시험형 과목에서 상위 15%의 강점을         │  │ ← AI 인사이트 카드
│  │| 보이고 있습니다!                                 │  │   (#F5F3FF 배경)
│  │|                                                  │  │   (#8B5CF6 좌측선)
│  │| • 데이터구조: A+ (상위 10%)                     │  │
│  │| • 알고리즘: A0 (상위 20%)                       │  │
│  │| • 운영체제: A0 (상위 18%)                       │  │
│  │|                                                  │  │
│  │| [상세 분석 보기 →]                              │  │
│  └|─────────────────────────────────────────────────┘  │
│                                                           │
│  최근 활동 (H2, 24px, Bold) ──────────────────[더보기]│
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 📌 캡스톤 디자인 경진대회                         │  │
│  │                                                    │  │ ← 활동 카드
│  │ 2025년 9월 15일 참가                              │  │   (White 배경)
│  │ 출처: 학생종합경력개발 │ [상세보기]              │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 💻 오픈소스 컨트리뷰션 활동                       │  │
│  │                                                    │  │
│  │ 2025년 9월 10일 완료                              │  │
│  │ 출처: 수동 입력 │ [수정] [삭제]                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
│  맞춤 추천 (H2, 24px, Bold) ──────────────────[더보기]│
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ [AI 추천] 🎯 데이터 분석 경진대회                 │  │
│  │                                                    │  │ ← 추천 카드
│  │ 당신의 목표 직무 'AI 엔지니어'와                  │  │   (Secondary 강조)
│  │ 92% 일치합니다                                    │  │
│  │                                                    │  │
│  │ 마감: 2025년 10월 15일 │ [신청하기]              │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

### 색상 적용

- **배경**: `#F9FAFB` (Background)
- **Header**: `#FFFFFF` (White) + 하단 `#E5E7EB` (Border) 1px
- **통계 카드**: `#FFFFFF` + `#E5E7EB` 테두리 + Hover시 `#3B82F6` 미세 그림자
- **AI 카드**: `#F5F3FF` 배경 + 좌측 `#8B5CF6` 4px 강조선
- **일반 카드**: `#FFFFFF` + `#E5E7EB` 테두리
- **텍스트**:
    - 제목: `#1F2937` (Text Primary)
    - 본문: `#6B7280` (Text Secondary)
    - 수치: `#3B82F6` (Primary Color)

---

### 5.2. AI 진단 리포트 상세 화면

### 화면 구조

```
┌─────────────────────────────────────────────────────────┐
│ ← 뒤로가기    AI 진단 리포트 (H1)        [PDF 저장]    │ ← Header
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  진단 일시: 2025년 10월 1일 오후 3시 (Caption, 12px)   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                           │
│  📊 학업 강점 분석 (H2, 24px) ─────────────────────────│
│                                                           │
│  ┌|─────────────────────────────────────────────────┐  │
│  │| 🎯 당신의 Top 3 강점 영역                        │  │
│  │|                                                  │  │
│  │| 1. 시험형 과목 (상위 15%)                       │  │
│  │|    관련 과목: 데이터구조, 알고리즘, 운영체제     │  │
│  │|    Z-Score 평균: +1.24                          │  │
│  │|                                                  │  │
│  │| 2. 이론 중심 과목 (상위 22%)                    │  │
│  │|    관련 과목: 이산수학, 컴퓨터구조              │  │
│  │|    Z-Score 평균: +0.98                          │  │
│  │|                                                  │  │
│  │| 3. 개인 프로젝트형 (상위 30%)                   │  │
│  │|    관련 과목: 모바일프로그래밍, 웹프로그래밍    │  │
│  │|    Z-Score 평균: +0.65                          │  │
│  └|─────────────────────────────────────────────────┘  │
│                                                           │
│  ⚠️ 보완 필요 영역 (H2, 24px) ──────────────────────── │
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ⚡ 팀 프로젝트형 과목 (하위 40%)                  │  │
│  │                                                    │  │
│  │ 관련 과목: 캡스톤디자인, 소프트웨어공학           │  │
│  │ Z-Score 평균: -0.42                               │  │
│  │                                                    │  │
│  │ 💡 개선 제안:                                     │  │
│  │ • 팀 협업 비교과 활동 참여 (추천: 해커톤)        │  │
│  │ • 프로젝트 관리 방법론 학습                       │  │
│  │ • 커뮤니케이션 역량 강화 프로그램                 │  │
│  │                                                    │  │
│  │ [추천 활동 보기]                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
│  🚨 학사경고 조기경보 (H2, 24px) ───────────────────── │
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ✅ 안정 상태입니다                                │  │
│  │                                                    │  │
│  │ 현재 GPA: 3.82                                    │  │
│  │ 경고 기준선과 거리: +1.32 (안전)                  │  │
│  │                                                    │  │
│  │ 예측 모델 신뢰도: 94%                             │  │
│  │ 다음 평가: 2025년 12월 중순                       │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
│  📈 학점 추이 그래프 (H2, 24px) ──────────────────────│
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │        4.5 ┤                                      │  │
│  │        4.0 ┤     ●━━●                            │  │
│  │        3.5 ┤   ●       ●━━●                      │  │
│  │        3.0 ┤ ●                                    │  │
│  │        2.5 ┤                                      │  │
│  │            └─────────────────────────────────     │  │
│  │             1학기 2학기 3학기 4학기 5학기         │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
│  [리포트 PDF로 저장하기]  [친구에게 공유하기]          │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

### 색상 적용

- **강점 카드**: `#F5F3FF` (Violet 50) + `#8B5CF6` 좌측선
- **보완 카드**: `#FFFBEB` (Amber 50) + `#F59E0B` 좌측선
- **안정 상태 카드**: `#ECFDF5` (Green 50) + `#10B981` 좌측선
- **그래프**:
    - 선: `#3B82F6` (Primary)
    - 점: `#3B82F6` (Primary)
    - 배경 그리드: `#E5E7EB` (Border)

---

### 5.3. 포트폴리오 생성 화면

### 화면 구조

```
┌─────────────────────────────────────────────────────────┐
│ ← 뒤로가기    포트폴리오 생성 (H1)        [1/3 단계]   │ ← Header
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ●━━━━━━━━━○━━━━━━━━━○                              │ ← 프로그레스
│  템플릿 선택    내용 편집    다운로드                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                           │
│  📋 템플릿을 선택하세요 (H2, 24px)                       │
│                                                           │
│  ┌─────────────────┐ ┌─────────────────┐ ┌───────────┐│
│  │                  │ │                  │ │           ││
│  │   IPP 지원서용   │ │   취업 이력서    │ │ 자유 양식 ││
│  │                  │ │                  │ │           ││
│  │  ┌──────────┐   │ │  ┌──────────┐   │ │ ┌────────┐││
│  │  │ [미리보기]│   │ │  │ [미리보기]│   │ │ │[미리보기]││
│  │  │          │   │ │  │          │   │ │ │        ││
│  │  │   📄     │   │ │  │   📋     │   │ │ │   ✏️   ││
│  │  │          │   │ │  │          │   │ │ │        ││
│  │  └──────────┘   │ │  └──────────┘   │ │ └────────┘││
│  │                  │ │                  │ │           ││
│  │ ✓ 목표 직무      │ │ ✓ 핵심 역량      │ │ ✓ 자유    ││
│  │   중심 구성      │ │   중심 구성      │ │   커스터  ││
│  │                  │ │                  │ │   마이징  ││
│  │  [선택하기]      │ │  [선택하기]      │ │ [선택하기]││
│  │                  │ │                  │ │           ││
│  └─────────────────┘ └─────────────────┘ └───────────┘│
│        ▲ Selected                                        │
│   (Primary Border)                                       │
│                                                           │
│  💡 선택한 템플릿 미리보기 (H3, 20px)                    │
│                                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ┌────────────────────────────────────────────┐  │  │
│  │ │ 송재호 │ 컴퓨터공학부 3학년              │  │  │
│  │ │ ────────────────────────────────────────  │  │  │
│  │ │                                            │  │  │
│  │ │ 지원 직무: 반도체 장비 엔지니어            │  │  │
│  │ │                                            │  │  │
│  │ │ [핵심 역량]                                │  │  │
│  │ │ • 임베디드 시스템 설계 (A+ 성적)          │  │  │
│  │ │ • 기계 제어 프로그래밍                     │  │  │
│  │ │                                            │  │  │
│  │ │ [주요 프로젝트]                            │  │  │
│  │ │ 1. 자동화 로봇팔 제어 시스템 개발         │  │  │
│  │ │    (캡스톤 디자인 우수상)                 │  │  │
│  │ │ ...                                        │  │  │
│  │ └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                           │
│  ℹ️ 이 템플릿은 IPP 지원 시 요구되는 항목을 기준으로    │
│     당신의 활동을 자동으로 정리합니다.                    │
│                                                           │
│                          [취소]  [다음 단계로 →]         │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

### 다음 화면: 내용 편집 (2/3 단계)

```
┌─────────────────────────────────────────────────────────┐
│ ← 뒤로가기    포트폴리오 생성 (H1)        [2/3 단계]   │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  ●━━━━━━━━━●━━━━━━━━━○                              │
│  템플릿 선택    내용 편집    다운로드                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                           │
│ ┌─────────────────────┬───────────────────────────────┐│
│ │ 📝 편집 영역         │ 👁️ 실시간 미리보기            ││
│ ├─────────────────────┤                               ││
│ │                      │ ┌───────────────────────────┐││
│ │ 기본 정보 (H3)       │ │ 송재호                     │││
│ │                      │ │ 컴퓨터공학부 3학년         │││
│ │ 이름: 송재호         │ │ ─────────────────────────│││
│ │ [편집]               │ │                            │││
│ │                      │ │ 지원 직무:                 │││
│ │ 학과: 컴퓨터공학부   │ │ 반도체 장비 엔지니어       │││
│ │ [편집]               │ │                            │││
│ │                      │ │ [핵심 역량]                │││
│ │ ──────────────────  │ │ • 임베디드 시스템 설계     │││
│ │                      │ │   (A+ 성적)                │││
│ │ 핵심 역량 (H3)       │ │ • 기계 제어 프로그래밍     │││
│ │                      │ │                            │││
│ │ ✓ 임베디드 시스템    │ │ [주요 프로젝트]            │││
│ │ ✓ 기계 제어          │ │ 1. 자동화 로봇팔...        │││
│ │ ✓ 센서 데이터 처리   │ │                            │││
│ │                      │ │                            │││
│ │ [+ 역량 추가]        │ │                            │││
│ │                      │ │                            │││
│ │ ──────────────────  │ │                            │││
│ │                      │ └───────────────────────────┘││
│ │ 주요 프로젝트 (H3)   │                               ││
│ │                      │                               ││
│ │ 1. 자동화 로봇팔     │                               ││
│ │    제어 시스템       │                               ││
│ │    [편집] [삭제]     │                               ││
│ │                      │                               ││
│ │ 2. 스마트 팩토리     │                               ││
│ │    모니터링 시스템   │                               ││
│ │    [편집] [삭제]     │                               ││
│ │                      │                               ││
│ │ [+ 프로젝트 추가]    │                               ││
│ │                      │                               ││
│ └─────────────────────┴───────────────────────────────┘│
│                                                           │
│                 [← 이전 단계]  [다음: 다운로드 →]       │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

### 색상 및 스타일 적용

- **선택된 템플릿 카드**: `#3B82F6` 2px 테두리 + `#EFF6FF` (Blue 50) 배경
- **편집 영역**: `#FFFFFF` 배경 + `#E5E7EB` 구분선
- **미리보기 영역**: `#F9FAFB` 배경 (실제 문서처럼 보이도록)
- **프로그레스**:
    - 완료: `#3B82F6` (Primary)
    - 미완료: `#E5E7EB` (Border)
    - 현재: `#3B82F6` + 2px 굵게

---

### 5.4. 빈 상태 (Empty State) 디자인

### 활동 없을 때

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│                                                           │
│                      🎯                                   │
│                                                           │
│           아직 기록된 활동이 없어요 (H3, 20px)           │
│                                                           │
│       첫 활동을 추가하고 성장 여정을 시작해보세요!       │
│            (Body, 14px, Text Secondary)                  │
│                                                           │
│                 [+ 활동 추가하기]                         │
│                 (Primary Button)                          │
│                                                           │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

### 검색 결과 없을 때

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│                                                           │
│                      🔍                                   │
│                                                           │
│         검색 결과를 찾을 수 없어요 (H3, 20px)            │
│                                                           │
│          다른 키워드로 다시 검색해보세요                  │
│            (Body, 14px, Text Secondary)                  │
│                                                           │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

### 오류 발생 시

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│                                                           │
│                      ⚠️                                   │
│                                                           │
│         일시적인 오류가 발생했어요 (H3, 20px)            │
│                                                           │
│      잠시 후 다시 시도하거나 새로고침 해주세요           │
│            (Body, 14px, Text Secondary)                  │
│                                                           │
│                 [새로고침]                                │
│               (Secondary Button)                          │
│                                                           │
└─────────────────────────────────────────────────────────┘

```

**디자인 원칙:**

- 이모지/아이콘을 크게(48-64px) 배치하여 시각적 관심 유도
- 긍정적이고 격려하는 톤의 메시지 (Warm 키워드)
- 명확한 다음 액션 제시 (Clear 키워드)
- 충분한 여백으로 부담스럽지 않은 느낌

---

### 5.5. 모바일 반응형 적용 예시

### 대시보드 모바일 버전

```
┌───────────────────────┐
│ ☰  스마트 로드  🔔 👤│ ← 헤더 (Compact)
├───────────────────────┤
│                        │
│ 안녕하세요, 송재호님!  │
│ 오늘도 한 걸음 성장... │
│                        │
│ ┌────────────────────┐│
│ │ 전공 평균 학점      ││ ← 통계 카드
│ │                    ││   (세로로 쌓임)
│ │    3.82            ││
│ │ ▲ 0.15             ││
│ └────────────────────┘│
│                        │
│ ┌────────────────────┐│
│ │ 비교과              ││
│ │                    ││
│ │    12개            ││
│ │ ▲ 2개 증가         ││
│ └────────────────────┘│
│                        │
│ ┌────────────────────┐│
│ │ 이수 학점           ││
│ │                    ││
│ │   70/120 (58%)     ││
│ └────────────────────┘│
│                        │
│ AI 진단 리포트 [더보기]│
│                        │
│ ┌|──────────────────┐│
│ │| 🤖 AI 인사이트    ││
│ │|                  ││
│ │| 당신은 시험형     ││
│ │| 과목에서...       ││
│ │|                  ││
│ │| [자세히 →]       ││
│ └|──────────────────┘│
│                        │
│ 최근 활동 [더보기]     │
│                        │
│ ┌──────────────────┐  │
│ │ 📌 캡스톤 디자인  │  │
│ │                  │  │
│ │ 2025.9.15        │  │
│ └──────────────────┘  │
│                        │
└───────────────────────┘

```

**모바일 적용 원칙:**

- **최소 터치 영역**: 44x44px (접근성)
- **단일 컬럼 레이아웃**: 가로 스크롤 최소화
- **간결한 텍스트**: 핵심 정보만 노출, 상세는 탭/클릭으로
- **고정 헤더**: 주요 내비게이션 항상 접근 가능
- **스와이프 제스처**: 카드 삭제/편집 시 활용

---

## 6. 디자인 시스템 사용 가이드

### 6.1. 개발자를 위한 Quick Reference

### CSS 변수 정의 (추천)

```css
:root {
  /* Colors - Primary */
  --color-primary: #3B82F6;
  --color-primary-hover: #2563EB;
  --color-primary-pressed: #1D4ED8;
  --color-primary-light: #EFF6FF;

  /* Colors - Secondary */
  --color-secondary: #8B5CF6;
  --color-secondary-light: #F5F3FF;

  /* Colors - Accent */
  --color-accent: #F97316;

  /* Colors - Grayscale */
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
  --color-background: #F9FAFB;
  --color-white: #FFFFFF;

  /* Colors - Semantic */
  --color-success: #10B981;
  --color-success-light: #ECFDF5;
  --color-warning: #F59E0B;
  --color-warning-light: #FFFBEB;
  --color-error: #EF4444;
  --color-error-light: #FEF2F2;
  --color-info: #06B6D4;
  --color-info-light: #ECFEFF;

  /* Typography */
  --font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

  --font-size-h1: 32px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --font-size-body-large: 16px;
  --font-size-body: 14px;
  --font-size-caption: 12px;
  --font-size-button: 15px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 140%;
  --line-height-normal: 150%;
  --line-height-relaxed: 160%;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 40px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 400ms ease-in-out;
}

```

---

### 컴포넌트 CSS 클래스 예시

**버튼 (Button)**

```css
/* Primary Button */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

.btn-primary:active {
  background-color: var(--color-primary-pressed);
  transform: scale(0.98);
}

.btn-primary:disabled {
  background-color: #D1D5DB;
  color: #9CA3AF;
  cursor: not-allowed;
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--color-white);
  color: var(--color-primary);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: 2px solid var(--color-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background-color: var(--color-primary-light);
}

.btn-secondary:active {
  background-color: #DBEAFE;
}

/* Text Button */
.btn-text {
  background-color: transparent;
  color: var(--color-primary);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-text:hover {
  background-color: var(--color-primary-light);
  color: var(--color-primary-hover);
}

```

**카드 (Card)**

```css
/* 기본 카드 */
.card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}

.card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}

/* AI 인사이트 카드 */
.card-ai {
  background-color: var(--color-secondary-light);
  border: 1px solid var(--color-secondary);
  border-left: 4px solid var(--color-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

/* 통계 카드 */
.card-stat {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.card-stat-label {
  font-size: var(--font-size-caption);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.card-stat-value {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1;
}

.card-stat-change {
  font-size: var(--font-size-caption);
  color: var(--color-success);
  margin-top: var(--spacing-xs);
}

```

**입력창 (Input)**

```css
.input {
  width: 100%;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-size: var(--font-size-body);
  font-family: var(--font-family);
  color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.input:focus {
  outline: none;
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input:disabled {
  background-color: var(--color-background);
  color: #9CA3AF;
  cursor: not-allowed;
}

.input.error {
  border: 2px solid var(--color-error);
}

.input-label {
  display: block;
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.input-error-message {
  font-size: var(--font-size-caption);
  color: var(--color-error);
  margin-top: var(--spacing-xs);
}

```

**뱃지 (Badge)**

```css
.badge {
  display: inline-flex;
  align-items: center;
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-semibold);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.badge-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.badge-secondary {
  background-color: var(--color-secondary);
  color: var(--color-white);
}

.badge-accent {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.badge-success {
  background-color: var(--color-success);
  color: var(--color-white);
}

.badge-warning {
  background-color: var(--color-warning);
  color: var(--color-white);
}

```

---

### 6.2. React 컴포넌트 예시 (TypeScript)

### Button Component

```tsx
// Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
}) => {
  const getClassName = () => {
    let className = `btn btn-${variant}`;
    if (size !== 'medium') className += ` btn-${size}`;
    if (loading) className += ' btn-loading';
    return className;
  };

  return (
    <button
      className={getClassName()}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <>
          <span className="spinner" />
          처리 중...
        </>
      ) : (
        children
      )}
    </button>
  );
};

// 사용 예시
<Button variant="primary" onClick={handleSave}>
  저장하기
</Button>

<Button variant="secondary" onClick={handleCancel}>
  취소
</Button>

<Button variant="primary" loading={true}>
  저장 중...
</Button>

```

### Card Component

```tsx
// Card.tsx
import React from 'react';
import './Card.css';

interface CardProps {
  variant?: 'default' | 'ai' | 'stat';
  title?: string;
  subtitle?: string;
  footer?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  subtitle,
  footer,
  children,
  onClick,
}) => {
  const isClickable = !!onClick;

  return (
    <div
      className={`card card-${variant} ${isClickable ? 'card-clickable' : ''}`}
      onClick={onClick}
    >
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="card-body">{children}</div>

      {footer && (
        <div className="card-footer">
          <p className="card-footer-text">{footer}</p>
        </div>
      )}
    </div>
  );
};

// 사용 예시
<Card
  variant="ai"
  title="AI 인사이트"
  footer="출처: 학사 DB"
>
  <p>당신은 시험형 과목에서 상위 15%의 강점을 보입니다!</p>
  <ul>
    <li>데이터구조: A+ (상위 10%)</li>
    <li>알고리즘: A0 (상위 20%)</li>
  </ul>
</Card>

```

### Input Component

```tsx
// Input.tsx
import React, { useState } from 'react';
import './Input.css';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  error,
  helperText,
  disabled = false,
  required = false,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      <input
        type={type}
        className={`input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        value={internalValue}
        disabled={disabled}
        onChange={handleChange}
      />

      {error && (
        <p className="input-error-message">{error}</p>
      )}

      {!error && helperText && (
        <p className="input-helper-text">{helperText}</p>
      )}
    </div>
  );
};

// 사용 예시
<Input
  label="이메일"
  type="email"
  placeholder="example@koreatech.ac.kr"
  required={true}
  helperText="학교 이메일을 입력해주세요"
  onChange={(value) => console.log(value)}
/>

<Input
  label="학번"
  type="text"
  value="2021136000"
  error="유효하지 않은 학번입니다"
/>

```

---

### 6.3. 디자인 토큰 (Figma/Tokens)

### JSON 포맷 디자인 토큰

```json
{
  "color": {
    "primary": {
      "value": "#3B82F6",
      "type": "color"
    },
    "primary-hover": {
      "value": "#2563EB",
      "type": "color"
    },
    "secondary": {
      "value": "#8B5CF6",
      "type": "color"
    },
    "accent": {
      "value": "#F97316",
      "type": "color"
    },
    "text": {
      "primary": {
        "value": "#1F2937",
        "type": "color"
      },
      "secondary": {
        "value": "#6B7280",
        "type": "color"
      }
    },
    "border": {
      "value": "#E5E7EB",
      "type": "color"
    },
    "background": {
      "value": "#F9FAFB",
      "type": "color"
    }
  },
  "typography": {
    "font-family": {
      "value": "Pretendard",
      "type": "fontFamilies"
    },
    "h1": {
      "size": {
        "value": "32px",
        "type": "fontSizes"
      },
      "weight": {
        "value": "700",
        "type": "fontWeights"
      },
      "line-height": {
        "value": "140%",
        "type": "lineHeights"
      }
    },
    "body": {
      "size": {
        "value": "14px",
        "type": "fontSizes"
      },
      "weight": {
        "value": "400",
        "type": "fontWeights"
      },
      "line-height": {
        "value": "160%",
        "type": "lineHeights"
      }
    }
  },
  "spacing": {
    "xs": {
      "value": "4px",
      "type": "spacing"
    },
    "sm": {
      "value": "8px",
      "type": "spacing"
    },
    "md": {
      "value": "16px",
      "type": "spacing"
    },
    "lg": {
      "value": "24px",
      "type": "spacing"
    },
    "xl": {
      "value": "32px",
      "type": "spacing"
    }
  },
  "radius": {
    "sm": {
      "value": "4px",
      "type": "borderRadius"
    },
    "md": {
      "value": "8px",
      "type": "borderRadius"
    },
    "lg": {
      "value": "12px",
      "type": "borderRadius"
    },
    "full": {
      "value": "9999px",
      "type": "borderRadius"
    }
  }
}

```

---

### 6.4. 체크리스트 (디자인 QA)

### 새로운 화면/기능 추가 시 확인 사항

**✅ 색상**

- [ ]  Primary Color가 브랜드 정체성에 맞게 사용되었는가?
- [ ]  텍스트 대비율이 WCAG AA 기준(4.5:1)을 충족하는가?
- [ ]  Success/Warning/Error 색상이 의미에 맞게 사용되었는가?
- [ ]  AI 관련 기능에 Secondary Color(Violet)가 사용되었는가?

**✅ 타이포그래피**

- [ ]  Pretendard 서체가 일관되게 적용되었는가?
- [ ]  폰트 위계(H1>H2>H3>Body)가 명확한가?
- [ ]  중요 수치는 600 이상 Weight를 사용했는가?
- [ ]  한 화면에 3단계 이상의 위계가 사용되지 않았는가?

**✅ 레이아웃 & 간격**

- [ ]  텍스트 블록 간 최소 24px 여백이 있는가?
- [ ]  카드 패딩이 20-24px로 통일되었는가?
- [ ]  모바일에서 터치 영역이 최소 44x44px인가?

**✅ 인터랙션**

- [ ]  버튼 클릭 시 시각적 피드백(Scale, 색상 변화)이 있는가?
- [ ]  로딩 상태가 명확하게 표시되는가? (스켈레톤 UI 또는 스피너)
- [ ]  Hover/Focus 상태가 구분되는가?
- [ ]  오류 발생 시 명확한 오류 메시지가 표시되는가?

**✅ UX 원칙**

- [ ]  데이터 출처가 명시되어 있는가? (신뢰성)
- [ ]  한 화면에 과도한 정보가 노출되지 않았는가? (점진적 공개)
- [ ]  마이크로카피가 긍정적이고 격려하는 톤인가? (따뜻함)

**✅ 접근성**

- [ ]  키보드만으로 모든 기능에 접근 가능한가?
- [ ]  이미지와 아이콘에 대체 텍스트(alt)가 있는가?
- [ ]  스크린 리더가 로딩/오류 상태를 읽을 수 있는가?

**✅ 반응형**

- [ ]  모바일 환경에서 레이아웃이 깨지지 않는가?
- [ ]  가로 스크롤이 발생하지 않는가?
- [ ]  주요 CTA 버튼이 엄지손가락 영역에 있는가?

---

### 6.5. 자주 묻는 질문 (FAQ)

**Q1. Primary Color 대신 다른 파란색을 사용해도 되나요?**
A. 아니요. Primary Color(`#3B82F6`)는 브랜드 정체성의 핵심이므로 임의로 변경하면 안 됩니다. 다만 명도가 다른 버전(Hover, Light)은 허용됩니다.

**Q2. 새로운 컴포넌트를 만들 때 Border Radius는 어떻게 정하나요?**
A. 컴포넌트 크기에 따라 결정합니다:

- 작은 요소 (버튼, 뱃지): `8px`
- 중간 요소 (카드, 입력창): `12px`
- 큰 요소 (모달): `16px`

**Q3. AI 기능이 아닌데 보라색(Secondary Color)을 사용해도 되나요?**
A. 권장하지 않습니다. Secondary Color는 AI/추천 기능의 시각적 정체성이므로, 일반 기능에 사용하면 사용자 혼란을 야기할 수 있습니다.

**Q4. 그림자(Shadow)는 언제 사용하나요?**
A. 최소한으로 사용합니다:

- 기본 카드: 그림자 없음
- Hover 시: 미세한 그림자 (`0 2px 8px rgba(0,0,0,0.08)`)
- 모달/드롭다운: 명확한 그림자 (`0 10px 15px rgba(0,0,0,0.1)`)

**Q5. 빈 상태(Empty State)에 어떤 이모지를 사용하면 좋나요?**
A. 상황에 맞는 긍정적 이모지를 사용합니다:

- 활동 없음: 🎯 (목표)
- 검색 결과 없음: 🔍 (검색)
- 오류: ⚠️ (경고)
- 완료: ✅ (체크)
- 성취: 🎉 (축하)

**Q6. 모바일과 데스크톱 폰트 크기를 다르게 해야 하나요?**
A. 기본적으로 동일하게 유지하되, 모바일에서 Body 텍스트가 너무 작다면 최소 14px는 유지합니다. H1 등 큰 텍스트는 모바일에서 1-2단계 축소 가능합니다 (예: 32px → 28px).

---

### 6.6. 업데이트 이력

| 버전 | 날짜 | 변경 사항 |
| --- | --- | --- |
| 1.0 | 2025.10.01 | 초기 디자인 가이드 작성 |

---

## 7. 마무리 및 다음 단계

### 7.1. 디자인 가이드 활용 방법

이 디자인 가이드는 **스마트 로드** 프로젝트의 모든 시각적, 경험적 결정의 기준점입니다.

**개발 단계별 활용:**

1. **기획 단계**: UX 원칙을 기반으로 사용자 플로우 설계
2. **디자인 단계**: 컬러, 타이포그래피, 컴포넌트 스타일 참조
3. **개발 단계**: CSS 변수, React 컴포넌트 예시 코드 활용
4. **QA 단계**: 체크리스트로 디자인 일관성 검증

### 7.2. 추천 다음 단계

**✅ 즉시 실행 가능:**

1. **Figma에 디자인 시스템 구축**
    - 컬러 팔레트, 타이포그래피, 주요 컴포넌트를 Figma Components로 제작
    - 실제 화면 목업 작업 시작
2. **CSS 변수 프로젝트에 적용**
    - `globals.css` 또는 `variables.css` 파일에 6.1의 CSS 변수 추가
    - 모든 하드코딩된 색상/크기 값을 변수로 교체
3. **공통 컴포넌트 라이브러리 구축**
    - Button, Card, Input 등 핵심 컴포넌트를 Storybook으로 문서화
    - 재사용 가능한 컴포넌트 라이브러리 생성

**🎯 중기 목표:**
4. **사용자 테스트**

- KOREATECH 학생 5-10명에게 프로토타입 테스트
- 특히 "따뜻함", "명확성" 키워드가 실제로 느껴지는지 검증
1. **디자인 시스템 확장**
    - 테이블, 탭, 아코디언 등 추가 컴포넌트 정의
    - 다크 모드 지원 (선택사항)

---

---

## 📚 참고 자료

- **Pretendard 서체**: https://cactus.tistory.com/306
- **WCAG 접근성 가이드**: https://www.w3.org/WAI/WCAG21/quickref/
- **Toss 디자인 원칙**: https://toss.im/career/article/tossteam-chapter1
- **Material Design Guidelines**: https://m3.material.io/

---

<div style="text-align: center; padding: 40px 0; background: #F9FAFB; border-radius: 12px; margin-top: 40px;">
  <h2 style="color: #3B82F6; margin-bottom: 16px;">🚀 스마트 로드와 함께 성장하세요!</h2>
  <p style="color: #6B7280; font-size: 16px;">이 가이드를 바탕으로 학생들에게 신뢰받는 플랫폼을 만들어갑니다.</p>
</div>

---

## ✅ 최종 체크

**✨ 완성된 디자인 가이드 문서:**

✅ **Step 1**: 브랜드 페르소나 및 5가지 디자인 키워드

✅ **Step 2**: 컬러 팔레트 (Primary/Secondary/Accent) + Pretendard 타이포그래피

✅ **Step 3**: 3가지 핵심 UX 원칙 + 상세 인터랙션 가이드라인

✅ **Step 4**: 통합 문서 + 핵심 UI 컴포넌트 스타일 (버튼, 카드, 입력창, 뱃지, 모달 등)

✅ **적용 예시**: 대시보드, AI 리포트, 포트폴리오 생성 화면 등

✅ **개발자 가이드**: CSS 변수, React 컴포넌트 예시, 디자인 토큰

✅ **QA 체크리스트** + FAQ + 업데이트 이력

---
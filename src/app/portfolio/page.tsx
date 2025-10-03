'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Printer, 
  GraduationCap, 
  Award, 
  FileText, 
  Briefcase, 
  Activity,
  FolderOpen,
  Trophy,
  Users,
  Lightbulb
} from 'lucide-react'

// 샘플 데이터
const studentInfo = {
  name: '김영수',
  department: '산업경영학부',
  year: '4학년',
  major: '데이터경영',
  credits: '125/140',
  gpa: '3.0',
  photo: 'https://picsum.photos/150/150?random=1',
  achievements: 6,
  certificates: 5,
  career: { count: 3, duration: '3개월' },
  activities: 7
}

const academicBackground = [
  {
    institution: '한국기술교육대학교 산업경영학부',
    period: '2022.03',
    type: '대학교'
  },
  {
    institution: '맹구고등학교',
    period: '2013.03 ~ 2016.02',
    type: '고등학교'
  }
]

const awards = [
  {
    title: '2025년도 창업 300 + 학생창업 유망팀 성장트랙 A 선발 인증서',
    date: '2025.09 예정',
    issuer: '교육부 장관'
  },
  {
    title: '2025년도 충북혁신도시 공공데이터 분석·활용 아이디어 공모전 도시가스 부분 장려상',
    date: '2025.09.04',
    issuer: '한국가스안전공사'
  },
  {
    title: '2025학년도 한국기술교육대학교 창업 아이디어 경진대회 대상',
    date: '2025.05.28',
    issuer: '한국기술교육대학교'
  },
  {
    title: '제3회 메가스터디 VISION 공모전 최우수상 AI분야',
    date: '2025.05.24',
    issuer: '메가스터디'
  },
  {
    title: 'DSC공유대학 생성형 AI분석 경진대회 우수상',
    date: '2025.01.24',
    issuer: 'DSC공유대학'
  },
  {
    title: '데이터 안심구역 서포터즈 2기 수료',
    date: '2024.11.01',
    issuer: '한국데이터산업진흥원'
  }
]

const certificates = [
  {
    name: '사무자동화산업기사',
    date: '2024.12.11',
    issuer: '과학기술정보통신부'
  },
  {
    name: 'SQL 개발자[SQLD]',
    date: '2024.04.04',
    issuer: '한국데이터산업진흥원'
  },
  {
    name: '데이터분석준전문가 [ADSP]',
    date: '2024.03.28',
    issuer: '한국데이터산업진흥원'
  },
  {
    name: 'IP정보검색사',
    date: '2024.06.21',
    issuer: '한국지식재산서비스협회'
  },
  {
    name: '빅데이터분석실무 1급',
    date: '2024.09.23',
    issuer: '한국정보인재개발원'
  }
]

const workExperience = [
  {
    company: '비바리퍼블리카(토스) 본사',
    position: 'Sales Supporter (Commerce)',
    period: '2025.07.21~',
    status: '현재'
  },
  {
    company: '두양 리미티드 본사',
    position: '경영지원팀 사무보조',
    period: '2024.08-2024.09',
    status: '완료'
  },
  {
    company: '라온건설 본사',
    position: '회계팀 및 외주구매팀',
    period: '2024.06~2024.07',
    status: '완료'
  }
]

const activities = [
  '2025년 학생 창업 유망팀 300 성장트랙 A 참여 및 최종 300+ 선정',
  '2025년 관광데이터 분석 공모전 참가',
  '2025년 충북혁신도시 공공데이터 분석·활용 아이디어 공모전 참여 및 본선 진출 및 장려상',
  '2025년 한국기술교육대학교 교내 창업 아이디어 경진대회 참여 및 대상',
  '2025년 메가스터디 제 3회 아이디어 경진대회 참여 및 최우수상',
  'KBLs [Key Bridge Leaders] 빅데이터 동아리 활동',
  'DSC공유대학 생성형 AI 교육 및 경진대회 참여 및 우수상'
]

const projects = [
  {
    title: '지역 간 장애인 고용 격차에 따른 군집 분석과 맞춤형 전략 제안',
    file: '지역 간 장애인 고용 격차에 따른 군집 분석과 정책 전략 제안.pdf'
  },
  {
    title: 'AI기반 차세대 LMS, Bridge [교내 창업 아이디어 경진대회 작품]',
    file: '교내 창업 아이디어 경진 대회_Bridge.pdf'
  },
  {
    title: 'DSR 규제의 실효성과 형평성에 대한 분석',
    file: 'DSR 규제의 실효성과 형평성에 대한 분석.hwp'
  },
  {
    title: '성적 데이터를 활용한 학습 추천 시스템_메가 에듀 매치 시스템[Mems]',
    file: '메가 에듀 시스템 최종.pdf'
  },
  {
    title: '사고 다발 지역 데이터 분석을 통한 소방 드론 배치 전략 수립',
    file: '소방 드론 배치 전략 수립.pdf'
  }
]

export default function PortfolioPage() {
  return (
    <div className="container py-6 space-y-6">
      {/* 페이지 헤더 */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-600">내 포트폴리오</h1>
        <p className="text-base text-gray-500">
          개인 정보와 포트폴리오를 한눈에 확인하고 관리하세요
        </p>
      </div>

      {/* 내 정보 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
            <User className="w-5 h-5" />
            내 정보
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 학생 프로필 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img 
                  src={studentInfo.photo} 
                  alt={studentInfo.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-700">{studentInfo.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{studentInfo.department} {studentInfo.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>세부전공: {studentInfo.major}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>이수학점: {studentInfo.credits}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>학점평균: {studentInfo.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 성과 및 활동 요약 */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{studentInfo.achievements}</div>
                  <div className="text-sm text-gray-600">수상 및 공로내역</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{studentInfo.certificates}</div>
                  <div className="text-sm text-gray-600">자격증</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{studentInfo.career.count}회</div>
                  <div className="text-sm text-gray-600">경력 사항 ({studentInfo.career.duration})</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{studentInfo.activities}</div>
                  <div className="text-sm text-gray-600">활동 사항</div>
                </div>
              </div>
            </div>

            {/* 피드백 카드들 */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-700">수상 및 공로내역</span>
                  </div>
                  <p className="text-sm text-gray-600">기업 및 대학 평균 대비 충분한 스펙을 보유하고 있습니다.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-700">경력 사항</span>
                  </div>
                  <p className="text-sm text-gray-600">기업 및 대학 평균 대비 더 많은 IPP 및 인턴십 경험이 필요합니다.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-700">자격증</span>
                  </div>
                  <p className="text-sm text-gray-600">기업 및 대학 평균 대비 직무 관련 자격증 1개가 더 필요합니다.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-700">교내 및 외부 활동</span>
                  </div>
                  <p className="text-sm text-gray-600">기업 및 대학 평균 대비 동아리 및 서포터 활동을 통한 다양한 경험이 필요합니다.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                  정보 기입하기
                </Button>
                <Button variant="outline">
                  불러오기
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 내 포트폴리오 섹션 */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              내 포트폴리오
            </CardTitle>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Printer className="w-4 h-4 mr-2" />
              인쇄하기
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* 학력사항 */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-orange-600" />
                학력사항
              </h3>
              <div className="space-y-2">
                {academicBackground.map((edu, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold text-gray-700">{edu.institution}</span>
                      <span className="text-sm text-gray-500 ml-2">[{edu.period}]</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 수상 및 공로 내역 */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-600" />
                수상 및 공로 내역
              </h3>
              <div className="space-y-2">
                {awards.map((award, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-700">{index + 1}. {award.title}</p>
                        <p className="text-sm text-gray-500">({award.date}/{award.issuer})</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 자격증 */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-600" />
                자격증
              </h3>
              <div className="space-y-2">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold text-gray-700">{index + 1}. {cert.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({cert.date}/{cert.issuer})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 경력 사항 */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-orange-600" />
                경력 사항
              </h3>
              <div className="space-y-2">
                {workExperience.map((work, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-700">{index + 1}. {work.company} {work.position} 근무</p>
                        <p className="text-sm text-gray-500">근무 기간: {work.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 교내 및 외부 활동 */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-600" />
                교내 및 외부 활동
              </h3>
              <div className="space-y-2">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-orange-600">{index + 1}.</span>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 프로젝트 */}
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-orange-600" />
                프로젝트
              </h3>
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-700">{index + 1}. {project.title}</p>
                        <p className="text-sm text-gray-500">파일: {project.file}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  User, 
  GraduationCap, 
  Award, 
  FileText, 
  Briefcase, 
  Activity,
  Building2,
  Calendar,
  MapPin,
  Users
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
  certificates: 1,
  career: { count: 1, duration: '3개월' },
  activities: 10
}

const employmentStats = {
  department: '산업경영학부',
  employmentRate: '76.9%',
  breakdown: {
    largeCorp: 8,
    midCorp: 28,
    sme: 27,
    government: 5,
    public: 2,
    other: 10,
    total: 80
  }
}

const ippCompanies = [
  { name: '삼성전자', location: '서울', type: '대기업', deadline: '2024-03-15' },
  { name: 'LG전자', location: '서울', type: '대기업', deadline: '2024-03-20' },
  { name: '네이버', location: '성남', type: '대기업', deadline: '2024-03-25' },
  { name: '카카오', location: '제주', type: '대기업', deadline: '2024-03-30' },
  { name: '현대자동차', location: '서울', type: '대기업', deadline: '2024-04-05' }
]

const jobAnnouncements = [
  { company: 'SK하이닉스', position: '데이터 분석가', location: '이천', deadline: '2024-03-18' },
  { company: '포스코', position: '경영분석', location: '포항', deadline: '2024-03-22' },
  { company: 'KT', position: '마케팅 기획', location: '서울', deadline: '2024-03-28' },
  { company: '신세계', position: '상품기획', location: '서울', deadline: '2024-04-02' }
]

export default function IPPPage() {
  return (
    <div className="container py-6 space-y-6">
      {/* 페이지 헤더 */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-600">IPP 인턴십 프로그램</h1>
        <p className="text-base text-gray-500">
          Industry Professional Practice를 통한 실무 경험과 취업 기회를 제공합니다
        </p>
      </div>

      {/* 학생 정보 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-600 flex items-center gap-2">
            <User className="w-5 h-5" />
            학생 정보
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
                  className="w-24 h-24 rounded-lg object-cover"
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
              
              {/* 성과 및 활동 */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{studentInfo.achievements}</div>
                  <div className="text-sm text-gray-600">수상 및 공로내역</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{studentInfo.certificates}</div>
                  <div className="text-sm text-gray-600">자격증</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{studentInfo.career.count}회</div>
                  <div className="text-sm text-gray-600">경력 사항 ({studentInfo.career.duration})</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{studentInfo.activities}</div>
                  <div className="text-sm text-gray-600">활동 사항</div>
                </div>
              </div>
            </div>

            {/* 취업 준비 및 현황 */}
            <div className="space-y-4">
              <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                진로준비진단 및 구직준비도 검사
              </Button>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary-600">
                  {employmentStats.department} 취업 현황
                </h4>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary-600">{employmentStats.employmentRate}</div>
                    <div className="text-sm text-gray-600">취업률</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span>대기업:</span>
                      <span className="font-semibold">{employmentStats.breakdown.largeCorp}명</span>
                    </div>
                    <div className="flex justify-between">
                      <span>중견기업:</span>
                      <span className="font-semibold">{employmentStats.breakdown.midCorp}명</span>
                    </div>
                    <div className="flex justify-between">
                      <span>중소기업:</span>
                      <span className="font-semibold">{employmentStats.breakdown.sme}명</span>
                    </div>
                    <div className="flex justify-between">
                      <span>국가 및 지자체:</span>
                      <span className="font-semibold">{employmentStats.breakdown.government}명</span>
                    </div>
                    <div className="flex justify-between">
                      <span>공공기관 및 공기업:</span>
                      <span className="font-semibold">{employmentStats.breakdown.public}명</span>
                    </div>
                    <div className="flex justify-between">
                      <span>기타:</span>
                      <span className="font-semibold">{employmentStats.breakdown.other}명</span>
                    </div>
                    <div className="flex justify-between col-span-2 pt-2 border-t">
                      <span className="font-semibold">합계:</span>
                      <span className="font-bold text-primary-600">{employmentStats.breakdown.total}명</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IPP 참여 기업 리스트 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-600 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            IPP 참여 리스트 기업 명단
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ippCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">{company.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {company.location}
                      </span>
                      <Badge variant="secondary">{company.type}</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">신청 마감</div>
                  <div className="font-semibold text-gray-700">{company.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 직무 관련 기업 공고 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-600 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            직무 관련 기업 공고 명단
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {jobAnnouncements.map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">{job.company}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{job.position}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">지원 마감</div>
                  <div className="font-semibold text-gray-700">{job.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

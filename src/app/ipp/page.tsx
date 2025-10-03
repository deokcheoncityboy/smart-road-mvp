'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  Target,
  Eye,
  ExternalLink
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
  { 
    id: 1,
    name: '삼성전자', 
    location: '서울', 
    type: '대기업', 
    deadline: '2024-03-15',
    industry: 'IT/전자',
    logo: 'https://picsum.photos/60/60?random=1',
    description: '글로벌 반도체 및 전자제품 선도기업',
    recommendedJobs: ['데이터 분석가', '경영분석', '마케팅 기획'],
    jobRelevance: 95,
    avgGpa: 3.7,
    avgToeic: 850,
    avgCertificates: 3,
    avgActivities: 8,
    totalApplicants: 1200,
    acceptedApplicants: 24,
    acceptanceRate: 2.0
  },
  { 
    id: 2,
    name: 'LG전자', 
    location: '서울', 
    type: '대기업', 
    deadline: '2024-03-20',
    industry: 'IT/전자',
    logo: 'https://picsum.photos/60/60?random=2',
    description: '가전제품 및 디스플레이 전문기업',
    recommendedJobs: ['제품기획', '마케팅', '경영분석'],
    jobRelevance: 88,
    avgGpa: 3.5,
    avgToeic: 820,
    avgCertificates: 2,
    avgActivities: 6,
    totalApplicants: 950,
    acceptedApplicants: 19,
    acceptanceRate: 2.0
  },
  { 
    id: 3,
    name: '네이버', 
    location: '성남', 
    type: '대기업', 
    deadline: '2024-03-25',
    industry: 'IT/인터넷',
    logo: 'https://picsum.photos/60/60?random=3',
    description: '국내 최대 포털사이트 및 IT 서비스 기업',
    recommendedJobs: ['데이터 분석가', '서비스 기획', '마케팅'],
    jobRelevance: 92,
    avgGpa: 3.6,
    avgToeic: 840,
    avgCertificates: 4,
    avgActivities: 10,
    totalApplicants: 1800,
    acceptedApplicants: 36,
    acceptanceRate: 2.0
  },
  { 
    id: 4,
    name: '카카오', 
    location: '제주', 
    type: '대기업', 
    deadline: '2024-03-30',
    industry: 'IT/인터넷',
    logo: 'https://picsum.photos/60/60?random=4',
    description: '모바일 플랫폼 및 게임 서비스 기업',
    recommendedJobs: ['서비스 기획', '데이터 분석', '마케팅'],
    jobRelevance: 90,
    avgGpa: 3.4,
    avgToeic: 830,
    avgCertificates: 3,
    avgActivities: 7,
    totalApplicants: 1500,
    acceptedApplicants: 30,
    acceptanceRate: 2.0
  },
  { 
    id: 5,
    name: '현대자동차', 
    location: '서울', 
    type: '대기업', 
    deadline: '2024-04-05',
    industry: '자동차',
    logo: 'https://picsum.photos/60/60?random=5',
    description: '글로벌 자동차 제조 및 판매 기업',
    recommendedJobs: ['경영분석', '마케팅', '품질관리'],
    jobRelevance: 85,
    avgGpa: 3.3,
    avgToeic: 800,
    avgCertificates: 2,
    avgActivities: 5,
    totalApplicants: 1100,
    acceptedApplicants: 22,
    acceptanceRate: 2.0
  },
  { 
    id: 6,
    name: 'SK하이닉스', 
    location: '이천', 
    type: '대기업', 
    deadline: '2024-04-10',
    industry: '반도체',
    logo: 'https://picsum.photos/60/60?random=6',
    description: '글로벌 메모리 반도체 전문기업',
    recommendedJobs: ['데이터 분석가', '경영분석', '품질관리'],
    jobRelevance: 87,
    avgGpa: 3.5,
    avgToeic: 810,
    avgCertificates: 3,
    avgActivities: 6,
    totalApplicants: 800,
    acceptedApplicants: 16,
    acceptanceRate: 2.0
  }
]

const jobAnnouncements = [
  { company: 'SK하이닉스', position: '데이터 분석가', location: '이천', deadline: '2024-03-18' },
  { company: '포스코', position: '경영분석', location: '포항', deadline: '2024-03-22' },
  { company: 'KT', position: '마케팅 기획', location: '서울', deadline: '2024-03-28' },
  { company: '신세계', position: '상품기획', location: '서울', deadline: '2024-04-02' }
]

export default function IPPPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedCompany, setSelectedCompany] = useState(null)

  // 필터링된 기업 목록
  const filteredCompanies = ippCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || company.type === selectedType
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry
    const matchesLocation = selectedLocation === 'all' || company.location === selectedLocation
    
    return matchesSearch && matchesType && matchesIndustry && matchesLocation
  })

  // 고유한 필터 옵션들
  const uniqueTypes = [...new Set(ippCompanies.map(c => c.type))]
  const uniqueIndustries = [...new Set(ippCompanies.map(c => c.industry))]
  const uniqueLocations = [...new Set(ippCompanies.map(c => c.location))]

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
            IPP 참여 기업 명단
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* 필터 섹션 */}
          <div className="mb-6 space-y-4">
            {/* 검색 및 필터 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="기업명 또는 설명으로 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="기업 유형" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    {uniqueTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="산업" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    {uniqueIndustries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="지역" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    {uniqueLocations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* 결과 개수 */}
            <div className="text-sm text-gray-500">
              총 {filteredCompanies.length}개 기업이 검색되었습니다.
            </div>
          </div>

          {/* 기업 목록 */}
          <div className="space-y-4">
            {filteredCompanies.map((company) => (
              <div key={company.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-700">{company.name}</h3>
                        <Badge variant="secondary">{company.type}</Badge>
                        <Badge variant="outline">{company.industry}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{company.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {company.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          마감: {company.deadline}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    상세보기
                  </Button>
                </div>

                {/* 추천 직무 */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    추천 직무
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {company.recommendedJobs.map((job, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {job}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 직무 관련도 및 합격자 스펙 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 직무 관련도 */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      직무 관련도
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${company.jobRelevance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-primary-600">
                        {company.jobRelevance}%
                      </span>
                    </div>
                  </div>

                  {/* 평균 합격자 스펙 */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      평균 합격자 스펙
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span>GPA:</span>
                        <span className="font-semibold">{company.avgGpa}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TOEIC:</span>
                        <span className="font-semibold">{company.avgToeic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>자격증:</span>
                        <span className="font-semibold">{company.avgCertificates}개</span>
                      </div>
                      <div className="flex justify-between">
                        <span>활동:</span>
                        <span className="font-semibold">{company.avgActivities}개</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 지원 통계 */}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">
                        지원자: <span className="font-semibold">{company.totalApplicants.toLocaleString()}명</span>
                      </span>
                      <span className="text-gray-600">
                        합격자: <span className="font-semibold text-primary-600">{company.acceptedApplicants}명</span>
                      </span>
                    </div>
                    <span className="text-gray-600">
                      합격률: <span className="font-semibold text-accent-600">{company.acceptanceRate}%</span>
                    </span>
                  </div>
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

      {/* 기업 상세 모달 */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-700">{selectedCompany.name} 상세 정보</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedCompany(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 기업 기본 정보 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedCompany.logo} 
                      alt={selectedCompany.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-700">{selectedCompany.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{selectedCompany.type}</Badge>
                        <Badge variant="outline">{selectedCompany.industry}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-600">{selectedCompany.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {selectedCompany.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        마감: {selectedCompany.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 추천 직무 및 관련도 */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      추천 직무
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCompany.recommendedJobs.map((job, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {job}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      직무 관련도
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-primary-600 h-3 rounded-full" 
                          style={{ width: `${selectedCompany.jobRelevance}%` }}
                        ></div>
                      </div>
                      <span className="text-lg font-bold text-primary-600">
                        {selectedCompany.jobRelevance}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 평균 합격자 스펙 상세 */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  평균 합격자 스펙
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedCompany.avgGpa}</div>
                    <div className="text-sm text-gray-600">평균 GPA</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedCompany.avgToeic}</div>
                    <div className="text-sm text-gray-600">평균 TOEIC</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedCompany.avgCertificates}</div>
                    <div className="text-sm text-gray-600">평균 자격증</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedCompany.avgActivities}</div>
                    <div className="text-sm text-gray-600">평균 활동</div>
                  </div>
                </div>
              </div>

              {/* 지원 통계 */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  지원 통계
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-700">{selectedCompany.totalApplicants.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">총 지원자</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedCompany.acceptedApplicants}</div>
                    <div className="text-sm text-gray-600">합격자</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-600">{selectedCompany.acceptanceRate}%</div>
                    <div className="text-sm text-gray-600">합격률</div>
                  </div>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="mt-6 flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setSelectedCompany(null)}>
                  닫기
                </Button>
                <Button className="bg-primary-600 hover:bg-primary-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  지원하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  User, 
  TrendingUp, 
  Calendar,
  Target,
  BookOpen,
  Award,
  Clock,
  MapPin,
  GraduationCap,
  FileText,
  Activity
} from 'lucide-react'

// 샘플 데이터
const studentInfo = {
  name: '김영수',
  department: '산업경영학부',
  year: '4학년',
  major: '데이터경영',
  credits: '125/140',
  gpa: '3.0',
  photo: 'https://picsum.photos/150/150?random=1'
}

const gpaHistory = [
  { semester: '2021-1', gpa: 2.45 },
  { semester: '2021-2', gpa: 3.2 },
  { semester: '2022-1', gpa: 3.0 },
  { semester: '2022-2', gpa: 3.32 },
  { semester: '2023-1', gpa: 3.14 },
  { semester: '2023-2', gpa: 2.98 },
  { semester: '2024-1', gpa: 4.24 },
  { semester: '2024-2', gpa: 3.5 }
]

const scheduleData = [
  { day: '화', time: '10:00-12:00', subject: '데이터분석', color: 'bg-orange-500' },
  { day: '수', time: '11:00-13:00', subject: '경영정보시스템', color: 'bg-sky-500' },
  { day: '목', time: '13:00-16:00', subject: '마케팅조사', color: 'bg-green-500' },
  { day: '금', time: '12:00-16:00', subject: '경영전략', color: 'bg-red-500' },
  { day: '금', time: '14:00-16:00', subject: '프로젝트관리', color: 'bg-pink-500' },
  { day: '화', time: '16:00-18:00', subject: '비즈니스모델링', color: 'bg-blue-300' }
]

const careerCategories = {
  main: [
    '사업관리', '경영/회계/사무', '금융/보험', 
    '교육/자연/사회과학', '보건/의료', '사회복지/종교'
  ],
  middle: [
    '기획/사무', '인사/총무', '재무/회계', 
    '마케팅/광고', '영업/판매', '고객상담'
  ],
  sub: [
    '경영 기획', '사업 기획', '전략 기획',
    '마케팅 기획', '상품 기획', '서비스 기획'
  ]
}

const internalPrograms = [
  {
    title: '제 2회 전라남도 스토리 공모전 - 전남에 스토리를 더+하다',
    organizer: '전라남도',
    period: '25.07.12~25.08.10',
    status: '진행중',
    relevance: true
  },
  {
    title: '제 2회 전라남도 스토리 공모전 - 전남에 스토리를 더+하다',
    organizer: '전라남도',
    period: '25.07.12~25.08.10',
    status: '진행중',
    relevance: false
  },
  {
    title: '제 2회 전라남도 스토리 공모전 - 전남에 스토리를 더+하다',
    organizer: '전라남도',
    period: '25.07.12~25.08.10',
    status: '진행중',
    relevance: false
  }
]

const externalPrograms = [
  {
    title: '제 2회 전라남도 스토리 공모전 - 전남에 스토리를 더+하다',
    organizer: '전라남도',
    period: '25.07.12~25.08.10',
    status: '진행중',
    relevance: true
  },
  {
    title: '제 2회 전라남도 스토리 공모전 - 전남에 스토리를 더+하다',
    organizer: '전라남도',
    period: '25.07.12~25.08.10',
    status: '진행중',
    relevance: true
  },
  {
    title: '제 2회 전라남도 스토리 공모전 - 전남에 스토리를 더+하다',
    organizer: '전라남도',
    period: '25.07.12~25.08.10',
    status: '진행중',
    relevance: true
  }
]

export default function ProfilePage() {
  const [selectedMain, setSelectedMain] = useState('사업관리')
  const [selectedMiddle, setSelectedMiddle] = useState('기획/사무')
  const [selectedSub, setSelectedSub] = useState('경영 기획')

  return (
    <div className="container py-6 space-y-6">
      {/* 페이지 헤더 */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-600">내 정보</h1>
        <p className="text-base text-gray-500">
          개인 정보, 학업 현황, 진로 설정을 한눈에 확인하세요
        </p>
      </div>

      {/* 상단 섹션 - 학생 정보와 학점 변동 추이 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 학생 정보 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
              <User className="w-5 h-5" />
              학생 정보
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                    <BookOpen className="w-4 h-4" />
                    <span>이수학점: {studentInfo.credits}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>학점평균: {studentInfo.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 학점 변동 추이 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              학점 변동 추이
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* 꺾은선 그래프 */}
              <div className="h-24 relative">
                <svg className="w-full h-full" viewBox="0 0 300 80">
                  {/* 격자선 */}
                  <defs>
                    <pattern id="grid" width="30" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 16" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* 꺾은선 그래프 */}
                  <polyline
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="2"
                    points={gpaHistory.map((item, index) => 
                      `${30 + (index * 30)},${60 - ((item.gpa - 2) / 2.5) * 50}`
                    ).join(' ')}
                  />
                  
                  {/* 데이터 포인트 */}
                  {gpaHistory.map((item, index) => (
                    <circle
                      key={index}
                      cx={30 + (index * 30)}
                      cy={60 - ((item.gpa - 2) / 2.5) * 50}
                      r="3"
                      fill="#ea580c"
                    />
                  ))}
                  
                  {/* 최고점 강조 */}
                  <circle
                    cx={30 + (6 * 30)}
                    cy={60 - ((4.24 - 2) / 2.5) * 50}
                    r="4"
                    fill="#ea580c"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">평균 학점: {studentInfo.gpa}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 시간표 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            2025년 2학기 시간표
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* 시간표 그리드 */}
            <div className="h-24 relative">
              <div className="grid grid-cols-7 gap-0.5 text-xs h-full">
                {/* 요일 헤더 */}
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">월</div>
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">화</div>
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">수</div>
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">목</div>
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">금</div>
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">토</div>
                <div className="text-center font-semibold text-gray-600 text-xs flex items-center justify-center">일</div>
                
                {/* 시간대별 그리드 */}
                {Array.from({ length: 6 }, (_, hour) => (
                  <React.Fragment key={hour}>
                    {Array.from({ length: 7 }, (_, day) => {
                      const schedule = scheduleData.find(s => {
                        const dayMap = ['월', '화', '수', '목', '금', '토', '일']
                        const timeStart = parseInt(s.time.split('-')[0].split(':')[0])
                        const timeEnd = parseInt(s.time.split('-')[1].split(':')[0])
                        return dayMap[day] === s.day && hour >= timeStart - 9 && hour < timeEnd - 9
                      })
                      
                      return (
                        <div 
                          key={`${hour}-${day}`}
                          className={`border rounded text-center flex items-center justify-center text-white text-xs ${
                            schedule ? schedule.color : 'bg-gray-100'
                          }`}
                          style={{ height: 'calc(100% / 7)' }}
                        >
                          {schedule && hour === parseInt(schedule.time.split('-')[0].split(':')[0]) - 9 ? 
                            schedule.subject.split(' ')[0] : ''
                          }
                        </div>
                      )
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              시간표 불러오기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 진로 설정 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
            <Target className="w-5 h-5" />
            진로 설정
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 대분류 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700">대분류</h4>
              <div className="space-y-2">
                {careerCategories.main.map((category, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedMain === category 
                        ? 'bg-orange-100 border-l-4 border-orange-600' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedMain(category)}
                  >
                    <span className={`text-sm ${
                      selectedMain === category ? 'text-orange-600 font-semibold' : 'text-gray-600'
                    }`}>
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 중분류 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700">중분류</h4>
              <div className="space-y-2">
                {careerCategories.middle.map((category, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedMiddle === category 
                        ? 'bg-orange-100 border-l-4 border-orange-600' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedMiddle(category)}
                  >
                    <span className={`text-sm ${
                      selectedMiddle === category ? 'text-orange-600 font-semibold' : 'text-gray-600'
                    }`}>
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 세분류 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700">세분류</h4>
              <div className="space-y-2">
                {careerCategories.sub.map((category, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedSub === category 
                        ? 'bg-orange-100 border-l-4 border-orange-600' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedSub(category)}
                  >
                    <span className={`text-sm ${
                      selectedSub === category ? 'text-orange-600 font-semibold' : 'text-gray-600'
                    }`}>
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 하단 섹션 - 비교과 프로그램 리스트 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 교내 비교과 프로그램 리스트 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              교내 비교과 프로그램 리스트
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {internalPrograms.map((program, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700 text-sm">{program.title}</h4>
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">주최:</span>
                        <div className="font-semibold">{program.organizer}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">기간:</span>
                        <div className="font-semibold">{program.period}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">진행 상황:</span>
                        <div className="font-semibold text-orange-600">{program.status}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">직무 관련:</span>
                        <div className={`font-semibold ${program.relevance ? 'text-orange-600' : 'text-red-500'}`}>
                          {program.relevance ? 'O' : 'X'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 외부 공모전 및 대외활동 리스트 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
              <Award className="w-5 h-5" />
              외부 공모전 및 대외활동 리스트
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {externalPrograms.map((program, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700 text-sm">{program.title}</h4>
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">주최:</span>
                        <div className="font-semibold">{program.organizer}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">기간:</span>
                        <div className="font-semibold">{program.period}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">진행 상황:</span>
                        <div className="font-semibold text-orange-600">{program.status}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">직무 관련:</span>
                        <div className={`font-semibold ${program.relevance ? 'text-orange-600' : 'text-red-500'}`}>
                          {program.relevance ? 'O' : 'X'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

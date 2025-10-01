'use client';

import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  FileText, 
  Download, 
  Eye,
  Edit,
  Share2,
  Star,
  CheckCircle,
  Clock,
  Target,
  Award,
  BookOpen,
  Users,
  Calendar,
  ArrowRight,
  Lightbulb
} from 'lucide-react';

export default function PortfolioPage() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">포트폴리오 생성</h1>
            <p className="text-gray-600 mt-1">AI가 당신의 데이터를 분석하여 전문적인 포트폴리오를 생성합니다</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Target className="w-3 h-3 mr-1" />
              목표: 반도체 장비 엔지니어
            </Badge>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </div>

        {/* Template Selection */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary-600" />
              템플릿 선택
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-primary-200 bg-primary-50 cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">IPP 지원서</h3>
                  <p className="text-sm text-primary-700 mb-4">
                    산업체 현장실습 지원을 위한 전문적인 포트폴리오
                  </p>
                  <Badge className="bg-primary-100 text-primary-800">추천</Badge>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">취업용 이력서</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    기업 채용에 최적화된 이력서 및 자기소개서
                  </p>
                  <Badge variant="secondary">일반</Badge>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">자유 양식</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    다양한 목적에 활용할 수 있는 유연한 포트폴리오
                  </p>
                  <Badge variant="secondary">일반</Badge>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview */}
          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-primary-600" />
                  포트폴리오 미리보기
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    편집
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    PDF 다운로드
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-6">
                {/* Header */}
                <div className="text-center border-b border-gray-200 pb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">송재호</h1>
                  <p className="text-lg text-gray-600 mb-4">기계공학부 3학년</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span>📧 song@koreatech.ac.kr</span>
                    <span>📱 010-1234-5678</span>
                    <span>🏠 한국기술교육대학교</span>
                  </div>
                </div>

                {/* Objective */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-primary-500 pl-3">
                    지원 목표
                  </h2>
                  <p className="text-gray-700">
                    반도체 장비 엔지니어로서 첨단 기술 개발에 기여하고, 
                    지속적인 학습을 통해 전문성을 높이고 싶습니다.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-primary-500 pl-3">
                    학력 사항
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">한국기술교육대학교 기계공학부</span>
                      <span className="text-gray-600">2022.03 - 2026.02 (예정)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">현재 GPA: 3.85/4.5</span>
                      <span className="text-gray-600">이수 학점: 98/130</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-primary-500 pl-3">
                    기술 역량
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">CAD/설계</h4>
                      <div className="space-y-1">
                        <Badge className="bg-primary-100 text-primary-800">AutoCAD</Badge>
                        <Badge className="bg-primary-100 text-primary-800">SolidWorks</Badge>
                        <Badge className="bg-primary-100 text-primary-800">CATIA</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">프로그래밍</h4>
                      <div className="space-y-1">
                        <Badge className="bg-secondary-100 text-secondary-800">Python</Badge>
                        <Badge className="bg-secondary-100 text-secondary-800">MATLAB</Badge>
                        <Badge className="bg-secondary-100 text-secondary-800">C++</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-primary-500 pl-3">
                    주요 경험
                  </h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-gray-900">기계설계프로젝트</h4>
                      <p className="text-sm text-gray-600">2024.03 - 2024.06</p>
                      <p className="text-gray-700 mt-1">
                        팀 프로젝트를 통해 자동화 설비 설계 경험을 쌓았습니다.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-900">창업동아리 활동</h4>
                      <p className="text-sm text-gray-600">2024.01 - 현재</p>
                      <p className="text-gray-700 mt-1">
                        혁신적인 기계 설비 아이디어를 개발하고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">포트폴리오 통계</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">완성도</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">포함된 항목</span>
                    <span className="text-sm font-medium">12/15</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">마지막 수정</span>
                    <span className="text-sm font-medium">2시간 전</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Suggestions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">추가 제안</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">프로젝트 경험 추가</p>
                        <p className="text-xs text-blue-700">최근 완료한 프로젝트를 추가하세요</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-900">자격증 정보</p>
                        <p className="text-xs text-green-700">CAD 자격증 정보를 업데이트하세요</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Users className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-purple-900">동아리 활동</p>
                        <p className="text-xs text-purple-700">창업동아리 활동 내용을 보강하세요</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">빠른 실행</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    내용 편집
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PDF 다운로드
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    링크 공유
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Target className="w-4 h-4 mr-2" />
                    목표 수정
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Portfolios */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary-600" />
              최근 생성된 포트폴리오
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">IPP 지원서 v1.2</h4>
                  <Badge className="bg-green-100 text-green-800">최신</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">삼성전자 반도체 장비 엔지니어</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>2시간 전</span>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">취업용 이력서 v1.0</h4>
                  <Badge variant="secondary">일반</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">SK하이닉스 기계설계</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>1주 전</span>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">자유 양식 v0.8</h4>
                  <Badge variant="secondary">초안</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">일반적인 포트폴리오</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>2주 전</span>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            <FileText className="w-5 h-5 mr-2" />
            새 포트폴리오 생성
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Edit className="w-5 h-5 mr-2" />
            현재 포트폴리오 편집
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Target className="w-5 h-5 mr-2" />
            목표 직무 변경
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

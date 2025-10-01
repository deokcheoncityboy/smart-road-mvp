'use client';

import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Map, 
  Target, 
  TrendingUp, 
  BookOpen,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  Star,
  Zap,
  Lightbulb
} from 'lucide-react';

export default function RoadmapPage() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-2x">
            <h1 className="text-2xl font-bold text-gray-600">맞춤형 성장 로드맵</h1>
            <p className="text-base text-gray-500">AI가 분석한 당신만의 성장 경로를 따라가세요</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Target className="w-3 h-3 mr-1" />
              목표: 반도체 장비 엔지니어
            </Badge>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              일정 관리
            </Button>
          </div>
        </div>

        {/* Goal Overview */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-gray-600">
              <Target className="w-5 h-5 mr-2 text-primary-600" />
              목표 현황
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-primary-900">목표 직무</h3>
                <p className="text-sm text-primary-700">반도체 장비 엔지니어</p>
              </div>

              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="h-12 w-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900">진행률</h3>
                <p className="text-sm text-secondary-700">78%</p>
              </div>

              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="h-12 w-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-accent-900">예상 완료</h3>
                <p className="text-sm text-accent-700">2025년 8월</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-900">완료 항목</h3>
                <p className="text-sm text-green-700">12/15</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Timeline */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Map className="w-5 h-5 mr-2 text-primary-600" />
              성장 로드맵
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">1단계: 기초 역량 구축</h3>
                      <Badge className="bg-green-100 text-green-800">완료</Badge>
                    </div>
                    <p className="text-gray-600 mt-1">전공 기초 지식과 기본 자격증 취득</p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-900">기계설계학 A+</span>
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-900">CAD 자격증</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">2단계: 전문 역량 강화</h3>
                      <Badge className="bg-blue-100 text-blue-800">진행 중</Badge>
                    </div>
                    <p className="text-gray-600 mt-1">반도체 관련 전문 지식과 실무 경험 쌓기</p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-900">반도체공학 수강</span>
                        </div>
                      </div>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-yellow-900">삼성전자 인턴십</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">3단계: 실무 경험 축적</h3>
                      <Badge variant="secondary">예정</Badge>
                    </div>
                    <p className="text-gray-600 mt-1">IPP 참여 및 실제 프로젝트 경험</p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">IPP 참여</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">포트폴리오 완성</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Immediate Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-accent-600" />
                즉시 실행 가능한 추천
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900">반도체공학 과목 수강</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        다음 학기 반도체공학 과목을 수강하여 전문 지식을 쌓으세요.
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge className="bg-blue-100 text-blue-800">우선순위: 높음</Badge>
                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                          상세보기
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-900">기계공학 동아리 참여</h4>
                      <p className="text-sm text-green-700 mt-1">
                        팀 프로젝트 경험을 쌓기 위해 관련 동아리에 참여하세요.
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge className="bg-green-100 text-green-800">우선순위: 중간</Badge>
                        <Button size="sm" variant="outline" className="text-green-600 border-green-300">
                          상세보기
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-purple-900">SolidWorks 자격증</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        CAD 실무 능력을 인정받기 위한 자격증을 취득하세요.
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge className="bg-purple-100 text-purple-800">우선순위: 중간</Badge>
                        <Button size="sm" variant="outline" className="text-purple-600 border-purple-300">
                          상세보기
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Long-term Planning */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-primary-600" />
                장기 계획 및 목표
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-orange-900">2025년 1학기</h4>
                      <p className="text-sm text-orange-700 mt-1">
                        반도체공학 수강, 기계공학 동아리 활동
                      </p>
                      <div className="mt-2">
                        <Progress value={30} className="h-2" />
                        <p className="text-xs text-orange-600 mt-1">30% 진행</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900">2025년 2학기</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        IPP 참여, 포트폴리오 완성
                      </p>
                      <div className="mt-2">
                        <Progress value={0} className="h-2" />
                        <p className="text-xs text-blue-600 mt-1">0% 진행</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-900">2026년</h4>
                      <p className="text-sm text-green-700 mt-1">
                        취업 준비 완료, 목표 기업 지원
                      </p>
                      <div className="mt-2">
                        <Progress value={0} className="h-2" />
                        <p className="text-xs text-green-600 mt-1">0% 진행</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            <Target className="w-5 h-5 mr-2" />
            목표 수정하기
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Calendar className="w-5 h-5 mr-2" />
            일정 관리
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Award className="w-5 h-5 mr-2" />
            포트폴리오 생성
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

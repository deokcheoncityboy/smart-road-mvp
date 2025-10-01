'use client';

import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  Target,
  BarChart3,
  PieChart,
  Activity,
  BookOpen,
  Award,
  Clock,
  Download,
  Share2
} from 'lucide-react';

export default function ReportPage() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-2x">
            <h1 className="text-2xl font-bold text-gray-600">AI 학습 진단 리포트</h1>
            <p className="text-base text-gray-500">AI가 분석한 당신의 학습 패턴과 강약점을 확인하세요</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              PDF 다운로드
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </div>

        {/* Overall Assessment */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg font-semibold text-gray-600">
              <Brain className="w-5 h-5 mr-2 text-primary-600" />
              종합 평가
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">학사경고 안전</h3>
                <p className="text-green-700">현재 위험도가 매우 낮습니다</p>
                <Badge className="bg-green-100 text-green-800 mt-2">위험도: 낮음</Badge>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">성적 상승 추세</h3>
                <p className="text-blue-700">최근 2학기간 지속적인 향상</p>
                <Badge className="bg-blue-100 text-blue-800 mt-2">+0.15 GPA</Badge>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">목표 달성률</h3>
                <p className="text-purple-700">설정한 목표의 78% 달성</p>
                <Badge className="bg-purple-100 text-purple-800 mt-2">우수</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strengths and Weaknesses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strengths */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <TrendingUp className="w-5 h-5 mr-2" />
                강점 분석
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-900">시험형 과목</h4>
                    <Badge className="bg-green-100 text-green-800">상위 15%</Badge>
                  </div>
                  <p className="text-sm text-green-700 mb-3">
                    객관식 시험에서 뛰어난 성과를 보입니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>기계설계학</span>
                      <span className="font-medium">A+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>재료역학</span>
                      <span className="font-medium">A</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>열역학</span>
                      <span className="font-medium">A</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-900">수학 기반 과목</h4>
                    <Badge className="bg-blue-100 text-blue-800">상위 20%</Badge>
                  </div>
                  <p className="text-sm text-blue-700 mb-3">
                    수학적 사고력이 뛰어나 계산 중심 과목에서 강점을 보입니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>공업수학</span>
                      <span className="font-medium">A</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>확률통계</span>
                      <span className="font-medium">A-</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weaknesses */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-700">
                <TrendingDown className="w-5 h-5 mr-2" />
                개선 영역
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-orange-900">팀 프로젝트</h4>
                    <Badge className="bg-orange-100 text-orange-800">보완 필요</Badge>
                  </div>
                  <p className="text-sm text-orange-700 mb-3">
                    협업 능력과 발표 스킬 향상이 필요합니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>기계설계프로젝트</span>
                      <span className="font-medium">B+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>창의적공학설계</span>
                      <span className="font-medium">B</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-red-900">실험/실습</h4>
                    <Badge className="bg-red-100 text-red-800">개선 필요</Badge>
                  </div>
                  <p className="text-sm text-red-700 mb-3">
                    실무 경험과 실험 설계 능력이 부족합니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>기계공학실험</span>
                      <span className="font-medium">B-</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>CAD실습</span>
                      <span className="font-medium">B</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GPA Trend */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary-600" />
                GPA 추이 분석
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-primary-600 font-medium">GPA 추이 차트</p>
                  <p className="text-sm text-primary-500">최근 4학기 데이터</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">2023-1학기</span>
                  <span className="text-sm font-medium">3.72</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">2023-2학기</span>
                  <span className="text-sm font-medium">3.78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">2024-1학기</span>
                  <span className="text-sm font-medium">3.85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">2024-2학기</span>
                  <span className="text-sm font-medium">3.85</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-secondary-600" />
                과목별 성취도
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                  <p className="text-secondary-600 font-medium">과목별 성취도</p>
                  <p className="text-sm text-secondary-500">전공/교양 분류</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">전공 과목</span>
                    <span className="text-sm font-medium">3.92</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">교양 과목</span>
                    <span className="text-sm font-medium">3.75</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">실험/실습</span>
                    <span className="text-sm font-medium">3.45</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-accent-600" />
              AI 추천사항
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">즉시 실행 가능한 개선사항</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">팀 프로젝트 스킬 향상</p>
                        <p className="text-xs text-blue-700">협업 능력 강화를 위한 동아리 활동 권장</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-900">실험 설계 능력 개발</p>
                        <p className="text-xs text-green-700">연구실 인턴십 또는 실험 관련 비교과 추천</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">장기적 성장 계획</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Target className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-purple-900">전문 자격증 취득</p>
                        <p className="text-xs text-purple-700">CAD, SolidWorks 등 실무 자격증 추천</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-orange-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-orange-900">포트폴리오 구축</p>
                        <p className="text-xs text-orange-700">프로젝트 경험을 체계적으로 정리</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            <Target className="w-5 h-5 mr-2" />
            맞춤형 로드맵 보기
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <BookOpen className="w-5 h-5 mr-2" />
            학습 계획 수립
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

'use client';

import { useState, useEffect } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GPAChart } from '@/features/dashboard/components/gpa-chart';
import { CreditWidget } from '@/features/dashboard/components/credit-widget';
import { ActivityList } from '@/features/dashboard/components/activity-list';
import { CompetencyCard } from '@/features/dashboard/components/competency-card';
import { AlertPanel } from '@/features/dashboard/components/alert-panel';
import { 
  TrendingUp, 
  TrendingDown, 
  BookOpen, 
  Award, 
  Target,
  Calendar,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Loader2
} from 'lucide-react';

interface DashboardData {
  gpaTrend: Array<{
    semester: string;
    gpa: number;
    credits: number;
  }>;
  creditStatus: {
    total: number;
    completed: number;
    major: number;
    general: number;
    majorRequired: number;
    majorElective: number;
    generalRequired: number;
    generalElective: number;
  };
  recentActivities: Array<{
    id: number;
    type: 'grade' | 'certificate' | 'activity' | 'award' | 'exam' | 'project';
    title: string;
    description: string;
    date: string;
    status: 'completed' | 'in_progress' | 'pending';
    category: string;
  }>;
  coreCompetencies: {
    technical: any;
    analytical: any;
    collaborative: any;
    practical: any;
  };
  alerts: Array<{
    id: number;
    type: 'success' | 'warning' | 'info' | 'error';
    title: string;
    message: string;
    date: string;
  }>;
  quickStats: {
    currentGpa: number;
    gpaChange: number;
    completedCredits: number;
    totalCredits: number;
    extracurricularActivities: number;
    certificates: number;
    awards: number;
    goalProgress: number;
  };
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/data/dashboard.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dashboardData = await response.json();
        setData(dashboardData);
      } catch (err) {
        console.error('Dashboard data fetch error:', err);
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <AppLayout>
        <div className="p-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-600" />
            <p className="text-gray-600">데이터를 불러오는 중...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  if (error || !data) {
    return (
      <AppLayout>
        <div className="p-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <p className="text-red-600 mb-4">{error || '데이터를 불러올 수 없습니다.'}</p>
            <Button onClick={() => window.location.reload()}>
              다시 시도
            </Button>
          </div>
        </div>
      </AppLayout>
    );
  }
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-2x">
            <h1 className="text-2xl font-bold text-gray-600">대시보드</h1>
            <p className="text-base text-gray-500">학습 및 경력 데이터를 한눈에 확인하세요</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              안전
            </Badge>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              최근 업데이트: 오늘
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-600">현재 GPA</p>
                  <p className="text-3xl font-bold text-gray-600">{data.quickStats.currentGpa}</p>
                  <div className="flex items-center">
                    {data.quickStats.gpaChange >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-accent mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-danger mr-1" />
                    )}
                    <span className={`text-sm ${data.quickStats.gpaChange >= 0 ? 'text-accent' : 'text-danger'}`}>
                      {data.quickStats.gpaChange >= 0 ? '+' : ''}{data.quickStats.gpaChange}
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mt-2">
                  <BarChart3 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-600">이수 학점</p>
                  <p className="text-3xl font-bold text-gray-600">{data.quickStats.completedCredits}</p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">/ {data.quickStats.totalCredits}</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-secondary-100 rounded-full flex items-center justify-center mt-2">
                  <BookOpen className="h-6 w-6 text-secondary-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-600">비교과 활동</p>
                  <p className="text-3xl font-bold text-gray-600">{data.quickStats.extracurricularActivities}</p>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-accent mr-1" />
                    <span className="text-sm text-accent">+3 이번 학기</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-accent-100 rounded-full flex items-center justify-center mt-2">
                  <Award className="h-6 w-6 text-accent-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-600">목표 달성률</p>
                  <p className="text-3xl font-bold text-gray-600">{data.quickStats.goalProgress}%</p>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-sm text-primary-600">진행 중</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mt-2">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg font-semibold text-gray-600">
                <TrendingUp className="w-5 h-5 mr-2 text-primary-600" />
                GPA 추이
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <GPAChart data={data.gpaTrend} />
            </CardContent>
          </Card>

          <CreditWidget data={data.creditStatus} />
        </div>

        {/* Recent Activities and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <ActivityList activities={data.recentActivities} />

          {/* Alerts and Recommendations */}
          <AlertPanel alerts={data.alerts} />
        </div>

        {/* Core Competencies */}
        <CompetencyCard competencies={data.coreCompetencies} />

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>빠른 실행</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="w-6 h-6" />
                <span>진단 리포트 보기</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Target className="w-6 h-6" />
                <span>로드맵 확인</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Award className="w-6 h-6" />
                <span>포트폴리오 생성</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BookOpen className="w-6 h-6" />
                <span>학습 기록 추가</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

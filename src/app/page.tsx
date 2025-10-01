'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Target, 
  FileText, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <span className="font-bold text-xl text-primary-900">Smart Road</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost">로그인</Button>
            </Link>
            <Link href="/dashboard">
              <Button>시작하기</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="text-sm">
            KOREATECH 학생을 위한 지능형 플랫폼
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            분산된 데이터를 통합하고<br />
            <span className="text-primary-600">AI로 분석</span>하여<br />
            개인 맞춤형 진로 로드맵을 제공합니다
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            성적, 비교과, 자격증, 수상 내역을 한 곳에서 관리하고, 
            AI 기반 분석을 통해 강점을 파악하고 부족한 역량을 채워나가세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-6">
                무료로 시작하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              데모 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            핵심 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            스마트 로드가 제공하는 4가지 핵심 기능으로 
            체계적인 학습과 경력 관리를 시작하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">데이터 통합 대시보드</h3>
              <p className="text-gray-600">
                학점, 비교과, 자격증 등 모든 데이터를 한 화면에서 직관적으로 파악
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI 학습 진단 리포트</h3>
              <p className="text-gray-600">
                객관적인 분석을 통해 강점과 약점을 파악하고 학사경고 위험을 조기 감지
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="h-16 w-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">맞춤형 성장 로드맵</h3>
              <p className="text-gray-600">
                NCS 기반 목표 설정과 역량 갭 분석을 통한 개인화된 추천 시스템
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">원클릭 포트폴리오 생성</h3>
              <p className="text-gray-600">
                버튼 몇 번으로 IPP 지원서, 이력서 등 목적에 맞는 포트폴리오 자동 생성
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              왜 Smart Road를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              기존의 번거로운 과정을 간소화하고, 더 나은 결과를 만들어냅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">50% 시간 단축</h3>
              <p className="text-gray-600">
                데이터 관리 및 포트폴리오 작성 시간을 획기적으로 단축하여 
                더 중요한 학습에 집중할 수 있습니다.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">KOREATECH 맞춤</h3>
              <p className="text-gray-600">
                한국기술교육대학교의 교육과정과 시스템에 최적화된 
                맞춤형 솔루션을 제공합니다.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-20 w-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-accent-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">AI 기반 분석</h3>
              <p className="text-gray-600">
                객관적인 데이터 분석을 통해 개인의 강점을 발견하고 
                개선점을 제시합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            무료로 가입하고 Smart Road의 모든 기능을 체험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                무료 가입하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary-600">
              문의하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SR</span>
                </div>
                <span className="font-bold text-lg">Smart Road</span>
              </div>
              <p className="text-gray-400">
                KOREATECH 학생을 위한 지능형 학습·경력 관리 플랫폼
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">제품</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">대시보드</Link></li>
                <li><Link href="/report" className="hover:text-white transition-colors">진단 리포트</Link></li>
                <li><Link href="/roadmap" className="hover:text-white transition-colors">로드맵</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">도움말</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">법적 고지</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Smart Road. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
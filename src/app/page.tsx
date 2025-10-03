'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  User, 
  FolderOpen, 
  Building2, 
  ArrowRight, 
  Play,
  GraduationCap,
  Award,
  Briefcase
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container py-8x">
        <div className="text-center space-y-4x">
          <Badge variant="secondary" className="text-sm">
            KOREATECH 학생을 위한 통합 플랫폼
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-600 leading-loose">
            학생 정보와 포트폴리오를<br />
            <span className="text-orange-600">체계적으로 관리</span>하고<br />
            IPP 인턴십 기회를 찾아보세요
          </h1>
          <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            개인 정보, 학업 현황, 포트폴리오를 한 곳에서 관리하고, 
            IPP 인턴십 프로그램을 통해 실무 경험을 쌓아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/profile">
              <Button size="lg" className="text-lg px-8 py-6 flex items-center bg-orange-600 hover:bg-orange-700">
                내 정보 확인하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/ipp">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 flex items-center">
                IPP 인턴십 보기
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-6x">
        <div className="text-center space-y-2x mb-6x">
          <h2 className="text-2xl font-bold text-gray-600">
            핵심 기능
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            TIBA가 제공하는 3가지 핵심 기능으로 체계적인 정보 관리와 인턴십 기회를 찾아보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 내 정보 */}
          <Card className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <User className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">내 정보</h3>
            <p className="text-gray-500">
              개인 정보, 학업 현황, 진로 설정을 한눈에 확인하고 관리하세요
            </p>
            <Link href="/profile">
              <Button variant="outline" className="w-full">
                내 정보 보기
              </Button>
            </Link>
          </Card>

          {/* 포트폴리오 */}
          <Card className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <FolderOpen className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">포트폴리오</h3>
            <p className="text-gray-500">
              학력사항, 수상내역, 자격증, 경력사항을 체계적으로 정리하세요
            </p>
            <Link href="/portfolio">
              <Button variant="outline" className="w-full">
                포트폴리오 보기
              </Button>
            </Link>
          </Card>

          {/* IPP 게시판 */}
          <Card className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Building2 className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">IPP 게시판</h3>
            <p className="text-gray-500">
              IPP 인턴십 프로그램과 기업 정보를 확인하고 지원하세요
            </p>
            <Link href="/ipp">
              <Button variant="outline" className="w-full">
                IPP 게시판 보기
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Why Choose TIBA Section */}
      <section className="container py-6x">
        <div className="text-center space-y-2x mb-6x">
          <h2 className="text-2xl font-bold text-gray-600">
            왜 TIBA를 선택해야 할까요?
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            기존의 번거로운 과정을 간소화하고, 더 나은 결과를 만들어냅니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <GraduationCap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">KOREATECH 맞춤</h3>
            <p className="text-gray-500">
              한국기술교육대학교의 교육과정과 시스템에 최적화된 맞춤형 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">체계적 관리</h3>
            <p className="text-gray-500">
              개인 정보부터 포트폴리오까지 모든 것을 한 곳에서 체계적으로 관리할 수 있습니다.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Briefcase className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">IPP 기회</h3>
            <p className="text-gray-500">
              다양한 IPP 인턴십 프로그램과 기업 정보를 통해 실무 경험 기회를 찾을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-6x">
        <div className="text-center space-y-4x">
          <h2 className="text-2xl font-bold text-gray-600">
            지금 시작하세요
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            TIBA의 모든 기능을 무료로 체험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                내 정보 확인하기
              </Button>
            </Link>
            <Link href="/ipp">
              <Button variant="outline" size="lg">
                IPP 인턴십 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container py-6x">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl text-orange-600">TIBA</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                KOREATECH 학생을 위한 통합 플랫폼
              </p>
              <p className="text-xs text-gray-400 mt-1">
                © 2024 TIBA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
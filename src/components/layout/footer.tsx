'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">SR</span>
              </div>
              <span className="font-bold text-lg text-primary-900">Smart Road</span>
            </div>
            <p className="text-sm text-gray-600">
              KOREATECH 학생을 위한 지능형 학습·경력 관리 플랫폼
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  대시보드
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  진단 리포트
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  로드맵
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  포트폴리오
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  도움말
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 Smart Road. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              한국기술교육대학교 학생을 위해 만들어졌습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

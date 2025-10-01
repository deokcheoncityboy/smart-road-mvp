'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FileText, 
  Map, 
  Briefcase,
  BarChart3,
  TrendingUp,
  Target,
  BookOpen
} from 'lucide-react';

const navigation = [
  {
    name: '대시보드',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: '진단 리포트',
    href: '/report',
    icon: FileText,
  },
  {
    name: '로드맵',
    href: '/roadmap',
    icon: Map,
  },
  {
    name: '포트폴리오',
    href: '/portfolio',
    icon: Briefcase,
  },
];

const quickActions = [
  {
    name: '학습 분석',
    href: '/report',
    icon: BarChart3,
  },
  {
    name: '성장 추천',
    href: '/roadmap',
    icon: TrendingUp,
  },
  {
    name: '목표 설정',
    href: '/roadmap',
    icon: Target,
  },
  {
    name: '학습 기록',
    href: '/dashboard',
    icon: BookOpen,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-16">
      <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
        {/* Navigation */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5 flex-shrink-0',
                      isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500'
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="px-4 py-4 border-t border-gray-200">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              빠른 실행
            </h3>
            <div className="space-y-1">
              {quickActions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-sm font-medium text-primary-700">송</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">송재호</p>
              <p className="text-xs text-gray-500 truncate">기계공학부 3학년</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

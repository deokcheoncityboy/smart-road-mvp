'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Bell, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center space-x-4">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            대시보드
          </Link>
          <Link 
            href="/report" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            리포트
          </Link>
          <Link 
            href="/roadmap" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            로드맵
          </Link>
          <Link 
            href="/portfolio" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            포트폴리오
          </Link>
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            대시보드
          </Link>
          <Link 
            href="/report" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            진단 리포트
          </Link>
          <Link 
            href="/roadmap" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            로드맵
          </Link>
          <Link 
            href="/portfolio" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            포트폴리오
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

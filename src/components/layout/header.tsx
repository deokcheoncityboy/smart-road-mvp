'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Bell, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <span className="font-bold text-xl text-primary-900">Smart Road</span>
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
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
          <Link 
            href="/ipp" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            IPP 인턴십
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

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center space-x-4 flex-1 justify-center">
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
          <Link 
            href="/ipp" 
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            IPP
          </Link>
        </nav>

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

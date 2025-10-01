'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
  showFooter?: boolean;
}

export function AppLayout({ 
  children, 
  showSidebar = true, 
  showFooter = true 
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {showSidebar && <Sidebar />}
        
        <main className={`flex-1 ${showSidebar ? 'md:ml-64' : ''} pt-16`}>
          <div className="min-h-screen">
            {children}
          </div>
          {showFooter && <Footer />}
        </main>
      </div>
    </div>
  );
}

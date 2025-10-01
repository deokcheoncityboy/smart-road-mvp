'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Recharts 컴포넌트들을 동적으로 import
const PieChart = dynamic(() => import('recharts').then(mod => ({ default: mod.PieChart })), { ssr: false });
const Pie = dynamic(() => import('recharts').then(mod => ({ default: mod.Pie })), { ssr: false });
const Cell = dynamic(() => import('recharts').then(mod => ({ default: mod.Cell })), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => ({ default: mod.Tooltip })), { ssr: false });
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CreditStatus {
  total: number;
  completed: number;
  major: number;
  general: number;
  majorRequired: number;
  majorElective: number;
  generalRequired: number;
  generalElective: number;
}

interface CreditWidgetProps {
  data: CreditStatus;
}

export function CreditWidget({ data }: CreditWidgetProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pieData = [
    { name: '전공필수', value: data.majorRequired, color: '#3b82f6' },
    { name: '전공선택', value: data.majorElective, color: '#60a5fa' },
    { name: '교양필수', value: data.generalRequired, color: '#22c55e' },
    { name: '교양선택', value: data.generalElective, color: '#6ee7b7' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-gray-600">
            이수학점: <span className="font-semibold">{data.value}학점</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const completionPercentage = Math.round((data.completed / data.total) * 100);

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="h-8 w-8 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-secondary-600 font-bold text-sm">학점</span>
          </div>
          전공/교양 이수 현황
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* 전체 진행률 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">전체 이수 현황</span>
              <span className="text-sm font-semibold text-gray-900">
                {data.completed}/{data.total}학점
              </span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
            <p className="text-xs text-gray-500 text-right">{completionPercentage}% 완료</p>
          </div>

          {/* 파이 차트 */}
          <div className="h-48">
            {!isClient ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">차트 로딩 중...</p>
                </div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* 범례 */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary-500"></div>
              <span className="text-xs text-gray-600">전공필수 ({data.majorRequired})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary-300"></div>
              <span className="text-xs text-gray-600">전공선택 ({data.majorElective})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
              <span className="text-xs text-gray-600">교양필수 ({data.generalRequired})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-secondary-300"></div>
              <span className="text-xs text-gray-600">교양선택 ({data.generalElective})</span>
            </div>
          </div>

          {/* 상세 정보 */}
          <div className="pt-4 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">전공 이수</p>
                <p className="font-semibold text-gray-900">{data.major}학점</p>
              </div>
              <div>
                <p className="text-gray-500">교양 이수</p>
                <p className="font-semibold text-gray-900">{data.general}학점</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

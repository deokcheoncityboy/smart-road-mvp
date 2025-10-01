'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Bell,
  X
} from 'lucide-react';

interface Alert {
  id: number;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  date: string;
}

interface AlertPanelProps {
  alerts: Alert[];
}

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case 'warning':
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    case 'info':
      return <Info className="w-4 h-4 text-blue-600" />;
    case 'error':
      return <AlertTriangle className="w-4 h-4 text-red-600" />;
    default:
      return <Info className="w-4 h-4 text-blue-600" />;
  }
};

const getAlertColor = (type: string) => {
  switch (type) {
    case 'success':
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-900',
        subtext: 'text-green-700'
      };
    case 'warning':
      return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-900',
        subtext: 'text-yellow-700'
      };
    case 'info':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        subtext: 'text-blue-700'
      };
    case 'error':
      return {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-900',
        subtext: 'text-red-700'
      };
    default:
      return {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-900',
        subtext: 'text-gray-700'
      };
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return '오늘';
  } else if (diffDays === 1) {
    return '어제';
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else {
    return date.toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
};

export function AlertPanel({ alerts }: AlertPanelProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="h-8 w-8 bg-accent-100 rounded-full flex items-center justify-center mr-3">
            <Bell className="w-4 h-4 text-accent-600" />
          </div>
          알림 및 추천
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const colors = getAlertColor(alert.type);
            
            return (
              <div 
                key={alert.id}
                className={`p-3 rounded-lg border ${colors.bg} ${colors.border} hover:shadow-sm transition-shadow`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`text-sm font-medium ${colors.text}`}>
                        {alert.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {formatDate(alert.date)}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <p className={`text-sm ${colors.subtext}`}>
                      {alert.message}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {alerts.length === 0 && (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">새로운 알림이 없습니다.</p>
          </div>
        )}
        
        {alerts.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Button variant="outline" size="sm" className="w-full">
              모든 알림 보기
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

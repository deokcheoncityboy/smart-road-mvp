'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Award, 
  Users, 
  FileText, 
  Trophy,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Activity {
  id: number;
  type: 'grade' | 'certificate' | 'activity' | 'award' | 'exam' | 'project';
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in_progress' | 'pending';
  category: string;
}

interface ActivityListProps {
  activities: Activity[];
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'grade':
      return <BookOpen className="w-4 h-4" />;
    case 'certificate':
      return <FileText className="w-4 h-4" />;
    case 'activity':
      return <Users className="w-4 h-4" />;
    case 'award':
      return <Trophy className="w-4 h-4" />;
    case 'exam':
      return <FileText className="w-4 h-4" />;
    case 'project':
      return <Award className="w-4 h-4" />;
    default:
      return <BookOpen className="w-4 h-4" />;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case 'in_progress':
      return <Clock className="w-4 h-4 text-blue-600" />;
    case 'pending':
      return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    default:
      return <CheckCircle className="w-4 h-4 text-green-600" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-100 text-green-800">완료</Badge>;
    case 'in_progress':
      return <Badge className="bg-blue-100 text-blue-800">진행 중</Badge>;
    case 'pending':
      return <Badge className="bg-yellow-100 text-yellow-800">대기</Badge>;
    default:
      return <Badge className="bg-green-100 text-green-800">완료</Badge>;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case '전공':
      return 'bg-blue-50 border-blue-200';
    case '자격증':
      return 'bg-green-50 border-green-200';
    case '비교과':
      return 'bg-purple-50 border-purple-200';
    case '수상':
      return 'bg-yellow-50 border-yellow-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return '어제';
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}주 전`;
  } else {
    return date.toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
};

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="h-8 w-8 bg-accent-100 rounded-full flex items-center justify-center mr-3">
            <Award className="w-4 h-4 text-accent-600" />
          </div>
          최근 활동
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className={`p-4 rounded-lg border ${getCategoryColor(activity.category)} hover:shadow-md transition-shadow cursor-pointer`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </h4>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(activity.status)}
                      <span className="text-xs text-gray-500">
                        {formatDate(activity.date)}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {activities.length === 0 && (
          <div className="text-center py-8">
            <Award className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">최근 활동이 없습니다.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

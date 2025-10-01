'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Wrench,
  Star,
  Target
} from 'lucide-react';

interface CompetencyDetail {
  skill: string;
  level: number;
}

interface Competency {
  score: number;
  level: string;
  description: string;
  details: CompetencyDetail[];
}

interface CompetencyCardProps {
  competencies: {
    technical: Competency;
    analytical: Competency;
    collaborative: Competency;
    practical: Competency;
  };
}

const getCompetencyIcon = (type: string) => {
  switch (type) {
    case 'technical':
      return <Wrench className="w-5 h-5" />;
    case 'analytical':
      return <Brain className="w-5 h-5" />;
    case 'collaborative':
      return <Users className="w-5 h-5" />;
    case 'practical':
      return <Target className="w-5 h-5" />;
    default:
      return <Star className="w-5 h-5" />;
  }
};

const getCompetencyColor = (type: string) => {
  switch (type) {
    case 'technical':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        progress: 'bg-blue-500',
        badge: 'bg-blue-100 text-blue-800'
      };
    case 'analytical':
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        progress: 'bg-green-500',
        badge: 'bg-green-100 text-green-800'
      };
    case 'collaborative':
      return {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        progress: 'bg-purple-500',
        badge: 'bg-purple-100 text-purple-800'
      };
    case 'practical':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        progress: 'bg-orange-500',
        badge: 'bg-orange-100 text-orange-800'
      };
    default:
      return {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        icon: 'text-gray-600',
        progress: 'bg-gray-500',
        badge: 'bg-gray-100 text-gray-800'
      };
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case '우수':
      return 'text-green-600';
    case '양호':
      return 'text-blue-600';
    case '보통':
      return 'text-yellow-600';
    case '부족':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export function CompetencyCard({ competencies }: CompetencyCardProps) {
  const competencyTypes = [
    { key: 'technical', label: '기술 역량', description: 'CAD 설계 및 기계공학 전문 지식' },
    { key: 'analytical', label: '분석 역량', description: '수학적 사고력과 문제 해결 능력' },
    { key: 'collaborative', label: '협업 역량', description: '팀워크와 소통 능력' },
    { key: 'practical', label: '실무 역량', description: '실험 설계와 실무 경험' }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
            <Star className="w-4 h-4 text-primary-600" />
          </div>
          핵심 역량 요약
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competencyTypes.map(({ key, label, description }) => {
            const competency = competencies[key as keyof typeof competencies];
            const colors = getCompetencyColor(key);
            
            return (
              <div 
                key={key}
                className={`p-4 rounded-lg border ${colors.bg} ${colors.border} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`${colors.icon}`}>
                      {getCompetencyIcon(key)}
                    </div>
                    <h4 className="font-semibold text-gray-900">{label}</h4>
                  </div>
                  <Badge className={colors.badge}>
                    {competency.level}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">종합 점수</span>
                      <span className={`text-sm font-semibold ${getLevelColor(competency.level)}`}>
                        {competency.score}점
                      </span>
                    </div>
                    <Progress 
                      value={competency.score} 
                      className="h-2"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {competency.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-700">세부 역량</p>
                    {competency.details.slice(0, 2).map((detail, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">{detail.skill}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${colors.progress}`}
                              style={{ width: `${detail.level}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8">{detail.level}%</span>
                        </div>
                      </div>
                    ))}
                    {competency.details.length > 2 && (
                      <p className="text-xs text-gray-500">
                        +{competency.details.length - 2}개 더
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <h5 className="font-medium text-gray-900">역량 개발 추천</h5>
          </div>
          <p className="text-sm text-gray-600">
            협업 역량과 실무 역량 향상을 위해 팀 프로젝트 참여와 실험/실습 활동을 권장합니다.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

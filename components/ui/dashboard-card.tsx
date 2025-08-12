import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

export function DashboardCard({ 
  title, 
  description, 
  icon: Icon, 
  iconColor = "text-steam-blue",
  children, 
  className = "",
  headerAction 
}: DashboardCardProps) {
  return (
    <Card className={`card-colorful ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {Icon && <Icon className={`w-5 h-5 ${iconColor}`} />}
            {title}
          </CardTitle>
          {headerAction}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  iconColor = "text-steam-blue",
  trend 
}: StatCardProps) {
  return (
    <Card className="card-colorful">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p className={`text-sm ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
                {trend.value}
              </p>
            )}
            {subtitle && !trend && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
      </CardContent>
    </Card>
  );
}

interface ProgressCardProps {
  title: string;
  current: number;
  total: number;
  unit?: string;
  color?: string;
}

export function ProgressCard({ 
  title, 
  current, 
  total, 
  unit = "",
  color = "steam-blue" 
}: ProgressCardProps) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{title}</span>
        <span>{current}/{total}{unit}</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
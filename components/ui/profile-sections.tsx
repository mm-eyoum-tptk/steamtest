"use client";

import { ReactNode } from 'react';
import { Baby, Users, GraduationCap, ChevronRight, Star, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface ProfileSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  features: string[];
  color: string;
  bgColor: string;
}

function ProfileSection({ id, title, subtitle, description, icon, features, color, bgColor }: ProfileSectionProps) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${bgColor} ${color} font-medium mb-6`}>
              {icon}
              {subtitle}
            </div>
            
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              {title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')}`}></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/auth/register">
              <Button className="btn-steam">
                Get Started
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {icon}
                    <div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                      <CardDescription>Dashboard Preview</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${bgColor}`}>
                    <BookOpen className={`w-6 h-6 ${color} mb-2`} />
                    <div className="text-sm font-medium">Active Modules</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                  <div className={`p-4 rounded-xl ${bgColor}`}>
                    <Trophy className={`w-6 h-6 ${color} mb-2`} />
                    <div className="text-sm font-medium">Achievements</div>
                    <div className="text-2xl font-bold">8</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${color.replace('text-', 'bg-')} w-3/4`}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProfileSections() {
  const profiles = [
    {
      id: 'children',
      title: 'For Young Learners',
      subtitle: 'Ages 5-18',
      description: 'Engaging, age-appropriate STEAM content with gamification, interactive modules, and progress tracking to make learning fun and rewarding.',
      icon: <Baby className="w-5 h-5" />,
      features: [
        'Interactive video lessons',
        'Gamified learning paths',
        'Progress badges & certificates',
        'Age-appropriate content',
        'Multilingual support',
        'Offline learning options'
      ],
      color: 'text-steam-blue',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'parents',
      title: 'For Parents & Guardians',
      subtitle: 'Family Management',
      description: 'Comprehensive tools to monitor your children\'s learning progress, manage subscriptions, and support their STEAM education journey.',
      icon: <Users className="w-5 h-5" />,
      features: [
        'Multi-child dashboard',
        'Progress monitoring',
        'Subscription management',
        'Purchase history',
        'Parental controls',
        'Learning recommendations'
      ],
      color: 'text-steam-green',
      bgColor: 'bg-green-50'
    },
    {
      id: 'teachers',
      title: 'For Educators',
      subtitle: 'Teaching Tools',
      description: 'Professional-grade tools for educators to manage classrooms, track student progress, and access comprehensive STEAM teaching resources.',
      icon: <GraduationCap className="w-5 h-5" />,
      features: [
        'Classroom management',
        'Student progress tracking',
        'Teaching resource library',
        'Assignment tools',
        'Communication platform',
        'Performance analytics'
      ],
      color: 'text-steam-purple',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div>
      {profiles.map((profile, index) => (
        <ProfileSection key={profile.id} {...profile} />
      ))}
    </div>
  );
}
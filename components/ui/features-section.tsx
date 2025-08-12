"use client";

import { Zap, Shield, Globe, Smartphone, Award, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-steam-yellow" />,
      title: 'Interactive Learning',
      description: 'Hands-on STEAM modules with videos, quizzes, and real-world applications designed to engage and inspire.',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      icon: <Award className="w-8 h-8 text-steam-green" />,
      title: 'Gamification',
      description: 'Earn badges, certificates, and track progress with our comprehensive achievement system.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-steam-blue" />,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones and tablets, accessible even on slow internet connections.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <Globe className="w-8 h-8 text-steam-purple" />,
      title: 'Multilingual Support',
      description: 'Available in French and English, designed specifically for Francophone Africa.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: <Shield className="w-8 h-8 text-steam-orange" />,
      title: 'Safe & Secure',
      description: 'WCAG AA compliant with parental controls and secure payment processing.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: <Users className="w-8 h-8 text-steam-green" />,
      title: 'Community Learning',
      description: 'Connect with peers, teachers, and participate in collaborative STEAM projects.',
      color: 'bg-teal-50 border-teal-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Why Choose STEAMtastic?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with pedagogical expertise to deliver 
            exceptional STEAM education experiences tailored for African learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`card-hover border-2 ${feature.color}`}>
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
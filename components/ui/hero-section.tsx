"use client";

import { useState, useEffect } from 'react';
import { Play, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Science', 'Technology', 'Engineering', 'Arts', 'Mathematics'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-steam-blue/20 animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-steam-green/20 animate-pulse-gentle"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-steam-orange/20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-18 h-18 rounded-full bg-steam-purple/20 animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Learn{' '}
              <span className="relative">
                <span className="steam-text-gradient transition-all duration-500">
                  {words[currentWord]}
                </span>
              </span>
              <br />
              while having{' '}
              <span className="text-steam-orange">fun!</span>
            </h1>
            
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0">
              Interactive STEAM education platform designed for children, youth, and teachers in Francophone Africa. 
              Start learning today with our engaging modules and hands-on kits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Link href="/auth/register">
                <Button className="btn-steam text-lg px-8 py-4 h-auto">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Free
                </Button>
              </Link>
              <Link href="#demo">
                <Button variant="outline" className="text-lg px-8 py-4 h-auto border-2">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-steam-blue mr-1" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-steam-green mr-1" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">STEAM Modules</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-steam-orange mr-1" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-steam-blue via-steam-green to-steam-purple rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                  <p className="text-white/90">Experience STEAM education like never before</p>
                </div>
              </div>
              
              {/* Mock Dashboard Elements */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Physics Module</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-16 h-2 bg-steam-blue rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Math Challenge</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-20 h-2 bg-steam-green rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Art Project</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-12 h-2 bg-steam-orange rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce-gentle">
              <Award className="w-6 h-6 text-steam-yellow" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-pulse-gentle">
              <Zap className="w-6 h-6 text-steam-purple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
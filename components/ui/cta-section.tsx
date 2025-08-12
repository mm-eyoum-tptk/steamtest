"use client";

import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 steam-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse-gentle"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white animate-bounce-gentle"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 rounded-full bg-white animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
          <p className="text-white/90 text-lg">
            "STEAMtastic transformed how my children learn science and math. They actually look forward to study time now!"
          </p>
          <p className="text-white/80 mt-2">— Marie K., Parent from Dakar</p>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Start Your STEAM Journey?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of learners across Francophone Africa who are already discovering 
          the joy of STEAM education with STEAMtastic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/auth/register">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold shadow-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Learning Free
            </Button>
          </Link>
          
          <Link href="/kits">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 h-auto font-semibold">
              Browse STEAM Kits
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold mb-2">FREE</div>
            <div className="text-white/80">Basic modules & videos</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2,000 FCFA</div>
            <div className="text-white/80">Monthly premium access</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15,000 FCFA</div>
            <div className="text-white/80">Annual premium plan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
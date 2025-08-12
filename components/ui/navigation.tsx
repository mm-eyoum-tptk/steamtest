"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, BookOpen, ShoppingCart, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  userType?: 'learner' | 'parent' | 'teacher' | 'admin' | null;
  userName?: string;
}

export default function Navigation({ userType, userName }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = userType ? [
    { icon: Home, label: 'Dashboard', href: `/${userType}/dashboard` },
    { icon: BookOpen, label: 'Modules', href: `/${userType}/modules` },
    { icon: ShoppingCart, label: 'Kits', href: '/kits' },
    { icon: User, label: 'Profile', href: `/${userType}/profile` },
  ] : [
    { label: 'For Children', href: '/#children' },
    { label: 'For Parents', href: '/#parents' },
    { label: 'For Teachers', href: '/#teachers' },
    { label: 'Kits', href: '/kits' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl steam-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-xl steam-text-gradient hidden sm:block">
              STEAMtastic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-steam-blue transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {userType ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Hello, {userName || 'User'}!
                </span>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-1" />
                  Settings
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="btn-steam">Start for Free</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-steam-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {'icon' in item && <item.icon className="w-5 h-5" />}
                {item.label}
              </Link>
            ))}
            
            {!userType && (
              <div className="pt-4 border-t space-y-2">
                <Link href="/auth/login" className="block">
                  <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register" className="block">
                  <Button className="btn-steam w-full" onClick={() => setIsOpen(false)}>
                    Start for Free
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
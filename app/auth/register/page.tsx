"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowLeft, Users, Baby, GraduationCap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    country: 'Senegal',
    language: 'French',
    terms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userTypes = [
    {
      id: 'learner',
      title: 'Learner',
      description: 'I want to learn STEAM subjects',
      icon: <Baby className="w-8 h-8 text-steam-blue" />,
      color: 'border-steam-blue hover:bg-blue-50'
    },
    {
      id: 'parent',
      title: 'Parent/Guardian',
      description: 'I want to manage my child\'s learning',
      icon: <Users className="w-8 h-8 text-steam-green" />,
      color: 'border-steam-green hover:bg-green-50'
    },
    {
      id: 'teacher',
      title: 'Teacher/Educator',
      description: 'I want to teach and manage students',
      icon: <GraduationCap className="w-8 h-8 text-steam-teal" />,
      color: 'border-steam-teal hover:bg-teal-50'
    },
    {
      id: 'admin',
      title: 'Administrator',
      description: 'I manage the platform',
      icon: <Settings className="w-8 h-8 text-steam-navy" />,
      color: 'border-steam-navy hover:bg-blue-50'
    }
  ];

  const countries = [
    'Senegal', 'Mali', 'Burkina Faso', 'Niger', 'Guinea', 'Ivory Coast', 
    'Benin', 'Togo', 'Cameroon', 'Chad', 'Gabon', 'Congo', 'Madagascar', 'Other'
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Handle registration logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-steam-blue hover:text-steam-green transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl steam-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-display font-bold text-2xl steam-text-gradient">
              STEAMtastic
            </span>
          </div>
          
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Join STEAMtastic
          </h1>
          <p className="text-gray-600">
            Create your account and start your STEAM learning journey
          </p>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i <= step ? 'bg-steam-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle>
              {step === 1 && 'Choose Your Profile'}
              {step === 2 && 'Account Details'}
              {step === 3 && 'Personal Information'}
            </CardTitle>
            <CardDescription>
              {step === 1 && 'Select the profile type that best describes you'}
              {step === 2 && 'Enter your email and create a secure password'}
              {step === 3 && 'Complete your profile to get started'}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Step 1: User Type Selection */}
            {step === 1 && (
              <div className="grid gap-4">
                {userTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setFormData({ ...formData, userType: type.id })}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.userType === type.id 
                        ? `${type.color.split(' ')[0]} bg-opacity-10` 
                        : 'border-gray-200 hover:border-gray-300'
                    } ${type.color}`}
                  >
                    <div className="flex items-center gap-4">
                      {type.icon}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{type.title}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        formData.userType === type.id 
                          ? 'bg-current border-current' 
                          : 'border-gray-300'
                      }`} />
                    </div>
                  </div>
                ))}
                
                <Button 
                  onClick={handleNext}
                  disabled={!formData.userType}
                  className="btn-steam mt-4"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 2: Account Details */}
            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="btn-steam flex-1"
                    disabled={!formData.email || !formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword}
                  >
                    Continue
                  </Button>
                </div>
              </form>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-steam-blue focus:outline-none focus:ring-1 focus:ring-steam-blue"
                    required
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  <select
                    id="language"
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-steam-blue focus:outline-none focus:ring-1 focus:ring-steam-blue"
                    required
                  >
                    <option value="French">Français</option>
                    <option value="English">English</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.terms}
                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{' '}
                    <Link href="/terms" className="text-steam-blue hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-steam-blue hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="btn-steam flex-1"
                    disabled={!formData.firstName || !formData.lastName || !formData.terms}
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-steam-blue hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
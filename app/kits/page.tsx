"use client";

import { useState } from 'react';
import { ShoppingCart, Filter, Star, Heart, Search, Zap, Users, Award } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function KitsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const kits = [
    {
      id: 1,
      title: 'Beginner STEAM Kit',
      description: 'Perfect introduction to STEAM concepts for young learners',
      price: 5000,
      originalPrice: 6000,
      currency: 'FCFA',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beginner',
      ageRange: '5-8 years',
      rating: 4.8,
      reviews: 124,
      features: ['10 experiments', 'Safety guide', 'Parent handbook', 'Video tutorials'],
      inStock: true,
      badge: 'Most Popular',
      badgeColor: 'badge-fun'
    },
    {
      id: 2,
      title: 'Intermediate STEAM Kit',
      description: 'Advanced projects for curious minds ready to explore deeper',
      price: 15000,
      originalPrice: 18000,
      currency: 'FCFA',
      image: 'https://images.pexels.com/photos/8923999/pexels-photo-8923999.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'intermediate',
      ageRange: '9-14 years',
      rating: 4.9,
      reviews: 89,
      features: ['20 experiments', 'Digital tools', 'Lab equipment', 'Certificate program'],
      inStock: true,
      badge: 'Best Value',
      badgeColor: 'badge-creative'
    },
    {
      id: 3,
      title: 'Advanced STEAM Kit',
      description: 'Professional-grade equipment for serious young scientists',
      price: 30000,
      originalPrice: 35000,
      currency: 'FCFA',
      image: 'https://images.pexels.com/photos/8923991/pexels-photo-8923991.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'advanced',
      ageRange: '15+ years',
      rating: 4.7,
      reviews: 45,
      features: ['30+ experiments', 'Arduino kit', 'Microscope', 'Advanced materials'],
      inStock: true,
      badge: 'Premium',
      badgeColor: 'bg-gradient-to-r from-steam-navy to-steam-blue text-white'
    },
    {
      id: 4,
      title: 'Art & Design Kit',
      description: 'Creative tools for artistic expression and design thinking',
      price: 8000,
      currency: 'FCFA',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'arts',
      ageRange: '6-16 years',
      rating: 4.6,
      reviews: 67,
      features: ['Art supplies', 'Design templates', 'Color theory guide', 'Digital tools access'],
      inStock: true,
      badge: 'Creative',
      badgeColor: 'bg-gradient-to-r from-steam-pink to-steam-purple text-white'
    },
    {
      id: 5,
      title: 'Robotics Starter Kit',
      description: 'Build and program your first robot with this comprehensive kit',
      price: 25000,
      currency: 'FCFA',
      image: 'https://images.pexels.com/photos/8124592/pexels-photo-8124592.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'technology',
      ageRange: '10+ years',
      rating: 4.9,
      reviews: 156,
      features: ['Robot components', 'Programming software', 'Sensors', 'Building guide'],
      inStock: false,
      badge: 'Coming Soon',
      badgeColor: 'bg-gradient-to-r from-steam-orange to-steam-yellow text-white'
    },
    {
      id: 6,
      title: 'Chemistry Discovery Kit',
      description: 'Safe chemistry experiments to explore the molecular world',
      price: 12000,
      currency: 'FCFA',
      image: 'https://images.pexels.com/photos/8923997/pexels-photo-8923997.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'science',
      ageRange: '8-14 years',
      rating: 4.5,
      reviews: 98,
      features: ['Lab equipment', 'Safe chemicals', 'Experiment guide', 'Safety goggles'],
      inStock: true,
      badge: 'Science Fun',
      badgeColor: 'bg-gradient-to-r from-steam-green to-steam-teal text-white'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Kits', icon: <Zap className="w-4 h-4" /> },
    { id: 'beginner', label: 'Beginner', icon: <Users className="w-4 h-4" /> },
    { id: 'intermediate', label: 'Intermediate', icon: <Award className="w-4 h-4" /> },
    { id: 'advanced', label: 'Advanced', icon: <Star className="w-4 h-4" /> },
    { id: 'science', label: 'Science', icon: <Zap className="w-4 h-4" /> },
    { id: 'technology', label: 'Technology', icon: <Zap className="w-4 h-4" /> },
    { id: 'arts', label: 'Arts', icon: <Heart className="w-4 h-4" /> }
  ];

  const filteredKits = kits.filter(kit => {
    const matchesCategory = selectedCategory === 'all' || kit.category === selectedCategory;
    const matchesSearch = kit.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         kit.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && kit.price <= 10000) ||
                        (priceRange === 'medium' && kit.price > 10000 && kit.price <= 20000) ||
                        (priceRange === 'high' && kit.price > 20000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 steam-gradient-colorful">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            STEAM Kits Store
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hands-on learning kits designed to bring STEAM education to life. 
            From beginner to advanced, find the perfect kit for every learner.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search kits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/90 border-0"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.id
                            ? 'steam-gradient-fun text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category.icon}
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'all', label: 'All Prices' },
                      { id: 'low', label: 'Under 10,000 FCFA' },
                      { id: 'medium', label: '10,000 - 20,000 FCFA' },
                      { id: 'high', label: 'Above 20,000 FCFA' }
                    ].map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setPriceRange(range.id)}
                        className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                          priceRange === range.id
                            ? 'steam-gradient-colorful text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredKits.length} Kits Available
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Sort by Price
                </Button>
                <Button variant="outline" size="sm">
                  Sort by Rating
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredKits.map((kit) => (
                <Card key={kit.id} className="card-colorful relative overflow-hidden">
                  {kit.badge && (
                    <Badge className={`absolute top-3 left-3 z-10 ${kit.badgeColor || 'bg-gray-500'}`}>
                      {kit.badge}
                    </Badge>
                  )}
                  
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={kit.image} 
                      alt={kit.title}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold line-clamp-1">
                          {kit.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          Ages {kit.ageRange}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{kit.rating}</span>
                        <span className="text-gray-500">({kit.reviews})</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {kit.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {kit.price.toLocaleString()} {kit.currency}
                        </span>
                        {kit.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {kit.originalPrice.toLocaleString()} {kit.currency}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        {kit.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-1 h-1 bg-steam-blue rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                        {kit.features.length > 2 && (
                          <div className="text-xs text-steam-blue">
                            +{kit.features.length - 2} more features
                          </div>
                        )}
                      </div>

                      <Button 
                        className={`w-full ${
                          kit.inStock 
                            ? 'btn-steam' 
                            : 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!kit.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {kit.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredKits.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No kits found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
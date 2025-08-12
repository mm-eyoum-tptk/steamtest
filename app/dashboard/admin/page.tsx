"use client";

import { useState } from 'react';
import { Users, DollarSign, TrendingUp, Package, BarChart3, Settings, AlertTriangle, Eye, MessageSquare, ShoppingCart, Award, BookOpen, Activity } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('7d');

  const globalKPIs = {
    totalUsers: 2847,
    activeUsers: 1923,
    revenue: 4250000, // FCFA
    engagement: 78,
    newUsers: 156,
    subscriptions: 342,
    kitsSold: 89,
    completionRate: 65
  };

  const userGrowth = [
    { period: 'Jan', users: 1200, revenue: 2800000 },
    { period: 'Fév', users: 1450, revenue: 3200000 },
    { period: 'Mar', users: 1680, revenue: 3600000 },
    { period: 'Avr', users: 2100, revenue: 4100000 },
    { period: 'Mai', users: 2500, revenue: 4250000 },
  ];

  const topModules = [
    {
      id: 1,
      title: 'Les Mystères de l\'Eau',
      completions: 1234,
      rating: 4.8,
      engagement: 92
    },
    {
      id: 2,
      title: 'Construire un Robot',
      completions: 987,
      rating: 4.9,
      engagement: 88
    },
    {
      id: 3,
      title: 'Art et Géométrie',
      completions: 756,
      rating: 4.6,
      engagement: 85
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Aminata Sow',
      kit: 'Kit Intermédiaire',
      amount: 15000,
      status: 'shipped',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Mamadou Ba',
      kit: 'Kit Débutant',
      amount: 5000,
      status: 'processing',
      date: '2024-01-15'
    },
    {
      id: 'ORD-003',
      customer: 'Fatou Diallo',
      kit: 'Kit Avancé',
      amount: 30000,
      status: 'delivered',
      date: '2024-01-14'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Stock faible: Kit Débutant (5 restants)',
      time: 'Il y a 2 heures'
    },
    {
      id: 2,
      type: 'info',
      message: 'Nouveau commentaire négatif sur le module "Robotique"',
      time: 'Il y a 4 heures'
    },
    {
      id: 3,
      type: 'success',
      message: 'Objectif mensuel de revenus atteint !',
      time: 'Il y a 1 jour'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  Tableau de Bord Administrateur
                </h1>
                <p className="text-gray-600">
                  Vue d'ensemble de la plateforme STEAMtastic
                </p>
              </div>
              
              <div className="flex gap-3">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steam-blue focus:border-transparent"
                >
                  <option value="7d">7 derniers jours</option>
                  <option value="30d">30 derniers jours</option>
                  <option value="90d">3 derniers mois</option>
                </select>
                <Button className="btn-steam">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Button>
              </div>
            </div>
          </div>

          {/* KPIs Globaux */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-colorful">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Utilisateurs Total</p>
                    <p className="text-3xl font-bold text-steam-blue">{globalKPIs.totalUsers.toLocaleString()}</p>
                    <p className="text-sm text-green-600">+{globalKPIs.newUsers} cette semaine</p>
                  </div>
                  <Users className="w-8 h-8 text-steam-blue" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-colorful">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenus</p>
                    <p className="text-3xl font-bold text-steam-green">{(globalKPIs.revenue / 1000).toFixed(0)}K FCFA</p>
                    <p className="text-sm text-green-600">+12% ce mois</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-steam-green" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-colorful">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Engagement</p>
                    <p className="text-3xl font-bold text-steam-purple">{globalKPIs.engagement}%</p>
                    <p className="text-sm text-green-600">+5% cette semaine</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-steam-purple" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-colorful">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Kits Vendus</p>
                    <p className="text-3xl font-bold text-steam-orange">{globalKPIs.kitsSold}</p>
                    <p className="text-sm text-green-600">+23 cette semaine</p>
                  </div>
                  <Package className="w-8 h-8 text-steam-orange" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Alertes importantes */}
              <Card className="card-colorful">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-steam-orange" />
                    Alertes et Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map((alert) => (
                      <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                        alert.type === 'warning' ? 'bg-orange-50 border-l-orange-500' :
                        alert.type === 'info' ? 'bg-blue-50 border-l-blue-500' :
                        'bg-green-50 border-l-green-500'
                      }`}>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{alert.message}</p>
                          <span className="text-sm text-gray-500">{alert.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Modules les plus populaires */}
              <Card className="card-colorful">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-steam-teal" />
                    Modules les Plus Populaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topModules.map((module, index) => (
                      <div key={module.id} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                            index === 0 ? 'bg-gradient-to-r from-steam-yellow to-steam-orange' :
                            index === 1 ? 'bg-gradient-to-r from-steam-blue to-steam-purple' :
                            'bg-gradient-to-r from-steam-green to-steam-teal'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold">{module.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>{module.completions} complétions</span>
                              <span>⭐ {module.rating}/5</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-steam-blue">{module.engagement}%</div>
                          <div className="text-sm text-gray-500">engagement</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Commandes récentes */}
              <Card className="card-colorful">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-steam-pink" />
                      Commandes Récentes
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      Voir tout
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{order.id}</h4>
                          <p className="text-sm text-gray-600">{order.customer} • {order.kit}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-steam-green">{order.amount.toLocaleString()} FCFA</div>
                          <Badge className={
                            order.status === 'delivered' ? 'bg-steam-green' :
                            order.status === 'shipped' ? 'bg-steam-blue' :
                            'bg-steam-orange'
                          }>
                            {order.status === 'delivered' ? 'Livré' :
                             order.status === 'shipped' ? 'Expédié' : 'En cours'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Statistiques rapides */}
              <Card className="card-colorful">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-steam-navy" />
                    Activité en Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Utilisateurs actifs</span>
                    <span className="font-bold text-steam-blue">{globalKPIs.activeUsers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sessions en cours</span>
                    <span className="font-bold text-steam-green">127</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Modules complétés</span>
                    <span className="font-bold text-steam-purple">45</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Nouveaux comptes</span>
                    <span className="font-bold text-steam-orange">12</span>
                  </div>
                </CardContent>
              </Card>

              {/* Actions rapides */}
              <Card className="card-colorful">
                <CardHeader>
                  <CardTitle>Actions Rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Gérer les Modules
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Gérer les Kits
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Modération Utilisateurs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Rapports Détaillés
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Support Client
                  </Button>
                  <Button className="w-full btn-steam">
                    <Settings className="w-4 h-4 mr-2" />
                    Paramètres Système
                  </Button>
                </CardContent>
              </Card>

              {/* Progression des objectifs */}
              <Card className="card-colorful">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-steam-yellow" />
                    Objectifs Mensuels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Nouveaux utilisateurs</span>
                      <span>156/200</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Revenus</span>
                      <span>4.25M/5M FCFA</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kits vendus</span>
                      <span>89/120</span>
                    </div>
                    <Progress value={74} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Taux de completion</span>
                      <span>65/70%</span>
                    </div>
                    <Progress value={93} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
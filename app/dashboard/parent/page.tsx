"use client";

import { useState } from 'react';
import { Users, TrendingUp, Calendar, ShoppingCart, Bell, Settings, Eye, Award, BookOpen, Clock, MessageSquare } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardCard, StatCard } from '@/components/ui/dashboard-card';

export default function ParentDashboard() {
  const [selectedChild, setSelectedChild] = useState('emma');

  const children = [
    {
      id: 'emma',
      name: 'Emma Diallo',
      age: 12,
      avatar: 'https://images.pexels.com/photos/8923999/pexels-photo-8923999.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Explorateur',
      progress: 65,
      weeklyTime: '4h 30min',
      lastActivity: 'Il y a 2 heures',
      badges: 8,
      certificates: 2
    },
    {
      id: 'malik',
      name: 'Malik Diallo',
      age: 9,
      avatar: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Découvreur',
      progress: 40,
      weeklyTime: '2h 15min',
      lastActivity: 'Il y a 1 jour',
      badges: 4,
      certificates: 1
    }
  ];

  const currentChild = children.find(child => child.id === selectedChild) || children[0];

  const recentQuizzes = [
    {
      id: 1,
      module: 'Les Mystères de l\'Eau',
      score: 85,
      date: '2024-01-15',
      child: 'Emma',
      status: 'excellent'
    },
    {
      id: 2,
      module: 'Construire un Robot',
      score: 72,
      date: '2024-01-14',
      child: 'Emma',
      status: 'bien'
    },
    {
      id: 3,
      module: 'Formes et Couleurs',
      score: 90,
      date: '2024-01-13',
      child: 'Malik',
      status: 'excellent'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'achievement',
      message: 'Emma a obtenu le badge "Scientifique" !',
      time: 'Il y a 1 heure',
      child: 'Emma'
    },
    {
      id: 2,
      type: 'reminder',
      message: 'Session live "Expériences Chimiques" dans 2 heures',
      time: 'Il y a 2 heures',
      child: 'Emma'
    },
    {
      id: 3,
      type: 'progress',
      message: 'Malik a terminé le module "Art et Géométrie"',
      time: 'Hier',
      child: 'Malik'
    }
  ];

  const subscription = {
    plan: 'Premium Famille',
    status: 'active',
    nextBilling: '2024-02-15',
    amount: '15,000 FCFA'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Tableau de Bord Parental
            </h1>
            <p className="text-gray-600">
              Suivez les progrès de vos enfants et gérez leur apprentissage STEAM
            </p>
          </div>

          {/* Sélecteur d'enfant */}
          <div className="mb-8">
            <DashboardCard 
              title="Mes Enfants" 
              icon={Users} 
              iconColor="text-steam-blue"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {children.map((child) => (
                  <div
                    key={child.id}
                    onClick={() => setSelectedChild(child.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedChild === child.id
                        ? 'border-steam-blue bg-gradient-to-r from-steam-blue/10 to-steam-purple/10'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src={child.avatar} 
                        alt={child.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{child.name}</h3>
                        <p className="text-sm text-gray-600">{child.age} ans • {child.level}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className="bg-steam-purple text-white text-xs">
                            {child.badges} badges
                          </Badge>
                          <Badge className="bg-steam-orange text-white text-xs">
                            {child.certificates} certificats
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-steam-blue">{child.progress}%</div>
                        <div className="text-xs text-gray-500">progression</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Statistiques rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Enfants Actifs"
              value={children.length}
              icon={Users}
              iconColor="text-steam-blue"
              subtitle="comptes gérés"
            />
            <StatCard
              title="Progression Moyenne"
              value={`${Math.round(children.reduce((acc, child) => acc + child.progress, 0) / children.length)}%`}
              icon={TrendingUp}
              iconColor="text-steam-green"
              trend={{ value: "+8% ce mois", positive: true }}
            />
            <StatCard
              title="Temps d'Étude"
              value="6h 45min"
              icon={Clock}
              iconColor="text-steam-purple"
              subtitle="cette semaine"
            />
            <StatCard
              title="Badges Obtenus"
              value={children.reduce((acc, child) => acc + child.badges, 0)}
              icon={Award}
              iconColor="text-steam-orange"
              trend={{ value: "+5 ce mois", positive: true }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Détails de l'enfant sélectionné */}
              <DashboardCard 
                title={`Détails de ${currentChild.name}`} 
                icon={Eye} 
                iconColor="text-steam-green"
                className="bg-gradient-to-r from-steam-green/5 via-steam-blue/5 to-steam-purple/5"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-steam-blue/10 to-steam-purple/10 rounded-lg border border-steam-blue/20">
                    <div className="text-2xl font-bold text-steam-blue mb-1">{currentChild.progress}%</div>
                    <div className="text-sm text-gray-600">Progression Globale</div>
                    <Progress value={currentChild.progress} className="mt-2" />
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-steam-purple/10 to-steam-pink/10 rounded-lg border border-steam-purple/20">
                    <div className="text-2xl font-bold text-steam-purple mb-1">{currentChild.weeklyTime}</div>
                    <div className="text-sm text-gray-600">Cette Semaine</div>
                    <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      Temps d'apprentissage
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-steam-orange/10 to-steam-yellow/10 rounded-lg border border-steam-orange/20">
                    <div className="text-2xl font-bold text-steam-orange mb-1">{currentChild.badges}</div>
                    <div className="text-sm text-gray-600">Badges Obtenus</div>
                    <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
                      <Award className="w-3 h-3" />
                      Récompenses
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-steam-blue/10 hover:to-steam-purple/10">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Voir les Modules
                  </Button>
                  <Button variant="outline" className="flex-1 hover:bg-gradient-to-r hover:from-steam-orange/10 hover:to-steam-yellow/10">
                    <Award className="w-4 h-4 mr-2" />
                    Certificats
                  </Button>
                  <Button className="flex-1 btn-steam">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contacter Prof
                  </Button>
                </div>
              </DashboardCard>

              {/* Résultats récents */}
              <DashboardCard 
                title="Résultats Récents des Quiz" 
                icon={TrendingUp} 
                iconColor="text-steam-teal"
                headerAction={
                  <Button variant="outline" size="sm">
                    Voir l'historique
                  </Button>
                }
              >
                <div className="space-y-4">
                  {recentQuizzes.map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-white/60 to-white/40 rounded-lg border border-white/30 backdrop-blur-sm">
                      <div className="flex-1">
                        <h4 className="font-semibold">{quiz.module}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>Par {quiz.child}</span>
                          <span>{quiz.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          quiz.score >= 80 ? 'text-steam-green' : 
                          quiz.score >= 60 ? 'text-steam-orange' : 'text-red-500'
                        }`}>
                          {quiz.score}%
                        </div>
                        <Badge className={
                          quiz.status === 'excellent' ? 'bg-steam-green' :
                          quiz.status === 'bien' ? 'bg-steam-orange' : 'bg-red-500'
                        }>
                          {quiz.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <DashboardCard 
                title="Notifications" 
                icon={Bell} 
                iconColor="text-steam-pink"
              >
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-3 rounded-lg border ${
                      notification.type === 'achievement' ? 'bg-gradient-to-r from-steam-green/10 to-steam-teal/10 border-steam-green/20' :
                      notification.type === 'reminder' ? 'bg-gradient-to-r from-steam-blue/10 to-steam-purple/10 border-steam-blue/20' :
                      'bg-gradient-to-r from-steam-orange/10 to-steam-yellow/10 border-steam-orange/20'
                    }`}>
                      <p className="text-sm font-medium mb-1">{notification.message}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{notification.child}</span>
                        <span>{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              {/* Abonnement */}
              <DashboardCard 
                title="Abonnement" 
                icon={Settings} 
                iconColor="text-steam-navy"
              >
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-steam-green/10 to-steam-teal/10 rounded-lg border border-steam-green/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{subscription.plan}</span>
                      <Badge className="bg-steam-green">Actif</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Prochain paiement: {subscription.nextBilling}</div>
                      <div className="font-semibold text-steam-blue">{subscription.amount}/an</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-steam-orange/10 hover:to-steam-yellow/10">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Acheter des Kits
                    </Button>
                    <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-steam-blue/10 hover:to-steam-purple/10">
                      Gérer l'Abonnement
                    </Button>
                    <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-steam-green/10 hover:to-steam-teal/10">
                      Historique des Achats
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
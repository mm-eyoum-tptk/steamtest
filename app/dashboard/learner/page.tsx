"use client";

import { useState } from 'react';
import { Play, Star, Trophy, Calendar, BookOpen, Users, Clock, ChevronRight, Award, Target, Zap, Flame, Gift } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DashboardCard, StatCard } from '@/components/ui/dashboard-card';

export default function LearnerDashboard() {
  const [user] = useState({
    name: 'Emma Diallo',
    level: 'Explorateur',
    avatar: 'https://images.pexels.com/photos/8923999/pexels-photo-8923999.jpeg?auto=compress&cs=tinysrgb&w=100',
    globalProgress: 65,
    points: 1250,
    streak: 7,
    weeklyGoal: 5, // heures par semaine
    weeklyProgress: 3.5
  });

  const badges = [
    { id: 1, name: 'Premier Pas', icon: <Target className="w-4 h-4" />, earned: true, color: 'bg-gradient-to-r from-steam-green to-steam-teal' },
    { id: 2, name: 'Scientifique', icon: <Zap className="w-4 h-4" />, earned: true, color: 'bg-gradient-to-r from-steam-blue to-steam-purple' },
    { id: 3, name: 'Créatif', icon: <Star className="w-4 h-4" />, earned: true, color: 'bg-gradient-to-r from-steam-pink to-steam-orange' },
    { id: 4, name: 'Persévérant', icon: <Trophy className="w-4 h-4" />, earned: false, color: 'bg-gray-300' }
  ];

  const modules = [
    {
      id: 1,
      title: 'Les Mystères de l\'Eau',
      subject: 'Science',
      progress: 80,
      duration: '45 min',
      thumbnail: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300',
      difficulty: 'Débutant',
      color: 'from-steam-blue to-steam-teal'
    },
    {
      id: 2,
      title: 'Construire un Robot',
      subject: 'Technologie',
      progress: 45,
      duration: '60 min',
      thumbnail: 'https://images.pexels.com/photos/8124592/pexels-photo-8124592.jpeg?auto=compress&cs=tinysrgb&w=300',
      difficulty: 'Intermédiaire',
      color: 'from-steam-purple to-steam-pink'
    },
    {
      id: 3,
      title: 'Art et Géométrie',
      subject: 'Arts',
      progress: 20,
      duration: '30 min',
      thumbnail: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300',
      difficulty: 'Débutant',
      color: 'from-steam-orange to-steam-yellow'
    },
    {
      id: 4,
      title: 'Mathématiques Magiques',
      subject: 'Mathématiques',
      progress: 0,
      duration: '40 min',
      thumbnail: 'https://images.pexels.com/photos/8923997/pexels-photo-8923997.jpeg?auto=compress&cs=tinysrgb&w=300',
      difficulty: 'Débutant',
      color: 'from-steam-green to-steam-blue'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Session Live: Expériences Chimiques',
      date: 'Aujourd\'hui',
      time: '16:00',
      instructor: 'Dr. Aminata Sow',
      participants: 24
    },
    {
      id: 2,
      title: 'Atelier Robotique',
      date: 'Demain',
      time: '14:30',
      instructor: 'Ing. Mamadou Ba',
      participants: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header avec profil utilisateur */}
          <div className="mb-8">
            <DashboardCard 
              title={`Salut ${user.name} ! 👋`}
              className="bg-gradient-to-r from-steam-blue/10 via-steam-purple/10 to-steam-pink/10"
            >
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-steam-orange to-steam-yellow rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <Flame className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge className="bg-gradient-to-r from-steam-blue to-steam-purple text-white">
                      {user.level}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-steam-orange to-steam-yellow text-white">
                      {user.points} points
                    </Badge>
                    <Badge className="bg-gradient-to-r from-steam-green to-steam-teal text-white">
                      🔥 {user.streak} jours
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progression globale</span>
                        <span className="font-semibold">{user.globalProgress}%</span>
                      </div>
                      <Progress value={user.globalProgress} className="h-3" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Objectif hebdomadaire</span>
                        <span className="font-semibold">{user.weeklyProgress}h/{user.weeklyGoal}h</span>
                      </div>
                      <Progress value={(user.weeklyProgress / user.weeklyGoal) * 100} className="h-3" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="btn-steam mb-2">
                    <Gift className="w-4 h-4 mr-2" />
                    Récompenses
                  </Button>
                  <div className="text-xs text-gray-600">
                    Prochaine récompense à 1500 points
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>

          {/* Statistiques rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Modules Complétés"
              value="12"
              icon={BookOpen}
              iconColor="text-steam-blue"
              trend={{ value: "+3 cette semaine", positive: true }}
            />
            <StatCard
              title="Badges Obtenus"
              value="8"
              icon={Award}
              iconColor="text-steam-purple"
              trend={{ value: "+2 ce mois", positive: true }}
            />
            <StatCard
              title="Temps d'Étude"
              value="24h"
              icon={Clock}
              iconColor="text-steam-green"
              subtitle="Ce mois-ci"
            />
            <StatCard
              title="Rang Global"
              value="#47"
              icon={Trophy}
              iconColor="text-steam-orange"
              trend={{ value: "+12 positions", positive: true }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Badges récents */}
              <DashboardCard 
                title="Tes Badges" 
                icon={Trophy} 
                iconColor="text-steam-orange"
                headerAction={
                  <Button variant="outline" size="sm">
                    Voir tous
                  </Button>
                }
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-xl text-center transition-all hover:scale-105 cursor-pointer ${
                        badge.earned ? badge.color + ' text-white shadow-lg' : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <div className="flex justify-center mb-2">
                        {badge.icon}
                      </div>
                      <div className="text-xs font-medium">{badge.name}</div>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              {/* Modules recommandés */}
              <DashboardCard 
                title="Continue ton apprentissage" 
                icon={BookOpen} 
                iconColor="text-steam-blue"
                headerAction={
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Filtrer
                    </Button>
                    <Button variant="outline" size="sm">
                      Voir tout
                    </Button>
                  </div>
                }
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {modules.map((module) => (
                    <Card key={module.id} className="card-hover border-0 shadow-md overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={module.thumbnail} 
                          alt={module.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${module.color} opacity-20`} />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-white/90 text-gray-800">
                            {module.subject}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary">
                            {module.difficulty}
                          </Badge>
                        </div>
                        <Button 
                          size="sm"
                          className="absolute bottom-3 right-3 bg-white/90 text-gray-800 hover:bg-white"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          {module.progress > 0 ? 'Continuer' : 'Commencer'}
                        </Button>
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </div>
                        </div>
                        
                        {module.progress > 0 && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progression</span>
                              <span>{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DashboardCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sessions live à venir */}
              <DashboardCard 
                title="Sessions Live" 
                icon={Calendar} 
                iconColor="text-steam-purple"
              >
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-4 bg-gradient-to-r from-white/60 to-white/40 rounded-lg border border-white/30 backdrop-blur-sm">
                      <h4 className="font-semibold text-sm mb-2">{session.title}</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {session.date} à {session.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {session.participants} participants
                        </div>
                        <div>Par {session.instructor}</div>
                      </div>
                      <Button size="sm" className="w-full mt-3 btn-steam">
                        Rejoindre
                      </Button>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              {/* Défis du jour */}
              <DashboardCard 
                title="Défis du Jour" 
                icon={Target} 
                iconColor="text-steam-green"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-steam-green/10 to-steam-teal/10 rounded-lg border border-steam-green/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Complète 1 module</span>
                      <Badge className="bg-steam-green text-white">+50 pts</Badge>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-steam-orange/10 to-steam-yellow/10 rounded-lg border border-steam-orange/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Obtiens un badge</span>
                      <Badge className="bg-steam-orange text-white">+100 pts</Badge>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-steam-purple/10 to-steam-pink/10 rounded-lg border border-steam-purple/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Étudie 30 min</span>
                      <Badge className="bg-steam-purple text-white">+25 pts</Badge>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </DashboardCard>

              {/* Accès rapide */}
              <DashboardCard title="Accès Rapide">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between hover:bg-gradient-to-r hover:from-steam-blue/10 hover:to-steam-purple/10">
                    Modules Gratuits
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between hover:bg-gradient-to-r hover:from-steam-green/10 hover:to-steam-teal/10">
                    Kits STEAM
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between hover:bg-gradient-to-r hover:from-steam-orange/10 hover:to-steam-yellow/10">
                    Mes Certificats
                    <Award className="w-4 h-4" />
                  </Button>
                  <Button className="w-full btn-steam">
                    <Star className="w-4 h-4 mr-2" />
                    Passer Premium
                  </Button>
                </div>
              </DashboardCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
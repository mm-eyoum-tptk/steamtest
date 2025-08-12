"use client";

import { useState } from 'react';
import { Users, BookOpen, AlertTriangle, BarChart3, MessageSquare, Calendar, Award, TrendingUp, Eye, Plus } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardCard, StatCard } from '@/components/ui/dashboard-card';

export default function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState('6eme-a');

  const classes = [
    {
      id: '6eme-a',
      name: '6ème A',
      students: 28,
      avgProgress: 72,
      activeStudents: 24,
      strugglingStudents: 3
    },
    {
      id: '5eme-b',
      name: '5ème B',
      students: 25,
      avgProgress: 68,
      activeStudents: 22,
      strugglingStudents: 2
    }
  ];

  const currentClass = classes.find(c => c.id === selectedClass) || classes[0];

  const students = [
    {
      id: 1,
      name: 'Emma Diallo',
      avatar: 'https://images.pexels.com/photos/8923999/pexels-photo-8923999.jpeg?auto=compress&cs=tinysrgb&w=100',
      progress: 85,
      lastActivity: 'Il y a 2 heures',
      status: 'excellent',
      completedModules: 12,
      badges: 8,
      needsAttention: false
    },
    {
      id: 2,
      name: 'Malik Sow',
      avatar: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=100',
      progress: 45,
      lastActivity: 'Il y a 3 jours',
      status: 'attention',
      completedModules: 6,
      badges: 3,
      needsAttention: true
    },
    {
      id: 3,
      name: 'Fatou Ba',
      avatar: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=100',
      progress: 78,
      lastActivity: 'Il y a 1 heure',
      status: 'bien',
      completedModules: 10,
      badges: 6,
      needsAttention: false
    },
    {
      id: 4,
      name: 'Ousmane Diop',
      avatar: 'https://images.pexels.com/photos/8124592/pexels-photo-8124592.jpeg?auto=compress&cs=tinysrgb&w=100',
      progress: 35,
      lastActivity: 'Il y a 5 jours',
      status: 'difficulte',
      completedModules: 4,
      badges: 2,
      needsAttention: true
    }
  ];

  const teachingResources = [
    {
      id: 1,
      title: 'Guide des Expériences Chimiques',
      type: 'PDF',
      subject: 'Science',
      downloads: 45,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Activités Mathématiques Ludiques',
      type: 'Vidéo',
      subject: 'Mathématiques',
      downloads: 32,
      rating: 4.6
    },
    {
      id: 3,
      title: 'Projets Robotique Débutant',
      type: 'Kit',
      subject: 'Technologie',
      downloads: 28,
      rating: 4.9
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Expériences avec l\'Eau',
      date: 'Aujourd\'hui',
      time: '14:00',
      class: '6ème A',
      registered: 24
    },
    {
      id: 2,
      title: 'Introduction à la Robotique',
      date: 'Demain',
      time: '10:30',
      class: '5ème B',
      registered: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Tableau de Bord Enseignant
            </h1>
            <p className="text-gray-600">
              Gérez vos classes et suivez les progrès de vos élèves
            </p>
          </div>

          {/* Sélecteur de classe */}
          <div className="mb-8">
            <DashboardCard 
              title="Mes Classes" 
              icon={Users} 
              iconColor="text-steam-blue"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {classes.map((classItem) => (
                  <div
                    key={classItem.id}
                    onClick={() => setSelectedClass(classItem.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedClass === classItem.id
                        ? 'border-steam-blue bg-gradient-to-r from-steam-blue/10 to-steam-purple/10'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{classItem.name}</h3>
                      <Badge className="bg-steam-green">{classItem.students} élèves</Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-steam-blue">{classItem.avgProgress}%</div>
                        <div className="text-xs text-gray-600">Progression</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-steam-green">{classItem.activeStudents}</div>
                        <div className="text-xs text-gray-600">Actifs</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-steam-orange">{classItem.strugglingStudents}</div>
                        <div className="text-xs text-gray-600">En difficulté</div>
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
              title="Total Élèves"
              value={classes.reduce((acc, c) => acc + c.students, 0)}
              icon={Users}
              iconColor="text-steam-blue"
              subtitle="dans toutes les classes"
            />
            <StatCard
              title="Progression Moyenne"
              value={`${Math.round(classes.reduce((acc, c) => acc + c.avgProgress, 0) / classes.length)}%`}
              icon={TrendingUp}
              iconColor="text-steam-green"
              trend={{ value: "+5% ce mois", positive: true }}
            />
            <StatCard
              title="Élèves Actifs"
              value={classes.reduce((acc, c) => acc + c.activeStudents, 0)}
              icon={BookOpen}
              iconColor="text-steam-purple"
              trend={{ value: "+12 cette semaine", positive: true }}
            />
            <StatCard
              title="Besoin d'Aide"
              value={classes.reduce((acc, c) => acc + c.strugglingStudents, 0)}
              icon={AlertTriangle}
              iconColor="text-steam-orange"
              subtitle="élèves en difficulté"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Alertes élèves en difficulté */}
              {students.filter(s => s.needsAttention).length > 0 && (
                <DashboardCard 
                  title="Élèves Nécessitant une Attention" 
                  icon={AlertTriangle} 
                  iconColor="text-orange-600"
                  className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50/50 to-red-50/50"
                >
                  <div className="space-y-3">
                    {students.filter(s => s.needsAttention).map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-100/50 to-red-100/50 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-3">
                          <img 
                            src={student.avatar} 
                            alt={student.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                          <div>
                            <h4 className="font-semibold">{student.name}</h4>
                            <p className="text-sm text-gray-600">
                              {student.progress}% • Dernière activité: {student.lastActivity}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="hover:bg-orange-100">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Contacter
                        </Button>
                      </div>
                    ))}
                  </div>
                </DashboardCard>
              )}

              {/* Vue d'ensemble de la classe */}
              <DashboardCard 
                title={`Vue d'Ensemble - ${currentClass.name}`} 
                icon={BarChart3} 
                iconColor="text-steam-teal"
                headerAction={
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Rapport Détaillé
                  </Button>
                }
              >
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-steam-blue/10 to-steam-purple/10 rounded-lg border border-steam-blue/20">
                    <div className="text-2xl font-bold text-steam-blue">{currentClass.students}</div>
                    <div className="text-sm text-gray-600">Élèves Total</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-steam-green/10 to-steam-teal/10 rounded-lg border border-steam-green/20">
                    <div className="text-2xl font-bold text-steam-green">{currentClass.activeStudents}</div>
                    <div className="text-sm text-gray-600">Actifs</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-steam-purple/10 to-steam-pink/10 rounded-lg border border-steam-purple/20">
                    <div className="text-2xl font-bold text-steam-purple">{currentClass.avgProgress}%</div>
                    <div className="text-sm text-gray-600">Progression Moy.</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-steam-orange/10 to-steam-yellow/10 rounded-lg border border-steam-orange/20">
                    <div className="text-2xl font-bold text-steam-orange">{currentClass.strugglingStudents}</div>
                    <div className="text-sm text-gray-600">En Difficulté</div>
                  </div>
                </div>

                {/* Liste des élèves */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Élèves de la Classe</h3>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Voir Tout
                    </Button>
                  </div>
                  
                  {students.slice(0, 4).map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-white/60 to-white/40 rounded-lg border border-white/30 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <img 
                          src={student.avatar} 
                          alt={student.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{student.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <Badge className="bg-steam-blue text-white text-xs">
                              {student.completedModules} modules
                            </Badge>
                            <Badge className="bg-steam-purple text-white text-xs">
                              {student.badges} badges
                            </Badge>
                            <span className="text-xs">{student.lastActivity}</span>
                          </div>
                          <Progress value={student.progress} className="mt-2 h-2" />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold ${
                          student.status === 'excellent' ? 'text-steam-green' :
                          student.status === 'bien' ? 'text-steam-blue' :
                          student.status === 'attention' ? 'text-steam-orange' : 'text-red-500'
                        }`}>
                          {student.progress}%
                        </div>
                        <Badge className={
                          student.status === 'excellent' ? 'bg-steam-green' :
                          student.status === 'bien' ? 'bg-steam-blue' :
                          student.status === 'attention' ? 'bg-steam-orange' : 'bg-red-500'
                        }>
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sessions à venir */}
              <DashboardCard 
                title="Sessions Planifiées" 
                icon={Calendar} 
                iconColor="text-steam-purple"
              >
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-4 bg-gradient-to-r from-steam-purple/10 to-steam-pink/10 rounded-lg border border-steam-purple/20">
                      <h4 className="font-semibold text-sm mb-2">{session.title}</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div>{session.date} à {session.time}</div>
                        <div>{session.class} • {session.registered} inscrits</div>
                      </div>
                      <Button size="sm" className="w-full mt-3 btn-steam">
                        Gérer la Session
                      </Button>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-steam-purple/10 hover:to-steam-pink/10">
                    <Plus className="w-4 h-4 mr-2" />
                    Planifier une Session
                  </Button>
                </div>
              </DashboardCard>

              {/* Ressources pédagogiques */}
              <DashboardCard 
                title="Ressources Pédagogiques" 
                icon={BookOpen} 
                iconColor="text-steam-green"
              >
                <div className="space-y-4">
                  {teachingResources.map((resource) => (
                    <div key={resource.id} className="p-3 bg-gradient-to-r from-steam-green/10 to-steam-teal/10 rounded-lg border border-steam-green/20">
                      <h4 className="font-semibold text-sm mb-1">{resource.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                        <Badge className="bg-steam-blue text-white">{resource.subject}</Badge>
                        <span>{resource.downloads} téléchargements</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs">{resource.rating}/5</span>
                        </div>
                        <Button size="sm" variant="outline" className="hover:bg-steam-green/20">
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-steam-green/10 hover:to-steam-teal/10">
                    Voir Toutes les Ressources
                  </Button>
                </div>
              </DashboardCard>

              {/* Actions rapides */}
              <DashboardCard title="Actions Rapides">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start hover:bg-gradient-to-r hover:from-steam-blue/10 hover:to-steam-purple/10">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Messagerie
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-gradient-to-r hover:from-steam-orange/10 hover:to-steam-yellow/10">
                    <Award className="w-4 h-4 mr-2" />
                    Attribuer des Badges
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-gradient-to-r hover:from-steam-green/10 hover:to-steam-teal/10">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Rapports Détaillés
                  </Button>
                  <Button className="w-full btn-steam">
                    <Plus className="w-4 h-4 mr-2" />
                    Créer un Module
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
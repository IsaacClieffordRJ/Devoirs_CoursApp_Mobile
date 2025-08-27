import React from 'react';
import MetricCard from './components/MetricCard';
import './App.css';

function App() {
  // Données des métriques basées sur l'image fournie
  const metricsData = [
    {
      id: 1,
      title: 'Security',
      value: '0',
      subtitle: 'Open issues',
      grade: 'A',
      type: 'security'
    },
    {
      id: 2,
      title: 'Reliability',
      value: '0',
      subtitle: 'Open issues',
      grade: 'A',
      type: 'reliability'
    },
    {
      id: 3,
      title: 'Maintainability',
      value: '1',
      subtitle: 'Open issues',
      grade: 'A',
      type: 'maintainability'
    },
    {
      id: 4,
      title: 'Accepted issues',
      value: '0',
      subtitle: 'Valid issues that were not fixed',
      type: 'accepted'
    },
    {
      id: 5,
      title: 'Coverage',
      value: '97.1%',
      subtitle: 'On 552 lines to cover',
      type: 'coverage',
      showProgress: true,
      progressValue: 97.1
    },
    {
      id: 6,
      title: 'Duplications',
      value: '0.0%',
      subtitle: 'On 27 lines',
      type: 'duplications'
    }
  ];

  return (
    <div className="min-h-screen sonar-gradient">
      {/* Header avec logo Sonar */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <div className="sonar-logo w-12 h-12 rounded-full flex items-center justify-center">
            <div className="sonar-logo-inner w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold tracking-wide">Sonar</h1>
        </div>
        <div className="text-white/60 text-sm">
          Démonstration de Composants Réutilisables
        </div>
      </div>

      <div className="main-layout flex">
        {/* Sidebar gauche */}
        <div className="w-1/3 p-6">
          <div className="sidebar-placeholder rounded-lg h-96 flex items-center justify-center">
            <div className="text-white/40 text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-sm">Zone de contenu<br />supplémentaire</p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 p-6">
          <div className="mb-8 fade-in">
            <h2 className="text-white text-2xl font-semibold mb-2 leading-tight">
              Resulting in more secure, reliable, and<br />
              maintainable software
            </h2>
          </div>

          {/* Grille de cartes métriques - Démonstration de réutilisation du composant */}
          <div className="metric-grid grid grid-cols-2 gap-4 max-w-4xl mb-8">
            {metricsData.map((metric, index) => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={metric.value}
                subtitle={metric.subtitle}
                grade={metric.grade}
                type={metric.type}
                showProgress={metric.showProgress}
                progressValue={metric.progressValue}
                index={index}
              />
            ))}
          </div>

          {/* Section explicative */}
          <div className="explanation-card rounded-lg p-6 fade-in">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">⚛️</span>
              Démonstration de Réutilisation de Composants React
            </h3>
            <div className="space-y-3 text-white/80 text-sm leading-relaxed">
              <p>
                Cette application démontre la <strong>réutilisation d'un composant React</strong> 
                <code className="bg-white/20 px-2 py-1 rounded mx-1 font-mono">MetricCard</code>. 
                Le même composant est utilisé <strong>6 fois</strong> avec des propriétés différentes 
                pour afficher diverses métriques de qualité de code.
              </p>
              <p>
                Chaque carte peut avoir un titre, une valeur, un sous-titre, une note (A-D), 
                un type pour la couleur et l'icône, et optionnellement une barre de progression animée.
              </p>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-white/60 text-xs">
              <div className="bg-white/10 rounded p-3">
                <p className="font-semibold text-white/80 mb-1">🔧 Composant</p>
                <p>MetricCard.jsx</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <p className="font-semibold text-white/80 mb-1">📊 Instances</p>
                <p>6 cartes avec données différentes</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <p className="font-semibold text-white/80 mb-1">⚙️ Props</p>
                <p>title, value, subtitle, grade, type, showProgress, progressValue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


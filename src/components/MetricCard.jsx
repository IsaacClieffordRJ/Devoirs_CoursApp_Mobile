import React, { useEffect, useState } from 'react';

const MetricCard = ({ 
  title, 
  value, 
  subtitle, 
  grade, 
  type = 'default',
  showProgress = false,
  progressValue = 0,
  index = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A':
        return 'bg-green-500 hover:bg-green-600';
      case 'B':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'C':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'D':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getValueColor = (type) => {
    switch (type) {
      case 'security':
      case 'reliability':
        return 'text-gray-700';
      case 'maintainability':
        return 'text-gray-700';
      case 'coverage':
        return 'text-green-600';
      case 'duplications':
        return 'text-teal-600';
      case 'accepted':
        return 'text-gray-700';
      default:
        return 'text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'security':
        return '🔒';
      case 'reliability':
        return '⚡';
      case 'maintainability':
        return '🔧';
      case 'coverage':
        return '📊';
      case 'duplications':
        return '📋';
      case 'accepted':
        return '✅';
      default:
        return '📈';
    }
  };

  return (
    <div 
      className={`metric-card bg-white rounded-lg border border-gray-200 p-4 min-h-[120px] flex flex-col justify-between shadow-sm hover:shadow-lg ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      style={{ 
        '--stagger-delay': index,
        '--progress-width': `${progressValue}%`
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{getTypeIcon(type)}</span>
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>
        {grade && (
          <div className={`grade-badge w-6 h-6 rounded-full ${getGradeColor(grade)} flex items-center justify-center cursor-pointer`}>
            <span className="text-white text-xs font-bold">{grade}</span>
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className={`text-2xl font-bold ${getValueColor(type)} mb-1 transition-colors duration-200`}>
          {value}
        </div>
        
        {showProgress && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="progress-bar h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? `${progressValue}%` : '0%' }}
            ></div>
          </div>
        )}
        
        {subtitle && (
          <p className="text-xs text-gray-500 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;


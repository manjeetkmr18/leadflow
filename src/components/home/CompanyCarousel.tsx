'use client'

import React, { useEffect, useState } from 'react';

// Company data with their brand colors and simple SVG icons
const companies = [
  {
    name: 'Microsoft',
    color: '#00BCF2',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
      </svg>
    )
  },
  {
    name: 'Salesforce',
    color: '#00A1E0',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    name: 'HubSpot',
    color: '#FF7A59',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    name: 'Slack',
    color: '#4A154B',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    )
  },
  {
    name: 'Google',
    color: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    )
  },
  {
    name: 'Amazon',
    color: '#FF9900',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M13.2 5.6c0-.9.2-1.6.7-2.1s1.1-.8 2-.8c.8 0 1.5.3 2 .8s.7 1.2.7 2.1-.2 1.6-.7 2.1-1.1.8-2 .8c-.8 0-1.5-.3-2-.8s-.7-1.2-.7-2.1zm6.4 12.9c-.3.3-.8.3-1.2-.1l-3.5-3.5c-.8.6-1.8.9-2.9.9-2.7 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.8 2.2 4.8 4.8c0 1.1-.4 2.1-.9 2.9l3.5 3.5c.4.4.4.8.2 1.1z"/>
      </svg>
    )
  },
  {
    name: 'Apple',
    color: '#555555',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    )
  },
  {
    name: 'Meta',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Netflix',
    color: '#E50914',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c2.836-.693 4.649-1.043 4.652-1.043V9.75z"/>
      </svg>
    )
  },
  {
    name: 'Adobe',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z"/>
      </svg>
    )
  },
  {
    name: 'Shopify',
    color: '#7AB55C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M16.373 16.644L12 21l-4.373-4.356C8.502 15.774 9.714 15 12 15s3.498.774 4.373 1.644zM12 2C9.243 2 7 4.243 7 7v5c0 2.757 2.243 5 5 5s5-2.243 5-5V7c0-2.757-2.243-5-5-5z"/>
      </svg>
    )
  },
  {
    name: 'Stripe',
    color: '#635BFF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    )
  },
  {
    name: 'Zoom',
    color: '#2D8CFF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    )
  },
  {
    name: 'Spotify',
    color: '#1DB954',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.424c-.188.305-.578.402-.883.214-2.427-1.484-5.485-1.82-9.086-.996-.351.08-.703-.133-.784-.484-.08-.351.133-.703.484-.784 3.954-.906 7.364-.518 10.05 1.151.305.188.402.578.214.883zm1.258-2.798c-.238.383-.742.504-1.125.266-2.777-1.707-7.016-2.203-10.297-1.207-.422.128-.867-.109-.995-.531-.128-.422.109-.867.531-.995 3.747-1.137 8.437-.59 11.621 1.372.383.238.504.742.266 1.125z"/>
      </svg>
    )
  },
  {
    name: 'Tesla',
    color: '#CC0000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="currentColor" d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.95 5.16-.21 9-4.4 9-9.95V7l-10-5z"/>
      </svg>
    )
  }
];

const CompanyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create extended array for infinite scroll effect
  const extendedCompanies = [...companies, ...companies];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we reach the end to create infinite loop
        if (nextIndex >= companies.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get 5 visible companies starting from currentIndex
  const getVisibleCompanies = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % companies.length;
      visible.push({
        ...companies[index],
        uniqueKey: `${companies[index].name}-${currentIndex}-${i}`
      });
    }
    return visible;
  };

  const visibleCompanies = getVisibleCompanies();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Company logos carousel */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 ease-in-out">
        {visibleCompanies.map((company, index) => (
          <div
            key={company.uniqueKey}              className="flex items-center gap-3 opacity-75 dark:opacity-65 hover:opacity-90 dark:hover:opacity-80 transition-all duration-300 group cursor-pointer px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex-shrink-0"
          >
            {/* Logo */}
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 group-hover:scale-110 transition-all duration-300 flex-shrink-0"
              style={{ 
                background: `linear-gradient(135deg, ${company.color}25, ${company.color}40)`,
                color: company.color 
              }}
            >
              {company.icon}
            </div>
            
            {/* Company name */}
            <div className="text-base font-semibold text-black/80 dark:text-white/80 whitespace-nowrap group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              {company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCarousel;

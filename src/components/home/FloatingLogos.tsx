import React from 'react';

const FloatingLogos = () => {
  const logos = [
    {
      name: 'Amazon',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.289-.12.256-.097.49.096.49.398 0 .1-.043.2-.132.3-.621.68-1.538 1.2-2.756 1.56-3.05 1.01-6.436 1.51-10.158 1.51-5.153 0-9.746-1.2-13.778-3.6-.161-.097-.234-.2-.234-.3 0-.2.134-.3.299-.357zM23.421 15.895c-.32-.512-2.107-.242-2.906-.122-.798.12-2.291.48-2.291 1.91 0 .36.07.54.21.72.14.18.42.27.84.27.98 0 1.68-.58 2.1-1.38.42-.8.42-2.09.047-1.4zm-20.895-.698c-.15-.15-.15-.38 0-.531l.001-.001c1.702-1.794 4.539-2.692 8.51-2.692 3.313 0 6.005.644 8.076 1.932.15.093.225.23.225.413 0 .184-.075.32-.225.413-2.071 1.288-4.763 1.932-8.076 1.932-3.971 0-6.808-.898-8.51-2.692z"/>
        </svg>
      ),
      delay: '0s'
    },
    {
      name: 'Gmail',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      delay: '1s'
    },
    {
      name: 'Microsoft',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
        </svg>
      ),
      delay: '2s'
    },
    {
      name: 'Apple',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      delay: '3s'
    },
    {
      name: 'Slack',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      ),
      delay: '4s'
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      delay: '5s'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      delay: '6s'
    },
    {
      name: 'Spotify',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      delay: '7s'
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Spiral/Snake arrangement starting from top-left, going clockwise */}
      
      {/* Position 1: Top-left area */}
      <div className="hidden lg:block absolute top-1/4 left-1/5">
        <div
          className="text-black/22 dark:text-white/22 animate-float-1"
          style={{
            animationDelay: '0s',
            animationDuration: '7s'
          }}
        >
          {logos[0].icon}
        </div>
      </div>

      {/* Position 2: Top-center */}
      <div className="hidden lg:block absolute top-1/6 left-1/2 transform -translate-x-1/2">
        <div
          className="text-black/24 dark:text-white/24 animate-float-2"
          style={{
            animationDelay: '1s',
            animationDuration: '8s'
          }}
        >
          {logos[1].icon}
        </div>
      </div>

      {/* Position 3: Top-right area */}
      <div className="hidden lg:block absolute top-1/4 right-1/5">
        <div
          className="text-black/22 dark:text-white/22 animate-float-3"
          style={{
            animationDelay: '2s',
            animationDuration: '6s'
          }}
        >
          {logos[2].icon}
        </div>
      </div>

      {/* Position 4: Middle-right */}
      <div className="hidden lg:block absolute top-1/2 right-1/6 transform -translate-y-1/2">
        <div
          className="text-black/26 dark:text-white/26 animate-float-reverse-1"
          style={{
            animationDelay: '3s',
            animationDuration: '9s'
          }}
        >
          {logos[3].icon}
        </div>
      </div>

      {/* Position 5: Bottom-right area */}
      <div className="hidden lg:block absolute bottom-1/4 right-1/5">
        <div
          className="text-black/22 dark:text-white/22 animate-float-4"
          style={{
            animationDelay: '4s',
            animationDuration: '7s'
          }}
        >
          {logos[4].icon}
        </div>
      </div>

      {/* Position 6: Bottom-center */}
      <div className="hidden lg:block absolute bottom-1/6 left-1/2 transform -translate-x-1/2">
        <div
          className="text-black/24 dark:text-white/24 animate-float-reverse-2"
          style={{
            animationDelay: '5s',
            animationDuration: '8s'
          }}
        >
          {logos[5].icon}
        </div>
      </div>

      {/* Position 7: Bottom-left area */}
      <div className="hidden lg:block absolute bottom-1/4 left-1/5">
        <div
          className="text-black/22 dark:text-white/22 animate-float-5"
          style={{
            animationDelay: '6s',
            animationDuration: '6s'
          }}
        >
          {logos[6].icon}
        </div>
      </div>

      {/* Position 8: Middle-left */}
      <div className="hidden lg:block absolute top-1/2 left-1/6 transform -translate-y-1/2">
        <div
          className="text-black/26 dark:text-white/26 animate-float-reverse-3"
          style={{
            animationDelay: '7s',
            animationDuration: '9s'
          }}
        >
          {logos[7].icon}
        </div>
      </div>

      {/* Inner spiral for XL screens - closer to content */}
      <div className="hidden xl:block absolute top-1/3 left-1/3">
        <div
          className="text-black/18 dark:text-white/18 animate-float-6"
          style={{
            animationDelay: '8s',
            animationDuration: '10s'
          }}
        >
          {logos[0].icon}
        </div>
      </div>

      <div className="hidden xl:block absolute top-1/3 right-1/3">
        <div
          className="text-black/18 dark:text-white/18 animate-float-1"
          style={{
            animationDelay: '9s',
            animationDuration: '8s'
          }}
        >
          {logos[2].icon}
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-1/3 right-1/3">
        <div
          className="text-black/18 dark:text-white/18 animate-float-reverse-1"
          style={{
            animationDelay: '10s',
            animationDuration: '7s'
          }}
        >
          {logos[4].icon}
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-1/3 left-1/3">
        <div
          className="text-black/18 dark:text-white/18 animate-float-2"
          style={{
            animationDelay: '11s',
            animationDuration: '9s'
          }}
        >
          {logos[6].icon}
        </div>
      </div>
    </div>
  );
};

export default FloatingLogos;

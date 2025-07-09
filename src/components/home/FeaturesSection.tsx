'use client'

import { useState, useEffect } from 'react'
import { Users, BarChart3, Zap, Shield, Globe, MessageSquare, CheckCircle, Target, Clock, Award } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Users,
    title: "Lead Management",
    description: "Capture and nurture leads with intelligent scoring",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
    size: "large"
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time insights and reporting",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
    size: "small"
  },
  {
    id: 3,
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/50",
    size: "small"
  },
  {
    id: 4,
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade protection for your data",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/50",
    size: "large"
  },
  {
    id: 5,
    icon: Globe,
    title: "Integration",
    description: "Connect with 500+ tools",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/50",
    size: "small"
  },
  {
    id: 6,
    icon: Target,
    title: "Pipeline",
    description: "Visualize your sales funnel",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/50",
    size: "small"
  },
  {
    id: 7,
    icon: Clock,
    title: "Time Tracking",
    description: "Monitor team productivity and performance",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-950/50",
    size: "large"
  },
  {
    id: 8,
    icon: Award,
    title: "Success Metrics",
    description: "Track achievements",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/50",
    size: "small"
  },
  {
    id: 9,
    icon: MessageSquare,
    title: "Communication",
    description: "Unified messaging hub",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/50",
    size: "small"
  },
  {
    id: 10,
    icon: CheckCircle,
    title: "Task Management",
    description: "Organize and track your daily tasks efficiently",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
    size: "large"
  }
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
            setVisibleCards(prev => [...prev, cardId])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-card-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
            Powerful CRM Features
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Everything You Need
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Streamline your business with our comprehensive CRM solution designed for modern teams.
          </p>
        </div>

        {/* Features Grid - Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-min">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-card-id={feature.id}
              className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer
                ${feature.size === 'large' ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : 'lg:row-span-1'}
                ${visibleCards.includes(feature.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              {/* Card Background */}
              <div className={`w-full h-full min-h-[200px] ${feature.size === 'large' ? 'lg:min-h-[400px]' : 'lg:min-h-[200px]'} ${feature.bgColor} border border-gray-200/50 dark:border-gray-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden`}>
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-45 scale-150 translate-x-[-50%] group-hover:translate-x-[50%] transition-transform duration-1000"></div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-r ${feature.color} p-3 lg:p-4 shadow-lg shadow-black/10 dark:shadow-white/5 mb-4 lg:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className={`font-bold text-gray-900 dark:text-white mb-2 lg:mb-3 transition-colors group-hover:text-gray-900 dark:group-hover:text-white
                    ${feature.size === 'large' ? 'text-xl lg:text-2xl xl:text-3xl' : 'text-lg lg:text-xl'}
                  `}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-200
                    ${feature.size === 'large' ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}
                  `}>
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl lg:rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
          </button>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  )
}

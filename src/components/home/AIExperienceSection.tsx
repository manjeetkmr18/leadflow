'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MessageCircle, CreditCard, Zap, Globe, Users, Bot, ArrowRight, CheckCircle } from 'lucide-react'

export function AIExperienceSection() {
  const [currentAnimation, setCurrentAnimation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const tools = [
    { icon: Mail, name: 'Email', color: 'text-blue-500' },
    { icon: Phone, name: 'Phone', color: 'text-green-500' },
    { icon: MessageCircle, name: 'WhatsApp', color: 'text-green-600' },
    { icon: CreditCard, name: 'Stripe', color: 'text-purple-500' },
    { icon: Zap, name: 'Zapier', color: 'text-orange-500' },
    { icon: Globe, name: 'Web', color: 'text-cyan-500' },
    { icon: Users, name: 'CRM', color: 'text-indigo-500' },
    { icon: Bot, name: 'AI', color: 'text-pink-500' },
  ]

  return (
    <section 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(150, 163, 255) 0%, #5b6cde 12%, #4e3391 25%, #231b3d 40%, #0c0c11 60%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Customers deserve more than{' '}
                <span className="text-red-400">long wait times</span> and{' '}
                <span className="text-red-400">generic responses</span>
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                A new approach to customer experience
              </h3>
              
              <p className="text-lg text-white/70 leading-relaxed">
                AI agents act like trained employees, ready to take action while you stay in control. 
                With Leadflow, you can design every customer interaction and make it personal—from 
                phone calls to email support and proactive outreach.
              </p>
            </div>

            {/* Tools Integration */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wide">
                Seamlessly integrates with your tools
              </h4>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 ${
                      currentAnimation === index % 3 ? 'scale-105 shadow-lg bg-white/20' : ''
                    }`}
                  >
                    <tool.icon className={`w-4 h-4 ${tool.color}`} />
                    <span className="text-sm font-medium text-white/90">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>See AI in Action</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column - AI Dashboard */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Command Center</h3>
                    <p className="text-sm text-white/70">Real-time customer interactions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/80">Live</span>
                </div>
              </div>

              {/* AI Interactions */}
              <div className="space-y-4">
                <div className={`p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 transition-all duration-500 ${
                  currentAnimation === 0 ? 'scale-105 shadow-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30' : ''
                }`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-white">Phone Support</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-sm text-white/80">AI resolved billing inquiry in 2.3 minutes</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-white/60">100% satisfaction</span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 transition-all duration-500 ${
                  currentAnimation === 1 ? 'scale-105 shadow-lg bg-gradient-to-r from-green-500/30 to-emerald-500/30' : ''
                }`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-white">WhatsApp Chat</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-sm text-white/80">Product recommendation sent, order placed</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-white/60">Converted</span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 transition-all duration-500 ${
                  currentAnimation === 2 ? 'scale-105 shadow-lg bg-gradient-to-r from-purple-500/30 to-pink-500/30' : ''
                }`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-white">Email Support</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-sm text-white/80">Personalized follow-up campaign launched</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="w-28 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-purple-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-white/60">75% open rate</span>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/70">Available</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-white/70">Accuracy</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-blue-400">2.1s</div>
                  <div className="text-sm text-white/70">Response</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

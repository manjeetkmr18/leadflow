'use client'

import { useState, useEffect, useRef } from 'react'
import { Inbox, MessageCircle, PhoneOff } from 'lucide-react'

const inboxMessages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    subject: 'Project proposal discussion',
    preview: 'Hi, I wanted to follow up on our conversation about the new project...',
    time: '2m ago',
    unread: true,
    avatar: 'SJ'
  },
  {
    id: 2,
    sender: 'Mike Chen',
    subject: 'Meeting schedule update',
    preview: 'The meeting has been moved to 3 PM tomorrow. Please confirm...',
    time: '15m ago',
    unread: true,
    avatar: 'MC'
  },
  {
    id: 3,
    sender: 'Emma Davis',
    subject: 'Contract review needed',
    preview: 'Could you please review the attached contract and let me know...',
    time: '1h ago',
    unread: false,
    avatar: 'ED'
  },
  {
    id: 4,
    sender: 'Alex Thompson',
    subject: 'Demo request',
    preview: 'We would like to schedule a demo of your CRM platform...',
    time: '2h ago',
    unread: true,
    avatar: 'AT'
  },
  {
    id: 5,
    sender: 'Lisa Park',
    subject: 'Support ticket resolved',
    preview: 'Your support ticket #12345 has been resolved successfully...',
    time: '3h ago',
    unread: false,
    avatar: 'LP'
  }
]

// Wave Animation Component
function WaveAnimation({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      if (isActive) {
        // Create simple wave lines with minimal colors
        const waveColors = [
          'rgba(34, 197, 94, 0.8)',   // Green
          'rgba(34, 197, 94, 0.6)',   // Green lighter
          'rgba(34, 197, 94, 0.4)',   // Green even lighter
        ]
        
        // Draw 3 simple wave layers
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = waveColors[i]
          ctx.lineWidth = 1.5
          ctx.lineCap = 'round'
          ctx.globalAlpha = 1
          
          ctx.beginPath()
          
          for (let x = 0; x < width; x++) {
            const amplitude = 8 + i * 3
            const frequency = 0.02 + i * 0.005
            const phase = time * 0.03 + i * Math.PI / 3
            const baseY = height / 2 + (i - 1) * 6
            const y = baseY + Math.sin(x * frequency + phase) * amplitude
            
            if (x === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.stroke()
        }
        
        time += 1
      } else {
        // Draw simple static line when inactive
        ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(50, height / 2)
        ctx.lineTo(width - 50, height / 2)
        ctx.stroke()
      }
      
      if (isActive) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isActive])

  return (
    <canvas
      ref={canvasRef}
      width={594}
      height={80}
      className="w-full h-full"
      style={{ 
        background: 'transparent',
        borderRadius: '6px'
      }}
    />
  )
}

export function ClientHandlingSection() {
  const [callDuration, setCallDuration] = useState(122) // Start with 2:02 like in the image
  // Unread count is used in the UI, so keep it as a constant
  const unreadCount = inboxMessages.filter(m => m.unread).length;

  useEffect(() => {
    // Auto-start call timer
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-black dark:to-blue-950/30"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
            Client Communication Hub
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Handle Clients
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              In Person, Any Way
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Connect with your clients through calls, messages, and personalized communication - all from one unified platform.
          </p>c
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Minimalistic Call Interface */}
          <div className="relative">
            {/* Clean Call Interface - No Background */}
            <div className="p-6">
              
              {/* Client Info with Close Button */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-medium">
                    J
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium text-sm">Jane Doe</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">+1 561-555-7689</p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700/30 flex items-center justify-center transition-colors">
                  <PhoneOff className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                </button>
              </div>

              {/* Wave Animation */}
              <div className="relative h-16 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/30 mb-3">
                <WaveAnimation isActive={true} />
              </div>

              {/* Status and Timer Below Wave */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-green-500 font-medium">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  Active
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-medium">Interacting</div>
                <div className="text-gray-500 dark:text-gray-400 font-mono">{formatTime(callDuration)}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Inbox Interface */}
          <div className="relative">
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-900/5 dark:shadow-white/5">
              
              {/* Inbox Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Inbox className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Inbox</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{unreadCount} new messages</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">
                  {unreadCount}
                </div>
              </div>

              {/* Messages List */}
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {inboxMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`group p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      message.unread
                        ? 'bg-blue-50/80 dark:bg-blue-950/50 border-blue-200/50 dark:border-blue-800/50'
                        : 'bg-gray-50/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50'
                    }`}
                  >
                    <div className="flex gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {message.avatar}
                      </div>
                      
                      {/* Message Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-semibold truncate ${
                            message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {message.sender}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                            {message.time}
                          </span>
                        </div>
                        <p className={`text-sm truncate mb-1 ${
                          message.unread ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {message.subject}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                          {message.preview}
                        </p>
                      </div>
                      
                      {/* Unread indicator */}
                      {message.unread && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex gap-3">
                  <button className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                    Compose
                  </button>
                  <button className="py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </section>
  )
}

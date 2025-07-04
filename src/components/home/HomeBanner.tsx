import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import CompanyCarousel from './CompanyCarousel'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
        
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 xl:px-24 relative z-20 mt-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            New: AI-Powered Lead Scoring Available
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
            The Future of
            <span className="block text-white">
              Customer Relations
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Streamline your sales process, nurture leads, and close deals faster 
            with our intuitive CRM platform designed for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto relative overflow-hidden group backdrop-blur-md">
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-md border border-blue-500/30 dark:border-blue-400/30 rounded-lg shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 transition-all duration-300 group-hover:from-blue-700/90 group-hover:to-purple-700/90 dark:group-hover:from-blue-400/90 dark:group-hover:to-purple-400/90 group-hover:border-blue-400/50 dark:group-hover:border-blue-300/50 group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-400/30"></div>
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 dark:from-blue-300/20 dark:via-purple-300/20 dark:to-blue-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Button content */}
                <div className="relative z-10 px-4 py-2 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                </div>
              </button>
            </Link>
            
            <button className="w-full sm:w-auto relative overflow-hidden group backdrop-blur-md">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/60 to-gray-700/60 dark:from-gray-500/60 dark:to-gray-600/60 backdrop-blur-md border border-gray-500/30 dark:border-gray-400/30 rounded-lg shadow-lg shadow-gray-600/15 dark:shadow-gray-500/15 transition-all duration-300 group-hover:from-gray-500/70 group-hover:to-gray-600/70 dark:group-hover:from-gray-400/70 dark:group-hover:to-gray-500/70 group-hover:border-gray-400/40 dark:group-hover:border-gray-300/40 group-hover:shadow-xl group-hover:shadow-gray-600/25 dark:group-hover:shadow-gray-500/25"></div>
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 via-gray-300/20 to-gray-400/20 dark:from-gray-300/20 dark:via-gray-200/20 dark:to-gray-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Button content */}
              <div className="relative z-10 px-4 py-2 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              </div>
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center group">
            <p className="text-sm text-white/70 mb-6 drop-shadow-sm">
              Trusted by 50,000+ businesses worldwide
            </p>
            <CompanyCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

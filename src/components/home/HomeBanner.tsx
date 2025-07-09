import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import CompanyCarousel from './CompanyCarousel'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Hero() {
  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden ${inter.variable}`}>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Bottom Gradient Fade - blends with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
        
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 xl:px-24 relative z-20 mt-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-white/70 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            New: AI-Powered Lead Scoring Available
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-regular text-white mb-8 tracking-tight font-inter">
            The Future of
            <span className="block text-white">
              Customer Relations
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline your sales process, nurture leads, and close deals faster 
            with our intuitive CRM platform designed for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto relative overflow-hidden group">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-full shadow-lg shadow-blue-400/20 transition-all duration-300 group-hover:from-transparent group-hover:to-transparent group-hover:bg-transparent group-hover:border group-hover:border-blue-400 group-hover:shadow-none"></div>
                {/* Button content */}
                <div className="relative z-10 px-8 py-4 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02] group-hover:text-blue-400">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </Link>
            
            <button className="w-full sm:w-auto relative overflow-hidden group">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/60 to-gray-600/60 rounded-full shadow-lg shadow-gray-500/15 transition-all duration-300 group-hover:from-transparent group-hover:to-transparent group-hover:bg-transparent group-hover:border group-hover:border-gray-400 group-hover:shadow-none"></div>
              {/* Button content */}
              <div className="relative z-10 px-8 py-4 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02] group-hover:text-gray-400">
                <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </div>
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center group">
            <p className="text-sm text-white/50 mb-6">
              Trusted by 50,000+ businesses worldwide
            </p>
            <CompanyCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

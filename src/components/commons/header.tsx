'use client'

import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full backdrop-blur-md border-b-2 z-50 shadow-sm transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 border-gray-200/50' 
        : 'bg-transparent border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={isScrolled ? '/logo-dark.png' : '/logo-white.png'}
              alt="Leadflow"
              width={150}
              height={60}
              className="h-8 w-auto transition-all duration-300"
              priority
              quality={100}
              unoptimized
              style={{
                imageRendering: 'crisp-edges',
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className={`transition-colors ${
              isScrolled 
                ? 'text-gray-600 hover:text-gray-900' 
                : 'text-white/70 hover:text-white'
            }`}>
              Home
            </a>
            <a href="#about" className={`transition-colors ${
              isScrolled 
                ? 'text-gray-600 hover:text-gray-900' 
                : 'text-white/70 hover:text-white'
            }`}>
              About
            </a>
            <a href="#contact" className={`transition-colors ${
              isScrolled 
                ? 'text-gray-600 hover:text-gray-900' 
                : 'text-white/70 hover:text-white'
            }`}>
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button className="relative overflow-hidden group backdrop-blur-md">
                <div className={`absolute inset-0 backdrop-blur-md border rounded-lg shadow-md transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 shadow-gray-300/20 group-hover:from-gray-200 group-hover:to-gray-300'
                    : 'bg-gradient-to-r from-gray-500/40 to-gray-600/40 border-gray-400/20 shadow-gray-500/10 group-hover:from-gray-400/50 group-hover:to-gray-500/50 group-hover:border-gray-300/30'
                }`}></div>
                <div className={`relative z-10 px-3 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}>
                  Sign In
                </div>
              </button>
            </Link>
            <Link href="/register">
              <button className="relative overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-md border border-blue-400/30 rounded-lg shadow-lg shadow-blue-400/20 transition-all duration-300 group-hover:from-blue-400/90 group-hover:to-purple-400/90 group-hover:border-blue-300/50 group-hover:shadow-xl group-hover:shadow-blue-400/30"></div>
                <div className="relative z-10 text-white px-6 py-2 rounded-lg transition-all transform group-hover:scale-[1.02] font-medium">
                  Start Free Trial
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t-2 shadow-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 border-gray-200/50' 
                : 'bg-black/80 border-white/20'
            }`}>
              <a href="#home" className={`block px-3 py-2 rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}>
                Home
              </a>
              <a href="#about" className={`block px-3 py-2 rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}>
                About
              </a>
              <a href="#contact" className={`block px-3 py-2 rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}>
                Contact
              </a>
              <div className={`border-t-2 pt-4 mt-4 ${
                isScrolled ? 'border-gray-200/50' : 'border-white/20'
              }`}>
                <Link href="/login" className="block w-full mb-2">
                  <button className="block w-full relative overflow-hidden group backdrop-blur-md">
                    <div className={`absolute inset-0 backdrop-blur-md border rounded-lg shadow-md transition-all duration-300 ${
                      isScrolled
                        ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 shadow-gray-300/20 group-hover:from-gray-200 group-hover:to-gray-300'
                        : 'bg-gradient-to-r from-gray-500/40 to-gray-600/40 border-gray-400/20 shadow-gray-500/10 group-hover:from-gray-400/50 group-hover:to-gray-500/50'
                    }`}></div>
                    <div className={`relative z-10 px-3 py-2 rounded-lg transition-all transform group-hover:scale-[1.02] ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}>
                      Sign In
                    </div>
                  </button>
                </Link>
                <Link href="/register" className="block w-full">
                  <button className="block w-full relative overflow-hidden group backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-md border border-blue-400/30 rounded-lg shadow-lg shadow-blue-400/20 transition-all duration-300 group-hover:from-blue-400/90 group-hover:to-purple-400/90"></div>
                    <div className="relative z-10 text-white px-3 py-2 rounded-lg transition-all transform group-hover:scale-[1.02] font-medium">
                      Start Free Trial
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

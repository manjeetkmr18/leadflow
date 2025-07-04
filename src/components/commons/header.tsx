'use client'

import { ThemeToggle } from '../theme-toggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-transparent dark:bg-transparent backdrop-blur-md border-b-2 border-black/20 dark:border-white/20 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              CRMFlow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login">
              <button className="relative overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/40 to-gray-700/40 dark:from-gray-500/40 dark:to-gray-600/40 backdrop-blur-md border border-gray-500/20 dark:border-gray-400/20 rounded-lg shadow-md shadow-gray-600/10 dark:shadow-gray-500/10 transition-all duration-300 group-hover:from-gray-500/50 group-hover:to-gray-600/50 dark:group-hover:from-gray-400/50 dark:group-hover:to-gray-500/50 group-hover:border-gray-400/30 dark:group-hover:border-gray-300/30"></div>
                <div className="relative z-10 text-white px-3 py-2 rounded-lg transition-colors">
                  Sign In
                </div>
              </button>
            </Link>
            <Link href="/register">
              <button className="relative overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-md border border-blue-500/30 dark:border-blue-400/30 rounded-lg shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 transition-all duration-300 group-hover:from-blue-700/90 group-hover:to-purple-700/90 dark:group-hover:from-blue-400/90 dark:group-hover:to-purple-400/90 group-hover:border-blue-400/50 dark:group-hover:border-blue-300/50 group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-400/30"></div>
                <div className="relative z-10 text-white px-6 py-2 rounded-lg transition-all transform group-hover:scale-[1.02] font-medium">
                  Start Free Trial
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-black/80 backdrop-blur-md border-t-2 border-black/20 dark:border-white/20 shadow-lg">
              <a href="#home" className="block px-3 py-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                Contact
              </a>
              <div className="border-t-2 border-black/20 dark:border-white/20 pt-4 mt-4">
                <Link href="/login" className="block w-full mb-2">
                  <button className="block w-full relative overflow-hidden group backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/40 to-gray-700/40 dark:from-gray-500/40 dark:to-gray-600/40 backdrop-blur-md border border-gray-500/20 dark:border-gray-400/20 rounded-lg shadow-md shadow-gray-600/10 dark:shadow-gray-500/10 transition-all duration-300 group-hover:from-gray-500/50 group-hover:to-gray-600/50 dark:group-hover:from-gray-400/50 dark:group-hover:to-gray-500/50"></div>
                    <div className="relative z-10 text-white px-3 py-2 rounded-lg transition-all transform group-hover:scale-[1.02]">
                      Sign In
                    </div>
                  </button>
                </Link>
                <Link href="/register" className="block w-full">
                  <button className="block w-full relative overflow-hidden group backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-md border border-blue-500/30 dark:border-blue-400/30 rounded-lg shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 transition-all duration-300 group-hover:from-blue-700/90 group-hover:to-purple-700/90 dark:group-hover:from-blue-400/90 dark:group-hover:to-purple-400/90"></div>
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

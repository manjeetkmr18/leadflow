'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff, Mail, Lock, Github, Chrome } from 'lucide-react'
import { Header } from '@/components/commons/header'
import { Footer } from '@/components/commons/footer'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-2">Welcome Back</h1>
          <p className="text-black/60 dark:text-white/60">Sign in to your CRMFlow account</p>
        </div>

        {/* Login Form Card */}
        <div className="relative overflow-hidden backdrop-blur-md">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl shadow-xl shadow-black/5 dark:shadow-white/5"></div>
          
          {/* Form Content */}
          <div className="relative z-10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-black/40 dark:text-white/40" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-black/40 dark:text-white/40" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black dark:text-white bg-white/30 dark:bg-black/30 border-black/20 dark:border-white/20 rounded focus:ring-black/30 dark:focus:ring-white/30 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-black/70 dark:text-white/70">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button type="submit" className="w-full relative overflow-hidden group backdrop-blur-md">
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-md border border-blue-500/30 dark:border-blue-400/30 rounded-lg shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 transition-all duration-300 group-hover:from-blue-700/90 group-hover:to-purple-700/90 dark:group-hover:from-blue-400/90 dark:group-hover:to-purple-400/90 group-hover:border-blue-400/50 dark:group-hover:border-blue-300/50 group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-400/30"></div>
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 dark:from-blue-300/20 dark:via-purple-300/20 dark:to-blue-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Button content */}
                <div className="relative z-10 px-4 py-3 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                  Sign In
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                </div>
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-black/10 dark:border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/50 dark:bg-black/50 text-black/60 dark:text-white/60">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="relative overflow-hidden group backdrop-blur-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-black/80 dark:from-gray-700/80 dark:to-gray-600/80 backdrop-blur-md border border-gray-600/30 dark:border-gray-500/30 rounded-lg shadow-lg shadow-gray-800/20 dark:shadow-gray-600/20 transition-all duration-300 group-hover:from-gray-700/90 group-hover:to-gray-900/90 dark:group-hover:from-gray-600/90 dark:group-hover:to-gray-500/90 group-hover:border-gray-500/50 dark:group-hover:border-gray-400/50"></div>
                  <div className="relative z-10 px-4 py-2 flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                    <Github className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">GitHub</span>
                  </div>
                </button>
                <button type="button" className="relative overflow-hidden group backdrop-blur-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-orange-500/80 dark:from-red-400/80 dark:to-orange-400/80 backdrop-blur-md border border-red-400/30 dark:border-red-300/30 rounded-lg shadow-lg shadow-red-500/20 dark:shadow-red-400/20 transition-all duration-300 group-hover:from-red-600/90 group-hover:to-orange-600/90 dark:group-hover:from-red-300/90 dark:group-hover:to-orange-300/90 group-hover:border-red-300/50 dark:group-hover:border-red-200/50"></div>
                  <div className="relative z-10 px-4 py-2 flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                    <Chrome className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Google</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-black/60 dark:text-white/60">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-black dark:text-white font-semibold hover:underline transition-all">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

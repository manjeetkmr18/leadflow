'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'
import { Header } from '@/components/commons/header'
import { Footer } from '@/components/commons/footer'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Handle forgot password logic here
    console.log('Forgot password request for:', email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 pt-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          
          <div className="w-full max-w-md relative z-10">
            {/* Success Message Card */}
            <div className="relative overflow-hidden backdrop-blur-md">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl shadow-xl shadow-black/5 dark:shadow-white/5"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-green-500/20 dark:bg-green-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Check Your Email</h1>
                <p className="text-black/70 dark:text-white/70 mb-6">
                  We&apos;ve sent a password reset link to{' '}
                  <span className="font-semibold text-black dark:text-white">{email}</span>
                </p>
                <p className="text-sm text-black/60 dark:text-white/60 mb-8">
                  Didn&apos;t receive the email? Check your spam folder or try again.
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full relative overflow-hidden group backdrop-blur-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/60 to-gray-700/60 dark:from-gray-500/60 dark:to-gray-600/60 backdrop-blur-md border border-gray-500/30 dark:border-gray-400/30 rounded-lg shadow-lg shadow-gray-600/15 dark:shadow-gray-500/15 transition-all duration-300 group-hover:from-gray-500/70 group-hover:to-gray-600/70 dark:group-hover:from-gray-400/70 dark:group-hover:to-gray-500/70 group-hover:border-gray-400/40 dark:group-hover:border-gray-300/40"></div>
                    <div className="relative z-10 px-4 py-3 text-white font-semibold flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                      Try Again
                    </div>
                  </button>
                  
                  <Link href="/login" className="block w-full">
                    <button className="w-full relative overflow-hidden group backdrop-blur-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 dark:from-indigo-500/80 dark:to-purple-500/80 backdrop-blur-md border border-indigo-500/30 dark:border-indigo-400/30 rounded-lg shadow-lg shadow-indigo-500/20 dark:shadow-indigo-400/20 transition-all duration-300 group-hover:from-indigo-700/90 group-hover:to-purple-700/90 dark:group-hover:from-indigo-400/90 dark:group-hover:to-purple-400/90 group-hover:border-indigo-400/50 dark:group-hover:border-indigo-300/50 group-hover:shadow-xl group-hover:shadow-indigo-500/30 dark:group-hover:shadow-indigo-400/30"></div>
                      <div className="relative z-10 px-4 py-3 text-white font-semibold flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                        Back to Sign In
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">Forgot Password?</h1>
            <p className="text-black/60 dark:text-white/60">Enter your email and we&apos;ll send you a reset link</p>
          </div>

          {/* Form Card */}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 focus:border-transparent text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 transition-all"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full relative overflow-hidden group backdrop-blur-md">
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 dark:from-indigo-500/80 dark:to-purple-500/80 backdrop-blur-md border border-indigo-500/30 dark:border-indigo-400/30 rounded-lg shadow-lg shadow-indigo-500/20 dark:shadow-indigo-400/20 transition-all duration-300 group-hover:from-indigo-700/90 group-hover:to-purple-700/90 dark:group-hover:from-indigo-400/90 dark:group-hover:to-purple-400/90 group-hover:border-indigo-400/50 dark:group-hover:border-indigo-300/50 group-hover:shadow-xl group-hover:shadow-indigo-500/30 dark:group-hover:shadow-indigo-400/30"></div>
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-indigo-400/20 dark:from-indigo-300/20 dark:via-purple-300/20 dark:to-indigo-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Button content */}
                  <div className="relative z-10 px-4 py-3 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02]">
                    Send Reset Link
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <p className="text-black/60 dark:text-white/60">
              Remember your password?{' '}
              <Link href="/login" className="text-black dark:text-white font-semibold hover:underline transition-all">
                Back to Sign In
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

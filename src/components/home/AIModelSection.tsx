'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export function AIModelSection() {
  const [selectedModel, setSelectedModel] = useState('gpt-4o')

  const models = [
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      provider: 'OpenAI',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <path d="M 16.813 7.367 C 17.227 6.141 17.084 4.795 16.422 3.684 C 15.414 1.967 13.419 1.091 11.472 1.508 C 10.597 0.539 9.35 -0.01 8.045 0 C 6.058 -0.013 4.288 1.254 3.66 3.14 C 2.382 3.396 1.276 4.188 0.621 5.315 C -0.382 7.019 -0.152 9.178 1.187 10.633 C 0.773 11.859 0.916 13.205 1.578 14.316 C 2.586 16.033 4.581 16.909 6.528 16.492 C 7.402 17.461 8.65 18.01 9.955 18 C 11.943 18.013 13.714 16.744 14.341 14.858 C 15.619 14.603 16.726 13.81 17.38 12.682 C 18.382 10.979 18.152 8.821 16.813 7.367 Z M 9.957 16.824 C 9.159 16.826 8.385 16.55 7.768 16.043 L 7.876 15.983 L 11.508 13.911 C 11.693 13.809 11.807 13.614 11.807 13.402 L 11.807 8.349 L 13.342 9.224 C 13.358 9.232 13.369 9.248 13.371 9.266 L 13.371 13.45 C 13.37 15.31 11.843 16.82 9.957 16.824 Z M 2.611 13.728 C 2.211 13.047 2.066 12.245 2.204 11.467 L 2.312 11.532 L 5.944 13.602 C 6.129 13.707 6.356 13.707 6.54 13.602 L 10.975 11.075 L 10.975 12.824 C 10.976 12.842 10.968 12.86 10.953 12.87 L 7.281 14.962 C 5.646 15.891 3.556 15.34 2.611 13.728 Z M 1.656 5.904 C 2.055 5.22 2.685 4.697 3.435 4.424 L 3.433 4.549 L 3.433 8.689 C 3.432 8.9 3.547 9.095 3.731 9.198 L 8.167 11.724 L 6.63 12.599 C 6.615 12.609 6.596 12.611 6.579 12.604 L 2.907 10.509 C 2.125 10.069 1.553 9.334 1.318 8.468 C 1.083 7.603 1.205 6.679 1.656 5.904 Z M 14.27 8.799 L 9.834 6.273 L 11.371 5.399 C 11.386 5.389 11.406 5.388 11.422 5.395 L 15.094 7.487 C 16.238 8.133 16.901 9.386 16.791 10.696 C 16.673 12.006 15.805 13.129 14.566 13.573 L 14.566 9.31 C 14.567 9.099 14.454 8.904 14.27 8.799 Z M 15.798 6.53 L 15.69 6.467 L 12.057 4.397 C 11.873 4.29 11.645 4.29 11.461 4.397 L 7.026 6.924 L 7.026 5.174 C 7.025 5.155 7.033 5.138 7.048 5.127 L 10.72 3.038 C 11.87 2.384 13.293 2.444 14.383 3.192 C 15.468 3.932 16.02 5.237 15.798 6.53 Z M 6.192 9.649 L 4.656 8.774 C 4.639 8.766 4.628 8.751 4.626 8.733 L 4.626 4.549 C 4.631 3.234 5.4 2.042 6.596 1.495 C 7.797 0.94 9.209 1.12 10.233 1.958 C 10.196 1.977 10.16 1.997 10.125 2.019 L 6.493 4.089 C 6.308 4.191 6.193 4.386 6.195 4.598 Z M 7.025 7.875 L 9 6.749 L 10.976 7.874 L 10.976 10.124 L 9 11.249 L 7.025 10.124 Z"/>
        </svg>
      )
    },
    {
      id: 'claude-3-sonnet',
      name: 'Claude 3.7 Sonnet',
      provider: 'Anthropic',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <path d="M 13.072 2.571 L 18 15.429 L 15.297 15.429 L 10.371 2.571 Z M 8.025 10.341 L 6.34 5.823 L 4.654 10.341 Z M 7.752 2.571 L 12.68 15.429 L 9.923 15.429 L 8.916 12.729 L 3.762 12.729 L 2.755 15.429 L 0 15.429 L 4.927 2.571 Z"/>
        </svg>
      )
    },
    {
      id: 'mistral-large',
      name: 'Mistral Large',
      provider: 'Mistral AI',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M 14.765 15.379 L 11.812 15.379 L 11.813 12.378 L 11.813 12.378 L 11.815 9.476 L 14.768 9.476 L 14.766 12.427 L 14.766 12.427 Z M 2.957 6.524 L 2.957 6.524 L 2.956 9.476 L 2.956 9.476 L 2.954 12.476 L 2.954 12.476 L 2.953 15.379 L 0 15.379 L 0.001 12.427 L 0.001 12.427 L 0.003 9.427 L 0.003 9.427 L 0.004 6.475 L 0.004 6.475 L 0.006 3.573 L 0.006 3.573 L 0.007 0.621 L 2.96 0.621 L 2.959 3.573 L 5.912 3.573 L 5.91 6.524 L 2.957 6.524 Z M 11.815 9.476 L 8.862 9.476 L 8.863 6.524 L 14.769 6.524 L 14.768 9.476 L 11.815 9.476 L 11.815 9.463 Z M 8.863 6.524 L 8.865 3.573 L 11.818 3.573 L 11.818 3.573 L 11.819 0.621 L 14.772 0.621 L 14.771 3.573 L 14.771 3.573 L 14.769 6.524 Z M 8.86 12.427 L 5.907 12.427 L 5.909 9.476 L 8.862 9.476 Z"/>
          <path d="M 5.909 9.476 L 2.956 9.476 L 2.957 6.524 L 5.91 6.524 Z" fill="rgb(28,28,27)"/>
          <path d="M 8.862 9.476 L 5.909 9.476 L 5.91 6.524 L 8.863 6.524 Z" fill="rgb(28,28,27)"/>
        </svg>
      )
    }
  ]

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(246, 246, 248) 20%, rgb(246, 246, 248) 70%, rgb(215, 226, 250) 85%, rgb(150, 163, 255) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                Let AI agents use the tools your team already uses—in the background
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Seamless integration with your existing workflow, working behind the scenes 
                to enhance productivity without disruption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="group inline-flex items-center gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column - AI Model Selector */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              {/* Model Selection Header */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Pick your model</h3>
                <p className="text-sm text-gray-600">Choose the best large language model for your task—and switch between them in seconds.</p>
              </div>

              {/* Model Icons Row */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {models.map((model) => (
                  <div key={model.id} className="w-6 h-6 text-gray-500">
                    {model.icon}
                  </div>
                ))}
              </div>

              {/* Model Selector */}
              <div className="space-y-3">
                {models.map((model) => (
                  <motion.button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      selectedModel === model.id 
                        ? 'bg-blue-50 border border-blue-200' 
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 ${
                      selectedModel === model.id ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
                    }`}>
                      {model.icon}
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-sm font-medium text-gray-900">{model.name}</div>
                    </div>
                    {selectedModel === model.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 600, damping: 30 }}
                      >
                        <Check className="w-4 h-4 text-blue-600" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Bottom tagline */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">From GPT and Claude, to Mistral</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

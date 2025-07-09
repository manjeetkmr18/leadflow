"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Users,
  Calendar,
  Target,
  Zap,
  Play,
  Pause,
  Settings,
  BarChart3,
  TrendingUp,
  Eye,
  MousePointer,
  Clock,
  CheckCircle,
  ArrowRight,
  Image,
  Type,
  Layout,
  Palette,
  Link,
  Save,
} from "lucide-react";

// Email Template Preview Component
function EmailBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const emailTemplates = [
    {
      id: 1,
      name: "Welcome Series",
      subject: "Welcome to Leadflow! Let's get started",
      preview: "Hi [Name], Welcome to our platform! We're excited to have you...",
      status: "Active",
      opens: "87%",
      clicks: "23%",
    },
    {
      id: 2,
      name: "Product Demo",
      subject: "See Leadflow in action - Book your demo",
      preview: "Ready to see how Leadflow can transform your business? Book a...",
      status: "Draft",
      opens: "0%",
      clicks: "0%",
    },
    {
      id: 3,
      name: "Follow-up",
      subject: "Don't miss out on your 20% discount",
      preview: "Hi [Name], You're just one step away from saving 20% on your...",
      status: "Scheduled",
      opens: "94%",
      clicks: "31%",
    },
  ];

  return (
    <div className="w-full h-[500px] relative">
      {/* Main container with email builder interface */}
      <div
        className="w-full h-full rounded-2xl border border-gray-700/30 shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(13, 13, 18, 0.8) 0%, rgb(13, 13, 18) 14.9%, rgb(13, 13, 18) 100%)",
          transform:
            "perspective(5000px) scale(1.1) rotate(339deg) rotateX(24deg) rotateY(30deg)",
          transformOrigin: "0% 0% 0px",
          boxShadow:
            "rgb(0, 0, 0) 0px 0px 20px 0px, rgba(255, 255, 255, 0.14) 1px 1px 1px 0px inset",
        }}
      >
        {/* Left Panel - Email Templates */}
        <div className="absolute left-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900/50 to-gray-900 border-r border-gray-700/20">
          {/* Header */}
          <div className="p-4 border-b border-gray-700/20">
            <h3 className="text-white/90 font-medium text-sm">Email Templates</h3>
            <p className="text-gray-400 text-xs mt-1">3 templates</p>
          </div>

          {/* Template List */}
          <div className="flex-1 overflow-y-auto">
            {emailTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                className={`p-4 border-b border-gray-700/10 cursor-pointer transition-colors ${
                  selectedTemplate === index ? "bg-gray-800/40" : "hover:bg-gray-800/20"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTemplate(index)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/90 text-sm font-medium">
                    {template.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      template.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : template.status === "Draft"
                        ? "bg-gray-500/20 text-gray-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {template.status}
                  </span>
                </div>
                <p className="text-gray-400 text-xs truncate mb-2">
                  {template.subject}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-500 text-xs">{template.opens}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MousePointer className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-500 text-xs">{template.clicks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="pl-64 h-full flex flex-col">
          {/* Editor Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/20">
            <div className="flex items-center gap-4">
              <h2 className="text-white/90 font-medium text-lg">Email Builder</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">Auto-saved</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 hover:bg-gray-700 text-white/80 text-sm rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                Preview
              </button>
              <button className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors">
                <Send className="w-4 h-4" />
                Send Test
              </button>
            </div>
          </div>

          {/* Email Content Preview */}
          <div className="flex-1 p-4">
            <div className="bg-white/5 border border-gray-700/30 rounded-lg h-full p-6">
              {/* Email Header */}
              <div className="border-b border-gray-700/20 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">L</span>
                  </div>
                  <div>
                    <div className="text-white/90 font-medium text-sm">Leadflow</div>
                    <div className="text-gray-400 text-xs">hello@leadflow.com</div>
                  </div>
                </div>
                <div className="text-white/90 font-medium">
                  {emailTemplates[selectedTemplate].subject}
                </div>
              </div>

              {/* Email Body */}
              <div className="space-y-4">
                <div className="text-white/90 text-sm leading-relaxed">
                  {emailTemplates[selectedTemplate].preview}
                </div>
                
                {/* CTA Button */}
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors">
                    Get Started Now
                  </div>
                </motion.div>

                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-gray-700/20">
                  <div className="text-gray-400 text-xs">
                    © 2024 Leadflow. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Design Tools */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-b from-gray-900/50 to-gray-900 border-l border-gray-700/20">
          <div className="p-2 space-y-2">
            {[Type, Image, Layout, Palette, Link].map((Icon, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-gray-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      </div>
    </div>
  );
}

// Automation Flow Component
function AutomationFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  const automationSteps = [
    { label: "Lead Captured", icon: Target, status: "completed" },
    { label: "Welcome Email", icon: Mail, status: "active" },
    { label: "Follow-up", icon: Clock, status: "pending" },
    { label: "Demo Booking", icon: Calendar, status: "pending" },
    { label: "Conversion", icon: CheckCircle, status: "pending" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % automationSteps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Compact Header with Inline Stats */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/40 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-white/95 font-medium text-base">Active Automations</h4>
              <p className="text-white/60 text-xs">Running 24/7 in the background</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        </div>
        
        {/* Compact Progress Bar */}
        <div className="relative mb-4">
          <div className="w-full bg-gray-700/30 rounded-full h-1.5">
            <motion.div
              className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / automationSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>Step {currentStep + 1} of {automationSteps.length}</span>
            <span>{Math.round(((currentStep + 1) / automationSteps.length) * 100)}% Complete</span>
          </div>
        </div>

        {/* Inline Stats */}
        <div className="grid grid-cols-3 gap-4 mt-1">
          <div className="text-center">
            <div className="text-green-400 font-semibold text-sm">87%</div>
            <div className="text-gray-400 text-xs">Open Rate</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 font-semibold text-sm">234</div>
            <div className="text-gray-400 text-xs">Processed</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-semibold text-sm">45%</div>
            <div className="text-gray-400 text-xs">Conversion</div>
          </div>
        </div>
      </div>

      {/* Horizontal Flow Steps */}
      <div className="bg-gray-800/20 border border-gray-700/30 rounded-xl p-6">
        <div className="flex items-center justify-between gap-4">
          {automationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step Icon */}
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    index < currentStep
                      ? "bg-gradient-to-r from-green-500 to-emerald-600"
                      : index === currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-gradient-to-r from-gray-600 to-gray-700"
                  }`}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Animated Ring for Active Step */}
                {index === currentStep && (
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-blue-400/50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              
              {/* Step Label */}
              <div className="text-center">
                <div className="text-white/90 font-medium text-sm">{step.label}</div>
                <div className={`text-xs mt-1.5 ${
                  index < currentStep
                    ? "text-green-400"
                    : index === currentStep
                    ? "text-blue-400"
                    : "text-gray-500"
                }`}>
                  {index < currentStep
                    ? "✓ Done"
                    : index === currentStep
                    ? "⚡ Active"
                    : "⏳ Pending"}
                </div>
              </div>
              
              {/* Connection Arrow */}
              {index < automationSteps.length - 1 && (
                <div className="absolute top-4 left-full w-6 flex justify-center">
                  <ArrowRight className={`w-3 h-3 ${
                    index < currentStep ? "text-green-400" : "text-gray-600"
                  }`} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AutomationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: "linear-gradient(180deg,#0c0c11 64%,#231b3d 73%,#4e3391 85%,#5b6cde 94%,#96a3ff)"
    }}>
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[70vh] max-w-7xl mx-auto relative items-center">
          {/* Divider between columns */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-500/50 to-transparent transform -translate-x-1/2 hidden lg:block"></div>

          {/* Left Column - Email Builder */}
          <motion.div
            className="relative flex flex-col justify-center pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Top notification */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
                <Mail className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/80 text-sm">
                Email Marketing Made Simple
                <span className="text-white/50 ml-2">New</span>
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-lg lg:text-xl font-medium text-white/90 leading-tight pb-3 border-b border-gray-700/30 mb-4">
                Design beautiful emails,
              </h1>
              <h2 className="text-lg lg:text-xl font-medium text-white/60 leading-tight">
                with our drag-and-drop builder
              </h2>
              {/* Divider line that extends to center border */}
              <div className="w-full h-px bg-gray-600 mt-6 mr-[-2rem]"></div>
            </motion.div>

            {/* Email Builder Preview */}
            <motion.div
              className="relative -mr-6 -mt-4"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <EmailBuilder />
              {/* Overlay to make it look like a preview */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </motion.div>
          </motion.div>

          {/* Right Column - Automation Content */}
          <motion.div
            className="relative flex flex-col justify-center pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Automation headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg lg:text-xl font-medium text-white/90 leading-tight pb-3 border-b border-gray-700/30 mb-2">
                Automate processes,
              </h3>
              <h4 className="text-lg lg:text-xl font-medium text-white/60 leading-tight">
                to reduce the workload for your teams
              </h4>
            </motion.div>

            {/* Automation Flow */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <AutomationFlow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

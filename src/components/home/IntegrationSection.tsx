"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Database,
  Cloud,
  Globe,
  Smartphone,
  Monitor,
  Wifi,
  CheckCircle,
  ArrowRight,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Activity,
  Shield,
  Link2,
} from "lucide-react";

// Integration Dashboard Component
function IntegrationDashboard() {
  const [connectedServices, setConnectedServices] = useState([
    { name: "Salesforce", status: "connected", icon: "💼", color: "blue" },
    { name: "HubSpot", status: "connected", icon: "🧡", color: "orange" },
    { name: "Slack", status: "connected", icon: "💬", color: "purple" },
    { name: "Zapier", status: "syncing", icon: "⚡", color: "yellow" },
    { name: "Google Analytics", status: "connected", icon: "📊", color: "green" },
    { name: "Mailchimp", status: "error", icon: "📧", color: "red" },
  ]);

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full h-[500px] relative">
      {/* Main container with integration dashboard */}
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
        {/* Header */}
        <div className="p-4 border-b border-gray-700/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white/90 font-medium text-sm">Integration Hub</h3>
                <p className="text-gray-400 text-xs">6 connected services</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-xs">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700/20">
          {["overview", "settings", "logs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm capitalize transition-colors ${
                activeTab === tab
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-white/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-4 h-full overflow-y-auto">
          {activeTab === "overview" && (
            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-800/30 rounded-lg p-3">
                  <div className="text-green-400 font-semibold text-lg">98.5%</div>
                  <div className="text-gray-400 text-xs">Uptime</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-3">
                  <div className="text-blue-400 font-semibold text-lg">2.3k</div>
                  <div className="text-gray-400 text-xs">API Calls</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-3">
                  <div className="text-purple-400 font-semibold text-lg">45ms</div>
                  <div className="text-gray-400 text-xs">Avg Response</div>
                </div>
              </div>

              {/* Connected Services */}
              <div className="space-y-2">
                {connectedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/20 rounded-lg hover:bg-gray-800/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{service.icon}</span>
                      <div>
                        <div className="text-white/90 text-sm font-medium">
                          {service.name}
                        </div>
                        <div className="text-gray-400 text-xs">
                          Last sync: 2 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          service.status === "connected"
                            ? "bg-green-500/20 text-green-400"
                            : service.status === "syncing"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {service.status}
                      </span>
                      <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white/80" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      </div>
    </div>
  );
}

// Real-time Data Flow Component
function DataFlowMonitor() {
  const [dataPoints, setDataPoints] = useState([
    { source: "Website", target: "CRM", status: "active", volume: "2.3k/hr" },
    { source: "Email", target: "Analytics", status: "active", volume: "1.8k/hr" },
    { source: "Social", target: "Dashboard", status: "processing", volume: "956/hr" },
    { source: "API", target: "Database", status: "active", volume: "4.2k/hr" },
  ]);

  const [currentFlow, setCurrentFlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlow((prev) => (prev + 1) % dataPoints.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [dataPoints.length]);

  return (
    <div className="space-y-8">
      {/* Real-time Monitor Header */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/40 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-white/95 font-medium text-base">Real-time Data Flow</h4>
              <p className="text-white/60 text-xs">Live monitoring across all channels</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-green-400 text-xs font-medium">Streaming</span>
          </div>
        </div>
        
        {/* Live Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-blue-400 font-semibold text-sm">9.2k</div>
            <div className="text-gray-400 text-xs">Records/hr</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 font-semibold text-sm">99.8%</div>
            <div className="text-gray-400 text-xs">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-semibold text-sm">12ms</div>
            <div className="text-gray-400 text-xs">Latency</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-semibold text-sm">6</div>
            <div className="text-gray-400 text-xs">Active Flows</div>
          </div>
        </div>
      </div>

      {/* Data Flow Visualization */}
      <div className="bg-gray-800/20 border border-gray-700/30 rounded-xl p-6">
        <div className="space-y-4">
          {dataPoints.map((flow, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                {/* Source */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    index === currentFlow ? "bg-blue-500" : "bg-gray-600"
                  }`}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{flow.source}</span>
                </div>

                {/* Flow Animation */}
                <div className="flex-1 relative">
                  <div className="h-px bg-gray-600 w-full"></div>
                  {index === currentFlow && (
                    <motion.div
                      className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2"
                      animate={{ x: [0, 100, 200] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Target */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    index === currentFlow ? "bg-green-500" : "bg-gray-600"
                  }`}>
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{flow.target}</span>
                </div>
              </div>

              {/* Status and Volume */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-white/90 text-sm font-medium">{flow.volume}</div>
                  <div className={`text-xs ${
                    flow.status === "active" ? "text-green-400" : "text-yellow-400"
                  }`}>
                    {flow.status}
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  flow.status === "active" ? "bg-green-400" : "bg-yellow-400"
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IntegrationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgb(150, 163, 255) 0%, #5b6cde 12%, #4e3391 25%, #231b3d 40%, #0c0c11 60%)'
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

          {/* Left Column - Data Flow Content */}
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
              <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                <Activity className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/80 text-sm">
                Real-time Streaming
                <span className="text-white/50 ml-2">Live Data</span>
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
                Real-time data sync,
              </h1>
              <h2 className="text-lg lg:text-xl font-medium text-white/60 leading-tight">
                across all your business systems
              </h2>
              {/* Divider line that extends to center border */}
              <div className="w-full h-px bg-gray-600 mt-6 mr-[-2rem]"></div>
            </motion.div>

            {/* Data Flow Monitor */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <DataFlowMonitor />
            </motion.div>
          </motion.div>

          {/* Right Column - Integration Dashboard */}
          <motion.div
            className="relative flex flex-col justify-center pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Integration Dashboard headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg lg:text-xl font-medium text-white/90 leading-tight pb-3 border-b border-gray-700/30 mb-2">
                Connect all your tools,
              </h3>
              <h4 className="text-lg lg:text-xl font-medium text-white/60 leading-tight">
                in one unified platform
              </h4>
            </motion.div>

            {/* Integration Dashboard Preview */}
            <motion.div
              className="relative -ml-6 -mt-4"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <IntegrationDashboard />
              {/* Overlay to make it look like a preview */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  ArrowUp,
  ArrowDown,
  Filter,
  Search,
  MoreHorizontal,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Settings,
  Bell,
  User,
  Building,
  MapPin,
  Globe,
  LucideIcon,
  Home,
  Briefcase,
  FileText,
  CreditCard,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";

// Types
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
  trend: 'up' | 'down';
}

// Dashboard Stats Cards
function StatsCard({ title, value, change, icon: Icon, color, trend }: StatsCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className={`flex items-center gap-1 text-sm ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>{change}</span>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </motion.div>
  );
}

// Dashboard Sidebar Component
function DashboardSidebar() {
  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Leads", count: 234 },
    { icon: Target, label: "Deals", count: 56 },
    { icon: Mail, label: "Campaigns", count: 12 },
    { icon: BarChart3, label: "Analytics" },
    { icon: Calendar, label: "Tasks", count: 8 },
    { icon: FileText, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Leadflow</h3>
            <p className="text-xs text-gray-500">CRM Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.label}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                item.active 
                  ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.count && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.active 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.count}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">JD</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">Sales Manager</div>
          </div>
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

// Dashboard Top Navigation
function DashboardTopNav() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard Overview</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Last updated:</span>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Recent Activity Component
function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "lead",
      title: "New lead from website",
      description: "John Smith - Product Demo Request",
      time: "2 min ago",
      icon: User,
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "deal",
      title: "Deal closed",
      description: "TechCorp - $25,000 annual subscription",
      time: "15 min ago",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      id: 3,
      type: "meeting",
      title: "Meeting scheduled",
      description: "Demo call with StartupXYZ",
      time: "1 hour ago",
      icon: Calendar,
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "email",
      title: "Email campaign sent",
      description: "Monthly newsletter - 2,450 recipients",
      time: "2 hours ago",
      icon: Mail,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className={`flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors ${
              index < activities.length - 1 ? 'border-b border-gray-100 pb-4' : ''
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
              <activity.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{activity.title}</div>
              <div className="text-sm text-gray-600">{activity.description}</div>
              <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Top Performing Campaigns
function TopCampaigns() {
  const campaigns = [
    {
      name: "Q1 Product Launch",
      type: "Email",
      leads: 1250,
      conversion: 23.5,
      revenue: "$45,000",
      status: "active",
    },
    {
      name: "Spring Sale 2024",
      type: "Social Media",
      leads: 890,
      conversion: 18.2,
      revenue: "$32,000",
      status: "completed",
    },
    {
      name: "Webinar Series",
      type: "Content",
      leads: 650,
      conversion: 31.8,
      revenue: "$28,000",
      status: "active",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Top Performing Campaigns</h3>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Campaign</th>
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Type</th>
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Leads</th>
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Conversion</th>
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Revenue</th>
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 text-sm font-medium text-gray-900">{campaign.name}</td>
                <td className="py-4 text-sm text-gray-600">{campaign.type}</td>
                <td className="py-4 text-sm text-gray-900">{campaign.leads.toLocaleString()}</td>
                <td className="py-4 text-sm text-green-600 font-medium">{campaign.conversion}%</td>
                <td className="py-4 text-sm font-medium text-gray-900">{campaign.revenue}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Sales Pipeline Chart
function SalesPipeline() {
  const pipelineData = [
    { stage: "Leads", count: 1250, color: "bg-blue-500" },
    { stage: "Qualified", count: 890, color: "bg-indigo-500" },
    { stage: "Proposal", count: 450, color: "bg-purple-500" },
    { stage: "Negotiation", count: 180, color: "bg-pink-500" },
    { stage: "Closed", count: 95, color: "bg-green-500" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Sales Pipeline</h3>
        <div className="flex items-center gap-2">
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Quarter</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {pipelineData.map((stage, index) => (
          <motion.div
            key={stage.stage}
            className={`flex items-center gap-4 py-3 ${
              index < pipelineData.length - 1 ? 'border-b border-gray-100 pb-4' : ''
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-20 text-sm text-gray-600">{stage.stage}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium text-gray-900">{stage.count}</div>
                <div className="text-xs text-gray-500">
                  {index === 0 ? '100%' : `${Math.round((stage.count / pipelineData[0].count) * 100)}%`}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${stage.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(stage.count / pipelineData[0].count) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Team Performance
function TeamPerformance() {
  const teamMembers = [
    { name: "Sarah Chen", role: "Sales Manager", deals: 12, revenue: "$125K", avatar: "SC" },
    { name: "Mike Johnson", role: "Account Executive", deals: 8, revenue: "$95K", avatar: "MJ" },
    { name: "Emily Davis", role: "BDR", deals: 15, revenue: "$78K", avatar: "ED" },
    { name: "Alex Kim", role: "Sales Rep", deals: 6, revenue: "$65K", avatar: "AK" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View Leaderboard
        </button>
      </div>
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors ${
              index < teamMembers.length - 1 ? 'border-b border-gray-100 pb-4' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">{member.avatar}</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{member.name}</div>
              <div className="text-sm text-gray-600">{member.role}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{member.deals} deals</div>
              <div className="text-sm text-green-600">{member.revenue}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSection() {
  const [animatedStats, setAnimatedStats] = useState({
    leads: 0,
    deals: 0,
    revenue: 0,
    conversion: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        leads: 2450,
        deals: 156,
        revenue: 485000,
        conversion: 23.5,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #f6f6f8 43%, #f6f6f8 87%, #d7e2fa 94%, #96a3ff)'
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Complete Business Intelligence</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Scale business without
              <br />
              scaling your headcount
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get complete visibility into your sales pipeline, team performance, and business growth 
              with our comprehensive dashboard that puts all your critical metrics in one place.
            </p>
          </motion.div>

          {/* Dashboard Container with Sidebar */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex h-[800px]">
              {/* Sidebar */}
              <DashboardSidebar />
              
              {/* Main Dashboard Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Navigation */}
                <DashboardTopNav />
                
                {/* Dashboard Content */}
                <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                  {/* Stats Overview */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <StatsCard
                      title="Total Leads"
                      value={animatedStats.leads.toLocaleString()}
                      change="+12%"
                      icon={Users}
                      color="bg-blue-500"
                      trend="up"
                    />
                    <StatsCard
                      title="Deals Closed"
                      value={animatedStats.deals.toLocaleString()}
                      change="+8%"
                      icon={Target}
                      color="bg-green-500"
                      trend="up"
                    />
                    <StatsCard
                      title="Revenue Generated"
                      value={`$${(animatedStats.revenue / 1000).toFixed(0)}K`}
                      change="+15%"
                      icon={DollarSign}
                      color="bg-purple-500"
                      trend="up"
                    />
                    <StatsCard
                      title="Conversion Rate"
                      value={`${animatedStats.conversion}%`}
                      change="+3%"
                      icon={TrendingUp}
                      color="bg-orange-500"
                      trend="up"
                    />
                  </motion.div>

                  {/* Dashboard Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Charts */}
                    <div className="lg:col-span-2 space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <TopCampaigns />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <SalesPipeline />
                      </motion.div>
                    </div>

                    {/* Right Column - Activity & Team */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <RecentActivity />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <TeamPerformance />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Section */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to scale your business intelligently?
              </h3>
              <p className="text-gray-600 mb-8">
                Join thousands of businesses already using Leadflow to optimize their sales process 
                and drive sustainable growth without increasing overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

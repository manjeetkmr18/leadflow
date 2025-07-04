'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart3, Users, DollarSign, TrendingUp, Plus, Search, Filter } from 'lucide-react'

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Dashboard Header */}
      <header className="relative z-10 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-black dark:text-white">CRMFlow Dashboard</h1>
              <p className="text-black/60 dark:text-white/60">Welcome back! Here's what's happening with your business.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                Back to Home
              </Link>
              <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-black/80 dark:hover:bg-white/80 transition-all border border-black dark:border-white shadow-md">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Customers */}
          <div className="relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/60 dark:text-white/60 text-sm font-medium">Total Customers</p>
                  <p className="text-2xl font-bold text-black dark:text-white">2,847</p>
                  <p className="text-green-600 dark:text-green-400 text-sm">+12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 dark:bg-blue-400/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Revenue */}
          <div className="relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/60 dark:text-white/60 text-sm font-medium">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-black dark:text-white">$54,280</p>
                  <p className="text-green-600 dark:text-green-400 text-sm">+8% from last month</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 dark:bg-green-400/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/60 dark:text-white/60 text-sm font-medium">Conversion Rate</p>
                  <p className="text-2xl font-bold text-black dark:text-white">24.8%</p>
                  <p className="text-green-600 dark:text-green-400 text-sm">+3.2% from last month</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 dark:bg-purple-400/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Active Deals */}
          <div className="relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/60 dark:text-white/60 text-sm font-medium">Active Deals</p>
                  <p className="text-2xl font-bold text-black dark:text-white">186</p>
                  <p className="text-orange-600 dark:text-orange-400 text-sm">+5 new this week</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/20 dark:bg-orange-400/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Customers Section */}
        <div className="relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5"></div>
          <div className="relative z-10 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-black dark:text-white">Recent Customers</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 dark:text-white/40 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search customers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50"
                  />
                </div>
                <button className="p-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all">
                  <Filter className="w-4 h-4 text-black dark:text-white" />
                </button>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-black/80 dark:hover:bg-white/80 transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Customer
                </button>
              </div>
            </div>

            {/* Customer Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10">
                    <th className="text-left py-3 px-4 text-black/70 dark:text-white/70 font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-black/70 dark:text-white/70 font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-black/70 dark:text-white/70 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-black/70 dark:text-white/70 font-medium">Last Contact</th>
                    <th className="text-left py-3 px-4 text-black/70 dark:text-white/70 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Sarah Johnson', email: 'sarah@company.com', status: 'Active', lastContact: '2 hours ago', value: '$2,450' },
                    { name: 'Mike Chen', email: 'mike@startup.io', status: 'Lead', lastContact: '1 day ago', value: '$890' },
                    { name: 'Emily Davis', email: 'emily@business.com', status: 'Active', lastContact: '3 days ago', value: '$5,200' },
                    { name: 'John Smith', email: 'john@enterprise.com', status: 'Prospect', lastContact: '1 week ago', value: '$1,200' },
                    { name: 'Lisa Wang', email: 'lisa@techcorp.com', status: 'Active', lastContact: '2 days ago', value: '$3,100' },
                  ].map((customer, index) => (
                    <tr key={index} className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-black dark:text-white font-medium">{customer.name}</td>
                      <td className="py-3 px-4 text-black/70 dark:text-white/70">{customer.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          customer.status === 'Active' 
                            ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                            : customer.status === 'Lead'
                            ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                            : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-black/70 dark:text-white/70">{customer.lastContact}</td>
                      <td className="py-3 px-4 text-black dark:text-white font-medium">{customer.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

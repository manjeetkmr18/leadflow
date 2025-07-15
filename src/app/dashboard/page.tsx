'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart3, Users, DollarSign, TrendingUp, Plus, Search, Filter } from 'lucide-react'
import DashboardHome from '@/components/dashboard/DashboardHome';
import ErrorBoundary from '@/components/ErrorBoundary'; // Import ErrorBoundary

export default function DashboardPage() {
  return (
    <ErrorBoundary> {/* Wrap DashboardHome with ErrorBoundary */}
      <DashboardHome />
    </ErrorBoundary>
  );
}

'use client';

import { useState, useEffect } from 'react'; // Import useState and useEffect
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

// Define types for the data
interface SaleData {
  name: string;
  revenue: number;
}

interface RecentSale {
  name: string;
  email: string;
  amount: string;
}

// ...existing salesData and recentSales (these can be removed or kept as initial data if not fetching)

export default function DashboardHome() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  // Use defined types for state
  const [salesData, setSalesData] = useState<SaleData[]>([]); // State for sales data
  const [recentSales, setRecentSales] = useState<RecentSale[]>([]); // State for recent sales

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate a network request delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Replace with actual data fetching logic later
      const fetchedSalesData: SaleData[] = [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 5000 },
        { name: 'Apr', revenue: 4500 },
        { name: 'May', revenue: 6000 },
        { name: 'Jun', revenue: 5500 },
      ];

      const fetchedRecentSales: RecentSale[] = [
        {
          name: 'Olivia Martin',
          email: 'olivia.martin@email.com',
          amount: '+$1,999.00',
        },
        {
          name: 'Jackson Lee',
          email: 'jackson.lee@email.com',
          amount: '+$39.00',
        },
        {
          name: 'Isabella Nguyen',
          email: 'isabella.nguyen@email.com',
          amount: '+$299.00',
        },
        { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
        { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
      ];

      setSalesData(fetchedSalesData);
      setRecentSales(fetchedRecentSales);
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="space-y-8">
      {isLoading ? (
        // Loading state UI
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Loading...</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-1"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Loaded state UI
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {isLoading ? (
        // Loading state for charts and tables
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Loading Overview...</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-80 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Loading Recent Sales...</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-60 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Loaded state for charts and tables
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale) => (
                    <TableRow key={sale.email}>
                      <TableCell>
                        <div className="font-medium">{sale.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {sale.email}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{sale.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

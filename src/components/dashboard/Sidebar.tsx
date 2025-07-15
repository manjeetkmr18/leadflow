'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Import Image component
import {
  LayoutGrid,
  Users,
  Briefcase,
  FileText,
  Settings,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { href: '/dashboard', icon: LayoutGrid, label: 'Dashboard' },
  { href: '/dashboard/contacts', icon: Users, label: 'Contacts' },
  { href: '/dashboard/deals', icon: Briefcase, label: 'Deals' },
  { href: '/dashboard/reports', icon: FileText, label: 'Reports' },
];

const settingsNav = [
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`hidden border-r bg-background sm:flex flex-col transition-all duration-300 ${isCollapsed ? 'w-14' : 'w-60'}`}
    >
      <nav className={`flex flex-col gap-4 px-2 py-5 flex-grow ${isCollapsed ? 'items-center' : 'items-start'}`}>
        <TooltipProvider>
          <div className={`flex items-center w-full p-4 ${isCollapsed ? 'justify-center' : 'px-2 justify-between'}`}>
            {isCollapsed ? (
              // Display logo when collapsed
              <Link href="#">
                <Image
                  src="/logo-small.png" 
                  alt="LeadFlow Logo"
                  width={32} 
                  height={32} 
                  className="transition-all duration-300"
                />
              </Link>
            ) : (
              // Display existing link with icon and text when expanded
              <Link
                href="/dashboard"
                className={`group flex shrink-0 items-center justify-center gap-2 font-semibold text-primary-foreground ${isCollapsed ? '' : 'mr-4'}`}
              >
                <Image
                  src="/logo-white.png"
                  alt="LeadFlow Logo"
                  width={200}
                  height={60}
                  className="transition-all duration-300"
                  priority
                />
              </Link>
            )}
          </div>

          {navItems.map((item) => (
            <div key={item.label} className="w-full">
              {isCollapsed ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:text-foreground ${pathname === item.href ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-auto w-full">
            {settingsNav.map((item) => (
              <div key={item.label} className="w-full">
                {isCollapsed ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="sr-only">{item.label}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                  </Tooltip>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:text-foreground ${pathname === item.href ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Sidebar;

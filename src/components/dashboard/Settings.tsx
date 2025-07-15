'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

const settingsNavItems = [
	{ href: '/dashboard/settings', label: 'Profile' }, // Link to the default settings page (Profile)
	{ href: '/dashboard/settings/roles', label: 'Roles' },
	{ href: '/dashboard/settings/departments', label: 'Departments' },
	{ href: '/dashboard/settings/permissions', label: 'Permissions' },
	{ href: '/dashboard/settings/2fa', label: 'Two-Factor Authentication' },
];

interface SettingsLayoutProps {
	children: React.ReactNode; // Accept children prop for nested routes
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col md:flex-row gap-6 p-4">
			{/* Settings Sidebar Navigation */}
			<Card className="w-full md:w-60 flex-shrink-0">
				<CardContent className="p-4">
					<nav className="flex flex-col space-y-1">
						{settingsNavItems.map((item) => (
							<Link key={item.href} href={item.href}>
								<div
									className={`px-3 py-2 rounded-md text-sm font-medium ${
										pathname === item.href ||
										(pathname === '/dashboard/settings' && item.href === '/dashboard/settings') // Highlight 'Profile' for /dashboard/settings
											? 'bg-muted text-foreground'
											: 'text-muted-foreground hover:text-foreground'
									}`}
								>
									{item.label}
								</div>
							</Link>
						))}
					</nav>
				</CardContent>
			</Card>

			{/* Settings Content Area - Renders nested route content */}
			<div className="flex-grow">{children} {/* Render the content of the active nested route */}</div>
		</div>
	);
};

export default SettingsLayout;


'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const settingsSections = [
  { href: '/dashboard/settings/profile', label: 'User Profile', description: 'Manage your profile information.' },
  { href: '/dashboard/settings/roles', label: 'Roles', description: 'Manage user roles and permissions.' },
  { href: '/dashboard/settings/departments', label: 'Departments', description: 'Manage departments within your organization.' },
  { href: '/dashboard/settings/permissions', label: 'Permissions', description: 'Configure user permissions.' },
  { href: '/dashboard/settings/2fa', label: 'Two-Factor Authentication', description: 'Set up two-factor authentication for added security.' },
];

const SettingsOverview = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      <p className="text-muted-foreground">Manage your account and organization settings.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {settingsSections.map((section) => (
          <Card key={section.href}>
            <CardHeader>
              <CardTitle>{section.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <Link href={section.href} className="text-primary hover:underline">
                Go to {section.label}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SettingsOverview;

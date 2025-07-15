import SettingsLayout from '@/components/dashboard/Settings'; // Corrected import path
import React from 'react';

export default function SettingsLayoutWrapper({
  children,
}: { children: React.ReactNode }) {
  return (
    <SettingsLayout>{children}</SettingsLayout>
  );
}

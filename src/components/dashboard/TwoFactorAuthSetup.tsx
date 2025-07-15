'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TwoFactorAuthSetup = () => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the interface for setting up two-factor authentication. Add options for enabling/disabling 2FA here.</p>
          {/* Add 2FA setup features here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoFactorAuthSetup;

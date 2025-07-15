
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Link href="/dashboard">
        <div className="hover:text-foreground">Dashboard</div>
      </Link>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;
        const displaySegment = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Capitalize and replace hyphens

        // Skip the initial 'dashboard' segment as it's covered by the home link
        if (segment === 'dashboard') return null;

        return (
          <React.Fragment key={href}>
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <div className="text-foreground">{displaySegment}</div>
            ) : (
              <Link href={href}>
                <div className="hover:text-foreground">{displaySegment}</div>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

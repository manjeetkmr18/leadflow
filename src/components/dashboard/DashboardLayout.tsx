"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb"; // Import Breadcrumb component
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-muted/40 relative">
      {/* Pass state to Sidebar */}
      <Sidebar isCollapsed={isCollapsed} />

      {/* Toggle button positioned absolutely at the top border */}
      <div
        className={`absolute top-0 z-20 transition-all duration-300 ${
          isCollapsed ? "left-14" : "left-60"
        } -translate-x-1/2`} // Changed top-5 to top-0
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full bg-background shadow-lg"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronLeft className="h-5 w-5" />
                )}
                <span className="sr-only">
                  {isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-grow sm:gap-4 sm:py-4">
        <Header />
        <div className="px-4 sm:px-6">
          {" "}
          {/* Add a container for breadcrumb with padding */}
          <Breadcrumb /> {/* Add Breadcrumb component here */}
        </div>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}

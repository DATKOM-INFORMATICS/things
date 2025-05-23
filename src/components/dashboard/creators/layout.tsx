"use client";

import CreatorNavbar from "@/components/dashboard/creators/navbar";
import CreatorSidebar from "@/components/dashboard/creators/sidebar";
import { ReactNode } from "react";

export default function CreatorDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <CreatorSidebar />
      <div className="flex-1 flex flex-col">
        <CreatorNavbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

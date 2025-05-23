"use client";

import CreatorDashboardLayout from "@/components/dashboard/creators/layout";
import RecentFeedbacks from "./sections/board/feedback";
import MainStats from "./sections/board/main";
import RoadmapPreview from "./sections/board/road";
import ProductStats from "./sections/board/stats";
import TopProducts from "./sections/board/topproducts";
import WelcomeBanner from "./sections/board/welcome";


export default function CreatorDashboardPage() {
  return (
    <CreatorDashboardLayout>

      {/* <div className="text-2xl font-bold">Bienvenue sur ton dashboard Creator 👋</div> */}
      
      <div className="space-y-6">
        <WelcomeBanner />
        <ProductStats />
        <MainStats />
        {/* <RoadmapPreview /> */}
        <RecentFeedbacks />
        <TopProducts />
      </div>
      
    </CreatorDashboardLayout>
  );
}

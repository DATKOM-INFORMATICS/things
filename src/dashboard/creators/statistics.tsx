import CreatorDashboardLayout from "@/components/dashboard/creators/layout";
import StatsGrid from "./sections/stats/grid";


export default function CreatorDashboardStatisticsPage() {
  return (
    <CreatorDashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Mon tableau de bord</h1>
      <StatsGrid />
    </CreatorDashboardLayout>
  );
}

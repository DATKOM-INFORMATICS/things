"use client";

type StatCardProps = {
  label: string;
  value: number;
  icon?: React.ReactNode;
  color?: string;
};

export default function StatCard({ label, value, icon, color = "bg-indigo-600" }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl shadow bg-white">
      <div className={`p-3 rounded-full text-white ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
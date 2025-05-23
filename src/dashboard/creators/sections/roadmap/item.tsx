"use client";

type RoadmapItemProps = {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
};

export default function RoadmapItem({ title, description, status }: RoadmapItemProps) {
  const statusColors = {
    "todo": "border-gray-300 bg-gray-100",
    "in-progress": "border-yellow-500 bg-yellow-50",
    "done": "border-green-500 bg-green-50"
  };

  return (
    <div className={`p-4 rounded-xl border ${statusColors[status]} space-y-2`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <span className={`inline-block text-xs font-medium rounded px-2 py-1 ${status === "todo" ? "bg-gray-200 text-gray-600" : status === "in-progress" ? "bg-yellow-300 text-yellow-800" : "bg-green-300 text-green-800"}`}>
        {status === "todo" ? "À faire" : status === "in-progress" ? "En cours" : "Terminé"}
      </span>
    </div>
  );
}

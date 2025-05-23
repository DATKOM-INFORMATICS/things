"use client"

export function ProductCard({ title }: { title: string }) {
  return (
    <div className="bg-white border rounded-xl p-4 w-60 h-40 flex flex-col justify-center items-center shadow hover:scale-105 transition cursor-pointer">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  )
}

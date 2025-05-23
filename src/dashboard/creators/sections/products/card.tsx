"use client";

import Link from "next/link";

type Product = {
  id: string;
  name: string;
  tagline: string;
  status: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/creator/products/${product.id}`}>
      <div className="p-4 border rounded-xl shadow hover:shadow-lg transition flex flex-col gap-2">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.tagline}</p>
        <span className={`text-xs px-2 py-1 rounded self-start ${product.status === "Publié" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}>
          {product.status}
        </span>
      </div>
    </Link>
  );
}

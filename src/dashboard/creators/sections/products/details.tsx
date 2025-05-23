"use client";

type ProductDetailProps = {
  product: {
    name: string;
    tagline: string;
    description: string;
    status: string;
  };
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.tagline}</p>
      <span className={`text-xs px-2 py-1 rounded ${product.status === "Publié" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}>
        {product.status}
      </span>
      <div>
        <h2 className="font-bold mt-4">Description</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>
    </div>
  );
}

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="rounded-2xl p-4 bg-white shadow-lg hover:scale-105 transition duration-300 w-64">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-3">{product.description}</p>
      <span className="text-sm text-indigo-600 font-medium">{product.company}</span>
    </div>
  );
}

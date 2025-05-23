export default function SpotlightProduct({ product }: { product: any }) {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl my-8">
      <h2 className="text-3xl font-extrabold mb-2">{product.name}</h2>
      <p className="text-white/90 mb-4">{product.description}</p>
      <span className="font-semibold">Produit phare de {product.company}</span>
    </div>
  );
}

import { ProductCard } from "./productcard";


export function ProductGrid({ products }: { products: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-24">
      {products.map((product) => (
        <ProductCard key={product} title={product} />
      ))}
    </div>
  )
}

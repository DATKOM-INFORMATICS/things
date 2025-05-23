import ProductCard from "./productcard";
import SpotlightProduct from "./spotlight";



export default function ProductList({ view }: any) {
  const mockProducts = [
    { name: "Produit Alpha", description: "Une idée brillante", company: "Oiko" },
    { name: "Produit Beta", description: "Révolutionne le marché", company: "Nexo" },
    { name: "Produit Gamma", description: "Simple et efficace", company: "Oiko" },
    { name: "Produit Delta", description: "Innovant et utile", company: "Nexo" },
    { name: "Produit Epsilon", description: "Design minimaliste", company: "Oiko" },
    { name: "Produit Zeta", description: "Solution clé en main", company: "Nexo" },
  ];

  return (
    <div className="px-4 mt-28">
      {view === "grid" ? (
        <div className="flex flex-wrap justify-center gap-6">
          {mockProducts.map((product, index) =>
            index === 2 ? (
              <SpotlightProduct key={index} product={product} />
            ) : (
              <ProductCard key={index} product={product} />
            )
          )}
        </div>
      ) : (
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {mockProducts.map((product, index) =>
            index === 2 ? (
              <div key={index} className="flex-none w-[400px]">
                <SpotlightProduct product={product} />
              </div>
            ) : (
              <div key={index} className="flex-none w-[260px]">
                <ProductCard product={product} />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

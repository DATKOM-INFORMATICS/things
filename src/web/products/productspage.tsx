'use client';
import React, { useState } from 'react';
import Header from '@/components/web/header';
import { view } from 'framer-motion/client';
import { FilterBar } from './sections/filterbar';
import { ProductGrid } from './sections/productsgrid';
import { ProductCarousel } from './sections/productscarousel';


export default function ProductsPage() {
  const [view, setView] = useState("grid")
  const [filters, setFilters] = useState({ type: "Tous", categorie: "Toutes" })
  const [page, setPage] = useState(1)

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value })
  }

  const products = Array.from({ length: 20 }, (_, i) => `Produit ${i + 1}`)

  return (
    <>
    <Header />
    <div className="relative">
      <FilterBar view={view} setView={setView} onFilterChange={handleFilterChange} page={page} setPage={setPage} />
      {view === "grid" ? (
        <ProductGrid products={products} />
      ) : (
        <ProductCarousel products={products} />
      )}
    </div>

    </>
  )
}

// const ProductsPage = () => {
//   const [view, setView] = useState("grid");

//   return (
//     <>
//         <Header />
//         <main className="pb-24">
//         <FilterBar view={view} setView={setView} />
//         <ProductList view={view} />
//         </main>
//     </>
    
//   );
// };

// export default ProductsPage;

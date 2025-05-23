'use client';
import React, { useState } from 'react';
import Header from '@/components/web/header';
import { view } from 'framer-motion/client';
import FilterBar from './sections/filterbar';
import ProductList from './sections/productslist';

const ProductsPage = () => {
  const [view, setView] = useState("grid");

  return (
    <>
        <Header />
        <main className="pb-24">
        <FilterBar view={view} setView={setView} />
        <ProductList view={view} />
        </main>
    </>
    
  );
};

export default ProductsPage;

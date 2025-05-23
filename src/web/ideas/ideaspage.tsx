'use client';
import React, { useState } from 'react';
import IdeasFilterBar from './sections/filterbar';
import IdeasView from './sections/ideasview';
import Header from '@/components/web/header';

const IdeasPage = () => {
  const [viewMode, setViewMode] = useState('range');

  return (
    <>
        <Header />
        <main className="pt-12 relative bg-white min-h-screen">
        <IdeasFilterBar viewMode={viewMode} onChangeView={setViewMode} />
        <IdeasView viewMode={viewMode} />
        </main>
    </>
    
  );
};

export default IdeasPage;

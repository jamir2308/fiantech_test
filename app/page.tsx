'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import FilterTabs from '@/components/FilterTabs';
import { mockProducts, getCategories } from '@/data/mockProducts';
import { ProductCategory } from '@/types/product';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Todos'>('Todos');
  const categories = useMemo(() => getCategories(), []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return mockProducts;
    }
    return mockProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Productos</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explora nuestra gama de productos financieros diseñados para tus necesidades.
      </p>
      <FilterTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
}
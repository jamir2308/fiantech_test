import React from 'react';
import Link from 'next/link';
import { getProductById, mockProducts } from '@/data/mockProducts';
import { notFound } from 'next/navigation';
import Button from '@/components/Button';
import ChartPlaceholder from '@/components/ChartPlaceholder';
import Image from 'next/image';

type ParamPromise = Promise<{ id: string }>;

export function generateStaticParams() {
  return mockProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: {params: ParamPromise}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return { title: 'Producto no encontrado' };
  }
  return {
    title: `${product.name} - FinanTech`,
    description: product.description,
  };
}


export default async function ProductDetailPage({
  params,
}: {
  params: ParamPromise;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
       <div className="mb-6">
         <Link href="/" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Volver al catálogo
        </Link>
       </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
           <div>
             {product.imageUrl && (
              <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
                 <Image src={product.imageUrl} alt={`Imagen de ${product.name}`} width={500} height={500} className="w-full h-auto object-cover" />
               </div>
             )}
             <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
               {product.category} - {product.type}
             </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>

            <div className="space-y-2 text-sm mb-6">
               {product.interestRate !== undefined && (
                 <div className="flex justify-between border-b pb-1">
                   <span className="font-medium text-gray-700">Tasa de Interés:</span>
                   <span className="text-gray-600">{product.interestRate}%</span>
                 </div>
               )}
               {product.riskLevel && (
                 <div className="flex justify-between border-b pb-1">
                   <span className="font-medium text-gray-700">Nivel de Riesgo:</span>
                   <span className={`font-medium ${
                       product.riskLevel === 'Bajo' ? 'text-green-600' :
                       product.riskLevel === 'Medio' ? 'text-yellow-600' : 'text-red-600'
                   }`}>
                    {product.riskLevel}
                   </span>
                 </div>
               )}
            </div>
           </div>

           <div>
             <h2 className="text-xl font-semibold text-gray-800 mb-3">Beneficios Clave</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <div className="mb-6">
              <ChartPlaceholder product={product} />
              </div>

              <Button size="large" className="w-full">
                Solicitar Producto
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
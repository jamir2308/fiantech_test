import React from "react";
import Link from "next/link";
import Button from "./Button";
import { ProductCardProps } from "@/types/componetsProps";
import Image from "next/image";

const getCategoryChipClasses = (category: string): string => {
  switch (category.toLowerCase()) {
    case "cuenta":
      return "bg-green-100 text-green-800";
    case "tarjeta":
      return "bg-violet-100 text-purple-800";
    case "fondo":
      return "bg-amber-100 text-yellow-800";
    case "seguro":
      return "bg-teal-100 text-teal-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const chipClasses = getCategoryChipClasses(product.category);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full bg-white transition-shadow duration-200 hover:shadow-md">
      {product.imageUrl && (
        <div className="h-40 bg-gray-100 flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={`Imagen de ${product.name}`}
            className="w-full h-full object-cover"
            width={400}
            height={400}
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <span
          className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded mb-2 w-fit ${chipClasses}`}
        >
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{product.type}</p>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            {product.interestRate !== undefined && (
              <span>Tasa: {product.interestRate}%</span>
            )}
            {product.riskLevel && (
              <span className="font-medium text-gray-500">
                Riesgo: {product.riskLevel}
              </span>
            )}
          </div>

          <Link
            href={`/product/${product.id}`}
            className="block w-full"
            aria-label={`Ver detalles de ${product.name}`}
          >
            <Button variant="outline" size="small" className="w-full">
              Ver Detalles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
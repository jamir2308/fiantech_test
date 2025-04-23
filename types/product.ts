export type ProductCategory = 'Cuenta' | 'Tarjeta' | 'Fondo' | 'Seguro' | 'Otro';

export type RiskLevel = 'Bajo' | 'Medio' | 'Alto';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  type: string;
  description: string;
  interestRate?: number;
  riskLevel?: RiskLevel;
  benefits: string[];
  imageUrl?: string;
  performanceHistory?: { month: string; rate: number }[];
}
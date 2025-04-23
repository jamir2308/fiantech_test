import { Product, ProductCategory } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "cuenta-ahorro-1",
    name: "Cuenta de Ahorro Flexible",
    type: "Ahorro Digital",
    category: "Cuenta",
    interestRate: 1.5,
    description: "Una cuenta de ahorro simple y segura para tus metas.",
    benefits: [
      "Sin comisiones de mantenimiento",
      "Acceso digital 24/7",
      "Transferencias fáciles",
    ],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681627553506-51a9afddb15d?w=500&auto=format&fit=crop",
    performanceHistory: [
      { month: "Ene", rate: 1.2 },
      { month: "Feb", rate: 1.3 },
      { month: "Mar", rate: 1.4 },
      { month: "Abr", rate: 1.5 },
      { month: "May", rate: 1.5 },
      { month: "Jun", rate: 1.6 },
    ],
  },
  {
    id: "tarjeta-credito-gold",
    name: "Tarjetas Premium",
    type: "Crédito Gold",
    category: "Tarjeta",
    interestRate: 18.9,
    description:
      "Beneficios exclusivos y un límite de crédito adaptado a tu estilo de vida.",
    benefits: ["Programa de puntos", "Seguro de viajes", "Acceso a salas VIP"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1729036342631-918b39d98eb8?w=500&auto=format&fit=crop",
  },
  {
    id: "fondo-inversion-tech",
    name: "Fondo Tecnológico Global",
    type: "Inversión Variable",
    category: "Fondo",
    riskLevel: "Alto",
    description: "Invierte en las empresas tecnológicas líderes del mundo.",
    benefits: [
      "Potencial de alto rendimiento",
      "Diversificación sectorial",
      "Gestión profesional",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?w=900&auto=format&fit=crop",
    performanceHistory: [
      { month: "Ene", rate: -2.5 },
      { month: "Feb", rate: 3.1 },
      { month: "Mar", rate: 5.8 },
      { month: "Abr", rate: 4.2 },
      { month: "May", rate: 6.5 },
      { month: "Jun", rate: 7.0 },
    ],
  },
  {
    id: "seguro-vida-total",
    name: "Seguro de Vida Total",
    type: "Protección Familiar",
    category: "Seguro",
    description:
      "Protege el futuro de tus seres queridos ante cualquier eventualidad.",
    benefits: [
      "Cobertura completa",
      "Asistencia personalizada",
      "Flexibilidad en pagos",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1541089404510-5c9a779841fc?w=900&auto=format&fit=crop",
  },
  {
    id: "cuenta-corriente-pro",
    name: "Cuenta Corriente Pro",
    type: "Cuenta Empresarial",
    category: "Cuenta",
    description: "Gestión financiera eficiente para tu negocio.",
    benefits: [
      "Chequera incluida",
      "Acceso a línea de crédito",
      "Sin saldo mínimo requerido",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&auto=format&fit=crop",
  },
  {
    id: "tarjeta-debito-classic",
    name: "Tarjeta Débito Clásica",
    type: "Débito",
    category: "Tarjeta",
    description: "Tu dinero siempre disponible para compras y retiros.",
    benefits: [
      "Aceptación mundial",
      "Compras seguras online",
      "Control de gastos",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1678554832890-2ea5d37278af?w=900&auto=format&fit=crop",
  },
  {
    id: "fondo-renta-fija",
    name: "Fondo Renta Fija Sostenible",
    type: "Inversión Conservadora",
    category: "Fondo",
    riskLevel: "Bajo",
    interestRate: 3.2,
    description:
      "Invierte de forma segura y responsable en bonos de bajo riesgo.",
    benefits: [
      "Estabilidad de capital",
      "Impacto social positivo",
      "Baja volatilidad",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=600&auto=format&fit=crop",
    performanceHistory: [
      { month: "Ene", rate: 3.0 },
      { month: "Feb", rate: 3.1 },
      { month: "Mar", rate: 3.1 },
      { month: "Abr", rate: 3.2 },
      { month: "May", rate: 3.2 },
      { month: "Jun", rate: 3.3 },
    ],
  },
  {
    id: "seguro-hogar-plus",
    name: "Seguro Hogar Plus",
    type: "Protección Inmueble",
    category: "Seguro",
    description: "Cobertura integral para tu vivienda y tus bienes.",
    benefits: [
      "Protección contra robos e incendios",
      "Asistencia en el hogar",
      "Reparaciones urgentes",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop",
  },
];

export const getCategories = (): ProductCategory[] => {
  const categories = mockProducts.map((p) => p.category);
  const uniqueCategories = Array.from(new Set(categories));
  return uniqueCategories.filter((cat) => cat !== "Otro") as ProductCategory[];
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((p) => p.id === id);
};

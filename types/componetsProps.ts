import { Product, ProductCategory } from "./product";

// Component Button
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
  }
  
export interface StyledButtonTransientProps {
    $variant?: 'primary' | 'secondary' | 'outline';
    $size?: 'small' | 'medium' | 'large';
}


// component ChartPlaceholder
export interface ChartPlaceholderProps {
    product: Product;
}


// componets FilterTabs
export interface FilterTabsProps {
    categories: ProductCategory[];
    selectedCategory: ProductCategory | 'Todos';
    onSelectCategory: (category: ProductCategory | 'Todos') => void;
}

export interface TabButtonProps {
    $isActive: boolean;
}


// Compponent ProductCard
export interface ProductCardProps {
    product: Product;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export type Category = 
  | 'electronics' 
  | 'men-fashion' 
  | 'women-fashion' 
  | 'home-kitchen' 
  | 'beauty-personal-care' 
  | 'toys-games';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: Category;
  subcategory: string;
  variations?: ProductVariation[];
  specifications?: Record<string, string | string[]>;
  stock: number;
  freeShipping?: boolean;
  deliveryEstimate?: string;
  tags?: string[];
}

export interface ProductVariation {
  type: 'color' | 'size' | 'material' | 'storage' | 'other';
  name: string;
  options: {
    id: string;
    value: string;
    available: boolean;
    image?: string;
  }[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  variationSelections?: Record<string, string>;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}

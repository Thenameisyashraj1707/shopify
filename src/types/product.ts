
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  numReviews: number;
  specifications?: {
    [key: string]: string | string[] | number;
  };
  inStock: boolean;
  deliveryEstimate: string;
  deliveryCharge: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

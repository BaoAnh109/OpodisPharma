export interface Product {
  id: number;
  name: string;
  category: string;
  volume: string;
  image: string;
  gallery?: string[];
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewsCount?: number;
  soldCount?: string;
  shortDescription: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  registration?: string;
  warning?: string;
  sourceUrl: string;
}

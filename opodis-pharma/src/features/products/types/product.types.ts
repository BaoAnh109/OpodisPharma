export interface Product {
  id: number;
  name: string;
  category: string;
  volume: string;
  image: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  registration?: string;
  warning?: string;
  sourceUrl: string;
}

// lib/products.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "T-Shirt",
    price: 799,
    description: "Premium cotton t-shirt",
  },
  {
    id: "2",
    name: "Hoodie",
    price: 1499,
    description: "Winter hoodie",
  },
];

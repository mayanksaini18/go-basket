export interface Product {
  id: string;
  name: string;
  price: number
  unit: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Banana",
    price: 40,
    unit: "each (est.)",
    image: "https://res.cloudinary.com/dq7yftv7z/image/upload/v1766051859/gabriel-mihalcea-1jyRHJPkpz8-unsplash_cex2aj.jpg",
  },
  {
    id: "2",
    name: "Roma Tomato",
    price: 45,
    unit: "per lb",
    image: "https://res.cloudinary.com/dq7yftv7z/image/upload/v1766051856/alex-ghizila-UD_j10SKj5g-unsplash_a1muta.jpg",
  },
  {
    id: "3",
   name: "Cucumber",
    price: 59,
    unit: "each",
    image: "https://res.cloudinary.com/dq7yftv7z/image/upload/v1766051856/jessica-bulling-8Jau7nWrgmE-unsplash_qj9eal.jpg",
  },
  {
    id: "4",
    name: "Avocado",
    price: 79,
    unit: "each",
    image: "https://res.cloudinary.com/dq7yftv7z/image/upload/v1766051856/david-trinks-RUlX79xwyzI-unsplash_ox1ruv.jpg",
  }
];

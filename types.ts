export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  images: Image[];
  isFeatured: boolean;
  size: Size;
  color: Color;
}

export interface Image {
  id: string;
  url: string;
}

export interface Hero {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  hero: Hero;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

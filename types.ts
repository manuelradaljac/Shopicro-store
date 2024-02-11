export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  images: Image[];
  isFeatured: boolean;
  Inventory: Inventory[];
  slug: string;
  size: Size;
  color: Color;
}

export interface StoreSettings {  
  logo: string;
}

export interface Inventory {
  id: string,
  numberInStock: string;
  isInStock: boolean;
}

export interface Image {
  id: string;
  url: string;
}

export interface Hero {
  id: string;
  label: string;
  imageUrl: string;
  textColor: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  hero: Hero;
}

export interface Size {
  id: string;
  name: string;
  slug: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  slug: string;
  value: string;
}

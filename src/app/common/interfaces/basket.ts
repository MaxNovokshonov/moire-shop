import { Product } from './products';

export interface BasketParams {
  productId: number;
  colorId: number;
  sizeId: number;
  quantity: number;
}

export interface User {
  accessKey: string;
  id: number;
}

export interface BasketItem {
  color: BasketItemColor;
  id: number;
  price: number;
  product: Product;
  quantity: number;
  size: {
    id: number;
    title: string;
  };
}

export interface BasketItemColor {
  color: {
    id: number;
    title: string;
    code: string;
  };
  gallery: BasketGallery[];
  id: number;
}

export interface BasketGallery {
  file: {
    extension: string;
    name: string;
    originalName: string;
    size: string;
    url: string;
  };
}

export interface BasketResponse {
  id: number;
  items: BasketItem[];
  user: User;
}

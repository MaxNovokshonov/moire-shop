export interface Gallery {
  file: {
    extension: string;
    name: string;
    originalName: string;
    size: string;
    url: string;
  };
}

export interface Color {
  id: number;
  color: {
    code: string;
    id: number;
    title: string;
  };
  gallery: Gallery[];
}

export interface Material {
  code: string;
  id: number;
  productsCount: number;
  title: string;
}

export interface Season {
  code: string;
  id: number;
  productsCount: number;
  title: string;
}

export interface Product {
  title: string;
  slug: string;
  price: number;
  id: number;
  colors: Color[];
  materials: Material[];
  seasons: Season[];
}

export interface Pagination {
  page: number;
  pages: number;
  total: number;
}

export interface ProductsResponse {
  items: Product[];
  pagination: Pagination;
}

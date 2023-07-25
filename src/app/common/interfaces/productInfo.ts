export interface ProductCategory {
  id: number;
  slug: string;
  title: string;
}


export interface ProductColor {
  color: {
    code: string;
    id: number;
    title: string;
  };
  gallery: ProductPicture[];
}

export interface ProductPicture {
  file: {
    extension: string;
    name: string;
    originalName: string;
    size: string;
    url: string;
  };
}

export interface ProductMaterial {
  code: string;
  id: number;
  productsCount: number;
  title: string;
}

export interface ProductSeason {
  code: string;
  id: number;
  productsCount: number;
  title: string;
}

export interface ProductSize {
  id: number;
  title: string;
}

export interface ProductInfo {
  category: ProductCategory;
  colors: ProductColor[];
  content: string;
  id: number;
  materials: ProductMaterial[];
  price: number;
  seasons: ProductSeason[];
  sizes: ProductSize[];
  slug: string;
  title: string;
}

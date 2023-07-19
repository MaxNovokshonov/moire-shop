export interface FilterMaterial {
  id: number;
  title: string;
  code: string;
  productsCount: number;
}

export interface FilterMaterials {
  items: FilterMaterial[];
}

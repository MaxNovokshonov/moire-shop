export interface FilterParams {
  page: number;
  limit: number;
  categoryId: number;
  minPrice: number;
  maxPrice: number;
  materialIds: number[];
  seasonIds: number[];
  colorIds: number[];
}

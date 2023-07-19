export interface FilterSeason {
  id: number;
  title: string;
  code: string;
  productsCount: number;
}

export interface FilterSeasons {
  items: FilterSeason[];
}

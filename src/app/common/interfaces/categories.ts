export interface FilterCategory {
  id: number;
  title: string;
  slug: string;
}

export interface FilterCategories {
  items: FilterCategory[];
}

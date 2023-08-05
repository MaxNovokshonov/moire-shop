import { Injectable } from '@angular/core';
import { FilterParams } from '../common/interfaces/filterParams';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  defaultParams: FilterParams = {
    page: 1,
    limit: 9,
    categoryId: 0,
    colorIds: [],
    materialIds: [],
    maxPrice: 0,
    minPrice: 0,
    seasonIds: [],
  };

  productsCount: number;

  params$ = new BehaviorSubject<FilterParams>(this.defaultParams);

  constructor(private route: ActivatedRoute) {}

  updateParams(value: number) {
    this.params$.next({ ...this.params$.value, page: value });
  }

  setCategory(value: number) {
    this.params$.next({ ...this.params$.value, categoryId: value });
  }

  setParams(value: FilterParams) {
    this.params$.next(value);
  }

  resetParams() {
    this.params$.next(this.defaultParams);
  }
}

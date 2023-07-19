import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { ProductsResponse } from '../common/interfaces/products';
import { FilterColor, FilterColors } from '../common/interfaces/colors';
import { FilterCategories, FilterCategory } from '../common/interfaces/categories';
import { FilterMaterial, FilterMaterials } from '../common/interfaces/materials';
import { FilterSeason, FilterSeasons } from '../common/interfaces/seasons';
import { ProductInfo } from '../common/interfaces/productInfo';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(params: any): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${environment.BASE_URL}products`, { params });
  }

  getProductById(id: number): Observable<ProductInfo> {
    return this.http.get<ProductInfo>(`${environment.BASE_URL}products/${id}`);
  }

  getAllColors(): Observable<FilterColor[]> {
    return this.http
      .get<FilterColors>(`${environment.BASE_URL}colors`)
      .pipe(map((response) => response.items));
  }

  getAllCategories(): Observable<FilterCategory[]> {
    return this.http
      .get<FilterCategories>(`${environment.BASE_URL}productCategories`)
      .pipe(map((response) => response.items));
  }

  getAllMaterials(): Observable<FilterMaterial[]> {
    return this.http
      .get<FilterMaterials>(`${environment.BASE_URL}materials`)
      .pipe(map((response) => response.items));
  }

  getAllSeasons(): Observable<FilterSeason[]> {
    return this.http
      .get<FilterSeasons>(`${environment.BASE_URL}seasons`)
      .pipe(map((response) => response.items));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BasketParams, BasketResponse } from '../common/interfaces/basket';
import { UserAccessKey } from '../common/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}

  accessParams = new HttpParams().set('userAccessKey', this.accessKey!);

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessKey');
  }

  setAccessKey(value: string) {
    localStorage.setItem('accessKey', value);
  }

  get accessKey(): string | null {
    if (this.isAuthenticated()) {
      return localStorage.getItem('accessKey');
    } else {
      return null;
    }
  }

  getUserAccessKey(): Observable<UserAccessKey> {
    return this.http.get<UserAccessKey>(`${environment.BASE_URL}users/accessKey`);
  }

  getBasket(): Observable<BasketResponse> {
    return this.http.get<BasketResponse>(`${environment.BASE_URL}baskets`, {
      params: this.accessParams,
    });
  }

  addProductToBasket(body: BasketParams): Observable<BasketResponse> {
    return this.http.post<BasketResponse>(`${environment.BASE_URL}baskets/products`, body, {
      params: this.accessParams,
    });
  }
}

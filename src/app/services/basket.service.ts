import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { BasketParams, BasketResponse } from '../common/interfaces/basket';
import { UserAccessKey } from '../common/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}

  cartTotalQuantity = new BehaviorSubject<number>(0);
  cartTotalPrice = new BehaviorSubject<number>(0);
  basket = new Subject<BasketResponse>();
  accessParams = new HttpParams().set('userAccessKey', this.accessKey!);

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessKey');
  }

  isBasket(): boolean {
    return !!localStorage.getItem('basketTotalQuantity');
  }

  setAccessKey(value: string) {
    localStorage.setItem('accessKey', value);
  }

  setBasketQuantity(value: string) {
    localStorage.setItem('basketTotalQuantity', value);
  }

  resetBasketQuantity() {
    localStorage.removeItem('basketTotalQuantity');
  }

  get accessKey(): string | null {
    if (this.isAuthenticated()) {
      return localStorage.getItem('accessKey');
    } else {
      return null;
    }
  }

  get basketTotalQuantity(): string | null {
    if (this.isBasket()) {
      return localStorage.getItem('basketTotalQuantity');
    } else {
      return null;
    }
  }

  getTotalQuantity(basketItems: BasketResponse) {
    return basketItems.items.map((item) => item.quantity).reduce((acc, item) => acc + item, 0);
  }

  getTotalPrice(basketItems: BasketResponse) {
    return basketItems.items
      .map((item) => item.quantity * item.price)
      .reduce((acc, item) => acc + item, 0);
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

  deleteProductByID(id: number): Observable<BasketResponse> {
    return this.http.delete<BasketResponse>(`${environment.BASE_URL}baskets/products`, {
      params: this.accessParams,
      body: { basketItemId: id },
    });
  }

  updateBasket(id: number, quantity: number): Observable<BasketResponse> {
    return this.http.put<BasketResponse>(
      `${environment.BASE_URL}baskets/products`,
      { basketItemId: id, quantity: quantity },
      { params: this.accessParams },
    );
  }
}

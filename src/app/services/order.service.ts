import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DeliveryType, Order, OrderResponse, PaymentType } from '../common/interfaces/order';
import { environment } from '../../environments/environment';
import { BasketResponse } from '../common/interfaces/basket';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order = new Subject<OrderResponse>();

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessKey');
  }

  get accessKey(): string | null {
    if (this.isAuthenticated()) {
      return localStorage.getItem('accessKey');
    } else {
      return null;
    }
  }

  getDeliveriesTypes(): Observable<DeliveryType[]> {
    return this.http.get<DeliveryType[]>(`${environment.BASE_URL}deliveries`);
  }

  getPaymentsType(id: number): Observable<PaymentType[]> {
    return this.http.get<PaymentType[]>(`${environment.BASE_URL}payments`, {
      params: { deliveryTypeId: id },
    });
  }

  createOrder(order: Order): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${environment.BASE_URL}orders`, order, {
      params: { userAccessKey: this.accessKey! },
    });
  }

  getOrder(id: number): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${environment.BASE_URL}orders/${id}`, {
      params: { userAccessKey: this.accessKey!, orderId: id },
    });
  }
}

import { BasketResponse } from './basket';

export interface Order {
  name: string;
  address: string;
  phone: string;
  email: string;
  deliveryTypeId: number;
  paymentTypeId: number;
  comment?: string;
}

export interface DeliveryType {
  id: number;
  title: string;
  price: string;
}

export interface PaymentType {
  id: number;
  title: string;
}

export interface OrderParams {
  userAccessKey: string;
  orderId: string;
}

export interface OrderResponse {
  address: string;
  basket: BasketResponse;
  comment?: string;
  deliveryType: DeliveryType;
  email: string;
  id: number;
  name: string;
  paymentType: string;
  phone: string;
  status: OrderStatus;
  totalPrice: number;
}

export interface OrderStatus {
  code: string;
  id: number;
  title: string;
}

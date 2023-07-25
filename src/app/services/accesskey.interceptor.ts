import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasketService } from './basket.service';

@Injectable()
export class AccessKeyInterceptor implements HttpInterceptor {
  constructor(private basketService: BasketService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      headers: request.headers.set('Access-Control-Allow-Headers', 'userAccessKey'),
    });
    return next.handle(authReq);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const backendAPI = request.clone({
      url: `${baseURL}/${request.url}`
    })
    return next.handle(backendAPI);
  }
}

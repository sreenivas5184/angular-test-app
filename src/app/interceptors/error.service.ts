import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements HttpInterceptor {

  constructor() { }
  getData(): string {
    return 'Sreenivas';
  }
  getboolean(): boolean {
    return true;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('errorinterceptor req', req);
    return next.handle(req).pipe(tap(val => console.log('error val data ', val))
    );
  }
}

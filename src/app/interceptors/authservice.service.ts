import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements HttpInterceptor {
  constructor(private errorService: ErrorService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('authServiceInterceptor req', req);
    const httpHeaders = new HttpHeaders({
      authorization : 'sreenivas'
    });
    const clone =  req.clone({
      headers: httpHeaders
    });
    return next.handle(clone).pipe(tap(val => console.log('val data ', val)),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    console.log('error : ', error);
    return throwError(error);
  }


}

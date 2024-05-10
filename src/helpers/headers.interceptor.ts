import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqHeaded = req.clone({
      withCredentials: true,
      responseType: "json"
    });

    return next.handle(reqHeaded)
  }
}

export const headersInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }
];

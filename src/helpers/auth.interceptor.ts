import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../app/service/token-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private TOKEN_HEADER_KEY = 'X-Auth-Token';
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({ headers: req.headers.set(this.TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.headers.get(this.TOKEN_HEADER_KEY) !== null) {
            this.token.saveToken(event.headers.get(this.TOKEN_HEADER_KEY) ?? '')
          }

          return event
        })
      )
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

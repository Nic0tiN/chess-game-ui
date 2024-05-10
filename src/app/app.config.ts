import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AbstractChessApi} from "./chess/api/AbstractChessApi";
import ChessApiBackend from "./chess/api/ChessApiBackend";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "../helpers/auth.interceptor";
import {headersInterceptorProviders} from "../helpers/headers.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    headersInterceptorProviders,
    authInterceptorProviders,
    { provide: AbstractChessApi, useClass: ChessApiBackend, deps: [HttpClient] }
  ]
};

import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { mergeMap, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return from(this.getToken()).pipe(
      take(1),
      tap(token => {
        if (token && this.requestRequiresToken(req)) {
          req = req.clone({
            setHeaders: {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              Authorization: 'Bearer ' + token,
            },
          });
        }
      }),
      mergeMap(() => next.handle(req)),
    );
  }

  private async getToken(): Promise<string | undefined> {
    return undefined;
  }

  private requestRequiresToken(req: HttpRequest<any>): boolean {
    return !/\/login$/.test(req.url);
  }
}

import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');
    console.log(req.url);
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    });
    return next.handle(modifiedRequest);
  }
}

import { HttpInterceptorFn } from '@angular/common/http';

export const httpreqInterceptor: HttpInterceptorFn = (req, next) => {
    const myToken=localStorage.getItem('token');
    const clonerequest=req.clone({
      setHeaders:{
        Authorisation:`Bearer ${myToken}`
      }
    })
  return next(clonerequest);
};

import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {ErrorService} from '../services/error-service';
import {catchError, throwError} from 'rxjs';

export const errorInterceptor:HttpInterceptorFn = (req, next)=>{
  const errors = inject(ErrorService);

  return next(req).pipe(
    catchError((err:HttpErrorResponse)=> {
      errors.setError(niceMessage(err.status));
      return throwError(()=>err)
    })
  )

  function niceMessage(status : number): string{
    if (status === 0){
      return 'Could not reach the server. Check your internet connection'
    }
    if (status === 404){
      return 'Requested data not found'
    }
    if (status >= 500){
      return 'The server had a problem. Try again later'
    }
    else return `Something went wrong (error ${status})`

  }
}



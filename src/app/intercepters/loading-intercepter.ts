import {HttpInterceptorFn} from '@angular/common/http';
import {finalize} from 'rxjs';
import {inject} from '@angular/core';
import {LoadingService} from '../services/loading-service';


export const loadingIntercepter:HttpInterceptorFn =(req, next) => {

  const loading = inject(LoadingService)

  loading.increaseCount()

  return next(req).pipe(
    finalize(()=> loading.decreaseCount())
  )

}

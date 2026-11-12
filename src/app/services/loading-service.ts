import {computed, Service, signal} from '@angular/core';

@Service()
export class LoadingService {

  private count = signal(0);

  activeRequests = this.count.asReadonly();

  isLoading = computed(()=> this.count() > 0);

  increaseCount() : void{
    this.count.update((n) => n + 1);
  }

  decreaseCount(){
    this.count.update((n)=> Math.max(0, n-1));
  }


}

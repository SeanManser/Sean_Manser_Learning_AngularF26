import {Service, signal} from '@angular/core';

@Service()
export class ErrorService {

  private message = signal<string | null>(null);

  errorMessage = this.message.asReadonly();

  setError(msg: string): void {
    this.message.set(msg);
  }

  clear(): void {
    this.message.set(null);
  }

}

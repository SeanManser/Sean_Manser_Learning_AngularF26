import {inject, Service, signal} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

@Service()
export class Auth {

  guardEnabled = signal(true);

  toggleGuard() : void{
    this.guardEnabled.update(guard=> !guard)
}

}


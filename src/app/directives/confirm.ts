import {Directive, input, output} from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)' : 'onClick()',
  }
})
export class Confirm {

  message = input('Are you sure?', {alias : 'appConfirm'});

  confirmed = output<void>();

  onClick(): void {
    const question = this.message() || 'Are you sure';
    if (confirm(question)){
      this.confirmed.emit();
    }
  }

}

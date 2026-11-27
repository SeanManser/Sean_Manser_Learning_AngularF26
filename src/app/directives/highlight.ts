import {computed, Directive, input, signal} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
    '[style.backgroundColor]': 'hovered() ? highlightColor() : null',
    '[class.highlighted]': 'hovered()',
  },
})
export class Highlight {

  color = input('',{alias: 'appHighlight'});

  hovered = signal(false);

  highlightColor = computed(()=> this.color() || '#fff3c4')

}

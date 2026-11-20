import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'furLabel',
})
export class FurLabelPipe implements PipeTransform {
  private furLabels: Record<string, string> = {
    curly: 'Curly coat', double: 'Double coat', hairless: 'Hairless',
    long: 'Long coat', medium: 'Medium coat', short: 'Short coat',
    smooth: 'Smooth coat', wire: 'Wire-haired',
  }
  transform(type: string | null | undefined): string {
    if (!type || !type.trim()){
      return "Unknown Coat"
    }
    return this.furLabels[type.trim().toLowerCase()] ?? type
  }
}

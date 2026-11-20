import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string |null | undefined, limit = 20, ellipsis = '...'): string {


    if (!value){
      return ''
    }
    if (limit <= 0 || value.length <=limit){
      return value
    }
    return value.slice(0,limit).trimEnd() + ellipsis;
  }
}

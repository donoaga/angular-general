import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {
  transform(val: string | number): string  {
    const stringVal = val.toString();
    return  stringVal.length > 25 ? stringVal.substring(0, 25) + '..' : stringVal;
  }
}

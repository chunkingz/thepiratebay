import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripunsafe'
})
export class StripunsafePipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return null;
    }
    value = 'magnet:' + value.slice(7);
      return value;
  }

}

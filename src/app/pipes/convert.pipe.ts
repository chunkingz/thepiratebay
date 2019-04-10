import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any) {
    if (!value) {
      return null;
    }

    value *= 1e-9;
    value = value.toFixed(2);
    return value += ' GB';
  }

}

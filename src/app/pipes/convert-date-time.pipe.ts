import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDateTime'
})
export class ConvertDateTimePipe implements PipeTransform {

  transform(date: any) {
    if (!date) {
      return null;
    }

    const split = date.split(' ');
    const day = split[0];
    const dayNum = split[1];
    const month = split[2];
    const year = split[3];

    const trimmedDate = day +' '+ dayNum +' '+ month +' '+ year;
    return trimmedDate
  }

}

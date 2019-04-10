import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayFontAwesomeIcon'
})
export class DisplayFontAwesomeIconPipe implements PipeTransform {

type;

  transform(value: any) {

    switch(value) {

      case 'Audio':
        this.type = "<i class='fas fa-music' style='color: brown;'></i>";
        break;
      case 'Video':
        this.type = "<i class='fas fa-video' style='color: fuchsia;'></i>";
        break;
      case 'Applications':
        this.type = "<i class='fas fa-ghost' style='color: rgb(241, 76, 76);'></i>";
        break;
      case 'Games':
        this.type = "<i class='fas fa-gamepad' style='color: blueviolet;'></i>";
        break;
      case 'Porn':
        this.type = "<i class='fas fa-venus-mars' style='color: palevioletred;'></i>";
        break;
      case 'Other':
        this.type = "<i class='fab fa-medapps' style='color: green;'></i>";
        break;
      default:
        this.type = "category not found";
    }

    return this.type;
  }

}

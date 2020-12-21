import {AbstractControl} from '@angular/forms';


export function doNotUseThisValidator(control: AbstractControl) {
  if (control.value !== 'admin123') {
    return {doNotUseThisValidator: true};
  }
  return null;
}

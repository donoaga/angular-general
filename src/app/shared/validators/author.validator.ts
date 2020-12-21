import {AbstractControl, ValidationErrors} from '@angular/forms';

export class AuthorValidator {
  static isCamelCase(control: AbstractControl): ValidationErrors | null {
    const dividedVal = control.value.split(' ');
    for (const val of dividedVal) {
      if (val && val.length && val[0] !== val[0].toUpperCase()) {
        console.log(val);
        return {isNotCamelCase: true};
      }
    }
    return null;
  }
}

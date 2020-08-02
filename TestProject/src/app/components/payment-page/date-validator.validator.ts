import { FormGroup } from '@angular/forms';

export function ValidateDate(currentDate) {
  return (formGroup: FormGroup) => {
    const thisMoment = new Date();
    const today = new Date(
      Date.UTC(
        thisMoment.getUTCFullYear(),
        thisMoment.getUTCMonth(),
        thisMoment.getUTCDay()
      )
    );

    const inputMoment = formGroup.controls[currentDate];
    // tslint:disable-next-line:max-line-length
    const dateSplit = inputMoment.value.toString().split('-');
    // 0 = an
    // 1 = luna
    // 2 = ziua
    if (dateSplit[0] >= today.getFullYear().toString()) {
      // tslint:disable-next-line:radix
      if (parseInt(dateSplit[1]) < today.getMonth()) {
        inputMoment.setErrors({ incorrect: true });
        // tslint:disable-next-line:radix
      } else if (parseInt(dateSplit[1]) === today.getMonth()) {
        // tslint:disable-next-line:radix
        if (parseInt(dateSplit[2]) < today.getDay()) {
          inputMoment.setErrors({ incorrect: true });
        }
      }
    } else {
      inputMoment.setErrors({ incorrect: true });
    }
  };
}

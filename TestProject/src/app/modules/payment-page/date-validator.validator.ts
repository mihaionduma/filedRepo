import { FormGroup } from '@angular/forms';

export function ValidateDate(currentDate) {
    return (formGroup: FormGroup) => {
        const thisMoment = new Date();
        const inputMoment = formGroup.controls[currentDate];
        // tslint:disable-next-line:max-line-length
        const dateSplit = inputMoment.value.toString().split('-');
        // 0 = an
        // 1 = luna
        // 2 = ziua

        if (dateSplit[0] >= thisMoment.getFullYear().toString()) {
            // tslint:disable-next-line:radix
            if (parseInt(dateSplit[1]) < thisMoment.getMonth()) {
                inputMoment.setErrors({incorrect: true});
            } else {
                // tslint:disable-next-line:radix
                if (parseInt(dateSplit[2]) > thisMoment.getDay()) {
                    console.log('pai de ce?');
                    inputMoment.setErrors({incorrect: true});
                }
            }
       } else {
           inputMoment.setErrors({incorrect: true});
       }
    };
}

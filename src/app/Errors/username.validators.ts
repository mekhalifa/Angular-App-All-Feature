import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';

export class UsernameValidators  {

    static  canNotContainSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0)
           {
               return {canNotContainSpace: true};
           }

        return null;
    }

    static shouldBeUnique( control: AbstractControl): Promise< ValidationErrors |null>{

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                const  fackData = ['khalifa', 'mohamed', 'ahmed'];
                const chack = fackData.filter(v => v.toUpperCase() === (control.value as string).toUpperCase());
                if (chack.length > 0){
                     resolve({shouldBeUnique: true});
                        }
                resolve( null);
            }, 5000);
        });


    }


}

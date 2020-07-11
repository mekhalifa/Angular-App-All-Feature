import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})


export class NewDirectiveDirective {

  @Input('appNewDirective') format;

  constructor(private er: ElementRef) {


  }

  @HostListener('blur') onBlur(){

    const val: string = this.er.nativeElement.value;

    switch (this.format){
      case 'lowerCase':
        this.er.nativeElement.value =  val.toLowerCase();
        break;
      case 'upperCase':
        this.er.nativeElement.value =  val.toUpperCase();
        break;
      default:
        this.er.nativeElement.value =  val;
    }

  }

  @HostListener('mouseover') onOver(){
    console.log('mouse over');
  }

}

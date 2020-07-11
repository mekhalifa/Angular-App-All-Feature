import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {

  fristName;
  comment;

  contactMethod = ['Phone', 'Email', 'SMS'];
  constructor() { }

  ngOnInit(): void {
  }

  log(fristName: NgModel){

    console.log(fristName.value);
  }

  onSubmit(f: NgForm){
    if (f.valid){
    console.log(f.value);
    }else{
      console.log('form Not valid');
    }
  }
}

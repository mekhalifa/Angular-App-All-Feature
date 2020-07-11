import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder } from '@angular/forms';
import { UsernameValidators} from 'src/app/Errors/username.validators';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      username: new FormControl('', [Validators.required ,
                                   Validators.minLength(5) ,
                                   UsernameValidators.canNotContainSpace], UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    });
  }


  get email(){
    return this.form.controls.email;
  }
  get username(){
    return this.form.controls.username;
  }
  get password(){
    return this.form.controls.password;
  }

}

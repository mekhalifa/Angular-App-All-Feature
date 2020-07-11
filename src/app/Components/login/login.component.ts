import {
  Component,
  OnInit
} from '@angular/core';
import {
  IUserLogin
} from 'src/app/Models/user.login.model';
import {
  IdentityService
} from 'src/app/Services/identity.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  Router,
  Route,
  ActivatedRoute
} from '@angular/router';
import { IUser } from 'src/app/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isError = false;
  // user: IUserLogin = {
  //   username: "test",
  //   password: "test"
  // };
  constructor(
    private identity: IdentityService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  onSubmit() {

    if (!this.loginForm.valid) {
      this.isError = true;

      return;
    }
    this.identity.login(this.loginForm.value).subscribe({
      next: res => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/home']);
        },
      error: err => {
        this.isError = true;
        console.log(err.error.message);
      }

    });



  }

  get username() {
    return this.loginForm.controls.username;
  }
  get password() {
    return this.loginForm.controls.password;
  }
}

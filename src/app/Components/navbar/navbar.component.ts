import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/Services/identity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;
  constructor(public identity: IdentityService) {
   // this.isLogin=this.identity.isLogin();
   }


  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.isLogin = this.identity.isLogin();

  }


}

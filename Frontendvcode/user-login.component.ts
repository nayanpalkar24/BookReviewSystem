// user-login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiuserService } from '../../services/apiuser.service';
import { Observable } from 'rxjs';
import { User } from '../../User';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  invalid: string = "";
  uemail: any;
  upassword: string;
  userData: any;

  loginUser: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private router: Router, private userService: ApiuserService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  loginUserfun(val: any) {
    if (this.loginUser.valid) {
      const formValue = this.loginUser.value;
      this.uemail = formValue.email;
      this.upassword = formValue.password;

      this.userService.userLogin(val).subscribe((res) => {
        this.userData = res;
      });

      setTimeout(() => {
        if (this.userData != null) {
          const getPass = this.userData.password;
          if (getPass == this.upassword) {
            this.router.navigate(['/userdash']);
            sessionStorage.setItem("CuserId", this.userData.id);
            sessionStorage.setItem("CuserName", this.userData.firstname + " " + this.userData.lastname);
          } else {
            this.invalid = "Invalid Username or Password";
          }

        } else {
          this.invalid = "Invalid Username or Password";
        }
      }, 2000);
    }else {
      this.invalid = "Please Enter Valid Email and Password.";
    }
  }

  onclk() {
    this.router.navigate(['/userreg']);
  }
}

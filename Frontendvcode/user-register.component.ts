// user-register.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiuserService } from '../../services/apiuser.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  addUser: FormGroup;

  constructor(private router: Router, private userService: ApiuserService) {
    this.addUser = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  insertUser() {
    if (this.addUser.valid) {
      const formValue = this.addUser.value;
      const user = {
        firstname: formValue.firstname,
        lastname: formValue.lastname,
        email: formValue.email,
        phone: parseInt(formValue.phone),
        password: formValue.password,
        address: formValue.address,
      };

      this.userService.addUser(user).subscribe((res) => {
        console.log(res);
      });

      alert("Successfully Registered With Us.");
      this.router.navigate(['/userlogin']);
    } else {
      alert("Please fill out all the required fields correctly.");
    }
  }
}

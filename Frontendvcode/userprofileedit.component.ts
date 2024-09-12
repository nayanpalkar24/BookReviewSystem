import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiuserService } from '../../services/apiuser.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userprofileedit',
  templateUrl: './userprofileedit.component.html',
  styleUrls: ['./userprofileedit.component.css']
})
export class UserprofileeditComponent implements OnInit {
  supId: any;
  supData: any;

  updateUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    password: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });

  constructor(private router: Router, private userService: ApiuserService) { }

  ngOnInit(): void {
    this.supId = sessionStorage.getItem('CuserId');
    console.log(this.supId);
    this.getSupData(this.supId);
  }

  getSupData(id: any) {
    this.userService.getUserByID(id).subscribe((res) => {
      this.supData = res;
      this.updateUser.patchValue(this.supData); // Patch the form with received data
    });
  }

  updateUserProf(data: any, id: number) {
    console.log(data);
    this.userService.supUser(data, id).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/userprofile']);
  }
}

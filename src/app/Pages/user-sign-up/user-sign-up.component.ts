import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './../../services/sign-up.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {


  constructor(private signUpService: SignUpService, private router: Router) { }


  ngOnInit(): void { };


  validationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  isValidPassword(values: any) {

    const { password, confirm_password } = values;

    return password === confirm_password;

  };

  signUp() {

    if (this.isValidPassword(this.validationForm.value))
      this.signUpService.addUser(this.validationForm.value).subscribe();

    else {
      console.log('Password Not Matched');
    }
  };


};


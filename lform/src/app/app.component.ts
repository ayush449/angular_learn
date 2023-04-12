import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = {
    name: '',
    email: '',
    mobile: '',
  };

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      yourname: ['', [Validators.required, Validators.minLength(3)]],
      emailid: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
        ],
      ],
      dob: ['', Validators.required],
    });
  }
  title = 'lform';
  postData() {
    // console.log(val);
    let name = this.contactForm.get('yourname')?.value;
    let email = this.contactForm.get('emailid')?.value;
    let mobile = this.contactForm.get('mobile')?.value;
    let dob = this.contactForm.get('dob')?.value;
    console.log(name + ', ' + email + ', ' + mobile + ', ' + dob);
  }
}

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit{

  loginForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }  

  initForm(){
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
    });
  } 
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fromBuilder : FormBuilder) { }
  Login : FormGroup

  ngOnInit() {
    this.Login = this.fromBuilder.group(
      {
       userEmail:['', Validators.required],
       userPassword:['',Validators.required], 
      }
    );
  }
  onSubmit(){
    console.log(this.Login.value)
  }
}

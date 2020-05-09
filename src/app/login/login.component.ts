import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService , TokenPayLoad } from '../services/authentication.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fromBuilder : FormBuilder, private auth: AuthenticationService, private router : Router) { }
  Login : FormGroup

  credentials: TokenPayLoad = {
    id:0,
    name:'',
    email:'',
    password:''
  }

  ngOnInit() {
    this.Login = this.fromBuilder.group(
      {
       userEmail:['', Validators.required,],
       userPassword:['',[Validators.required,Validators.minLength(8)]], 
      }
    );
  }

  login(){
    
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/resume')
      },
      err => {
        alert('Wrong Username or Password')
        console.error(err)
      }
    )
  }
}

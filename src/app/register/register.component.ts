import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService , TokenPayLoad } from '../services/authentication.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayLoad = {
    id:0,
    name: '',
    email: '',
    password: ''
  }
  constructor(private formBuilder : FormBuilder, private auth: AuthenticationService, private router: Router) { }

  Register : FormGroup;

  ngOnInit() {
    this.Register = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail:['', Validators.required],
      userPassword:['',Validators.required], 
      userCPassword: ['',Validators.required],
    });
  }

  register(){
    this.auth.register(this.credentials).subscribe(
      ()=>{
        this.router.navigateByUrl('/login')
      },
      err =>{
        console.log(err)
      }
    )
  }
}

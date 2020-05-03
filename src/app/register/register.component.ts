import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  Register : FormGroup;

  ngOnInit() {
    this.Register = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail:['', Validators.required],
      userPassword:['',Validators.required], 
      userCPassword: ['',Validators.required],
    });
  }

  onSubmit(){
    console.log(this.Register.value)
  }
}

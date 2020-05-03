import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private fromBuilder : FormBuilder) { }
  addForm : FormGroup

  ngOnInit() {
    this.addForm = this.fromBuilder.group(
      {
       adminEmail:['', Validators.required],
       Password:['',Validators.required], 
      }
    );
  }

  onSubmit(){
    console.log(this.addForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService, LanguageList, WorkList, ProjectList } from '../services/authentication.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

interface workResponse{
  work:[]
}

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  work_list
  constructor(private fromBuilder : FormBuilder, private http: HttpClient, private auth: AuthenticationService, private router : Router) { }
  addForm : FormGroup
  workForm : FormGroup
  deleteForm : FormGroup
  

  credentials: LanguageList = {
    id:0,
    language:''
  }

  workCredentials: WorkList = {
    year:'',
    job:'',
    company:'',
    description:''
  }

  projectCredentials: ProjectList = {
    proname:'',
  }
  
  getWork(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/work`)
    const work = body.pipe(
      map((res: workResponse)=>{
        return res.work
      })
    )
    return work;
  }

  addSkills(){
    this.auth.addSkills(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/resume')
      },
      err => {
        alert('Wrong')
        console.error(err)
      }
    )
  }

  addIntern(){
    this.auth.addIntern(this.workCredentials).subscribe(
      () => {
        this.router.navigateByUrl('/resume')
      },
      err => {
        alert('Wrong')
        console.error(err)
      }
    )
  }

  deleteProject(){
    this.auth.deleteProject(this.projectCredentials).subscribe(
      () => {
        this.router.navigateByUrl('/resume')
      },
      err => {
        alert('Wrong')
        console.error(err)
      }
    )
  }

  ngOnInit() {
    this.addForm = this.fromBuilder.group(
      {
       lang:['', Validators.required],
      }
    );

    this.workForm = this.fromBuilder.group(
      {
        year:['', Validators.required],
        job:['', Validators.required],
        company:['', Validators.required],
        description:['', Validators.required],
      }
    );

    this.deleteForm = this.fromBuilder.group({
      proname : ['', Validators.required],
    })

    this.getWork().subscribe(
      work =>{
        this.work_list = work
        this.workCredentials.year = this.work_list[0].year
        this.workCredentials.job = this.work_list[0].job
        this.workCredentials.company = this.work_list[0].company
        this.workCredentials.description = this.work_list[0].description
      }
    )
    

  }

}

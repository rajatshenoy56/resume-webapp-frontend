import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface EducationResponse{
  education: []
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  list_projects;
  education_list;
  constructor(private auth: AuthenticationService,private http: HttpClient) { }

  getEducation(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/projects`)
    const education = body.pipe(
      map((res: EducationResponse)=>{
        return res.education
      })
    )
    return education;
  }
  
  ngOnInit() {
    this.auth.getProjects().subscribe(
      projects =>{
        console.log(projects)
        this.list_projects = projects
      }
    )

    this.getEducation().subscribe(
      education =>{
        console.log(education)
        this.education_list = education
      }
    )
  }

}

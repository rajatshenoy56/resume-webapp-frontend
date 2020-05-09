import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';

export interface educationResponse{
  education: []
}
export interface languagesResponse{
  languages: []
}

export interface webDevResponse{
  webdev:[]
}

export interface projectsResponse{
  projects: []
}

export interface appDevResponse{
  appdev: []
}

export interface workResponse{
  work:[]
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {

  education_list;
  languages_list;
  webdev_list;
  appdev_list;
  work_list;
  projects_list;
  
  
  constructor(private http: HttpClient) { }

  goTo(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1GhwG-mwXkWIQOOSN4ece5epm4BVjMwDJ/view?usp=sharing');
    link.setAttribute('download', `Rajat Shenoy - SPIT`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  navigateToClass0(){
    $('html, body').animate({
      scrollTop: $(".class0").offset().top
    }, 1000);
  }

  navigateToClass1(){
    $('html, body').animate({
      scrollTop: $(".class1").offset().top
    }, 1000);
  }

  navigateToClass2(){
    $('html, body').animate({
      scrollTop: $(".class2").offset().top
    }, 1000);
  }

  navigateToClass3(){
    $('html, body').animate({
      scrollTop: $(".class3").offset().top
    }, 1000);
  }

  navigateToClass4(){
    $('html, body').animate({
      scrollTop: $(".class4").offset().top
    }, 1000);
  }
    
  getEducation(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/education`)
    const education = body.pipe(
      map((res: educationResponse)=>{
        return res.education
      })
    )
    return education;
  }
  
  getLanguages(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/languages`)
    const languages = body.pipe(
      map((res: languagesResponse)=>{
        return res.languages
      })
    )
    return languages;
  }

  getProjects(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/projects`)
    const project = body.pipe(
      map((res: projectsResponse)=>{
        return res.projects
      })
    )
    return project;
  }

  getWebDev(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/web`)
    const webdev = body.pipe(
      map((res: webDevResponse)=>{
        return res.webdev
      })
    )
    return webdev;
  }

  getAppDev(): Observable<any>{
    const body = this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/apps`)
    const appdev = body.pipe(
      map((res: appDevResponse)=>{
        return res.appdev
      })
    )
    return appdev;
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

  ngOnInit() {

    this.getEducation().subscribe(
      education =>{
        this.education_list = education
      }
    )

    this.getLanguages().subscribe(
      languages=>{
        this.languages_list = languages
      }
    )

    this.getProjects().subscribe(
      projects =>{
        this.projects_list = projects
      }
    )

    this.getWebDev().subscribe(
      webdev =>{
        this.webdev_list = webdev
      }
    )

    this.getAppDev().subscribe(
      appdev =>{
        this.appdev_list = appdev
      }
    )

    this.getWork().subscribe(
      work =>{
        this.work_list = work
      }
    )
  }
}

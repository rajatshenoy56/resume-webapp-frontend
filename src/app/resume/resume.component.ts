import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  list_projects;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getProjects().subscribe(
      projects =>{
        console.log(projects)
        this.list_projects = projects
      }
    )
  }

}

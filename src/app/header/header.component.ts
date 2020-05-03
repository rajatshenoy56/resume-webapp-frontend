import { Component, OnInit } from '@angular/core';
import { faFacebookF,faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithub = faGithub;
  
  constructor() {
    
    
  }

  ngOnInit() {
  }

}

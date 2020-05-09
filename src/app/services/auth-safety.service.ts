import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSafetyService implements CanActivate {

  constructor(private auth: AuthenticationService, private router :Router ) { }

  canActivate(){
    if(!this.auth.isLoggedIn()){
      this.router.navigateByUrl('/login')
      return false
    }
    return true
  }
}

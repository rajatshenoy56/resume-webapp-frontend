import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StringifyOptions } from 'querystring';
import { tokenReference } from '@angular/compiler';

export interface UserDetails{
  id:number
  name:string
  email:string
  password:string
  exp: number
  iat : number
}

interface TokenResponse{
  token: string
}

export interface TokenPayLoad{
  id:number
  name:string
  email:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string
  constructor(private http: HttpClient, private router: Router){ }

  private saveToken(token: string):void{
    localStorage.setItem('usertoken',token)
    this.token = token
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload 
    if(token){
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    }
    else{
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if(user){
      return user.exp>Date.now()/1000
    }
    else{
      return false
    }
  }

  public register(user: TokenPayLoad) :Observable<any>{
    console.log(user)
    return this.http.post(`https://cryptic-savannah-74709.herokuapp.com/api/register`,user ,{
      headers :{'Content-Type' : 'application/json'}
    })
  }

  public login(user: TokenPayLoad) :Observable<any>{
    const base = this.http.post(
      `/https://cryptic-savannah-74709.herokuapp.com/api/login`,
      {email: user.email, password :user.password},
      {
        headers : {'Content-Type': 'application/json'}
      }
    )
    console.log(user)
    const request = base.pipe(
      map((data:TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  // public profile(): Observable<any>{
  //   return this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/profile`,{
  //     headers: {Authorization : `Bearer ${this.getToken()}`}
  //   })
  // }

  public logout(): void{
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}

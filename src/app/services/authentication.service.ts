import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
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

export interface LanguageList{
  id:number
  language:string
}

export interface WorkList{
  year:string
  job:string
  company:string
  description:string
}

export interface ProjectList{
  proname:string
}
export interface LanguageResponse{
  language:string,
  updated_at:string,
  created_at:string,
  id:number
}

export interface WorkResponse{
  id:number,
  year:string,
  job:string,
  company:string,
  description:string
  created_at:string,
  updated_at:string,
}
export interface TokenPayLoad{
  id:number
  name:string
  email:string
  password:string
}

export interface projectsResponse{
  id:number,
  name:string,
  type:string,
  description:string,
  created_at:string,
  updated_at:string
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
      `https://cryptic-savannah-74709.herokuapp.com/api/login`,
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

  public addSkills(languagelist: LanguageList) :Observable<any>{
    const base = this.http.post(
      `https://cryptic-savannah-74709.herokuapp.com/api/languages`,
      {id: languagelist.id, language :languagelist.language},
      {
        headers : {'Content-Type': 'application/json'}
      }
    )
    console.log(languagelist)
    const request = base.pipe(
      map((data:LanguageResponse)=>{
        return data
      })
    )
    return request
  }

  public addIntern(worklist: WorkList) :Observable<any>{
    const base = this.http.post(
      `https://cryptic-savannah-74709.herokuapp.com/api/work`,
      {year:worklist.year, job:worklist.job, company:worklist.company, description:worklist.description },
      {
        headers : {'Content-Type': 'application/json'}
      }
    )
    console.log(worklist)
    const request = base.pipe(
      map((data:WorkResponse)=>{
        return data
      })
    )
    return request
  }

  public deleteProject(prolist : ProjectList) :Observable<any>{
    const base = this.http.post(
      `https://cryptic-savannah-74709.herokuapp.com/api/projects`,
      {name: prolist.proname},
      {
        headers : {'Content-Type': 'application/json'}
      }
    )
    console.log(prolist)
    const request = base.pipe(
      map((data:projectsResponse)=>{
        return data
      })
    )
    return request
  }

  public isAdmin(){
    if(localStorage.getItem('email') == 'rajatshenoyy@gmail.com'){
      return true
    }
    else{
      return false
    }
  }
  // public profile(): Observable<any>{
  //   return this.http.get(`https://cryptic-savannah-74709.herokuapp.com/api/profile`,{
  //     headers: {Authorization : `Bearer ${this.getToken()}`}
  //   })
  // }

  public logout(): void{
    this.token = ''
    window.localStorage.removeItem('usertoken')
    window.localStorage.removeItem('email')
    this.router.navigateByUrl('/home')
  } 
}

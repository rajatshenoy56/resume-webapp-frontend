import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'adminpanel', component: AdminpanelComponent},
  {path: 'home', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled', scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

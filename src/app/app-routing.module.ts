import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResumeComponent } from './resume/resume.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'adminpanel', component: AdminpanelComponent, canActivate:[AuthGuardService]},
  {path: 'home', component: HeaderComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent, canActivate:[AuthGuardService]},
  {path : 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled', scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

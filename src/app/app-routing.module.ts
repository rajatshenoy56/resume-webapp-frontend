import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'adminpanel', component: AdminpanelComponent},
  {path: 'home', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

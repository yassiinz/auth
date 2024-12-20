import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthentificationGuard} from "./authentification.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RoleGuard} from "./role-guard.guard";
// Add the route for LoginComponent

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect the root path to 'login'n
  {path: 'login', component: LoginComponent,},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthentificationGuard, RoleGuard] }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

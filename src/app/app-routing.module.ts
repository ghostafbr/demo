import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkpageComponent } from './pages/workpage/workpage.component';
import { LoginComponent } from './pages/security/login/login.component';



const routes: Routes = [

  { path: '', component: WorkpageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot( routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

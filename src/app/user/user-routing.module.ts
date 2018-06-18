import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: ':id',
        component: DetailsComponent,
        runGuardsAndResolvers: 'always'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

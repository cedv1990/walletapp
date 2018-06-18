import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent, DashboardComponent, DetailsComponent]
})
export class UserModule { }

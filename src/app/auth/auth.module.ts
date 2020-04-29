import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPassowrdComponent } from './forgot-passowrd/forgot-passowrd.component';


@NgModule({
  declarations: [LoginComponent, ForgotPassowrdComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpConfirmationComponent } from './otp-confirmation/otp-confirmation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/core/auth/interceptor.service';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo : '/login',
        pathMatch : 'full'
      },
      {
        path: 'login',
        component: LoginComponent

      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'ForgrtPassword',
        component: ForgotPasswordComponent
      },
      {
        path: 'otpconfimation',
        component: OtpConfirmationComponent
      },
      {
        path: 'resetPassword',
        component: ResetPasswordComponent
      }

    ]
  }

];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OtpConfirmationComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})
export class AuthModule { }

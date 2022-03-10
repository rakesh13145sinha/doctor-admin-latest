import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { LoginComponent } from './login/login.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // BrowserAnimationsModule,
    //ToastrModule
  ]
})
export class AdminAuthModule { }


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin-auth', pathMatch: 'full' },

  // {path:"category",component:CategoryComponent},
  {path:"admin-auth",  loadChildren:()=>import("./auth/admin-auth.module").then(mod=>mod.AdminAuthModule)},
  {path:"admin",canActivate:[AuthenticationGuard],loadChildren:()=>import("./admin/admin/admin.module").then(mod=>mod.AdminModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

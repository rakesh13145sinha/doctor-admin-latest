
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:"users",component:UsersComponent},
  {path:"view-user/:id",component:ViewUserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

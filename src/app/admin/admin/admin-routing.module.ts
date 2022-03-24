import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/app/category/category.component';
import { EditCategoryComponent } from 'src/app/edit-category/edit-category.component';
import { AdminDashboardComponent } from './dash/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';

const routes: Routes = [

  {path:"",component:AdminDashboardComponent,
      children:[
                 {path:'home',component:DashboardComponent},
                 {path:"category",component:CategoryComponent},
                 {path:"category/update/:id",component:EditCategoryComponent},
                 {path: '', redirectTo: '/home', pathMatch: 'full' },
                 {path:"jobs",loadChildren:()=>import("src/app/jobs/jobs.module").then(mod=>mod.JobsModule)},
                 {path:"post",loadChildren:()=>import("src/app/post/post.module").then(mod=>mod.PostModule)},
                 {path:"news",loadChildren:()=>import("src/app/news/news.module").then(mod=>mod.NewsModule)},
                 {path:"profile",loadChildren:()=>import("src/app/user/user.module").then(mod=>mod.UserModule)},
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

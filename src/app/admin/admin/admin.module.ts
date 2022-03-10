import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { AdminDashboardComponent } from './dash/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './dash/footer/footer.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { HeaderComponent } from './dash/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from 'src/app/category/category.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
 

})
export class AdminModule { }

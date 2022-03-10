import { JobsRoutingModule } from './jobs-routing.module';
import { DeletedJobsComponent } from './deleted-jobs/deleted-jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AllJobsComponent,
    AppliedJobsComponent,
    DeletedJobsComponent,
    AddJobComponent,
    EditJobComponent,
    ViewJobComponent

  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgxPaginationModule
  ]
})
export class JobsModule { }

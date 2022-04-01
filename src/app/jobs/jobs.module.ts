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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HospitalTourComponent } from './hospital-tour/hospital-tour.component';
import { TourRequestsComponent } from './tour-requests/tour-requests.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { ViewHospitalComponent } from './view-hospital/view-hospital.component';


@NgModule({
  declarations: [
    AllJobsComponent,
    AppliedJobsComponent,
    DeletedJobsComponent,
    AddJobComponent,
    EditJobComponent,
    ViewJobComponent,
    HospitalTourComponent,
    TourRequestsComponent,
    HospitalListComponent,
    AddHospitalComponent,
    EditHospitalComponent,
    ViewHospitalComponent

  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class JobsModule { }

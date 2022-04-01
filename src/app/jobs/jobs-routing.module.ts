import { ViewHospitalComponent } from './view-hospital/view-hospital.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { TourRequestsComponent } from './tour-requests/tour-requests.component';
import { HospitalTourComponent } from './hospital-tour/hospital-tour.component';
import { ViewJobComponent } from './../jobs/view-job/view-job.component';
import { EditJobComponent } from './../jobs/edit-job/edit-job.component';
import { AddJobComponent } from './../jobs/add-job/add-job.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { DeletedJobsComponent } from './deleted-jobs/deleted-jobs.component';

const routes: Routes = [
  {path:"all-jobs",component:AllJobsComponent},
  {path:"applied-jobs",component:AppliedJobsComponent},
  {path:"deleted-jobs",component:DeletedJobsComponent},
  {path:"add-job",component:AddJobComponent},
  {path:"edit-job/:id",component:EditJobComponent},
  {path:"view-job/:id",component:ViewJobComponent},
  {path:"tour-requests",component:TourRequestsComponent},
  {path:"hospital-list",component:HospitalListComponent},
  {path:"view-hospital",component:ViewHospitalComponent},
  {path:"hospital-tour/:id",component:HospitalTourComponent},
  {path:"add-hospital",component:AddHospitalComponent},
  {path:"edit-hospital/:id",component:EditHospitalComponent},


  











];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

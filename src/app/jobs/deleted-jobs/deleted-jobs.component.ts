import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';

@Component({
  selector: 'app-deleted-jobs',
  templateUrl: './deleted-jobs.component.html',
  styleUrls: ['./deleted-jobs.component.css']
})
export class DeletedJobsComponent implements OnInit {
  deletedjobs:any[]=[];
  pageSize:any=5;
  currentPage:any=1;
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private router:Router,
            ) { }

  ngOnInit(): void {
    this. deletejob()
  }

  //SHOW ALL DELETED JOBS
  deletejob(){
    this.admin.DeletedJobs().subscribe(
    (r)=>{
      this.deletedjobs=r
      
    })
  }

  recoverjob(id:any){
    console.log(id)
    this.admin.Recoverjobs(id).subscribe(
      (r)=>{
        this.toastr.success("Job retrive successfull")
        this.deletejob()
      }
    )

  }

}

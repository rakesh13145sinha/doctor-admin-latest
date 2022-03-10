import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';
@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {
  jobs:any[]=[];
  pageSize:any=5;
  currentPage:any=1;
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private router:Router,
            ) { }

  ngOnInit(): void {
    this.ShowAllJobs()
  }

  ShowAllJobs(){
    this.admin.ShowAllJobs().subscribe(
      (r)=>{
        this.jobs=r
      }
    )
  }

}

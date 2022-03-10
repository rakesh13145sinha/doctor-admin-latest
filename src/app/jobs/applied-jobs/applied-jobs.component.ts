import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  appliedjobs:any[]=[];
  pageSize:any=5;
  currentPage:any=1;
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private router:Router,
            ) { }

  ngOnInit(): void {
    this.admin.AppliedJob().subscribe(
      (r)=>{
        this.appliedjobs=r
      }
    )


  }

}

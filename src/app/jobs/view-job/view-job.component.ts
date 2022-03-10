import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';
@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  jobid:any;
  job:any;
  constructor(
              private admin:SuperuserService,
              private router :Router,
              private activerout:ActivatedRoute,
              private toastr:ToastrService
  ) {

    this.activerout.paramMap.subscribe(
      (r)=>this.jobid=r.get('id')
    )
  }

  ngOnInit(): void {
    this.admin.Jobdetails(this.jobid).subscribe(
      (r)=>{
        this.job=r
        console.log(r)
        console.log("===================")
      }
    )

  }


}

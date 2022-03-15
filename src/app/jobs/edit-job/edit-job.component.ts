import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  id:any;
  job_detail:any;
  image!:File
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private activeroute:ActivatedRoute
                ) {
                  this.activeroute.paramMap.subscribe(
                  (r)=>this.id=r.get("id")

                  )
                 }

  ngOnInit(): void {
    this.admin.Jobdetails(this.id).subscribe(
      (r)=>{
        this.job_detail=r
        console.log(r)
      }
    )
  }

  

}

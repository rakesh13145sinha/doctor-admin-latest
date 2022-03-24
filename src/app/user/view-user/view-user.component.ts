import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user:any;
  id:any;
  image_url=this.admin.imageurl
  constructor(private router:Router,
              private admin:SuperuserService,
              private toastr:ToastrService,
              private activeroute:ActivatedRoute
              ) {
                this.activeroute.paramMap.subscribe(
                  (r)=>{
                    this.id=r.get("id")

                  }
                )
              }

  ngOnInit(): void {
    this.IndividualUserDetails()
  }

  IndividualUserDetails(){
    this.admin.SingleUser(this.id).subscribe(
      res=>{
        this.user=res
       console.log(res)

      }
    )
  }

}

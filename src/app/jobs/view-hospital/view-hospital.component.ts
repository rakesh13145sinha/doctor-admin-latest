import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.css']
})
export class ViewHospitalComponent implements OnInit {
  id:any
  hospital:any
  image_url=this.admin.imageurl
  constructor(private admin:SuperuserService,
              private router:ActivatedRoute, 
              private toastr:ToastrService
              
              ) { 
    this.router.paramMap.subscribe(
      (r)=>{
        this.id=r.get('id')
      }
    )
  }

  ngOnInit(): void {
    this.admin.Hospitalgetid(this.id).subscribe(
      (r)=>{
        this.hospital=r
        console.log(r)
      }
    )
  }

  //BANNER DELETE
  deletebanner( id:any){
    this.admin.Hospitaltourimagedelete(id).subscribe(
      (r)=>{
        this.toastr.error("Hospital banner deleted")
        this.ngOnInit()
      }
    )

  }

  deletehighlight(id:any){
    
    this.admin.Hospitaltourighlightsdelete(id).subscribe(
      (r)=>{
        this.toastr.error("Hospital Highlight deleted")
        this.ngOnInit()
      }
    )

  }
  deletespeciality(id:any){

    this.admin.HospitalSpecialitydelete(id).subscribe(
      (r)=>{
        this.toastr.error("Hospital Speciality deleted")
        this.ngOnInit()
      }
    )

  }

}

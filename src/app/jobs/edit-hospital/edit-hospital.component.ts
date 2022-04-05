import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.css']
})
export class EditHospitalComponent implements OnInit {
  hospitalid:any
  hospitalinfo:any;
  hospitaltypes:any[]=[];
  states:any[]=[];
  cities:any[]=[];
  constructor(private admin:SuperuserService,
        private activeroute:ActivatedRoute,
        private router:Router,
        private toastr:ToastrService) { 
    this.activeroute.paramMap.subscribe(
      (r)=>this.hospitalid=r.get("id")
    )
  }

  ngOnInit(): void {
    
    this.hospital_info()
    this.hospitaltype(),
    this.State()
  }


  hospital_info(){
    this.admin.HospitalINFOGETid(this.hospitalid).subscribe(
      (r)=>{
        this.hospitalinfo=r

      }
      
    )
  }

    //HOSPITAL TYPE
  hospitaltype(){
    this.admin.HospitalType().subscribe(
      (r)=>{
        
        this.hospitaltypes=r
        console.log(r)

      }

    )
  }
///State 
State(){
  this.admin.Cities().subscribe(
    (r)=>{
      this.states=r
      
    }
  )
}

    //filter cities accourding to state name
    selectstate(event:any){
      console.log(event.target.value)
      var c = this.states.filter((r)=>r.name===event.target.value) 
      this.cities=c[0].city
      

    }

    location(event:any){
      this.hospitalinfo.location=event.target.value
    }

  Hospitalinfoupdate(data:any){
    
    var formData= new FormData();
    formData.append("name",this.hospitalinfo.name)
    formData.append("typeofhospital",this.hospitalinfo.typeofhospital)
    formData.append("no_of_sepeciality",this.hospitalinfo.no_of_sepeciality)
    formData.append("no_of_bed",this.hospitalinfo.no_of_bed)
    formData.append("daily_OPD",this.hospitalinfo.daily_OPD)
    formData.append("no_of_OT",this.hospitalinfo.no_of_OT)
    formData.append("icu",this.hospitalinfo.icu)
    formData.append("nicuc",this.hospitalinfo.nicuc)
    formData.append("picu",this.hospitalinfo.picu)
    formData.append("state",this.hospitalinfo.state)
    formData.append("location",this.hospitalinfo.location)
    
    this.admin.HospitalINFOupdate(this.hospitalid,formData).subscribe(
      (r)=>{
        this.toastr.success("Hospital info update successfully")
        this.router.navigate(["/admin/jobs/hospital-list"])

      }
    )

  }

}

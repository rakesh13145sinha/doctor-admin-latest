import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  pageSize:any=5;
  currentPage:any=1;
  hospitalinfo:any[]=[];

  constructor(private admin:SuperuserService,private toastr:ToastrService) { }

  ngOnInit(): void {
   this.hospitalinof()
  }

  hospitalinof(){
    this.admin.HospitalINFOGET().subscribe(
      (r)=>this.hospitalinfo=r
    )
  }

  hospitalinfodelete(id:any){
    
    var con=confirm("Want to delete  hospital information")
    if (con){
      
      this.admin.HospitalINFOdelete(id).subscribe(
        (r)=>{

          this.hospitalinof()
          this.toastr.error("Hospital info deleted")

        }
      )
      

    }
    else{
    
      this.toastr.success("Hospital info is safe now")
    }

    

  }

}

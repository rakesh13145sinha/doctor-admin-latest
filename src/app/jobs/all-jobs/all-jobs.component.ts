import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  jobid:any;
  deletejobform:any;
  departments:any[]=[];
  designations:any[]=[];
  allstate:any[]=[];
  qualificationList:any[]=[];
  statecities:any[]=[];
  cities:any[]=[];
  categories:any[]=[];
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private router:Router,
              private fb:FormBuilder,
            ) { 

            this.deletejobform=fb.group({
              resion:[""],
              status:[""]
            })

            }

  ngOnInit(): void {
    this.ShowAllJobs()
    // this.speciality()
    this.designation()
    this.states()
    this.education()
    this.allcategories()
    
  }

  //CATEGORY
allcategories(){
  this.admin.Allcategory().subscribe(
    (r)=>{
      this.categories=r
      console.log(r)
    }
  )
}

//SELECT CATEGORY NAME

categoryName(event:any){
  console.log(event.target.value)
  this.admin.CategoryJobs(event.target.value).subscribe(
    (r)=>{
      this.jobs=r
      console.log(r)
    }
  )

}

   //DEPARTMENT
   speciality(){
    this.admin.Department().subscribe(
      (r)=>{
        this.departments=r
        // console.log(r)
      }

    )
  }

//Designations
designation(){
  this.admin.Designation().subscribe(
    (r)=>{
      this.designations=r
     //  console.log(r)
    }
  )
}

designationName(event:any){
  console.log(event.target.value)
  this.admin.DesignationJobs(event.target.value).subscribe(
    (r)=>{
      this.jobs=r
      console.log(r)
    }
    
  )
}
//STATE
states(){
  this.admin.State().subscribe(
    (r)=>{
      this.allstate=r
      // console.log(r)

    }
  )
}



//Qualification
education(){
  this.admin.Qualification().subscribe(
    (r)=>{
      this.qualificationList=r.hightest_qualification
      
    }
  )
}

QualificationName(event:any){
  this.admin.QualificationJobs(event.target.value).subscribe(
    (r)=>{
      this.jobs=r
      console.log(r)
    }
  )
}


statejob(event:any){
  this.admin.StateJobs(event.target.value).subscribe(
    (r)=>{
      this.jobs=r
      console.log(this.jobs)
    }
  )
}
chooicecity(event:any){

   // alert(event.target.value)
var c = this.statecities.filter((r)=>r.name===event.target.value) 
this.cities=c[0].city
// console.log(this.cities)

}
  ShowAllJobs(){
    this.admin.ShowAllJobs().subscribe(
      (r)=>{
        this.jobs=r
        console.log(r)
      }
    )
  }
  delete(id:any){
    this.jobid=id
    console.log(this.jobid)
  }

  confirmation(){
    console.log("yes")

  }
  deletejob(){
    console.log(this.jobid)
    console.log(this.deletejobform.value.resion)
    
    var formData=new FormData();
    formData.append("resion",this.deletejobform.value.resion)
    this.admin.HideJob(this.jobid,formData).subscribe(
      (r)=>{
        this.toastr.success("Job hide successfull")
        this.ShowAllJobs()
        console.log(r)
        this.deletejobform.reset()
        window.location.reload()
      }
    )
  }
  ///DEPATMENT 
  depart(event:any){
    console.log(event.target.value)
    this.admin.Departmentjobs(event.target.value).subscribe(
      (r)=>{
        this.jobs=r
        console.log(r)
      }
    )
  }



}

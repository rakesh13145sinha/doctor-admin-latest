import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  qualification = new FormControl();

  qualificationList: string[] = [ ]; 
  
  id:any;
  job:any;
  image!:File
  qua =new Set();
  
  departments:any[]=[];
  hospitaltypes:any[]=[]
  designations:any[]=[];
  categories:any[]=[];
  allstate:any[]=[];
 
  statecities:any[]=[];
  cities:any[]=[];
  edu:any[]=[];
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private activeroute:ActivatedRoute,
              private router:Router
             
                ) {
                  this.activeroute.paramMap.subscribe(
                  (r)=>this.id=r.get("id")
                  
                  )

                  
                 }

  ngOnInit(): void {
    this.SingleJob()
    this.speciality()
    this.hospitaltype()
    this.designation()
    this.allcategories()
    this.states()
    this.city()
    this.education()




   
    
  }
//SINGLE JOB
SingleJob(){
  this.admin.Jobdetails(this.id).subscribe(
    (r)=>{
      this.job=r
      console.log(this.job)
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
//HOSPITAL TYPE
  hospitaltype(){
    this.admin.HospitalType().subscribe(
      (r)=>{
        
        this.hospitaltypes=r
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
//CATEGORY
allcategories(){
  this.admin.Allcategory().subscribe(
    (r)=>{
      this.categories=r
      // console.log(r)
    }
  )
}
///State 
states(){
  this.admin.State().subscribe(
    (r)=>{
      this.allstate=r
      // console.log(r)

    }
  )
}

//CITIES
city(){
  this.admin.Cities().subscribe(
    (r)=>{
      this.statecities=r
      // console.log(this.statecities)
    }
  )
}

///Qualification
education(){
  this.admin.Qualification().subscribe(
    (r)=>{
      this.qualificationList=r.hightest_qualification
      
    }
  )
}
///IMAGE 
imageupload(event:any){
  this.image=<File>event.target.files[0];
  // console.log(this.image)
  

}

chooice(event:any){
  // alert(event.target.value)
  var c = this.statecities.filter((r)=>r.name===event.target.value) 
  this.cities=c[0].city
  // console.log(this.cities)
  
}  
///SELECTED QUALIFICATION ADD IN SET
selected(data:any){
  
  console.log(data)
  if (this.qua.has(data) )
    {
        this.qua.delete(data)
        console.log(this.qua)
        console.log(Array.from(this.qua).join(','))
    }
  else{
    this.qua.add(data)
    console.log(this.qua)
    console.log(Array.from(this.qua).join(','))
  }
}

department(event:any){
  console.log(event.target.value)
  console.log(this.job.Speciality)
}

//EDIT JOB
  onSubmit(event:any){
    // console.log(event.title.value)
    // console.log("submit")
    // console.log(this.job.category)
  
  
  var formData = new FormData();
  // formData.append("category",event.title.value)
  formData.append("Speciality",this.job.Speciality)
  formData.append("designation",this.job.designation)
  formData.append("hosptial_name",this.job.hosptial_name)
  //formData.append("hospitail_image",this.image,this.image.name)
  formData.append("state",this.job.state)
  formData.append("location",this.job.location)
  formData.append("salary",this.job.salary)
  formData.append("monthly_or_anual",this.job.monthly_or_anual)
  formData.append("vacancy",this.job.vacancy)
  formData.append("working_hours",this.job.working_hours)
  formData.append("qualification",Array.from(this.qua).join(','))
  formData.append("working_day",this.job.working_day)
  formData.append("discription",this.job.discription)
  formData.append("accommodation",this.job.accommodation)
  formData.append("hospital_type",this.job.hospital_type)
  formData.append("job_type",this.job.job_type)
  formData.append("total_bed",this.job.total_bed)
  formData.append("icu",this.job.icu)
  formData.append("nicuc",this.job.nicuc)
  formData.append("picu",this.job.picu)
  formData.append("hr_contact",this.job.hr_contact)
  formData.append("social_contact",this.job.social_contact)
  formData.append("experince",this.job.experince)
  formData.append("gender",this.job.gender)
  formData.append("job_status",this.job.job_status)
  this.admin.Updatedetails(this.id,formData).subscribe(
    (r)=>{
      console.log(r)
      
      this.toastr.success(r.message)
      this.router.navigate(['/admin/jobs/all-jobs'])
    
    }
  )



  }
  

}

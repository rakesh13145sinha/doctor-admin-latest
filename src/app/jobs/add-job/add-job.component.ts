import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  qualification = new FormControl();

  qualificationList: string[] = [ ];

  
  qua =new Set();
  jobform:any;
  departments:any[]=[];
  hospitaltypes:any[]=[]
  designations:any[]=[];
  categories:any[]=[];
  allstate:any[]=[];
  image!:File;
  statecities:any[]=[];
  cities:any[]=[];
  edu:any[]=[];

  constructor(private admin:SuperuserService,private fb:FormBuilder,private toastr:ToastrService) { 
    this.jobform=fb.group({
                            hospitalname:[""],
                            hospitaltype:[""],
                            category:[""],
                            depatment:[""],
                            designation:[""],
                            discription:[""],
                            qualifcation:[""],
                            state:[""],
                            city:[""],
                            qualification:[""],
                            days:[""],
                            hours:[""],
                            jobtype:[""],
                            accomodation:[""],
                            salary:[""],
                            duration:[""],
                            vacancy:[""],
                            totalbed:[""],
                            icu:[""],
                            nicuc:[""],
                            picu:[""],
                            hrcontact:[""],
                            socialcontact:[""],
                            experince:[""],
                            gender:[""],
                            status:[""]

                           })

  }

  ngOnInit(): void {
    this.speciality()
    this.hospitaltype()
    this.designation()
    this.allcategories()
    this.states()
    this.city()
    this.education()
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

AddJobs(){
  console.log(this.jobform.value.hospitalname)
  console.log(this.jobform.value.hospitaltype)
  console.log(this.image,this.image.name)
  console.log(this.jobform.value.category)
  console.log(this.jobform.value.depatment)
  console.log(this.jobform.value.designation)
  console.log(this.jobform.value.state)
  console.log(this.jobform.value.city)
  console.log(this.jobform.value.discription)
  console.log(this.jobform.value.days)
  console.log(this.jobform.value.hours)
  console.log(this.jobform.value.jobtype),
  console.log(Array.from(this.qua).join(','))
  console.log(this.jobform.value.accomodation)
  console.log(this.jobform.value.salary)
  console.log(this.jobform.value.duration)
  console.log(this.jobform.value.vacancy)
  console.log(this.jobform.value.totalbed)
  console.log(this.jobform.value.icu)
  console.log(this.jobform.value.nicuc)
  console.log(this.jobform.value.picu)
  console.log(this.jobform.value.hrcontact)
  console.log(this.jobform.value.socialcontact)
  console.log(this.jobform.value.experince)
  console.log(this.jobform.value.gender)
  var formData=new FormData();
  formData.append("category",this.jobform.value.category)
  formData.append("Speciality",this.jobform.value.depatment)
  formData.append("designation",this.jobform.value.designation)
  formData.append("hosptial_name",this.jobform.value.hospitalname)
  formData.append("hospitail_image",this.image,this.image.name)
  formData.append("state",this.jobform.value.state)
  formData.append("location",this.jobform.value.city)
  formData.append("salary",this.jobform.value.salary)
  formData.append("monthly_or_anual",this.jobform.value.duration)
  formData.append("vacancy",this.jobform.value.vacancy)
  formData.append("working_hours",this.jobform.value.hours)
  formData.append("qualification",Array.from(this.qua).join(','))
  formData.append("working_day",this.jobform.value.days)
  formData.append("discription",this.jobform.value.discription)
  formData.append("accommodation",this.jobform.value.accomodation)
  formData.append("hospital_type",this.jobform.value.hospitaltype)
  formData.append("job_type",this.jobform.value.jobtype)
  formData.append("total_bed",this.jobform.value.totalbed)
  formData.append("icu",this.jobform.value.icu)
  formData.append("nicuc",this.jobform.value.nicuc)
  formData.append("picu",this.jobform.value.picu)
  formData.append("hr_contact",this.jobform.value.hrcontact)
  formData.append("social_contact",this.jobform.value.socialcontact)
  formData.append("experince",this.jobform.value.experince)
  formData.append("gender",this.jobform.value.gender)
  formData.append("job_status",this.jobform.value.status)
  this.admin.CreateJobs(this.jobform.value.category,formData).subscribe(
    (r)=>{
      console.log(r)
      this.toastr.success("Job Posted successfull")
      this.jobform.reset()
    
    }
  )
  


 

}

}

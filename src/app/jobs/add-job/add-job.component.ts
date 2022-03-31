import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {FormControl} from '@angular/forms';
import { delay } from 'rxjs';

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
  CatName:any;
  typeofhospital:boolean=true
  formSubmitted:boolean=false
  hospital:any[]=[];
  searchhospital:any;
  icu:any;
  

  constructor(private admin:SuperuserService,private fb:FormBuilder,private toastr:ToastrService) { 
    this.jobform=fb.group({
                            hospitalname:["",[Validators.required]],
                            hospitaltype:["",[Validators.required]],
                            category:["",[Validators.required]],
                            depatment:["",[Validators.required]],
                            designation:["",[Validators.required]],
                            discription:["",[Validators.required]],
                            qualifcation:["",[Validators.required]],
                            state:["",[Validators.required]],
                            city:["",[Validators.required]],
                            qualification:["",[Validators.required]],
                            days:["",[Validators.required]],
                            hours:["",[Validators.required]],
                            jobtype:["",[Validators.required]],
                            accomodation:["",[Validators.required]],
                            salary:["",[Validators.required]],
                            duration:["",[Validators.required]],
                            vacancy:["",[Validators.required]],
                            totalbed:["",[Validators.required]],
                            icu:["",[Validators.required]],
                            nicuc:["",[Validators.required]],
                            picu:["",[Validators.required]],
                            hrcontact:["",[Validators.required]],
                            socialcontact:["",[Validators.required]],
                            experince:["",[Validators.required]],
                            gender:["",[Validators.required]],
                            status:["",[Validators.required]]

                           })

  }

  ngOnInit(): void {
    
    this.hospitaltype()
    
    this.allcategories()
    this.states()
    this.city()
    this.education()
  }

  

  

///GETING DEPARTMET RALETED TO CATEGORY
  categoryName(event:any){
    // this.admin.categroyGEt(event.target.value).subscribe(
    //   (c)=>{
        
        this.speciality(event.target.value)
        this.categorydesignation(event.target.value)
    //   }
    // )
    
    
  }

  ///GETING DESIGNATION RELATED TO CATEGORY
categorydesignation(event:any){
  this.admin.categoryDepartment(event).subscribe(
    (r)=>{
      if (r.status!=false){
        this.designations=r
        console.log(r)

        }
      else{
        var array:any[]=[]
        this.designations=array
        console.log(r)

      }
      

    }
  )
  
}

//DEPARTMENT
speciality(id:any){
  this.admin.CategoryReletedDepatment(id).subscribe(
    (r)=>{
      var array:any[]=[]
      if (r.message){
        this.departments=array
        
      }
      else{

        this.departments=r
        console.log(r)

      }
      
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
 
//hospital type
hospital_type(event:any){
  console.log(event)
  
  if (event.target.value=="Others")

    {
      console.log(event.target.value)
      this.typeofhospital=false
      
      console.log(this.jobform.value.hospitaltype)
      this.jobform.value.hospitaltype=event.target.value
      console.log(this.jobform.value.hospitaltype)


    }
  
  else{
    this.typeofhospital=true
    console.log(event.target.value)
    console.log(this.jobform.value.hospitaltype)
    this.jobform.value.hospitaltype=event.target.value
    console.log(this.jobform.value.hospitaltype)
  }
  
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

hospitals(event:any){
  console.log(event.target.value)
  this.admin.HospitalINFOName(event.target.value).subscribe(
    (r)=>{
      this.hospital=r
      console.log(r)
    }
  )
}

selecthospital(name:any){
  console.log(name.target.value)
  var name_and_location=name.target.value.split("/")
  console.log(name_and_location[0])
  console.log(name_and_location[1])
  if (name.target.value){
    this.admin.HospitalNamenandLocation(name_and_location[0],name_and_location[1]).subscribe(
      (r)=>{
        this.searchhospital=r
        console.log(r)
      }
    )

  }
else{
  console.log("thinking")
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
  if (this.jobform.valid)
    
    {
      console.log("=========================")
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
  else{
    this.formSubmitted=true
  }
  
  


 

}

}

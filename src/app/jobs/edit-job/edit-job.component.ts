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
  selected="MBBS"
  id:any;
  hospitalinfo:any;
  job:any;
  image!:File
  qua =new Set();
  departments:any[]=[];
  hospitaltypes:any[]=[]
  designations:any[]=[];
  categories:any[]=[];
  allstate:any[]=[];
  allhospitalinof:any[]=[];
  statecities:any[]=[];
  cities:any[]=[];
  edu:any[]=[];
  constructor(private admin:SuperuserService,
              private toastr:ToastrService,
              private activeroute:ActivatedRoute,
              private router:Router
             
                ) {
                  this.activeroute.paramMap.subscribe(
                  (r)=>{
                    this.id=r.get("id")
                    console.log(this.id)
                  }
                  
                  )
                  
                  
                 }

  ngOnInit(): void {
    this.SingleJob()
    this.hospitaltype()
    this.allcategories()
    this.states()
    this.city()
    this.education()
    this.hospitalinformation()
    
  }

  hospitals(event:any){
    console.log("============================================")
    console.log(event.target.value)

  }  
  hospitalinformation(){
    this.admin.HospitalINFOGET().subscribe(
      (r)=>{
        this.allhospitalinof=r
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
          
          
         
        }
      )
  
    }
  else{
    console.log("thinking")
  }
   
     
    
  }
//SINGLE JOB
SingleJob(){
  this.admin.Jobdetails(this.id).subscribe(
    (r)=>{
      this.job=r
      console.log(this.job)
      this.hospitalinfo=this.job["hospital"]
      this.categorydesignation(this.job.category)
      this.Depart_Speciality(this.job.category)
      
    }
  )

    }

 
  

///SELECT CATEGORY NAME

categoryName(event:any){
  console.log(event.target.value)
    console.log(event.target.value)
    this.categorydesignation(event.target.value)
    this.Depart_Speciality(event.target.value)
   
  
}
///CATEGORY DESIGNATION
categorydesignation(category:any){
  this.admin.categoryDepartment(category).subscribe(
    (r)=>{
      if (r.status!=false){
        this.designations=r
        console.log(r)

        }
      else{
        var array:any[]=[{"designation":"null"}]
        this.designations=array
        console.log(r)

      }
      

    }
  )
  
}

//DEPARTMENT
Depart_Speciality(category:any){
  this.admin.CategoryReletedDepatment(category).subscribe(
    (r)=>{
      var array:any[]=[{"department":"Null"}]
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
Speciality(event:any){
  this.job.Speciality=event.target.value
  console.log(event.target.value)
}
location(event:any){
  console.log(event.target.value)
    this.job.location=event.target.value
}
position(event:any){
  console.log(event.target.value)
    this.job.designation=event.target.value

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
//HOSPITAL TYPE
  hospitaltype(){
    this.admin.HospitalType().subscribe(
      (r)=>{
        
        this.hospitaltypes=r
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
select(data:any){
  
  //console.log(data)
  console.log(this.job.qualification.split(","))
  if (this.qua.has(data) )
    {
        this.qua.delete(data)
        // console.log(this.qua)
        console.log(Array.from(this.qua).join(','))
    }
  else{
    this.qua.add(data)
    //console.log(this.qua)
    console.log(Array.from(this.qua).join(','))
  }
}



//EDIT JOB
  onSubmit(event:any){
    
  
  var formData = new FormData();
  // formData.append("category",this.job.category)
  formData.append("Speciality",this.job.Speciality)
  formData.append("designation",this.job.designation)
  formData.append("hosptial_name",this.job.hosptial_name)
  // formData.append("hospitail_image",this.image,this.image.name)
  //formData.append("state",this.job.state)
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
  formData.append("hr_contact",this.job.hr_contact)
  
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

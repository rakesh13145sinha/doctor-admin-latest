import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  hospitaltypes:any[]=[];
  image_url=this.admin.imageurl
  states:any[]=[];
  cities:any[]=[];
  typeofhospital:boolean=false;
  hospitalinfoform:any;
  status:boolean=false
  hospitaltourimage:any[]=[];
  hospitaltourimg:any;
  selectedFiles!:FileList;
  hospitalid:any;
  hospitalhighlight:any;
  hospital_h_lights:any[]=[];
  highlightimage!:File;
  Speciality:any;
  Specialityget:any[]=[];
  SpecialityImage!:File;


  constructor( private admin:SuperuserService, private fb:FormBuilder,private toastr:ToastrService) 
      { 
        this.hospitalinfoform= fb.group({
          name:["",[Validators.required]],
          typeofhospital:["",[Validators.required]],
          state:["",[Validators.required]],
          location:["",[Validators.required]],
          no_of_sepeciality:["",[Validators.required]],
          no_of_bed:["",[Validators.required]],
          daily_OPD:["",[Validators.required]],
          no_of_OT:["",[Validators.required]],
          icu:["",[Validators.required]],
          nicuc:["",[Validators.required]],
          picu:["",[Validators.required]]




        })


        this.hospitaltourimg=this.fb.group({
          himage:[""]
        })


        this.hospitalhighlight=this.fb.group({
          highlightimage:[""],
          title:["",[Validators.required]]

        })


        this.Speciality=this.fb.group({
          image:[""],
          title:["",[Validators.required]]

        })
      }

  ngOnInit(): void {
    this.hospitaltype(),
    this.State(),
    this.hospital_tour_image(),
    this.Highlight();
    this.HospitalSpecialities()
    
   
  }
    //this.hospitaltype()

//HOSPITAL TYPE
hospitaltype(){
  this.admin.HospitalType().subscribe(
    (r)=>{
      
      this.hospitaltypes=r
      console.log(r)

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
    
    console.log(this.hospitalinfoform.value.hospitaltype)
    this.hospitalinfoform.value.hospitaltype=event.target.value
    console.log(this.hospitalinfoform.value.hospitaltype)


  }

else{
  this.typeofhospital=true
  console.log(event.target.value)
  console.log(this.hospitalinfoform.value.hospitaltype)
  this.hospitalinfoform.value.hospitaltype=event.target.value
  console.log(this.hospitalinfoform.value.hospitaltype)
}

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


//Post new hospital record
onSubmit(){
  
  if(this.hospitalinfoform.valid){
    console.log("valide")
    this.admin.HospitalINFO(this.hospitalinfoform.value).subscribe(
      (r)=>{
        // this.hospitalid=r.id
        localStorage.setItem("hospitalid",r.id)
        this.toastr.success("Hospital added successfull",r.id)
        this.hospitalinfoform.reset()

      }
    )

  }
  else{
    this.status=true
    this.toastr.error(this.hospitalinfoform.value)
  }


}

///GET HOSPITAL IMAGE AND VEDIOS
hospital_tour_image(){
  this.admin.Hospitaltourimageget(localStorage.getItem("hospitalid")).subscribe(
    (r)=>{
      this.hospitaltourimage=r
    }
  )

}

//HOSPITAL IMAGE AND VEDIOS
imageupload(event:any){
  this.selectedFiles=<FileList>event.target.files

}
///API CALL FOR HOSPITAL IMAGE UPLOAD
ImageUploadSumit(){
    
    var formData=new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++)
      {
          formData.append("file",this.selectedFiles[i])
          
        
          this.admin.Hospitaltourimage(localStorage.getItem("hospitalid"),formData)
            .subscribe(
                        (r)=>{
                          console.log(r)
                          console.log(localStorage.getItem("hospitalid"))
                          console.log(this.selectedFiles[i])
                          this.toastr.success("Hospital tour image uploaded successfull",)
                          }
                      )
        }
  this.hospital_tour_image()
  this.hospitaltourimg.reset()

  }
    ///delete hospital image and videos
    ///delete hospital toure image
deletehospitaltourimage(id:any){
      var con=confirm("Confirm remove this record");
    if (con){

          this.admin.Hospitaltourimagedelete(id).subscribe(
          (r)=>{
            console.log(r)
            this.toastr.error("Hospital tour image deleted successfull")
            this.hospital_tour_image()
          }
        )
      
    }
    else{
      this.hospital_tour_image()
    }
    
    } 

///HOSPITAL HIGHTLIGHS

/// GET HOSPITAL TOUR HIGHLIGHT
Highlight(){

  this.admin.Hospitaltourighlightsget(localStorage.getItem('hospitalid')).subscribe(
    (r)=>{
      this.hospital_h_lights=r
    }
  );

}
  
///HOSPITAL HIGHLIGHT IMAGE
highlightimg(event:any){
  this.highlightimage=<File>event.target.files[0]
  console.log(this.highlightimage)

}

  highlightupload(){

    console.log(this.hospitalhighlight.value.title)
    var formData=new FormData();
    formData.append("file",this.highlightimage,this.highlightimage.name)
    formData.append("title",this.hospitalhighlight.value.title)
    this.admin.Hospitaltourighlights(localStorage.getItem("hospitalid"),formData).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success("Hospital tour highlight uploaded successfull")
        this.hospitalhighlight.reset()
        this.Highlight()
      }
    )

    
  }


   ///delete hospital highlights delete

   hospitalhighdelete(id:any){
    var con =confirm("Sour you want to remove this record")
    if (con){

        this.admin.Hospitaltourighlightsdelete(id).subscribe(
          (r)=>{
            
            this.toastr.error("Highlighs deleted successfull")
            this.Highlight()
          }
        )

    }
    else{
      this.Highlight()
    }
  
}

  ///Speciality

  HospitalSpecialities(){
    this.admin.HospitalSpecialityget(localStorage.getItem("hospitalid")).subscribe(
      (r)=>{
        this.Specialityget=r
      }
    );

  }

  ///HOSPITAL SPECIALITY
  hospitalSpecialityImage(event:any){
    this.SpecialityImage=<File>event.target.files[0]
    console.log(this.SpecialityImage)

  }

  Hospitalspiciality(){
   
    console.log(this.Speciality.value.title)
    var formData=new FormData();
    formData.append("file",this.SpecialityImage,this.SpecialityImage.name)
    formData.append("title",this.Speciality.value.title)
    this.admin.HospitalSpeciality(localStorage.getItem("hospitalid"),formData).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success("Hospital tour Speciality uploaded successfull")
        this.Speciality.reset()
        this.HospitalSpecialities()
        
      }
    )

  }

}

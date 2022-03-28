import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-hospital-tour',
  templateUrl: './hospital-tour.component.html',
  styleUrls: ['./hospital-tour.component.css']
})
export class HospitalTourComponent implements OnInit {
  selectedFiles!: FileList;
  id:any;
  image_url=this.admin.imageurl
  hospitaltourimg:any;
  hospitalhighlight:any;
  hospital_h_lights:any[]=[]
  highlightimage!:File;
  Speciality:any;
  SpecialityImage!:File;
  Specialityget:any[]=[];
  Hospitalinfo:any;
  
  constructor(
              private admin:SuperuserService,
              private activerouter :ActivatedRoute,
              private toastr:ToastrService,
              private fb:FormBuilder,
              private router:Router
            ) {
              this.activerouter.paramMap.subscribe(
                (r)=>this.id=r.get('id')

              )
              this.hospitaltourimg=this.fb.group({
                himage:[""]
              })
              
              this.hospitalhighlight=this.fb.group({
                highlightimage:[""],
                title:[""]

              })

              this.Speciality=this.fb.group({
                image:[""],
                title:[""]

              })


              this.Hospitalinfo=this.fb.group({
                no_of_OT:[""],
                location:[""],
                no_of_sepeciality:[""],
                no_of_bed:[""],
                daily_OPD:[""],

              })
             }

  ngOnInit(): void {
   this.admin.Hospitaltourighlightsget(this.id).subscribe(
     (r)=>{
       this.hospital_h_lights=r
     }
   );
   this.admin.HospitalSpecialityget(this.id).subscribe(
    (r)=>{
      this.Specialityget=r
    }
  );
  }
  imageupload(event:any){
    this.selectedFiles=<FileList>event.target.files
  }

  

  ImageUploadSumit(){
    
    var formData=new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++){
      formData.append("file",this.selectedFiles[i])
      
     
      this.admin.Hospitaltourimage(this.id,formData).subscribe(
      (r)=>{
        console.log(r)
        console.log(this.selectedFiles[i])
        this.toastr.success("Hospital tour image uploaded successfull")
       
        
      }
    )
    //this.hospitaltourimg.reset()
    

    }
    
   
    
    
    
  }


  ///HOSPITAL HIGHLIGHT 

  highlightimg(event:any){
    this.highlightimage=<File>event.target.files[0]
    console.log(this.highlightimage)

  }
  highlightupload(){
    console.log(this.hospitalhighlight.value.title)
    var formData=new FormData();
    formData.append("file",this.highlightimage,this.highlightimage.name)
    formData.append("title",this.hospitalhighlight.value.title)
    this.admin.Hospitaltourighlights(this.id,formData).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success("Hospital tour highlight uploaded successfull")
        this.hospitalhighlight.reset()
      }
    )

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
    this.admin.HospitalSpeciality(this.id,formData).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success("Hospital tour Speciality uploaded successfull")
        this.Speciality.reset()
        
      }
    )

  }

  HospitalInfo(){
    console.log(this.Hospitalinfo.value)
    
    this.admin.HospitalINFO(this.id,this.Hospitalinfo.value).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success("Hospital tour Info uploaded successfull")
        this.Hospitalinfo.reset()
        
      }
    )

  }

}

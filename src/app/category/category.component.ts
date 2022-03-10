import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from '../superuser.service';
import { FormBuilder } from '@angular/forms';
import { filter } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any[]=[]
  categorypost:any;
  image!:File;
  singlecategory:any;
  deleteid:any;
  pageSize:any=5;
  currentPage:any=1;

  // image_url=this.admin.imageurl

  constructor(private admin:SuperuserService,
              private router:Router,
              private toastr:ToastrService,
              private fb:FormBuilder
              ) {

                this.categorypost= fb.group({
                  title:[""],
                  image:[''],
                  status:[""],
                  about:[""]

                })


               }

  ngOnInit(): void {
    this.showcategory()
  }

  //UPLOAD IMAGE
  uploadimage(event:any){
    this.image=<File>event.target.files[0];
    console.log(this.image)

  }
  //ALL CATEGORY SHOW

  showcategory(){
    this.admin.Allcategory().subscribe(
      (r)=>{
        this.category=r
        // console.log(r)
      }
    )
  }

  //CATEGORY POST FUNCTION
  CategoryPost(){
    var formData =new FormData();
    formData.append("title",this.categorypost.value.title)
    formData.append("image",this.image,this.image.name)
    formData.append('about',this.categorypost.value.about)
    formData.append("category_status",this.categorypost.value.status)
    this.admin.PostCategory(formData).subscribe(
      (r)=>{
        this.toastr.success("Category Created")
        this.showcategory()
        this.categorypost.reset()
      }
    )

  }


  //WHICH CATEGORY WANT TO UPDATE
  editcategory(id:any){
    console.log(id)
    this.singlecategory=this.category.filter((x)=>x.id==id)
    console.log(this.singlecategory)

  }
  //UPDATE CATEGORY
  CategoryUpdate(){

  }



  //WHICH CATEGORY WANT TO DELETE
  categorydelete(id:any){
     this.deleteid=id
  }

  //CATEGORY DELETE FUNCTION
  delete(){
    console.log()
    this.admin.DeleteCategory(this.deleteid).subscribe(
      (r)=>{
        this.toastr.success(r.message)
        this.showcategory()
    }
    )

  }
}

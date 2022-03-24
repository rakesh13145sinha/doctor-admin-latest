import { Component, OnInit } from '@angular/core';
import { SuperuserService } from '../superuser.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category:any;
  id:any;
  image!:File;
  image_url=this.admin.imageurl
  constructor(private admin:SuperuserService,
              private router:Router,
              private active:ActivatedRoute,
              private  toastr:ToastrService
              ) {
                this.active.paramMap.subscribe(
                  (r)=>{
                    this.id=r.get("id")
                  }
                )

                this.admin.categroyGEt(this.id).subscribe(
                  (r)=>{
                    this.category=r
                    console.log(this.category)
                  }
                )
               }

  ngOnInit(): void {
   
  }
  uploadimage(event:any){
    this.image=<File>event.target.files[0];
    console.log(this.image)

  }

  Updatecategory(data:any){
    var formData= new FormData();
    formData.append("title",this.category.title)
    formData.append("about",this.category.about)
    formData.append("category_status",this.category.category_status)
    formData.append("image",this.image,this.image.name)
    this.admin.Updatecategory(this.id,formData).subscribe(
      (r)=>{
        console.log(r)
        this.toastr.success('Category Updated')
        this.router.navigate(['/admin/category'])
      }
    )

  }
}

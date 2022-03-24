import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[]=[]
  pageSize:any=5;
  currentPage:any=1;
  image_url=this.admin.imageurl

  constructor(private admin:SuperuserService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.ShowAllUser()
  }

  ShowAllUser(){
    this.admin.AllUser().subscribe(
      res=>{
        this.users=res
        console.log("user")
        console.log(res)
      }
    )
  }

  Delete(id:any){
    this.admin.DeleteUser(id).subscribe(
      res=>{
        this.toastr.success(res.message)
        this.ShowAllUser()
      }
    )

  }

}

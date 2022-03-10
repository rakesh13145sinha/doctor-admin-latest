import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperuserService } from 'src/app/superuser.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private fb:FormBuilder,
              private _admin:SuperuserService,
              private toastr: ToastrService,
              private router:Router
             ){
    this.loginForm=fb.group({
      email:[""],
      password:[""]

    })

  }

  ngOnInit(): void {
  }

  onsubmit(){

    this._admin.adminLogin(this.loginForm.value).subscribe(
      (res)=>{
        if (res.status){

          if (res.superuser_status){
              this.toastr.success("Welcome Admin"+" "+res.username)

              this._admin.SetUsername(res.username,res.superuser_status)
              this._admin.SetToken(res.token)

              this.router.navigate(['/admin/home'])
              

          }
          else{
            this.toastr.success("You are Member "+" "+res.username)
          }
        }else{
          this.toastr.error("somthing not correct")
          console.log(res)

        }

      },
      (e)=>{
        this.toastr.error(e.error.errors)
        this.loginForm.reset()
      }

    )

  }



}

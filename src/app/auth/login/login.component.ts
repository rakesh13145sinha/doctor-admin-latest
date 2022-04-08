import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperuserService } from 'src/app/superuser.service';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  formSubmitted : boolean = false; 
  constructor(private fb:FormBuilder,
              private _admin:SuperuserService,
              private toastr: ToastrService,
              private router:Router
             ){
    this.loginForm=fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]

    })

  }

  ngOnInit(): void {
  }

  onsubmit(){
    if(this.loginForm.valid){

      this._admin.adminLogin(this.loginForm.value).subscribe(
        (res)=>{
          if (res.status){
  
            if (res.superuser_status){
                this.toastr.success("Welcome Admin"+" "+res.username)
  
                this._admin.SetUsername(res.username,res.superuser_status)
                this._admin.SetToken(res.token)
                this._admin.isLoggedIn()
                this._admin.GetToken()
                this._admin.GetAdmin()
               
                
                this._admin.user.next(res.username)

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

    else{
      this.formSubmitted = true;
    }
    
  }



}

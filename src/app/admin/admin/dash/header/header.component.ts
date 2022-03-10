import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminusername:any;
  constructor(private admin:SuperuserService,private router:Router) {

   }

  ngOnInit(): void {
    this.adminusername=localStorage.getItem('username')

  }

  Loggout(){
    this.admin.adminLogout()
    this.router.navigate(["/admin-auth"])
  }

}

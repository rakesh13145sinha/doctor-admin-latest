import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperuserService } from 'src/app/superuser.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases:any[]=[]


  pageSize:any=5;
  currentPage:any=1;

  // image_url=this.admin.imageurl

  constructor(private admin:SuperuserService,
              private router:Router,
              private toastr:ToastrService,

              ){}

  ngOnInit(): void {
    this.admin.GetAllCase().subscribe(
      (r)=>{
        this.cases=r
      }
    )

  }

}

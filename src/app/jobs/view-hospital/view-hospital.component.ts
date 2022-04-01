import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.css']
})
export class ViewHospitalComponent implements OnInit {
  id:any
  hospital:any
  constructor(private admin:SuperuserService,private router:ActivatedRoute) { 
    this.router.paramMap.subscribe(
      (r)=>{
        this.id=r.get('id')
      }
    )
  }

  ngOnInit(): void {
    this.admin.Hospitalgetid(this.id).subscribe(
      (r)=>{
        this.hospital=r
        console.log(r)
      }
    )
  }

}

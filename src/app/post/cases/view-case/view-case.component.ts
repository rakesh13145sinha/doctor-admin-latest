import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperuserService } from 'src/app/superuser.service';

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.css']
})
export class ViewCaseComponent implements OnInit {
  case:any;
  caseid:any;
  constructor(
              private admin:SuperuserService,
              private activeroute:ActivatedRoute
              ) {
                this.activeroute.paramMap.subscribe(
                  (r)=>{
                    this.caseid=r.get('id')
                  }
                )
              }

  ngOnInit(): void {
    this.admin.Case(this.caseid).subscribe(
      (r)=>{
        this.case=r[0]
        console.log(r)
      }
    )
  }

}

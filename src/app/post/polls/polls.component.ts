import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperuserService } from 'src/app/superuser.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  polls:any[]=[]


  pageSize:any=5;
  currentPage:any=1;

  // image_url=this.admin.imageurl

  constructor(private admin:SuperuserService,
              ){}


  ngOnInit(): void {
    this.admin.GetAllPoll().subscribe(
      (r)=>{
        this.polls=r
      }
    )

  }

}

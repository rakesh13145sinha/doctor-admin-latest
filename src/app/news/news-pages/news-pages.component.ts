import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
@Component({
  selector: 'app-news-pages',
  templateUrl: './news-pages.component.html',
  styleUrls: ['./news-pages.component.css']
})
export class NewsPagesComponent implements OnInit {
  newpage:any[]=[];
  imageurl:any
  constructor(private admin:SuperuserService) {
    this.imageurl=this.admin.imageurl
   }

  ngOnInit(): void {
    this.admin.GetAllNewPage().subscribe(
      (res)=>{
        this.newpage=res
      }
    )
  }

}

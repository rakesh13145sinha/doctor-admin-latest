import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articals:any[]=[]
  pageSize:any=5;
  currentPage:any=1;

  constructor(private admin:SuperuserService) { }


  ngOnInit(): void {
    this.admin.GetAllArticals().subscribe(
      (r)=>{
        this.articals=r

      }
    )

  }

}

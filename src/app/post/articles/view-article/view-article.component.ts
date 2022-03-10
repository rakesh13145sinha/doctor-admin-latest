import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  artical:any;
  articalid:any;
  constructor(private admin:SuperuserService,private activeroute:ActivatedRoute) {
    this.activeroute.paramMap.subscribe(
      (res)=>{
        this.articalid=res.get('id')
      }
    )
   }

  ngOnInit(): void {
    this.admin.Artical(this.articalid).subscribe(
      (res)=>{
        this.artical=res[0]
      }
    )
  }

}

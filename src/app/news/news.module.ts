import { NewsPagesComponent } from './news-pages/news-pages.component';
import { ReportedNewsComponent } from './reported-news/reported-news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { PostedNewsComponent } from './posted-news/posted-news.component';
import { PostNewsComponent } from './posted-news/post-news/post-news.component';
import { EditNewsComponent } from './posted-news/edit-news/edit-news.component';
import { ViewNewsComponent } from './posted-news/view-news/view-news.component';
import { PagesWiseNewsComponent } from './news-pages/pages-wise-news/pages-wise-news.component';


@NgModule({
  declarations: [
    PostedNewsComponent,
    ReportedNewsComponent,
    NewsPagesComponent,
    PostNewsComponent,
    EditNewsComponent,
    ViewNewsComponent,
    PagesWiseNewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }

import { PagesWiseNewsComponent } from './news-pages/pages-wise-news/pages-wise-news.component';
import { ViewNewsComponent } from './posted-news/view-news/view-news.component';
import { ReportedNewsComponent } from './reported-news/reported-news.component';
import { PostedNewsComponent } from './posted-news/posted-news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPagesComponent } from './news-pages/news-pages.component';
import { PostNewsComponent } from './posted-news/post-news/post-news.component';
import { EditNewsComponent } from './posted-news/edit-news/edit-news.component';

const routes: Routes = [
  {path:"posted-news",component:PostedNewsComponent},
  {path:"reported-news",component:ReportedNewsComponent},
  {path:"news-pages",component:NewsPagesComponent},
  {path:"post-news",component:PostNewsComponent},
  {path:"view-news",component:ViewNewsComponent},
  {path:"edit-news",component:EditNewsComponent},
  {path:"pages-wise-news",component:PagesWiseNewsComponent},







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

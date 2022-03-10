import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { PollsComponent } from './polls/polls.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { CasesComponent } from './cases/cases.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { AddCaseComponent } from './cases/add-case/add-case.component';
import { EditCaseComponent } from './cases/edit-case/edit-case.component';
import { ViewCaseComponent } from './cases/view-case/view-case.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
   CasesComponent,
   ArticlesComponent,
   PollsComponent,
   EditArticleComponent,
   ViewArticleComponent,
   AddArticleComponent,
   AddCaseComponent,
   EditCaseComponent,
   ViewCaseComponent

  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    NgxPaginationModule
  ]
})
export class PostModule { }

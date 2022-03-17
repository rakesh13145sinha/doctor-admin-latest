import { ViewCaseComponent } from './cases/view-case/view-case.component';
import { EditCaseComponent } from './cases/edit-case/edit-case.component';
import { AddCaseComponent } from './cases/add-case/add-case.component';
import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { CasesComponent } from './cases/cases.component';
import { PollsComponent } from './polls/polls.component';
import { ArticlesComponent } from './articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { PgNeetComponent } from './pg-neet/pg-neet.component';

const routes: Routes = [
  {path:"articles",component:ArticlesComponent},
  {path:"polls",component:PollsComponent},
  {path:"cases",component:CasesComponent},
  {path:"add-article",component:AddArticleComponent},
  {path:"edit-article/:id",component:EditArticleComponent},
  {path:"view-article/:id",component:ViewArticleComponent},
  {path:"add-case",component:AddCaseComponent},
  {path:"edit-case",component:EditCaseComponent},
  {path:"view-case/:id",component:ViewCaseComponent},
  {path:"pg-neet",component:PgNeetComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

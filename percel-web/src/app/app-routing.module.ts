import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentIntroductionComponent } from './content-introduction/content-introduction.component';
import { ContentButtonComponent } from './content-button/content-button.component';
import { ContentAvatarComponent } from './content-avatar/content-avatar.component';
import { ContentEntityComponent } from './content-entity/content-entity.component';

const routes: Routes = [
  { path: 'introduction', component: ContentIntroductionComponent},
  { path: 'button', component: ContentButtonComponent},
  { path: 'entity', component: ContentEntityComponent},
  { path: 'avatar', component: ContentAvatarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

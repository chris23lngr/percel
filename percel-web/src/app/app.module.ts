import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentIntroductionComponent } from './content-introduction/content-introduction.component';
import { ContentButtonComponent } from './content-button/content-button.component';
import { ContentAvatarComponent } from './content-avatar/content-avatar.component';
import { ContentEntityComponent } from './content-entity/content-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentIntroductionComponent,
    ContentButtonComponent,
    ContentAvatarComponent,
    ContentEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginModule } from './app-login/app-login.module';
import { AppNewsFeedComponent } from './app-news-feed/app-news-feed.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLoginComponent } from './app-login/app-login.component';
import { AppNewsFeedComponent } from './app-news-feed/app-news-feed.component'

const routes: Routes = [
  {
    path: 'login',
    component: AppLoginComponent
  },
  {
    path: 'newsFeed',
    component: AppNewsFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppLoginComponent } from './app-login.component';

@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    AppLoginComponent
  ],
  providers: [],
  bootstrap: [AppLoginComponent]
})
export class AppLoginModule { }

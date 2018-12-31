import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppLoginComponent } from './app-login.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule
 } from '@angular/material';
@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    AppLoginComponent
  ],
  providers: [],
  bootstrap: [AppLoginComponent]
})
export class AppLoginModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import {  } from "module";
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


export const firebaseConfig = {

  apiKey: "AIzaSyA3j_N3uAJ8KunzOHElTerlisK_HTZ1_RQ",
  authDomain: "chatapp-f51be.firebaseapp.com",
  databaseURL: "https://chatapp-f51be.firebaseio.com",
  projectId: "chatapp-f51be",
  storageBucket: "chatapp-f51be.appspot.com",
  messagingSenderId: "865627944110"




}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,FormsModule,HttpModule,AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

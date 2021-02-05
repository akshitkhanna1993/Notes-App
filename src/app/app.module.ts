import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { AddNotePage } from './add-note/add-note.page';

import {IonicStorageModule} from '@ionic/storage';
import { NoteServiceService } from './note-service.service';

import {HttpClientModule} from '@angular/common/http';

import {ReactiveFormsModule,FormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,],

  entryComponents: [
   
  ],

  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      IonicStorageModule.forRoot(),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },NoteServiceService],

  bootstrap: [AppComponent],
})
export class AppModule {}

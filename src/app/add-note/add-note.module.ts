import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {ReactiveFormsModule}  from '@angular/forms';

import { AddNotePageRoutingModule } from './add-note-routing.module';

import { AddNotePage } from './add-note.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddNotePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddNotePage]
})
export class AddNotePageModule {}

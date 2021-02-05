import { Component,ViewChild } from '@angular/core';
import {NavController,IonNav} from '@ionic/angular';
import {AddNotePage} from '../add-note/add-note.page'; 
import { NoteServiceService } from '../note-service.service';
import {Router,Route}  from '@angular/router';
import { Note } from 'src/models/notes-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   notes: Promise<Note[]>;

  constructor( public noteService:NoteServiceService , public router:Router) {}

ionViewWillEnter() {
  this.notes=this.getAllNotes();
}

  addNote() {
//this.ionNav.push(AddNotePage);
this.router.navigateByUrl('add-note');
  }


  getAllNotes() {
   return this.noteService.getAllNotes();
  }

  navigateToViewtNote(createdDate){
    this.router.navigateByUrl('view-note' + '/' +createdDate);
  }
}

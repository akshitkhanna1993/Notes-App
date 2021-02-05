import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {Storage}  from '@ionic/storage';
import { Note } from 'src/models/notes-model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private notes :Note [];
  private note:Note;

  constructor(public http:HttpClient,public storage:Storage) { }

  SaveNote(note:Note) {
    note.createDate=Date.now();
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  getNote(createDate){
    debugger
    return this.storage.get('notes').then((notes)=>{
      this.note = [...notes].find(r=>r.createDate==createDate);
      return this.note;
    });
  }

  getAllNotes() {
    return this.storage.get('notes').then(
      (notes)=>{
        this.notes = notes==null ?[]:notes;
        return [...this.notes];
      });
  }

  deleteNote(createDate:Number) {
    this.notes = this.notes.filter((note)=>{
      return note.createDate !=createDate
    });
    this.storage.set('notes',this.notes);
  }

}

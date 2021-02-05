import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/notes-model';
// import { NavController,NavParams } from '@ionic/angular';
import { NoteServiceService } from '../note-service.service';
import {FormGroup,Validators,FormControl}  from '@angular/forms';
import { ToastController } from '@ionic/angular';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
formGroup:FormGroup;
note:Note;
date:Date=new Date();
title:string='';
content:string='';

  constructor(  public noteService:NoteServiceService , public toastController: ToastController ,public router:Router) { }

  ngOnInit() {
    this.formGroup=new FormGroup({
      title:new FormControl(),
      content:new FormControl(),
      date:new FormControl(),
    })
  }

  async  saveNote(note:Note) {
   this.noteService.SaveNote(note);
   const toast = await this.toastController.create({
    message: 'Note saved successfully',
    duration: 2000
  });
  toast.present();
this.router.navigateByUrl('home');
  }
}

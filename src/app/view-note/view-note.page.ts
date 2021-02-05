import { Component, OnInit } from '@angular/core';
import {NavController,NavParams} from '@ionic/angular';
import { Note } from 'src/models/notes-model';
import { NoteServiceService } from '../note-service.service';
import {Router,ActivatedRoute}  from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {
  note:Note; 
  createdDateId;

  constructor(  private noteService:NoteServiceService , private activatedRoute:ActivatedRoute,
    private router:Router,public toastController: ToastController) {
   }

  ngOnInit() {
    debugger
this.createdDateId =  this.activatedRoute.snapshot.paramMap.get('createdId');

    this.getNoteByCreatedDate()
  }

  async deleteNote() {
    debugger
this.noteService.deleteNote(this.createdDateId);
const toast = await this.toastController.create({
  message: 'Note deleted successfully',
  duration: 2000
});
toast.present();
this.router.navigateByUrl('home');
  }


  getNoteByCreatedDate(){
    debugger
    this.noteService.getNote(this.createdDateId).then((n)=>{
    this.note=n;
    console.log(this.note)
    });
  }

}

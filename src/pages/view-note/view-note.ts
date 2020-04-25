import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoteService} from '../../providers/note-service/note-service';
import {Note} from '../../models/note.model';
import { EditNotePage } from '../edit-note/edit-note';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  private note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number){//deletes note
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

  editNote(){//allows user to edit note
    this.navCtrl.push(EditNotePage, {note: this.note});
  }

  return(){//returns to Home Page
    this.navCtrl.pop();
  }
}

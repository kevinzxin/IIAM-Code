import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Note } from '../../models/note.model';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';


@Injectable()
export class NoteService {
  storedImages = []; //stores images from all notes
  private notes: Note[] = []; //stores all notes 
  private aboutMeArray: Note[] = []; //stores only notes from About Me
  private myMedicationsArray: Note[] = []; //stores only notes from My Medications
  private myConditionsArray: Note[] = []; //stores ony notes from My Conditons
  private myRecordsArray: Note[] = []; //stores only notes in Documents
  private note: Note;
  modifiedData: any;

  constructor(public storage: Storage, private camera: Camera) {

  }

 saveImage(saveObj){//stores image in the storedImages array
   this.storedImages.push(saveObj);
 }

 getStoredImages(){
  return this.storedImages;
}

  saveNote(note: Note){
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  returnNotes(){
    return this.notes;
  }

  getAllNotes(){
    return this.storage.get('notes').then((notes) => {
      this.notes = notes ==null ? [] : notes;
      this.notes.sort((a,b) => a.createDate <= b.createDate ? -1 : 1); //sort with lowest presented first
        return [...this.notes];
      }
);
  }

  getNote(createDate: number){//returns information for a particular note
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(r => r.createDate === createDate);
      return this.note;
    }); 
  }

  deleteNote(createDate: number){
    this.notes = this.notes.filter ((note) => {
      return note.createDate !== createDate
    });
    this.storage.set('notes', this.notes);
  }

  aboutMeNote(){
  //method filters through notes and identifies notes belonging in About Me
    this.aboutMeArray = this.notes;
    this.aboutMeArray = this.aboutMeArray.filter((note) => {
      return note.origin == 1
    });
    this.storage.set('aboutMeArray', this.aboutMeArray);
  }

  getAboutMeNote(){
  //method returns aboutMeArray to about.ts
    return this.storage.get('aboutMeArray').then((aboutMeArray) => {
      this.aboutMeArray = aboutMeArray == null ? [] : aboutMeArray;
      this.notes.sort((a,b) => a.createDate <= b.createDate ? -1 : 1); //sort with lowest presented first
      return [...this.aboutMeArray];
    });   

  }

  documentsNote(){
  //method filters through notes and identifies notes belonging in Documents
    this.myRecordsArray = this.notes;
    this.myRecordsArray = this.myRecordsArray.filter ((note) => {
      return note.origin == 5
    });
    this.storage.set('myRecordsArray', this.myRecordsArray);

  }

  getDocumentsNote(){
  //method returns myRecordsArray to documents.ts
    return this.storage.get('myRecordsArray').then((myRecordsArray) => {
      this.myRecordsArray = myRecordsArray == null ? [] : myRecordsArray;
      this.notes.sort((a,b) => a.createDate <= b.createDate ? -1 : 1); //sort with lowest presented first
      return [...this.myRecordsArray];
    });
  }

  medicationsNote(){
  //method filters through notes and identifies notes belonging in Medications
    this.myMedicationsArray = this.notes;
    this.myMedicationsArray = this.myMedicationsArray.filter((note) => {
      return note.origin == 7;
    });
    this.storage.set('myMedicationsArray', this.myMedicationsArray);
  }

  getMedicationsNote(){
  //method returns myMedicationsArray to medications.ts
  return this.storage.get('myMedicationsArray').then((myMedicationsArray) => {
    this.myMedicationsArray = myMedicationsArray == null ? [] : myMedicationsArray;
    this.notes.sort((a,b) => a.createDate <= b.createDate ? -1 : 1); //sort with lowest presented first
    return [...this.myMedicationsArray];
  });
  }

  updateEditedNote(note: Note){
    this.notes.push(note);
    this.storage.set('notes', this.notes);


  }

}

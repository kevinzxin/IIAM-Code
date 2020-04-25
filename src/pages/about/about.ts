import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController} from 'ionic-angular';
import {AddNotePage} from '../add-note/add-note';
import {NoteService} from '../../providers/note-service/note-service';
import {Note} from '../../models/note.model';
import {ViewNotePage} from '../view-note/view-note';
import {HomePage} from '../home/home';
import {BioPage} from '../bio/bio';
import {Bio} from '../../models/bio.model';
import {DemographicServiceProvider} from '../../providers/demographic-service/demographic-service';

import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  private aboutMeArray: Promise<Note[]>;
  private bioArray: Promise<Bio[]>;
  private note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformOne: Platform, public actionsheetCtrlOne: ActionSheetController, private noteService: NoteService, private demographicServiceProvider: DemographicServiceProvider) {
  }

  homeFromOne(){//brings user back to home page
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter(){//runs when page is about to enter and become the active page
    this.aboutMeArray = this.getNotes();
    this.bioArray = this.getBio(); 
  }

  ionViewDidEnter(){//runs when page has fully entered and is now active page
    this.aboutMeArray = this.getNotes();
    this.bioArray = this.getBio(); 
  }

  getNotes(){
    return this.noteService.getAllNotes();
  }

  getNote(createDate: number){//retrieves a particular note
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.navCtrl.push(ViewNotePage, {note: this.note})
    })
  }

  getBio(){
    return this.demographicServiceProvider.getDemographics();
  }

  openMenuOne() {//opens menu list 
    let originAboutMe = {
      noteOrigin: 1
    };

    let actionSheetOne = this.actionsheetCtrlOne.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-one',
      buttons: [
        {
          text: 'Fill biographic information',
          handler: () => {
            this.navCtrl.push(BioPage);
          }
        },
        {
          text: 'Add note',
          handler: () => {
            this.navCtrl.push(AddNotePage,originAboutMe);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          icon: !this.platformOne.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetOne.present();
  }
}



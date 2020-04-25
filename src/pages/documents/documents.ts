import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController} from 'ionic-angular';
import {AddNotePage} from '../add-note/add-note';
import {NoteService} from '../../providers/note-service/note-service';
import {Note} from '../../models/note.model';
import {ViewNotePage} from '../view-note/view-note';
import {AddDocumentPage} from '../add-document/add-document';
import { HomePage } from '../home/home';
import {DocumentProvider} from '../../providers/document/document';
import { ViewDocumentPage} from '../view-document/view-document';
import {Document} from '../../models/document.model';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {
  private documentsArray: Promise<Document[]>;
  private document: Document;

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public platformFive: Platform, public actionsheetCtrlFive: ActionSheetController, private noteService: NoteService, private documentProvider: DocumentProvider) {
  }

  homeFromFive(){
    this.navCtrl.push(HomePage); //returns from My Records Page to Home Page
  }
  
  ionViewWillEnter(){
    this.documentsArray = this.getDocuments();
    //this.documentsList = this.loadDocuments(); //loads all documents stored in documentProvider 
}
  
  ionViewDidEnter(){
    this.documentsArray = this.getDocuments();

    //this.loadDocuments(); //loads all documents stored in documentProvider 
  }

  getDocuments(){
    return this.documentProvider.getAllDocuments();
  }

  openDocument(documentName: number){
    //view document
    this.documentProvider.getDocument(documentName).then((n) => {
      this.document = n;
      this.navCtrl.push(ViewDocumentPage, {document: this.document})
    });
  }

  openMenuFive() {
    let originPage5 = {
      title: 5
    };

    let actionSheetFive = this.actionsheetCtrlFive.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-five',
      buttons: [
        {
          text: 'Add note',
          handler: () => {
            console.log('Add note clicked');
            this.navCtrl.push(AddNotePage,originPage5);
          }
        },
        {
          text: 'Take picture of record',
          handler: () => {
            console.log('Take picture of records button clicked');
            this.navCtrl.push(AddDocumentPage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platformFive.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetFive.present();
  }

}

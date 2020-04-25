import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Document} from '../../models/document.model';
import {DocumentProvider} from '../../providers/document/document';

@IonicPage()
@Component({
  selector: 'page-view-document',
  templateUrl: 'view-document.html',
})
export class ViewDocumentPage {
  private document: Document;
  imageDisplayList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private documentProvider: DocumentProvider) {
    this.document = this.navParams.get('document');
    this.imageDisplayList = this.document.imgs;
}

deleteDocument(createDate: number){//deletes Document
  this.documentProvider.deleteDocument(createDate);
  this.navCtrl.pop();
}

editDocument(){//allows user to edit information about a particular document

}

return(){//returns to Home Page
  this.navCtrl.pop();
}

}

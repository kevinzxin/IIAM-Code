import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Document} from '../../models/document.model';
import {NavController} from 'ionic-angular';

@Injectable()
export class DocumentProvider {
  storedDocumentImages=[];
  private documents: Document[]=[]; //stores all documents
  private document: Document;

  constructor(public storage: Storage) {

  }

  saveDocument(document: Document){//saves new Document to array
    this.documents.push(document);
    this.storage.set('documents', this.documents);
  }

  getAllDocuments(){//returns all Documents
    return this.storage.get('documents').then((documents) => {
      this.documents = documents == null ? [] : documents;
      this.documents.sort((a,b) => a.createDate <= b.createDate ? -1: 1);
        return [...this.documents];
    });
  }

  getDocument(createDate: number){
    //opens up and displays specific document 
    return this.storage.get('documents').then((documents) => {
      let document = [...documents].find(r => r.documentName === createDate);
      console.log('The name of this document is:'+document.documentName);
      return document;
    }
    
    )}

  deleteDocument(createDate: number){
    this.documents = this.documents.filter((document) => {
      return document.createDate !== createDate
    });
    this.storage.set('documents', this.documents);
  }

}

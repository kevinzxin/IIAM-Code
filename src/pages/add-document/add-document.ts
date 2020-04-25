import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';
import {Storage} from '@ionic/storage';
import {FormGroup, FormControl} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {DocumentProvider} from '../../providers/document/document';
import {Document} from '../../models/document.model';

// we will leave the noteService component of this page out for now
// we can use note model, or can create a seperate model for documents

@IonicPage()
@Injectable()
@Component({
  selector: 'page-add-document',
  templateUrl: 'add-document.html',
})
export class AddDocumentPage {
  displayImage = null;
  displayImages = [];
  formGroup: FormGroup;
  document: Document = {
    documentName: undefined,
    date: undefined,
    numPages: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, private storage: Storage, private documentProvider: DocumentProvider) {
    this.formGroup = new FormGroup({
      documentName: new FormControl(),
      date: new FormControl(),
      numPages: new FormControl()
    });
  }

  public takePicture(){
  //enables user to take picture via camera
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) =>{
      this.displayImage = 'data:image/jpeg;base64,'+ imagePath;
      this.displayImages.push(this.displayImage);
      this.storage.set('displayImages', this.displayImages);  
    }, (err) => {
      this.presentToast('Error while selecting image');
    });

  }

  private createFileName(){//creates fileName for the docuemtn
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  } 

  saveDocument(document: Document){//saves Document into array
    document.createDate = this.createFileName();
    document.imgs = this.displayImages;
    this.documentProvider.saveDocument(document);
    //let saveObj = {imageList: this.displayImages, name: document.documentName, date: document.date, numPages: document.numPages, documentName: documentName}
    //this.documentProvider.saveDocument(saveObj);
    this.navCtrl.pop();
  }

  private presentToast(text) {//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}

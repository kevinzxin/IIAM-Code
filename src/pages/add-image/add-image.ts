import { Component, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';
import {Storage} from '@ionic/storage';
import {NoteService} from '../../providers/note-service/note-service';
import {Note} from '../../models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Injectable()
@Component({
  selector: 'page-add-image',
  templateUrl: 'add-image.html',
})
export class AddImagePage {
  displayImage = null;
  retrieveImage=null;
  imageName: any;
  date: any;
  newFileName: String = null;
  imageList = []; //new
  foundImage = {img:null, name:null};

  formGroup: FormGroup;
  note: Note = {
  date: new Date(),
  title: undefined,
  content: undefined,
  origin: undefined,
  imageName: undefined
}

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, private storage: Storage, private noteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    });
  }

public takePicture(){//turns on device's camera to take a picture / retrieve from gallery
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
    this.newFileName = this.createFileName();
    let saveObj={img: this.displayImage, name: this.newFileName};
    console.log("Saving image with name "+this.newFileName);
    this.noteService.saveImage(saveObj);

  }, (err) => {
    this.presentToast('Error while selecting image');
  });
}

private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n+".jpg";
  return newFileName;
}

loadData(){ //new
  this.imageList = this.noteService.getStoredImages();
  for(let i=0; i < this.imageList.length; i++){
    let image = this.imageList[i];
    console.log('Name of tihs entry is'+image.name);
    if(image.name == this.newFileName){
      this.foundImage.img = image.img;
      this.foundImage.name = image.name;
      console.log("Add-image loadData function yields:"+this.foundImage.name);
      this.retrieveImage = this.foundImage.img;
    }
    else{
      this.retrieveImage =  null;
    }

  };
}

private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

saveImgNote(note: Note){
  note.origin = this.navParams.get('title');
  note.createDate = this.newFileName;
  note.img = this.displayImage; //new
  console.log('Note ready for note service')
  this.noteService.saveNote(note);
  this.navCtrl.pop();

}

}

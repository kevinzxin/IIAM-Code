import { Component, ViewChild, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {NoteService} from '../../providers/note-service/note-service';
import {Note} from '../../models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Injectable()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  displayImage = null;
  formGroup: FormGroup;
  note: Note = {
  date: new Date(),
  title: undefined,
  content: undefined,
  origin: undefined,
  imageName: undefined
}
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private noteService: NoteService, public toastCtrl: ToastController) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
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

  this.camera.getPicture(options).then((imagePath) => {
    this.displayImage = 'data:image/jpeg;base64,'+imagePath;
  }, (err) => {
    this.presentToast('Error while selecting image');
  });
}

  private createFileName() {//creates a fileName for the note
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }

  saveNote(note: Note){//saves note into array
    note.createDate = this.createFileName();
    if(this.displayImage !==null){
      note.img = this.displayImage;
    }
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }
  
  private presentToast(text){//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


}

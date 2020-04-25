import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormControl, FormGroup} from '@angular/forms';
import {Note} from '../../models/note.model';
import {NoteService} from '../../providers/note-service/note-service';
import { AboutPage } from '../about/about';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
  note: Note;
  title: string = '';
  content: string = '';
  date: Date = new Date();
  createDate;
  img;
  origin;
  formGroupEdit: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService, private camera: Camera, public toastCtrl: ToastController) {
    this.note = this.navParams.get('note');

    this.formGroupEdit = new FormGroup({
      title: new FormControl(this.note.title),
      content: new FormControl(this.note.content),
      date: new FormControl(this.note.date),
      createDate: new FormControl(this.note.createDate),
      origin: new FormControl(this.note.origin)
    });

  }

  public retakePicture(){//replaces existing picture with new picture    
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
      this.note.img = 'data:image/jpeg;base64,'+imagePath;
    }, (err) => {
      this.presentToast('Error while selecting image');
    });

  }

  updateEditedNote(note: Note){//replaces original information with updated information
    note.img = this.note.img;
    this.noteService.deleteNote(this.note.createDate);
    this.noteService.updateEditedNote(note);
    this.navCtrl.push(AboutPage);
  }
 

  private presentToast(text){//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
  }
}

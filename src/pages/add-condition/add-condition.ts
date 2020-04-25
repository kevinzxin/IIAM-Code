import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import {ConditionServiceProvider} from '../../providers/condition-service/condition-service';
import {Condition} from '../../models/condition.model';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-add-condition',
  templateUrl: 'add-condition.html',
})
export class AddConditionPage {
  newFileName: String = null;
  displayImage = null;
  formGroup: FormGroup;
  condition: Condition = {
    name: undefined,
    symptoms: undefined,
    management: undefined,
    addComments: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private conditionService: ConditionServiceProvider, public toastCtrl: ToastController) {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      symptoms: new FormControl(),
      management: new FormControl(),
      addComments: new FormControl()
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

  private createFileName() {//creates fileName for the note
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  } 

  saveCondition(condition: Condition){//saves Condition into Array
    condition.createDate = this.createFileName();
    if(this.displayImage !== null){
      condition.img = this.displayImage;
    }
    this.conditionService.saveCondition(condition);
    this.navCtrl.pop();
  }

  private presentToast (text){//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}

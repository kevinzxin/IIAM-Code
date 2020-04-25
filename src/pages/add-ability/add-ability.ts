import { Component, ViewChild, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams, Form, ActionSheetController, ToastController, Platform, LoadingController, Loading} from 'ionic-angular';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';
import {Storage} from '@ionic/storage';
import {AbilityServiceProvider} from '../../providers/ability-service/ability-service';
import {Ability} from '../../models/ability.model';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Injectable()
@Component({
  selector: 'page-add-ability',
  templateUrl: 'add-ability.html',
})
export class AddAbilityPage {
  displayImage = null;
  formGroup: FormGroup;
  ability: Ability = {
    ability: undefined,
    selection: undefined,
    content: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private abilityService: AbilityServiceProvider, public toastCtrl: ToastController) {
    this.formGroup = new FormGroup({
      ability: new FormControl(),
      selection: new FormControl(),
      content: new FormControl()
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

  saveAbility(ability: Ability){//saves Ability into array
    ability.createDate = this.createFileName();
    if(this.displayImage !== null){
      ability.img = this.displayImage;
    }
    this.abilityService.saveAbility(ability);
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

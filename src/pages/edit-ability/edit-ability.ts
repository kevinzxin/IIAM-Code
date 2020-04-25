import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormControl, FormGroup} from '@angular/forms';
import {Ability} from '../../models/ability.model';
import {AbilityServiceProvider} from '../../providers/ability-service/ability-service';
import {MyAbilityPage} from '../my-ability/my-ability';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit-ability',
  templateUrl: 'edit-ability.html',
})

export class EditAbilityPage {
  abilityModel: Ability;
  ability: string = '';
  selection: string='';
  content: string='';
  createDate;
  img;
  formGroupEdit: FormGroup;
  displayImage = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private abilityService: AbilityServiceProvider, private camera: Camera, public toastCtrl: ToastController) {
    this.abilityModel = this.navParams.get('ability');

  this.formGroupEdit = new FormGroup({
    ability: new FormControl(this.abilityModel.ability),
    selection: new FormControl(this.abilityModel.selection),
    content: new FormControl(this.abilityModel.content)
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
      this.abilityModel.img = 'data:image/jpeg;base64,'+imagePath;
    }, (err) => {
      this.presentToast('Error while selecting image');
    });
  }

  updateEditedAbility(ability: Ability){//replaces original information with updated information
    ability.createDate = this.abilityModel.createDate;
    ability.img = this.abilityModel.img;
    this.abilityService.deleteAbility(this.abilityModel.createDate);
    this.abilityService.updateEditedAbility(ability);
    this.navCtrl.push(MyAbilityPage);
  }

  private presentToast(text){//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
  }

}

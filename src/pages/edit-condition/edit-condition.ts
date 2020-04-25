import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormControl, FormGroup} from '@angular/forms';
import {Condition} from '../../models/condition.model';
import {ConditionServiceProvider} from '../../providers/condition-service/condition-service';
import {ConditionsPage} from '../conditions/conditions';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit-condition',
  templateUrl: 'edit-condition.html',
})
export class EditConditionPage {
  condition: Condition;
  name: string = '';
  symptoms: string = '';
  management: string = '';
  addComments: string = '';
  createDate;
  img;
  formGroupEdit: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private conditionService: ConditionServiceProvider, private camera: Camera, private toastCtrl: ToastController) {
    this.condition = this.navParams.get('condition');

  this.formGroupEdit = new FormGroup({
    name: new FormControl(this.condition.name),
    symptoms: new FormControl(this.condition.symptoms),
    management: new FormControl(this.condition.management),
    addComments: new FormControl(this.condition.addComments)
    
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
      this.condition.img = 'data:image/jpeg;base64,'+imagePath;
    }, (err) => {
      this.presentToast('Error while selecting image');
    });
  }

  updateEditedCondition(condition: Condition){//replaces original information with updated information
    condition.createDate = this.condition.createDate;
    condition.img = this.condition.img;
    this.conditionService.deleteCondition(this.condition.createDate);
    this.conditionService.updateEditedCondition(condition);
    this.navCtrl.push(ConditionsPage);
  }

  private presentToast(text){//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
  }

}

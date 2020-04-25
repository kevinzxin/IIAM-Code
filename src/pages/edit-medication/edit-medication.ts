import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormControl, FormGroup} from '@angular/forms';
import {Medication} from '../../models/medication.model';
import {MedicationServiceProvider} from '../../providers/medication-service/medication-service';
import {MedicationsPage} from '../medications/medications';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit-medication',
  templateUrl: 'edit-medication.html',
})
export class EditMedicationPage {
  medication: Medication;
  name: string = '';
  dose: string = '';
  unit: string = '';
  unitComments: string = '';
  route: string = '';
  routeComments: string = '';
  frequency: string = '';
  createDate;
  img;
  formGroupEdit: FormGroup;
  displayImage = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private medicationService: MedicationServiceProvider, private camera: Camera, public toastCtrl: ToastController) {
    this.medication = this.navParams.get('medication');
  
    this.formGroupEdit = new FormGroup({
      name: new FormControl(this.medication.name),
      dose: new FormControl(this.medication.dose),
      unit: new FormControl(this.medication.unit),
      unitComments: new FormControl(this.medication.unitComments),
      route: new FormControl(this.medication.route),
      routeComments: new FormControl(this.medication.routeComments),
      frequency: new FormControl(this.medication.frequency),
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
      this.medication.img = 'data:image/jpeg;base64,'+imagePath;
    }, (err) => {
      this.presentToast('Error while selecting image');
    });
  }

  updateEditedMedication(medication: Medication){//replaces original information with updated information
    medication.createDate = this.medication.createDate;
    medication.img = this.medication.img;
    this.medicationService.deleteMedication(this.medication.createDate);
    this.medicationService.updateEditedMedication(medication);
    this.navCtrl.push(MedicationsPage);
  }

  private presentToast(text){//presents toast message
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
  }

}

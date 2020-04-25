import { Component, ViewChild, Injectable } from '@angular/core';
import {IonicPage, NavController, NavParams, Toast, ToastController} from 'ionic-angular';
import {MedicationServiceProvider} from '../../providers/medication-service/medication-service';
import {Medication} from '../../models/medication.model';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Injectable()
@Component({
  selector: 'page-add-medication',
  templateUrl: 'add-medication.html',
})
export class AddMedicationPage {
  displayImage = null;
  formGroup: FormGroup;
  medication: Medication = {
    name: undefined,
    dose: undefined,
    unit: undefined,
    unitComments: undefined,
    route: undefined,
    routeComments: undefined,
    frequency: undefined,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private medicationService: MedicationServiceProvider, public toastCtrl: ToastController) {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      dose: new FormControl(),
      unit: new FormControl(),
      unitComments: new FormControl(),
      route: new FormControl(),
      routeComments: new FormControl(),
      frequency: new FormControl(),
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

  saveMedication(medication: Medication){//saves Medication into array
    medication.createDate = this.createFileName();
    if(this.displayImage !== null){
      medication.img = this.displayImage;
    }
    this.medicationService.saveMedication(medication);
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

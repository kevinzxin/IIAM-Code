import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Bio} from '../../models/bio.model';
import {DemographicServiceProvider} from '../../providers/demographic-service/demographic-service';

@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html',
})
export class BioPage {
  formGroup: FormGroup;
  storedName;
  storedAge;
  storedGender;
  bio: Bio = {
    name: undefined,
    age: undefined,
    gender: undefined,
    allergies: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,private demographicService: DemographicServiceProvider) {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      allergies: new FormControl()
    });
  }

  ionViewWillEnter(){
    this.demographicService.clearDemographics();
  }

  saveBioInfo(bio: Bio){
    this.demographicService.saveDemographic(bio);    
    this.navCtrl.pop();
    this.presentToast('Information has been successfully stored!');
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

}

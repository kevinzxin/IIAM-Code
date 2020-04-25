import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {CoverPage} from '../cover/cover';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import {TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  agree: boolean;
  @ViewChild('usernameNew') unameNew;
  @ViewChild('passwordNew') passwordNew;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
  }

  updateAgree(){
    console.log(this.agree); 
  }

  viewTC(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

  registerUser(){
    if(this.agree == true){
    this.fire.auth.createUserWithEmailAndPassword(this.unameNew.value, this.passwordNew.value).then(data => {
      let alert = this.alertCtrl.create({
        title: 'Success',
        message: 'You have successfully created an IIAM account',
        buttons:['OK']
      });
      alert.present();
      this.navCtrl.push(CoverPage);
    },err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });

  }

  else{
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: 'You must agree to terms and conditions to proceed',
      buttons: ['OK']
    });
    alert.present();
  }
 }



}

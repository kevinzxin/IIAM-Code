import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  agree: boolean;
@ViewChild('username') uname;
@ViewChild('password') password;
  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }



  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(data => {
      console.log('can sign in', data)
      this.navCtrl.push(HomePage);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  
    //.catch(error => {
      //console.log('got an error', error);
      //this.alert('Incorrect username and password combination');
    //})

  }

  updateAgree(){
    console.log(this.agree);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {FirstPage} from '../first/first';
import {RegisterPage} from '../register/register';


@IonicPage()
@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


openFirst(){
  this.navCtrl.push(FirstPage);
}

openRegister(){
  this.navCtrl.push(RegisterPage);
}

}

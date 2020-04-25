import { Component, ViewChild, SystemJsNgModuleLoader } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSharedStylesHost } from '@angular/platform-browser/src/dom/shared_styles_host';

/**
 * Generated class for the AddmedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmed',
  templateUrl: 'addmed.html',
})
export class AddmedPage {
  @ViewChild('medName') medName1;
  @ViewChild('dose') dose1;
  @ViewChild('otherUnit') otherUnit1;
  @ViewChild('otherDose') otherDose1;
  @ViewChild('frequency') frequency1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmedPage');
  }

btnActivate( selectButton, otherButton1, otherButton2, otherButton3, otherButton4){
  if (selectButton._color === 'primary'){
  selectButton.color = 'secondary';
  otherButton1.color = 'primary';
  otherButton2.color = 'primary';
  otherButton3.color = 'primary';
  otherButton4.color = 'primary';
  
}
  else
  selectButton.color = 'primary';
}

btnActivateTwo(selectButton, otherButton1, otherButton2, otherButton3, otherButton4, otherButton5, otherButton6){
  if(selectButton._color === 'primary' ){
    selectButton.color = 'secondary';
    otherButton1.color = 'primary';
    otherButton2.color = 'primary';
    otherButton3.color = 'primary';
    otherButton4.color = 'primary';
    otherButton5.color = 'primary';
    otherButton6.color = 'primary';
  }

  else{
  selectButton.color = 'primary';
}
}

complete(){
  console.log(this.medName1.value);
  console.log(this.dose1.value);
  console.log(this.otherUnit1.value);
  console.log(this.otherDose1.value);
  console.log(this.frequency1.value);

}

}

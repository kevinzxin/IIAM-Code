import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import {AddMedicationPage} from '../add-medication/add-medication';
import {MedicationServiceProvider} from '../../providers/medication-service/medication-service';
import { HomePage } from '../home/home';
import {Medication} from '../../models/medication.model';
import {ViewMedicationPage} from '../view-medication/view-medication';

@IonicPage()
@Component({
  selector: 'page-medications',
  templateUrl: 'medications.html',
})
export class MedicationsPage {
  private medicationsArray: Promise<Medication[]>;
  private medication: Medication;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformSeven: Platform, public actionsheetCtrlThree: ActionSheetController, private medicationService: MedicationServiceProvider) {
  }

  homeFromThree(){//brings user back to home page
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter(){//runs when page is about to enter and become the active page
    this.medicationsArray = this.getMedications();
  }

  ionViewDidEnter(){//runs when page has fully entered and is now active page
    this.medicationsArray = this.getMedications();
  }

  getMedications(){//retrieves Medications
    return this.medicationService.getMedications();
  }

  getMedication(createDate:number){//retrieves a particular Medication
    this.medicationService.getMedication(createDate).then((n) => {
      this.medication = n;
      this.navCtrl.push(ViewMedicationPage, {medication: this.medication});
    })
  }

openMenuThree() {//opens menu list
  let originMyMedications = {
    title: 3
  };

  let actionSheetThree = this.actionsheetCtrlThree.create({
    title: 'Options',
    cssClass: 'action-sheets-basic-page-three',
    buttons: [
      {
        text: 'Add a new medication',
        handler: () => {
          this.navCtrl.push(AddMedicationPage, originMyMedications);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel', 
        icon: !this.platformSeven.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheetThree.present();
}



}

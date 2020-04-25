import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MedicationServiceProvider} from '../../providers/medication-service/medication-service';
import {Medication} from '../../models/medication.model';
import {EditMedicationPage} from '../edit-medication/edit-medication';

@IonicPage()
@Component({
  selector: 'page-view-medication',
  templateUrl: 'view-medication.html',
})
export class ViewMedicationPage {
  private medication: Medication;

  constructor(public navCtrl: NavController, public navParams: NavParams, private medicationService: MedicationServiceProvider) {
    this.medication = this.navParams.get('medication');
  }

  deleteMedication(createDate: number){//deletes Medication
    this.medicationService.deleteMedication(createDate);
    this.navCtrl.pop();
  }

  editMedication(){//allows user to edit information about a particular Medication
    this.navCtrl.push(EditMedicationPage, {medication: this.medication});
  }

  return(){// returns to Home Page
    this.navCtrl.pop();
  }

}

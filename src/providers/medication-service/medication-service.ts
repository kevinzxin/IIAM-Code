import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Medication} from '../../models/medication.model';
import {NavController} from 'ionic-angular';

@Injectable()
export class MedicationServiceProvider {
  storedMedicationImages=[];
  private medications: Medication[]=[];
  private medication: Medication;

  constructor(public storage: Storage) {
   
  }

  saveMedication(medication: Medication){//saves new Medication to array
    this.medications.push(medication);
    this.storage.set('medications', this.medications);

  }

  getMedications(){//returns all Medications
    return this.storage.get('medications').then((medications) => {
      this.medications = medications == null ? [] : medications;
      this.medications.sort((a,b) => a.createDate <= b.createDate ? -1:1);
      return [...this.medications];
    });
  }

  getMedication(createDate: number){//returns information for a particualr Medication
    return this.storage.get('medications').then((medications) => {
      this.medication = [...medications].find(r => r.createDate == createDate);
    return this.medication;
    });
  }

  deleteMedication(createDate: number){
    this.medications = this.medications.filter((medication) => {
      return medication.createDate !== createDate
    });
    this.storage.set('medications', this.medications);
  }

  updateEditedMedication(medication: Medication){
    this.medications.push(medication);
    this.storage.set('medications', this.medications);
  }

}

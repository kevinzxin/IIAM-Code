import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AbilityServiceProvider} from '../../providers/ability-service/ability-service';
import {DemographicServiceProvider} from '../../providers/demographic-service/demographic-service';
import {MedicationServiceProvider} from '../../providers/medication-service/medication-service';
import {ConditionServiceProvider} from '../../providers/condition-service/condition-service';
import {NoteService} from '../../providers/note-service/note-service';
import {DocumentProvider} from '../../providers/document/document';
import {Ability} from '../../models/ability.model' ;
import {Bio} from '../../models/bio.model';
import {Medication} from '../../models/medication.model';
import {Condition} from '../../models/condition.model';
import {Note} from '../../models/note.model';
import {Document} from '../../models/document.model';

import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  private abilitiesArray: Promise<Ability[]>;
  private independentAbilitiesArray: Promise<Ability[]>;
  private partlyAbilitiesArray: Promise<Ability[]>;
  private helpAbilitiesArray: Promise<Ability[]>;
  private aboutMeArray: Promise<Note[]>;
  private medicationsArray: Promise<Medication[]>;
  private bios:Promise<Bio[]>;
  private conditionsArray: Promise<Condition[]>;
  private documentsArray: Promise<Document[]>;
  name;
  age;
  gender;
  allergies;

  constructor(public navCtrl: NavController, public navParams: NavParams, private abilityService: AbilityServiceProvider, private demographicService: DemographicServiceProvider, private medicationService: MedicationServiceProvider, private conditionService: ConditionServiceProvider, private noteService: NoteService, private documentService: DocumentProvider) {
  }

  homeFromSix(){//brings user back to home page
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter() {//runs when page is about to enter and become the active page
    this.bios = this.getDemographics();
    this.aboutMeArray = this.getNotes()
    this.abilitiesArray = this.getAbilities();
    this.medicationsArray = this.getMedications();
    this.conditionsArray = this.getConditions();
    this.documentsArray = this.getDocuments();
  }

  ionViewDidEnter() {//runs when page is about to enter and become the active page
    this.bios = this.getDemographics();
    this.aboutMeArray = this.getNotes();
    this.abilitiesArray = this.getAbilities();
    this.medicationsArray = this.getMedications();
    this.conditionsArray = this.getConditions();
    this.documentsArray = this.getDocuments();
  }

  getDemographics(){//retrieves Demographics information about user
    return this.demographicService.getDemographics();
  }

  getAbilities(){//retrieves Abilities
    return this.abilityService.getAbilities();
  }

  getMedications(){//retrieves Medications
    return this.medicationService.getMedications();
  }

  getConditions(){//retrieves Conditions
    return this.conditionService.getConditions();
  }

  getDocuments(){//retrieves Documents
    return this.documentService.getAllDocuments();
  }

  getNotes(){//retrieves Notes
    return this.noteService.getAllNotes();
  }

}

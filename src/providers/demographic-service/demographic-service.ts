import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Bio} from  '../../models/bio.model';
import {NavController} from 'ionic-angular';

@Injectable()
export class DemographicServiceProvider {
  private bios: Bio[]=[];
  savedBio: Bio = {
    name: undefined,
    age: undefined,
    gender: undefined,
    allergies: undefined
  }

  constructor(public storage: Storage) {
  }

  clearDemographics(){
    this.bios = [];
  }

  saveDemographic(bio: Bio){
    this.bios.push(bio);
    this.storage.set('bios',this.bios);
  }

  getDemographics(){
    return this.storage.get('bios').then((bios) => {
      this.bios = bios == null ? [] : bios;
      return [...this.bios];
    });
  }

}

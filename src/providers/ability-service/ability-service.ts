import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Ability} from '../../models/ability.model';
import {NavController} from 'ionic-angular';

@Injectable()
export class AbilityServiceProvider {
  storedAbilityImages=[];
  private abilities: Ability[]=[];
  private ability: Ability;

  constructor(public storage: Storage) {

  }

  saveAbility(ability: Ability){//saves new Ability to array
    this.abilities.push(ability);
    this.storage.set('abilities', this.abilities);
  }

  getAbilities(){//returns all Abilities
    return this.storage.get('abilities').then((abilities) => {
      this.abilities = abilities == null ? [] : abilities;
      this.abilities.sort((a,b) => a.createDate <= b.createDate ? -1: 1);
        return [...this.abilities];
    });
  }

  getAbility(createDate: number){//returns infromation for a particular Ability
    return this.storage.get('abilities').then((abilities) => {
      this.ability = [...abilities].find(r => r.createDate == createDate);
    return this.ability;
    })
  }

  deleteAbility(createDate: number){//deletes particular Ability
    this.abilities = this.abilities.filter((ability) => {
      return ability.createDate !== createDate
    });
    this.storage.set('abilities', this.abilities);
  }

  updateEditedAbility(ability: Ability){//updates particular Ability
    this.abilities.push(ability);
    this.storage.set('abilities', this.abilities);
  }

}

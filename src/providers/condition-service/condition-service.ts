import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Condition} from '../../models/condition.model';
import {NavController} from 'ionic-angular';

@Injectable()
export class ConditionServiceProvider {
  storedConditionImages=[];
  private conditions: Condition[]=[];
  private condition: Condition;

  constructor(public storage: Storage){
  
  }

  saveCondition(condition: Condition){//saves new Condition to array
    this.conditions.push(condition);
    this.storage.set('conditions',this.conditions);
  }

  getConditions(){//returns all Conditions
    return this.storage.get('conditions').then((conditions) => {
      this.conditions = conditions == null ? [] : conditions;
      this.conditions.sort((a,b) => a.createDate <= b.createDate ? -1: 1);
    return [...this.conditions];
    });
  }

  getCondition(createDate: number){//returns information from a particular Condition
    return this.storage.get('conditions').then((conditions) => {
      this.condition = [...conditions].find(r => r.createDate == createDate);
    return this.condition;
    })
  }

  deleteCondition(createDate: number){//deletes particular Condition
    this.conditions = this.conditions.filter((condition) => {
      return condition.createDate !== createDate
    });
    this.storage.set('conditions',this.conditions);
  }

  updateEditedCondition(condition: Condition){//updates particular Condition
    this.conditions. push(condition);
    this.storage.set('conditions', this.conditions);
  }

}

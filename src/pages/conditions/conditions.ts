import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { AddConditionPage } from '../add-condition/add-condition';
import {ConditionServiceProvider} from '../../providers/condition-service/condition-service';
import {Condition} from '../../models/condition.model';
import {HomePage} from '../home/home';
import {ViewConditionPage} from '../view-condition/view-condition';


@IonicPage()
@Component({
  selector: 'page-conditions',
  templateUrl: 'conditions.html',
})

export class ConditionsPage {
  private conditionsArray: Promise<Condition[]>;
  private condition: Condition;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformFour: Platform, public actionsheetCtrlFour: ActionSheetController, private conditionService: ConditionServiceProvider ) {
  }

  homeFromFour(){//brings user back to home page
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter(){//runs when page is about to enter and become the active page
    this.conditionsArray = this.getConditions();
  }

  ionViewDidEnter(){//runs when page has fully entered and is now active page
    this.conditionsArray = this.getConditions();
  }

  getConditions(){//retrieves Conditions
    return this.conditionService.getConditions();
  }

  getCondition(createDate: number){//retrieves a particular Condition
    this.conditionService.getCondition(createDate).then((n) => {
      this.condition=n;
      this.navCtrl.push(ViewConditionPage, {condition: this.condition});
    })
  }

  openMenuFour() {//opens menu list
    let originMyConditions = {
      title: 4
    };

    let actionSheetFour = this.actionsheetCtrlFour.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-four',
      buttons: [
        {
          text: 'Add Condition',
          handler: () => {
            this.navCtrl.push(AddConditionPage,originMyConditions);
          }
        },
      ]
    });
    actionSheetFour.present();
  }



}

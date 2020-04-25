import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController} from 'ionic-angular';
import {AddAbilityPage} from '../add-ability/add-ability';
import {AbilityServiceProvider} from '../../providers/ability-service/ability-service';
import {Ability} from '../../models/ability.model' ;
import {HomePage} from '../home/home';
import {AddImagePage} from '../add-image/add-image';
import {ViewAbilityPage} from '../view-ability/view-ability';

@IonicPage()
@Component({
  selector: 'page-my-ability',
  templateUrl: 'my-ability.html'

})
export class MyAbilityPage {
  private abilitiesArray: Promise<Ability[]>;
  private ability: Ability;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformTwo: Platform, public actionsheetCtrlTwo: ActionSheetController, private abilityService: AbilityServiceProvider) {
  }

  homeFromTwo(){//brings user back to home page
    this.navCtrl.push(HomePage);
  }
  
  ionViewWillEnter(){//runs when page is about to enter and become the active page
    this.abilitiesArray = this.getAbilities();
  }

  ionViewDidEnter(){//runs when page has fully entered and is now active page
    this.abilitiesArray = this.getAbilities();
  }

  getAbilities(){//retrieves Abilities
    return this.abilityService.getAbilities();
  }

  getAbility(createDate: number){//retrieves a particular Ability
    this.abilityService.getAbility(createDate).then((n) => {
      this.ability = n;
      this.navCtrl.push(ViewAbilityPage, {ability: this.ability});
    })
  }

  openMenuTwo() {//opens menu list
    let originMyAbilities = {
      title: 2
    };

    let actionSheetTwo = this.actionsheetCtrlTwo.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-two',
      buttons: [
        {
          text: 'Add Ability',
          handler: () => {
            this.navCtrl.push(AddAbilityPage,originMyAbilities);
          }
        },
      ]
    });
    actionSheetTwo.present();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AbilityServiceProvider} from '../../providers/ability-service/ability-service';
import {Ability} from '../../models/ability.model';
import {EditAbilityPage} from '../edit-ability/edit-ability';

@IonicPage()
@Component({
  selector: 'page-view-ability',
  templateUrl: 'view-ability.html',
})
export class ViewAbilityPage {
  private ability: Ability;

  constructor(public navCtrl: NavController, public navParams: NavParams, private abilityService: AbilityServiceProvider) {
    this.ability = this.navParams.get('ability');
  }

  deleteAbility(createDate: number){//deletes Ability
    this.abilityService.deleteAbility(createDate);
    this.navCtrl.pop();
  }

  editAbility(){//allows user to edit information about a particular Ability
    this.navCtrl.push(EditAbilityPage, {ability:this.ability});
  }

  return(){//returns to Home Page
    this.navCtrl.pop();
  }


}

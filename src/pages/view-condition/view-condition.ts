import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConditionServiceProvider} from '../../providers/condition-service/condition-service';
import {Condition} from '../../models/condition.model';
import {EditConditionPage} from '../edit-condition/edit-condition';

@IonicPage()
@Component({
  selector: 'page-view-condition',
  templateUrl: 'view-condition.html',
})
export class ViewConditionPage {
  private condition: Condition;

  constructor(public navCtrl: NavController, public navParams: NavParams, private conditionService: ConditionServiceProvider) {
    this.condition = this.navParams.get('condition');
  }

deleteCondition(createDate: number){//deletes Condition
  this.conditionService.deleteCondition(createDate);
  this.navCtrl.pop();
}

editCondition(){//allows user to edit information about a particular Condition
  this.navCtrl.push(EditConditionPage, {condition: this.condition});
}

return(){//returns to Home page
  this.navCtrl.pop();
}

}

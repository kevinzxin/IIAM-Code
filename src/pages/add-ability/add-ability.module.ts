import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAbilityPage } from './add-ability';

@NgModule({
  declarations: [
    AddAbilityPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAbilityPage),
  ],
})
export class AddAbilityPageModule {}

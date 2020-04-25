import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAbilityPage } from './my-ability';

@NgModule({
  declarations: [
    MyAbilityPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAbilityPage),
  ],
})
export class MyAbilityPageModule {}

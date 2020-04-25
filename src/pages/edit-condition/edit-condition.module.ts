import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditConditionPage } from './edit-condition';

@NgModule({
  declarations: [
    EditConditionPage,
  ],
  imports: [
    IonicPageModule.forChild(EditConditionPage),
  ],
})
export class EditConditionPageModule {}

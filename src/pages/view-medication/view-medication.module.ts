import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMedicationPage } from './view-medication';

@NgModule({
  declarations: [
    ViewMedicationPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMedicationPage),
  ],
})
export class ViewMedicationPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMedicationPage } from './edit-medication';

@NgModule({
  declarations: [
    EditMedicationPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMedicationPage),
  ],
})
export class EditMedicationPageModule {}

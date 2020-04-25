import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import {AddmedPage} from '../pages/addmed/addmed';
import {AddNotePage} from '../pages/add-note/add-note';
import {AddImagePage} from '../pages/add-image/add-image';
import {AddDocumentPage} from '../pages/add-document/add-document';
import {AddMedicationPage} from '../pages/add-medication/add-medication';
import {AddConditionPage} from '../pages/add-condition/add-condition';
import { ConsentPage } from '../pages/consent/consent';
import {DocumentsPage} from '../pages/documents/documents';
import { FirstPage } from '../pages/first/first';
import { HomePage } from '../pages/home/home';
import {MedicationsPage} from '../pages/medications/medications';
import {ConditionsPage} from '../pages/conditions/conditions';
import {CoverPage} from '../pages/cover/cover';
import {RegisterPage} from '../pages/register/register';
import {SummaryPage} from '../pages/summary/summary';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NoteService } from '../providers/note-service/note-service';
import { DocumentProvider } from '../providers/document/document';
import {AbilityServiceProvider} from '../providers/ability-service/ability-service';
import {MedicationServiceProvider} from '../providers/medication-service/medication-service';
import {ConditionServiceProvider} from '../providers/condition-service/condition-service';
import {DemographicServiceProvider} from '../providers/demographic-service/demographic-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ViewNotePage} from '../pages/view-note/view-note';
import {ViewDocumentPage} from '../pages/view-document/view-document';
import {ViewAbilityPage} from '../pages/view-ability/view-ability';
import {ViewMedicationPage} from '../pages/view-medication/view-medication';
import {ViewConditionPage} from '../pages/view-condition/view-condition';
import {TermsAndConditionsPage} from '../pages/terms-and-conditions/terms-and-conditions';
import {EditNotePage} from '../pages/edit-note/edit-note';
import {EditAbilityPage} from '../pages/edit-ability/edit-ability';
import {EditMedicationPage} from '../pages/edit-medication/edit-medication';
import {EditConditionPage} from '../pages/edit-condition/edit-condition';
import {MyAbilityPage} from '../pages/my-ability/my-ability';
import {AddAbilityPage} from '../pages/add-ability/add-ability';
import {BioPage} from '../pages/bio/bio';

import {FileChooser} from '@ionic-native/file-chooser';
import {File} from '@ionic-native/file';
import {Camera} from '@ionic-native/camera';
import {Transfer} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path';
import { HttpClientModule } from '@angular/common/http';

const fireBaseAuth = {
  apiKey: "AIzaSyBQYSoTRe95XKq9cvNR48vlqCi2I6Q6TSI",
  authDomain: "test-project-58e94.firebaseapp.com",
  databaseURL: "https://test-project-58e94.firebaseio.com",
  projectId: "test-project-58e94",
  storageBucket: "test-project-58e94.appspot.com",
  messagingSenderId: "186879738423"
};

class CameraMock extends Camera{
  getPicture(options){
    return new Promise((resolve,reject) => {
      resolve('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')
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddImagePage,
    AddDocumentPage,
    AddMedicationPage,
    AddConditionPage,
    HomePage,
    ConsentPage,
    MedicationsPage,
    ConditionsPage,
    AddmedPage,
    FirstPage,
    CanvasDraw,
    DocumentsPage,
    CoverPage,
    RegisterPage,
    SummaryPage,
    AddNotePage,
    ViewNotePage,
    ViewDocumentPage,
    ViewAbilityPage,
    ViewMedicationPage,
    ViewConditionPage,
    TermsAndConditionsPage,
    EditNotePage,
    EditAbilityPage,
    EditMedicationPage,
    EditConditionPage,
    MyAbilityPage,
    AddAbilityPage,
    BioPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(fireBaseAuth),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddImagePage,
    AddDocumentPage,
    AddMedicationPage,
    AddConditionPage,
    HomePage,
    ConsentPage,
    MedicationsPage,
    ConditionsPage,
    AddmedPage,
    FirstPage,
    CanvasDraw,
    DocumentsPage,
    CoverPage,
    RegisterPage,
    SummaryPage,
    AddNotePage,
    ViewNotePage,
    ViewDocumentPage,
    ViewAbilityPage,
    ViewMedicationPage,
    ViewConditionPage,
    TermsAndConditionsPage,
    EditNotePage,
    EditAbilityPage,
    EditMedicationPage,
    EditConditionPage,
    MyAbilityPage,
    AddAbilityPage,
    BioPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    File,
    Transfer,
    FileChooser,
    FilePath,
    DocumentProvider,
    AbilityServiceProvider,
    MedicationServiceProvider,
    ConditionServiceProvider,
    Camera,
    //{provide: Camera, useClass: CameraMock},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicationServiceProvider,
    ConditionServiceProvider,
    DemographicServiceProvider
    ]
})
export class AppModule {}

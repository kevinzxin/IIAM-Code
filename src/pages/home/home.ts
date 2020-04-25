import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedicationsPage } from '../medications/medications';
import {AboutPage} from '../about/about';
import {DocumentsPage} from '../documents/documents';
import {MyAbilityPage} from '../my-ability/my-ability';
import {ConditionsPage} from '../conditions/conditions';
import { AngularFireAuth } from '@angular/fire/auth';
import { CoverPage } from '../cover/cover';
import {SummaryPage} from '../summary/summary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController, private fire: AngularFireAuth) {

  }

  openAboutMe(){//opens About Me page
    this.navCtrl.push(AboutPage);
  }

  openMyAbilities(){//opens My Abilities page
    this.navCtrl.push(MyAbilityPage);
  }

  openMyMedications(){//opens My Medications page
    this.navCtrl.push(MedicationsPage);
  }

  openMyConditions(){//opens My Conditions page
    this.navCtrl.push(ConditionsPage);
  }

  openMyRecords(){//opens My Records page
    this.navCtrl.push(DocumentsPage);

  }
  
  openSummary(){//opens Summary page
    this.navCtrl.push(SummaryPage)
  }

  signOut(){//signs user out of app
    this.fire.auth.signOut();
    this.navCtrl.setRoot(CoverPage);
  }
}

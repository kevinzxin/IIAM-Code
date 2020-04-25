import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../pages/home/home';
import {CoverPage} from '../pages/cover/cover';
import {timer} from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CoverPage;
  showSplash = true;

  constructor(platform: Platform, public loadingCtrl: LoadingController, public storage: Storage, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      timer(5000).subscribe(() => this.showSplash = false) 
    });
  }

}


import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
//import { Http } from '@angular/http';

import { DrinksService} from '../shared/shared';
import { DrinksInfoService } from '../shared/shared';

import { SettingsPage } from '../pages/pages';
import { MainPage } from '../pages/pages';


@Component({
  templateUrl: 'app.html',
  providers: [  DrinksService,
                DrinksInfoService ]
})
export class MyApp {
  rootPage: any = SettingsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.setRootPage();
    });
  }

  setRootPage()
  {
    this.storage.get("gender").then((gender) => {
      if (gender) {
        this.rootPage = MainPage;
      } else {
        this.rootPage = SettingsPage;
      }
    });
  }
}

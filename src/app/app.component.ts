import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { DrinksService} from '../shared/shared';

import { SettingsPage } from '../pages/pages';
import { MainPage } from '../pages/pages';


@Component({
  templateUrl: 'app.html',
  providers: [ DrinksService ]
})
export class MyApp {
  rootPage: any = SettingsPage;

  constructor(platform: Platform,
              public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
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

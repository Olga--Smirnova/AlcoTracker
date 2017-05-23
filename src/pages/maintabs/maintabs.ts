import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../pages';
import { StatsPage } from '../pages';
import { MainPage } from '../pages';
import { SuperTabsController } from "ionic2-super-tabs";

@IonicPage()
@Component({
  selector: 'page-maintabs',
  templateUrl: 'maintabs.html',
})
export class MainTabsPage {
    page1: any = InfoPage;
    page2: any = MainPage;
    page3: any = StatsPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private superTabsCtrl: SuperTabsController) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad MainTabs');
    
  }

  onTabSelect(tab: { index: number; id: string; }) {
      console.log("Selected tab: ", tab);
  }

}

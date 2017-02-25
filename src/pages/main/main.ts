import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IDrinks } from '../../shared/shared';
import { DrinksService } from '../../shared/shared';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage ) {}
  

  ionViewDidLoad() {
    this.storage.get("gender").then((gender) => {
      if (gender) {
        console.log(gender);
      } else {
        console.log("gender hesn't been selected");
      }
    });
  }



}

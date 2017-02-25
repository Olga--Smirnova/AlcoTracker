import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainPage } from '../pages';
import { IDrinks } from '../../shared/shared';
import { DrinksService } from '../../shared/shared';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public drinks: IDrinks[] = [
      {
			family: 	'beer',
			name: 		'beer glass 200ml',
			img: 		'src/assets/icon/favicon.ico',
			contains: 	0.6
		},
		{	
			family: 	'beer',
			name: 		'beer glass 500ml',
			img: 		'src/assets/icon/favicon.ico',
			contains: 	1.6
		},
		{	
			family: 	'beer',
			name: 		'beer can',
			img: 		'src/assets/icon/favicon.ico',
			contains: 	1.2
		},
		{	
			family: 	'beer',
			name: 		'beer bottle 330ml',
			img: 		'',
			contains: 	1.3
		},
		{	
			family: 	'beer',
			name: 		'cider bottle 330ml',
			img: 		'',
			contains: 	1.3
		},
		{	
			family: 	'beer',
			name: 		'RTD bottle 330ml',
			img: 		'',
			contains: 	1.6
		}
    ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public _drinksService : DrinksService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  // navigate to Main Page
  goToMain()
  {
    this.navCtrl.push(MainPage);
    //this.navCtrl.setRoot(MainPage);
  }

  // set gender
    setGender(gender)
    {
      //this.storage.set("gender", gender);
      this.storage.set("gender", gender).then(() => {
      console.log('Gender has been set to ' + gender);
      });
    }

}

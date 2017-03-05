import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainPage } from '../pages';
import { IDrinks } from '../../shared/shared';
import { DrinksService } from '../../shared/shared';
import { NgClass } from 'angular2/common';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	genderSelected: boolean = false;

  public drinks: IDrinks[] = [
      {
			family: 	'beer1',
			name: 		'beer glass 200ml',
			img: 		'src/assets/icon/favicon.ico',
			contains: 	0.6
		},
		{	
			family: 	'beer2',
			name: 		'beer glass 500ml',
			img: 		'src/assets/icon/favicon.ico',
			contains: 	1.6
		},
		{	
			family: 	'beer3',
			name: 		'beer can',
			img: 		'src/assets/icon/favicon.ico',
			contains: 	1.2
		},
		{	
			family: 	'beer4',
			name: 		'beer bottle 330ml',
			img: 		'',
			contains: 	1.3
		},
		{	
			family: 	'beer5',
			name: 		'cider bottle 330ml',
			img: 		'',
			contains: 	1.3
		},
		{	
			family: 	'beer6',
			name: 		'RTD bottle 330ml',
			img: 		'',
			contains: 	1.6
		}
    ];


  @ViewChild('drinksFamily') slider: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public _drinksService : DrinksService) {}

  ionViewWillEnter() {}
  
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
			//this.genderSelected = gender;
    });
		
		//document.getElementById(gender + '-selected').style.display = "block";
		 //var genderBtn = document.getElementById(gender + "-selected").classList;
		

  }

  // set drink family
  defaultDrinkSelected()
  {
    //alert(this.slider.getActiveIndex());

    this.storage.set("drinkFamily", this.slider.getActiveIndex());
  }

}

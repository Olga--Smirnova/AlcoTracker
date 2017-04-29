import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainTabsPage } from '../pages';
import { IDrinks } from '../../shared/shared';
import { DrinksService } from '../../shared/shared';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	genderSelected: boolean = false;

  public drinks: IDrinks[] = [
    	{
				family: 	'beer',
				name: 		'beer glass 200ml',
				img: 			'assets/images/family/beer-family.png',
				contains: 	0.6
			},
			{	
				family: 	'wine',
				name: 		'beer glass 500ml',
				img: 			'assets/images/family/wine-family.png',
				contains: 	1.6
			},
			{	
				family: 	'spirits',
				name: 		'beer can',
				img: 			'assets/images/family/spirits-family.png',
				contains: 	1.2
			},
			{	
				family: 	'mixes',
				name: 		'beer bottle 330ml',
				img: 			'assets/images/family/mixes-family.png',
				contains: 	1.3
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
    this.navCtrl.push(MainTabsPage);
    //this.navCtrl.setRoot(MainPage);
  }

  // drinks slider arrow navigation
  showPrevSlide()
  {
    let currentIndex = this.slider.getActiveIndex();
    this.slider.slidePrev();
  }
  showNextSlide()
  {
    let currentIndex = this.slider.getActiveIndex();
    this.slider.slideNext();
  }

  // set gender
  setGender(gender)
  {
      this.storage.set("gender", gender).then(() => {
      console.log('Gender has been set to ' + gender);
    });
  }

  // set drinks family
  defaultDrinkSelected()
  {
    this.storage.set("drinkFamily", this.slider.getActiveIndex());
  }

}

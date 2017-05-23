import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainTabsPage } from '../pages';
import { IDrinks } from '../../shared/shared';
import { DrinksService } from '../../shared/shared';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	genderSelected: boolean = false;
  disableButtonM : boolean = false;
  disableButtonF : boolean = false;
  drinkFamilySelected: boolean = false;

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
                public _drinksService : DrinksService,
                public alertCtrl: AlertController) {}

    ionViewWillEnter() {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad SettingsPage');
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
            this.genderSelected = true;
            //console.log('Gender has been set to ' + gender);
            if(gender == 'male')
            {
                this.disableButtonM = true;
                this.disableButtonF = false;
            } else {
                this.disableButtonF = true;
                this.disableButtonM = false;
            }
        });
    }
    

    // set drinks family
    defaultDrinkSelected()
    {
        this.storage.set("drinkFamily", this.slider.getActiveIndex()).then(() => {
            this.drinkFamilySelected = true;
            //console.log('Drink has been set to ' + this.slider.getActiveIndex());
        });
    }

    // alert if no gender has been set
    showGenderAlert() {
        let alert = this.alertCtrl.create({
          title: 'Gender?',
          subTitle: 'Please choose your gender, or the default one will apply. (male)',
          buttons: ['OK']
        });
        alert.present();
    }

    // alert if no default drink has been set
    showDefaultDrinkAlert() {
        let alert = this.alertCtrl.create({
          title: 'Default drink?',
          subTitle: 'Don\'t be shy, choose your usual, or the default one will apply. (beer)',
          buttons: ['OK']
        });
        alert.present();
    }

    // navigate to Main Page
    goToMain()
    {
        if(this.genderSelected == true) {
            if(this.drinkFamilySelected == true) {
                this.navCtrl.push(MainTabsPage);
                //this.navCtrl.setRoot(MainPage); 
            } else {
                this.showDefaultDrinkAlert();
            }
        } else {
            this.showGenderAlert();
        }
    }
}

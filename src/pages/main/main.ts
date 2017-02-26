import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IDrinks } from '../../shared/shared';
import { DrinksService } from '../../shared/shared';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

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

  @ViewChild('drinksCarousel') slider: Slides;

  private initialSlide: number;

  //public slidesOptions = {};
  // public slidesOptions = { 
  //     initialSlide: 2
  //         this.storage.get("drinkFamily").then((defaultDrink) => {
  //             if (defaultDrink) {
  //                 return defaultDrink;
  //             }
  //         });
  //  };


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public _drinksService : DrinksService ) {}
  
  

  ionViewWillEnter() {
    this.storage.get("drinkFamily").then((defaultDrink) => {
        if (defaultDrink) {
          //this.initialSlide = defaultDrink;
          //return this.initialSlide;
          this.slider.slideTo(defaultDrink, 0);
        }
    });

    // this.slider.slideTo(this.initialSlide, 0);
  }

  ionViewDidEnter() {
    //this.slider.getSlider().update();
    //this.slider.slideTo(this.currentIndex, 0);
  }

  ionViewDidLoad() {

    this.storage.get("gender").then((gender) => {
      if (gender) {
        console.log(gender);
      } else {
        console.log("gender hasn't been selected");
      }
    });

    this.storage.get("drinkFamily").then((defaultDrink) => {
      if (defaultDrink) {
        console.log(defaultDrink);
      } else {
        console.log("defaultDrink hasn't been selected");
      }
    });

  //   slidesOptions = { 
  //     initialSlide: 
  //         this.storage.get("drinkFamily").then((defaultDrink) => {
  //             if (defaultDrink) {
  //                 return defaultDrink;
  //             }
  //     });
  //  };
  }

  ngOnInit() {
      //this.slider.update();
  };


}

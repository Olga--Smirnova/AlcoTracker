import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';
import { DrinksInfoService } from '../../shared/shared';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  @ViewChild('drinksCarousel') slider: Slides;

  private initialSlide: number;
  drinksInfo: any;
  public slidesOptions: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              private file: File,
              private DrinksInfoService: DrinksInfoService) {}
  
  

  ionViewWillEnter() {
        this.DrinksInfoService.getDrinksInfo().subscribe(
            data => { this.drinksInfo = data
            },
            err => { console.log("Oops JSON!");
            }
        );


        this.slidesOptions = { 
          initialSlide: 
              this.storage.get("drinkFamily").then((defaultDrink) => {
                  if (defaultDrink) {
                      console.log("defaultDrink is" + defaultDrink);
                      if(defaultDrink == 1) {
                          // beer family
                          this.slider.slideTo(0);
                      }else if(defaultDrink == 2) {
                          // wine family
                          this.slider.slideTo(7);            
                      }else if(defaultDrink == 3) {
                          // spirit family
                          this.slider.slideTo(10);            
                      }else if(defaultDrink == 4) {
                          // coctail family
                          this.slider.slideTo(14);            
                      }
                  }
              })
        };
  }

    ionViewDidEnter() {
        
    }

  ionViewDidLoad() {
    this.storage.get("gender").then((gender) => {
      if (gender) {
        console.log(gender);
      } else {
        console.log("gender hasn't been selected");
      }
    });

    // this.DrinksInfoService.getDrinksInfo().subscribe(
    //     data => { this.drinksInfo = data
    //     },
    //     err => { console.log("Oops JSON!");
    //     }
    // );
  }

  ngOnInit() {
      //this.slider.update();
  };
}

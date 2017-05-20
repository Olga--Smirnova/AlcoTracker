import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-stats-day',
    templateUrl: 'stats-day.html',
})
export class StatsDayPage {
    today;
    viewTitle;    
    calendar = {
        mode: 'day',
        dateFormatter: {
            formatMonthViewDay: function(date:Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function(date:Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function(date:Date) {
                return 'testMT';
            },
            formatDayViewTitle: function(date:Date) {
                return 'testDT';
            }
        }
    };
    constructor(public navCtrl: NavController, private navParams: NavParams) {}
      
    ionViewDidLoad() {
          this.today = this.navParams.get('today'); 
    }
  

}

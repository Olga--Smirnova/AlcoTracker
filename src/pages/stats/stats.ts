import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsDayPage } from '../pages';

@IonicPage()
@Component({
    selector: 'page-stats',
    templateUrl: 'stats.html',
})
export class StatsPage {
    isToday: boolean;
    viewTitle;

    calendar = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function(date:Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function(date:Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function(date:Date) {
                return 'testMT';
            }
        }
    };

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    

    ionViewDidLoad() {
      console.log('ionViewDidLoad Stats');
    }

    // to change the month title on month change
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    // date select
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.navCtrl.push(StatsDayPage, {
            today: ev.selectedTime
        });
    }

}

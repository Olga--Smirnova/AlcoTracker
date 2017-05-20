import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatsDayPage } from './stats-day';

@NgModule({
  declarations: [
    StatsDayPage,
  ],
  imports: [
    IonicPageModule.forChild(StatsDayPage),
  ],
  exports: [
    StatsDayPage
  ]
})
export class StatsDayPageModule {}

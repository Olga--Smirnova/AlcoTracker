import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicStorageModule } from '@ionic/storage';
import { SettingsPage } from '../pages/settings/settings';
import { MainPage } from '../pages/main/main';
import { InfoPage } from '../pages/info/info';
import { StatsPage } from '../pages/stats/stats';
import { MainTabsPage } from '../pages/maintabs/maintabs';
import { StatsDayPage } from '../pages/stats-day/stats-day';
import { DrinksInfoService } from '../../shared/shared';
import { NgCalendarModule  } from 'ionic2-calendar';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    MainPage,
    InfoPage,
    StatsPage,
    MainTabsPage,
    StatsDayPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    MainPage,
    InfoPage,
    StatsPage,
    MainTabsPage,
    StatsDayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, File ]
})
export class AppModule {}

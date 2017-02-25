import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../pages/settings/settings';
import { MainPage } from '../pages/main/main';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    MainPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    MainPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}

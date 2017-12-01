import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';

@NgModule({
  declarations: [MyApp, HomePage, ItemsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      MyApp,
      {
        locationStrategy: 'path',
      },
      {
        links: [
          {
            component: ItemsPage,
            name: 'ItemsPage',
            segment: 'items/:id',
          },
        ],
      },
    ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ItemsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}

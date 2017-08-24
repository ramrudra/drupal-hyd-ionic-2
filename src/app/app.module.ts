import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { PingPage } from '../pages/ping/ping';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TracksPage} from "../pages/tracks/tracks";

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    PingPage,
    TabsPage,
    TracksPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    PingPage,
    TabsPage,
    TracksPage
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useClass: IonicErrorHandler,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {}

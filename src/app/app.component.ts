import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {AuthService} from "../services/auth/auth.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // Schedule a token refresh on app start up
      auth.startupTokenRefresh();
    });
  }
}

// export class AuthApp {
//   rootPage = TabsPage;
//
//   constructor(platform: Platform, private auth: AuthService) {
//     platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//
//       // Schedule a token refresh on app start up
//       auth.startupTokenRefresh();
//     });
//   }
// }

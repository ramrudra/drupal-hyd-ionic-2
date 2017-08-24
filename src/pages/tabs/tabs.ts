import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { TracksPage } from '../tracks/tracks';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  attendeesPage = HomePage;
  tracksPage = TracksPage;
}

import {Component, OnInit} from '@angular/core';

import {track1, track2, track3, track4} from '../../data/tracks';

@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html'
})
export class TracksPage implements OnInit{
  private sessions = [];

  ngOnInit() {
    this.sessions = track1;
  }

  changeTrack(ev, track) {
    if( track === 'track1') {
      this.sessions = track1;
    } else if( track === 'track2') {
      console.log(track2);
      this.sessions = track2;
    } else if( track === 'track3') {
      this.sessions = track3;
    } else if( track === 'track4') {
      this.sessions = track4;
    }
  }
}

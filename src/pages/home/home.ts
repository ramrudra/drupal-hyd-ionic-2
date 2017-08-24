import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DrupalService } from '../../providers/drupal-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[NavController], [DrupalService]],
})
export class HomePage {

  private users = [];
  private filteredUsers = [];
  searchQuery: string = '';
  constructor(public navCtrl: NavController, public Drupal: DrupalService) {

  }

  ionViewDidLoad() {
     this.Drupal.load_users()
       .then(data => {
         this.users = data.users;
         this.filteredUsers = data.users;
       })
  }

   getItems(ev: any) {
    let val = ev.target.value;

    this.filteredUsers = this.users;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
       this.filteredUsers = this.users.filter((item) => {
         var search_item = item.user.field_full_name.toLowerCase() + ' ' + item.user.field_organization.toLowerCase() + ' ' + item.user.field_job_role.toLowerCase();
         return (search_item.match(val.toLowerCase()));
       })
     }
  }

  searchClear() {
     this.filteredUsers = this.users;
  }

}

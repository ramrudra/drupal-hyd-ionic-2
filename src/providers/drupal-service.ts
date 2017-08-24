import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NodeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DrupalService {

  private data = this.data;
  constructor(public http: Http) {

  }



  /**
   * Function to load a node given a nid.
   * @param nid
   * @returns {Promise<T>}
   */
  // node_load(nid) {
  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }

  //   return new Promise(resolve => {
  //     this.http.get('http://localhost/d8/node/' + nid + '?_format=json')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         let node = {
  //           title: data.title[0].value,
  //           created: data.created[0].value,
  //           nid: data.nid[0].value,
  //           status: data.status[0].value,
  //           type: data.type[0].target_id,
  //           uid: data.uid[0].target_id,
  //         };
  //         if (data.body.length) {
  //           node['body'] = data.body[0].value;
  //         }
  //         if (data.path.length) {
  //           node['path'] = data.path[0].value;
  //         }
  //         this.data = [node];
  //         resolve(this.data);
  //       });
  //   });
  // }

  load_users() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://app.drupalhyderabad.org/registered-users-json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}

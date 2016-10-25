import {Injectable }     from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
  private apiUrl: string = '/api/';
  private apiVer: string = 'v1/';

  constructor (private af: AngularFire) {}

  getResources (method: string): FirebaseListObservable<any> {
    return this.af.database.list(`${this.apiUrl}${this.apiVer}${method}`);
  }

  getResource (method: string): FirebaseObjectObservable<any> {
    return this.af.database.object(`${this.apiUrl}${this.apiVer}${method}`);
  }

  updateResource(method: string,data){
    if(data.$key){
      delete data.$key;
    }if(data.$exists){
      delete data.$exists;
    }
    return this.getResource(method).update(data);
  }
  removeResource(method: string){
    return this.getResource(method).remove();
  }
}

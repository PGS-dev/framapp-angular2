import { Injectable }     from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
  private apiUrl: string = '/api/';
  private apiVer: string = 'v1/';
  private objects: FirebaseObjectObservable<any>;
  private lists: FirebaseListObservable<any>;

  constructor (private http: Http,
               private af: AngularFire) {}

  getResources (method: string,isFlat: boolean = false): Observable<any> {
    return this.af.database.list(`${this.apiUrl}${this.apiVer}${method}`);
  }

  putResources (method:string, data:string): Observable<any> {
    let url = `${this.apiUrl+this.apiVer}/${method}`;
    return this.http.put(url, data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postResources (method:string, data:string): Observable<any> {
    let url = `${this.apiUrl+this.apiVer}/${method}`;
    return this.http.post(url, data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}

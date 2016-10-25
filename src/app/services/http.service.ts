import { Injectable }     from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProductService, Product} from './product.service';
import { Observable }     from 'rxjs/Rx';
import {validateConfig} from "@angular/router/src/config";
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class HttpService {
  private apiUrl: string = 'https://project-5613440220430148247.firebaseio.com/api/';  // URL to web API
  private apiVer: string = 'v1';
  private objects: FirebaseObjectObservable<any>;
  private lists: FirebaseListObservable<any>;

  constructor (private http: Http,
              private af: AngularFire) {}

  // getResources (method: string): Observable<any> {
  //   return this.http.get(this.apiUrl+this.apiVer+'/'+method)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  getResources (method: string): Observable<any> {
    this.lists = this.af.database.list('/api/'+this.apiVer+'/'+method);
    // this.lists.subscribe(
    //     categoryList => console.log("angularfire", categoryList)
    // );
    return this.lists;
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

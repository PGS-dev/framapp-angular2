import { Injectable }     from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Rx';

@Injectable()
export class HttpService {
  private apiUrl: string = 'https://project-5613440220430148247.firebaseio.com/api/';  // URL to web API
  private apiVer: string = 'v1';

  constructor (private http: Http) {}

  getResources (method: string): Observable<any> {
    return this.http.get(this.apiUrl+this.apiVer+'/'+method)
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

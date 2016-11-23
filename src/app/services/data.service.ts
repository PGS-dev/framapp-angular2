import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { values } from 'lodash';

@Injectable()
export class DataService {
  baseUrl: string  = 'https://project-5613440220430148247.firebaseio.com/api/v1/';

  constructor(private http: Http) { }

  getData (path: string): Observable<any> {
    return this.http.get(this.baseUrl + path)
      .map(DataService.extractData)
      .catch(DataService.handleError);
  }
  getDataAsArray (path: string): Observable<any> {
    return this.getData(path).map(response=>values(response));
  }
  private static extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private static handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}

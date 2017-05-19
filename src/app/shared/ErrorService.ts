import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable()
export class ErrorService {
  public handle(error: any): Observable<any> {
    return Observable.throw(error.message || error);
  }
}

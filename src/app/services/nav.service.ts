import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {
  private _isVisibleSource = new BehaviorSubject<boolean>(false);
  _isVisible$ = this._isVisibleSource.asObservable();

  changeVisible(isVisible) {
    this._isVisibleSource.next(isVisible);
  }

  constructor() { }
}

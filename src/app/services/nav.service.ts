import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {
  private isVisible : boolean = false;
  private _isVisibleSource = new BehaviorSubject<boolean>(false);
  isVisible$ = this._isVisibleSource.asObservable();

  changeVisible() {
    this.isVisible = !this.isVisible;
    this._isVisibleSource.next(this.isVisible);
  }
}

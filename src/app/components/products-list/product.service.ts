import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ErrorService} from '../../shared/ErrorService';
import {Observable} from 'rxjs';
import {Config} from '../../../config';
import {Product} from './product';

@Injectable()
export class ProductService {
  constructor(private http: Http, private errorService: ErrorService) {
  }
  getProducts(): Observable<Product[]> {
    return this.http.get(Config.getResourceUrl('products'))
      .map(response => response.json() as Product[])
      .catch(this.errorService.handle);
  }
}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Category} from '../interfaces/categories.interface';

@Injectable()
export class CategoriesService {
  constructor(private http: Http) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get('https://project-5613440220430148247.firebaseio.com/api/v1/categories.json')
      .toPromise()
      .then(response => response.json() as Category[])
  }
}

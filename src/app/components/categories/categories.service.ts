import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Category} from './category';
import {Config} from '../../../config';
import {ErrorService} from '../../shared/ErrorService';


@Injectable()
export class CategoriesService {
  constructor(private http: Http, private errorService: ErrorService) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(Config.getResourceUrl('categories'))
      .toPromise()
      .then(response => response.json() as Category[])
      .catch(this.errorService.handle);
  }
}

import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Category} from './category';
import {Config} from '../../../config';
import {ErrorService} from '../../shared/ErrorService';
import {Observable} from 'rxjs';
@Injectable()
export class CategoriesService {
  constructor(private http: Http, private errorService: ErrorService) {
  }
  getCategories(): Observable<Category[]> {
    return this.http.get(Config.getResourceUrl('categories'))
      .map(response => response.json() as Category[])
      .catch(this.errorService.handle);
  }
}

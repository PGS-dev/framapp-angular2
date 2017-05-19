import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Category} from './category';
import {Config} from '../../../config';
import {ErrorService} from '../../shared/ErrorService';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class CategoriesService {
  constructor(private http: Http, private errorService: ErrorService) {
  }
  getCategories(): Observable<Category[]> {
    return this.http.get(Config.getResourceUrl('categories'))
      .map(response => {
        let responseJson = response.json();
        return Object.keys(responseJson).map((key) =>
          new Category(
            key,
            responseJson[key].title,
            responseJson[key].description
          )
        );
      })
      .catch(this.errorService.handle);
  }
}

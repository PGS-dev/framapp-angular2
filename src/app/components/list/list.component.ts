import {Component, Input} from '@angular/core';
import {Category} from '../../interfaces/';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent {
  @Input('list')list: Array<Category> = [];
  @Input('header')header: string = '';
  @Input('icoClasses')icoClasses: string = '';
}

import {Component} from '@angular/core';

// import { AppState } from '../app.service';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class Home {
  localState = {value: ''};

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}

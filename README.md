# FrameappAngular2

`npm install -g angular-cli`

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component components/component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.<br />
You can use shortcut `ng g c components/component-name`<br />
You can use shortcut `ng g d directives/directives-folder-name/directives-name`  WARNING! (you have to create folder for each directive before generate)<br />
You can use shortcut `ng g s services/service-folder-name/service-name`  WARNING! (you have to create folder for each service before generate)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bootstrap components

You can use bootstrap components for angular 2
[Bootstrap](https://ng-bootstrap.github.io/#/components/accordion)

## How to get data
Implement this import </br>
`import { DataService } from '../../services/data.service'; `</br>
Add 'DataService' to providers in @Component </br>
Inject `private dataService: DataService` into constructor </br>
And then  </br>
`this.dataService.getData('categories.json')
  .subscribe(
    (categoryList) => {
      //Do something with data
    }
  );
`</br>
change 'categories.json' if you need different data.

## Firebase for Angular2 official library(don't work yet)
[AngularFire2](https://github.com/angular/angularfire2)


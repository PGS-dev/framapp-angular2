// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

// @KP: Environment variables architecture may change - https://github.com/angular/angular-cli/issues/933
export const environment = {
  production: false,
  endpointUrl: "https://framapp-angular2-wro.firebaseio.com/" //TODO: place here firebase of React FramApp
};

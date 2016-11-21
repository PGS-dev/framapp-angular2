import {environment} from './environments/environment';
export class Config {
  private static resourcesUrls: {[Identifier: string]: string} = {
    'categories': 'categories.json'
  };

  public static getResourceUrl(resourceName: string) {
    return environment.endpointUrl + this.resourcesUrls[resourceName];
  }
}

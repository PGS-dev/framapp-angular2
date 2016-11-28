export class Config {
  private static readonly FIREBASE_URL: String = 'https://project-5613440220430148247.firebaseio.com';
  private static readonly BASE_URL: String = `${Config.FIREBASE_URL}/api/v1`;
  private static readonly FIREBASE_CONFIG: Object = {
    apiKey: 'AIzaSyBKP4cOP508h0JLKmjFvzJooO0MqV8l4fU',
    authDomain: 'project-5613440220430148247.firebaseapp.com',
    databaseURL: 'https://project-5613440220430148247.firebaseio.com',
    storageBucket: 'project-5613440220430148247.appspot.com',
    messagingSenderId: '122242095723'
  };

  private static resourcesUrls: {[Identifier: string]: string} = {
    'categories': 'categories.json'
  };

  public static getResourceUrl(resourceName: string) {
    return Config.BASE_URL + '/' + this.resourcesUrls[resourceName];
  };

  public static getFirebaseConfig() {
    return Config.FIREBASE_CONFIG;
  }

}

import {AuthProviders, AuthMethods} from 'angularfire2';

export const myFirebaseConfig = {
  apiKey: 'AIzaSyBKP4cOP508h0JLKmjFvzJooO0MqV8l4fU',
  authDomain: 'https://project-5613440220430148247.firebaseapp.com',
  databaseURL: 'https://project-5613440220430148247.firebaseio.com',
  storageBucket: 'project-5613440220430148247.appspot.com',
  messagingSenderId: '122242095723'
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

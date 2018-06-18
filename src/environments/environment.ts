// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDhfFEj-ojJfOnunvgMtD3Qy2nwyMcPDOQ',
    authDomain: 'akrivia-proma.firebaseapp.com',
    databaseURL: 'https://akrivia-proma.firebaseio.com',
    // https://demouser1-773a9.firebaseio.com/
    projectId: 'akrivia-proma',
    storageBucket: 'akrivia-proma.appspot.com',
    messagingSenderId: '872055842563'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

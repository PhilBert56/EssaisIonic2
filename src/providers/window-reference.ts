import { Injectable } from '@angular/core';


/*
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
*/


/*
  Generated class for the WindowReference provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

function _window(): any {
  // return the native window obj
  return window;
}


@Injectable()
export class WindowReference {

  get nativeWindow(): any {
    return _window();
  }

}

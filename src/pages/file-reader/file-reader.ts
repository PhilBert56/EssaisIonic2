import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { WindowReference } from './window-reference';
/**
 * Generated class for the FileReader page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-reader',
  templateUrl: 'file-reader.html',
  providers : [WindowReference]
})
export class FileReaderPage {

  constructor( winRef : WindowReference) {

  console.log ('Window object', winRef.nativeWindow );
}



  /*ionViewDidLoad() {
    console.log('ionViewDidLoad FileReader');
  }*/
}

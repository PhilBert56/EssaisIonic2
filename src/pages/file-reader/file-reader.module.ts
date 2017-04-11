

import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { FileReaderPage } from './file-reader';

@NgModule({
  declarations: [
    FileReader,
  ],
  /*
  imports: [
    IonicModule.forChild(FileReaderPAge),
  ],
  */
  exports: [
    FileReaderPage
  ]
})
export class FileReaderModule {}


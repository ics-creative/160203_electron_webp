import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdDialogModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {PreviewComponent} from './component.preview';
import {ImageFormatComponent} from './component.image-format';
import {SaveModalComponent} from './component.modal';
import {SaveModalMultiComponent} from './component.modal-multi';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ImageFormatComponent,
    SaveModalComponent,
    SaveModalMultiComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdGridListModule, MdIconModule, MdDialogModule
  ],

  entryComponents: [
    SaveModalComponent
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import {AppComponent} from './app.component';
import {PreviewComponent} from './component.preview';
import {ImageFormatComponent} from './component.image-format';
import {SaveModal} from './component.modal';
import {SaveModalMulti} from './component.modal-multi';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ImageFormatComponent,
    SaveModal,
    SaveModalMulti
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

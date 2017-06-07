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

import {MainComponent} from './main/main.component';
import {PreviewComponent} from './lists/component.preview';
import {ImageFormatComponent} from './ui/component.image-format';
import {SaveModalComponent} from './dialog/component.modal';
import {SaveModalMultiComponent} from './dialog/component.modal-multi';

@NgModule({
  declarations: [
    MainComponent,
    PreviewComponent,
    ImageFormatComponent,
    SaveModalComponent,
    SaveModalMultiComponent
  ],
  imports: [
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

  bootstrap: [MainComponent]
})
export class AppModule {
}

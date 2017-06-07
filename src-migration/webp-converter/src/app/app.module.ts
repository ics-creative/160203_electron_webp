import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdRadioModule, MdSliderModule,
  MdToolbarModule
} from '@angular/material';

import {MainComponent} from './main/main.component';
import {PreviewComponent} from './lists/component.preview';
import {ImageFormatComponent} from './ui/component.image-format';
import {SaveSignleDialogComponent} from './dialog/save-single-dialog.component';
import {SaveMultiDialogComponent} from './dialog/save-multi-dialog.component';

@NgModule({
  declarations: [
    MainComponent,
    PreviewComponent,
    ImageFormatComponent,
    SaveSignleDialogComponent,
    SaveMultiDialogComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdSliderModule,
    MdDialogModule
  ],

  entryComponents: [
    SaveSignleDialogComponent,
    SaveMultiDialogComponent
  ],

  providers: [],

  bootstrap: [MainComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PreviewComponent} from './component.preview';
import {ImageFormatComponent} from './component.image-format';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ImageFormatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

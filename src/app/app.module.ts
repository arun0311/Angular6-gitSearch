import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitsearchComponent } from './components/gitsearch/gitsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

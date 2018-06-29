import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { GitsearchComponent } from './components/gitsearch/gitsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

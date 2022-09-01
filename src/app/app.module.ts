import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}

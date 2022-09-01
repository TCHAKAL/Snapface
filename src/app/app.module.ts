import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import {AppComponent} from './app.component';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {HeaderComponent} from './core/components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}

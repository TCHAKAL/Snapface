import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import {AppComponent} from './app.component';
import {FaceSnapComponent} from './compenents/face-snap/face-snap.component';
import {FaceSnapListComponent} from './compenents/face-snap-list/face-snap-list.component';
import {HeaderComponent} from './compenents/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {LandingPageComponent} from './compenents/landing-page/landing-page.component';
import {SingleFaceSnapComponent} from './compenents/single-face-snap/single-face-snap.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewFaceSnapComponent } from './compenents/new-face-snap/new-face-snap.component';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProvider} from "./interceptors";

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(fr.default);
  }
}

import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProvider} from "./interceptors";
import * as fr from "@angular/common/locales/fr";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:[
    httpInterceptorProvider,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  exports:[
    HeaderComponent,
  ]
})
export class CoreModule {

  constructor() {
    registerLocaleData(fr.default);
  }
}

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  {path:'facesnaps',loadChildren:()=> import('./face-snaps/face-snaps.module').then(m=>m.FaceSnapsModule)},
  {path:'login',loadChildren:()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {path: '', component: LandingPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}


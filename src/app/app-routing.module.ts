import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SnapFaceListComponent} from "./snap-face-list/snap-face-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: 'facesnaps',
    component: SnapFaceListComponent
  },
  {
    path: '',
    component: LandingPageComponent
  }
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


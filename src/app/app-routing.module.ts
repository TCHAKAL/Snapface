import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snaps/components/face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";
import {SingleFaceSnapComponent} from "./face-snaps/components/single-face-snap/single-face-snap.component";
import {NewFaceSnapComponent} from "./face-snaps/components/new-face-snap/new-face-snap.component";

const routes: Routes = [
  {
    path: 'facesnaps',
    component: FaceSnapListComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'facesnaps/:id',//les : aprés le / dise correspond a un parametre avec le nom id
    component: SingleFaceSnapComponent
  },
  {
    path: 'create',
    component: NewFaceSnapComponent
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


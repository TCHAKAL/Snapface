import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "../../models/face-snap-model";
import {FaceSnapService} from "../../services/face-snap-service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  //faceSnapModel !: FaceSnapModel;
  faceSnapModel$ !:Observable<FaceSnapModel> ;

  buttonText !: String;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Snap !';
    const faceSnapId = +this.route.snapshot.params['id'];// le + pour transformer la chaine en nombre
    this.faceSnapModel$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText == 'Snap !') {
    //  this.faceSnapService.onSnapFaceSnapById(this.faceSnapModel.id, "Snap");
      this.buttonText = 'Unsnap !'
    } else {
    //  this.faceSnapService.onSnapFaceSnapById(this.faceSnapModel.id, "Unsnap");
      this.buttonText = 'Snap !'
    }
  }

}

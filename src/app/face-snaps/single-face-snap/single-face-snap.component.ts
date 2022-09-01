import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "../../core/models/face-snap-model";
import {FaceSnapService} from "../../core/services/face-snap-service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  //faceSnapModel !: FaceSnapModel;
  faceSnapModel$ !: Observable<FaceSnapModel>;
  buttonText !: String;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Snap !';
    const faceSnapId = +this.route.snapshot.params['id'];// le + pour transformer la chaine en nombre
    this.faceSnapModel$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapModelId: number) {
    if (this.buttonText == 'Snap !') {
      this.faceSnapModel$ =  this.faceSnapService.onSnapFaceSnapById(faceSnapModelId, "Snap").pipe(
        tap(() => {
            this.buttonText = 'Unsnap !'
        })
      );
    } else {
      this.faceSnapModel$= this.faceSnapService.onSnapFaceSnapById(faceSnapModelId, "Unsnap").pipe(
        tap(() => {
            this.buttonText = 'Snap !'
        })
      );
    }
  }

}

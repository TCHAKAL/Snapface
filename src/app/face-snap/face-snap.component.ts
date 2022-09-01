import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {FaceSnapModel} from "../core/models/face-snap-model";
import {FaceSnapService} from "../core/services/face-snap-service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnapModel !: FaceSnapModel;

  buttonText !: String;

  constructor(private faceSnapService: FaceSnapService, private rooter: Router) {
  }

  ngOnInit() {
    this.buttonText = 'Snap !';
  }

  onSnap() {
    if (this.buttonText == 'Snap !') {
      this.faceSnapService.onSnapFaceSnapById(this.faceSnapModel.id, "Snap");
      this.buttonText = 'Unsnap !'
    } else {
      this.faceSnapService.onSnapFaceSnapById(this.faceSnapModel.id, "Unsnap");
      this.buttonText = 'Snap !'
    }
  }

  onViewFaceSnap() {
    this.rooter.navigateByUrl('facesnaps/' + this.faceSnapModel.id);
  }
}

import {Component, OnInit, Input} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap-model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnapModel !: FaceSnapModel;

  buttonText !: String;

  ngOnInit() {
    this.buttonText = 'Snap !';
  }

  onSnap() {
    if (this.buttonText == 'Snap !') {
      this.faceSnapModel.snaps++;
      this.buttonText = 'Retirer !'
    } else {
      this.faceSnapModel.snaps--;
      this.buttonText = 'Snap !'
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap-model";
import {FaceSnapService} from "../service/face-snap-service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnapModel[];

  //Dependency injection de Angular
  constructor(private faceSnapService: FaceSnapService) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
  }

}

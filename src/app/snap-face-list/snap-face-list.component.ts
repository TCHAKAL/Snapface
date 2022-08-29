import {Component, Inject, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap-model";
import {FaceSnapService} from "../service/face-snap-service";

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit {
  faceSnaps!:FaceSnapModel[];
  //Dependency injection de Angular
  constructor(private faceSnapService : FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps =this.faceSnapService.faceSnaps;
  }

}

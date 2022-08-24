import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "./models/face-snap-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   mySnapModel!: FaceSnapModel;
   mySnapModel2!: FaceSnapModel;
   mySnapModel3!: FaceSnapModel;

  ngOnInit() {
    this.mySnapModel= new FaceSnapModel('DOG', 'A random picture matching the keyword dog, of 320 x 240 pixels', new Date(), 0, 'https://loremflickr.com/320/240/dog');
    this.mySnapModel2= new FaceSnapModel('PARIS', 'A random picture matching the keywords paris and girl', new Date(), 0, 'https://loremflickr.com/g/320/240/paris');
    this.mySnapModel3= new FaceSnapModel('BRAZIL', ' A random picture matching the keywords brazil or rio.', new Date(), 0, 'https://loremflickr.com/320/240/brazil,rio');
  }
}



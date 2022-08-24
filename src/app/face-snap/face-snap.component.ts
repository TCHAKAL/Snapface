import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  title ! : string;
  description ! : string;
  dateCreation ! : Date;
  snaps ! : number;
  imageUrl ! : string;
  isUserSnapped ! : boolean;

  ngOnInit(){
    this.title = "TEDDY";
    this.description = "Mon meilleur ami depuis tout petit !";
    this.dateCreation = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://loremflickr.com/320/240';
    this.isUserSnapped=false;
  }

  onAddSnap(){
    this.snaps++;
    this.isUserSnapped=true;
  }
  onCancelSnap(){
    this.snaps--;
    this.isUserSnapped=false;
  }

}

import {Injectable} from "@angular/core";
import {FaceSnapModel} from "../models/face-snap-model";

@Injectable({
  providedIn:'root'
})
export class FaceSnapService{
  faceSnaps :FaceSnapModel[]=[
    {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      dateCreation: new Date(),
      snaps: 120,
    },
    {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      dateCreation: new Date(),
      snaps: 255,
      location: 'Paris'
    }
    ,{
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      dateCreation: new Date('01/12/1993'),
      snaps: 10,
    }
  ]
}

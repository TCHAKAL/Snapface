import {Injectable} from "@angular/core";
import {FaceSnapModel} from "../models/face-snap-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  constructor(private http: HttpClient) {
  }

  getAllFaceSnaps(): Observable<FaceSnapModel[]> {
    return this.http.get<FaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnapModel> {
    return this.http.get<FaceSnapModel>('http://localhost:3000/facesnaps/' + faceSnapId);
  }

  onSnapFaceSnapById(faceSnapId: number, type: 'Snap' | 'Unsnap'): void {
    // const faceSnap = this.getFaceSnapById(faceSnapId);
    // type === 'Snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  // addFaceSnap(formValue:{title:string,description:string,imageUrl:string,location?:string}){
  //   const newFaceSnap : FaceSnapModel= {
  //     ...formValue,
  //     id:this.faceSnaps[this.faceSnaps.length-1].id+1,
  //     snaps:0,
  //     createdDate:new Date()
  //   };
  //   this.faceSnaps.push(newFaceSnap);
  // }
}

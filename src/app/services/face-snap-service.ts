import {Injectable} from "@angular/core";
import {FaceSnapModel} from "../models/face-snap-model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {FormBuilder} from "@angular/forms";

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

  onSnapFaceSnapById(faceSnapId: number, type: 'Snap' | 'Unsnap'): Observable<FaceSnapModel> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (type === 'Snap' ? +1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnapModel>('http://localhost:3000/facesnaps/' + faceSnapId, updatedFaceSnap))
    );
  }

  addFaceSnap(faceSnap: {title:string,description:string,imageUrl:string,location?:string}): Observable<FaceSnapModel>{
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps=>[...faceSnaps].sort((a,b)=>a.id-b.id)),//On retourne un tableau trié par ID pour s'assurer que le dernier élément du tableau possède l'ID le plus élevé.
      map(sortedFaceSnaps=> sortedFaceSnaps[sortedFaceSnaps.length-1]),//On retourne ensuite le dernier élément de ce tableau.
      map(previousFacesnap=>({//On retourne le nouveau FaceSnap avec son ID valable.
        ...faceSnap,
        snaps:0,
        createdDate : new Date(),
        id:previousFacesnap.id+1
      })),
      switchMap(newFacesnap=>this.http.post<FaceSnapModel>('http://localhost:3000/facesnaps',newFacesnap))
    );
  }

}

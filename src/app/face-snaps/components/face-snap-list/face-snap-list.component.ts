import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnapModel} from "../../../core/models/face-snap-model";
import {FaceSnapService} from "../../../core/services/face-snap-service";
import {interval, Observable, Subject, take, takeUntil} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit,OnDestroy {
  faceSnaps$!: Observable<FaceSnapModel[]>;
  destroy$!: Subject<boolean>;

  //Dependency injection de Angular
  constructor(private faceSnapService: FaceSnapService) {
  }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();

    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}

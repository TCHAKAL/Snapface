import {Component, OnInit} from '@angular/core';
import {
  concatMap,
  exhaust,
  exhaustMap,
  filter,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  take,
  tap
} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  //interval$!: Observable<string>;

  ngOnInit() {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      //mergeMap(color => this.getTrainObservable$(color)),assure la mise en parallèle : l'Observable extérieur peut souscrire aux Observables intérieurs suivants sans attendre que les précédents soient complétés.
      //concatMap(color => this.getTrainObservable$(color)),assure la mise en série : il attend que les Observables intérieurs complètent avant de souscrire aux suivants– même si l'Observable extérieur émet plusieurs fois. Les Observables intérieurs seront traités en séquence à la suite.
      //exhaustMap(color => this.getTrainObservable$(color)),assure le traitement complet d'une souscription avant d'observer une nouvelle émission de l'Observable extérieur. Si d’autres demandes sont faites entre temps, elles ne seront pas prises en compte.
      switchMap(color => this.getTrainObservable$(color)),//traite la dernière demande de souscription de l’Observable extérieur et annule toute souscription précédente non-complétée.
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  // this.interval$ = interval(1000).pipe(
  //   filter(value => value % 3 === 0),
  //   map(value => value % 2 === 0 ?
  //     'Je suis ' + value + ' et je suis pair' :
  //     'Je suis ' + value + ' et je suis impair'),
  //   tap(text=>this.logger(text))
  // );
  //}


  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({color, trainIndex}).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }
}



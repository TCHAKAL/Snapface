import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<number>;

  ngOnInit() {
    this.interval$ = interval(1000);
  }
}



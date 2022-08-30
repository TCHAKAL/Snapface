import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const interval$ = interval(1000);
    interval$.subscribe(value => console.log("1ere instance "+value));
    setTimeout(()=> interval$.subscribe(value => console.log("2eme instance "+value)),3000);
  }
}



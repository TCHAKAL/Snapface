import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail= 'ahmed.tchakal@gmail.com';

  constructor(private rooter: Router) {
  }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.rooter.navigateByUrl('facesnaps');
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value);
  }

}

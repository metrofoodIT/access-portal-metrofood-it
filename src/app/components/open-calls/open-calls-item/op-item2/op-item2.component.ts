import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-op-item2',
  templateUrl: './op-item2.component.html',
  styleUrls: ['./op-item2.component.css']
})
export class OpItem2Component {

  constructor(private router: Router) {}

  goToExternalLink(){
    window.open("https://survey.metrofood.eu/index.php/823736?lang=en", "_blank");
  }

}

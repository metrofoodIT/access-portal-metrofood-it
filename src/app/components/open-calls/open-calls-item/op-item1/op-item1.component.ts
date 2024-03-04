import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-op-item1',
  templateUrl: './op-item1.component.html',
  styleUrls: ['./op-item1.component.css']
})
export class OpItem1Component {

  constructor(private router: Router) {}

  goToExternalLink(){
    window.open("https://survey.metrofood.eu/index.php/369298", "_blank");
  }

}

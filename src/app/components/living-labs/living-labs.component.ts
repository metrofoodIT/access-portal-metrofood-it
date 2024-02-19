import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-living-labs',
  templateUrl: './living-labs.component.html',
  styleUrls: ['./living-labs.component.css']
})
export class LivingLabsComponent {
  constructor(private router: Router) {}

  goToExternalLink(){
    window.open("https://metrofood.wesolve.app/public/home", "_blank");
  }

}



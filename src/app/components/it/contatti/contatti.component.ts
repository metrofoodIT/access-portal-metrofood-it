import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {
  constructor(private router: Router) {}

  goToExternalLink(link: string) {
    window.open(link, "_blank");
  }

}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent {

  isDisplayENEA = false;
  isDisplayUNINA = false;
  isDisplayUNISI = false;
  isDisplayUNIPR = false;
  isDisplayUNIROMA1 = false;
  isDisplayUNIBA = false;
  isDisplayUNIMOL = false;
  isDisplayINRIM = false;
  panelOpenState = false;

  toggleDisplayENEA(){
    this.isDisplayENEA = !this.isDisplayENEA;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = false;
  }

  toggleDisplayUNINA(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = !this.isDisplayUNINA;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = false;
  }

  toggleDisplayUNISI(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = !this.isDisplayUNISI;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = false;
  }

  toggleDisplayUNIPR(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = !this.isDisplayUNIPR;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = false;
  }

  toggleDisplayUNIROMA1(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = !this.isDisplayUNIROMA1;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = false;
  }

  toggleDisplayUNIBA(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = !this.isDisplayUNIBA;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = false;
  }

  toggleDisplayUNIMOL(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = !this.isDisplayUNIMOL;
    this.isDisplayINRIM = false;
  }

  toggleDisplayINRIM(){
    this.isDisplayENEA = false;
    this.isDisplayUNINA = false;
    this.isDisplayUNISI = false;
    this.isDisplayUNIPR = false;
    this.isDisplayUNIROMA1 = false;
    this.isDisplayUNIBA = false;
    this.isDisplayUNIMOL = false;
    this.isDisplayINRIM = !this.isDisplayINRIM;
  }
}

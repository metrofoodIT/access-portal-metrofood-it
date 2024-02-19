import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    //chiamare authservice

  }

}

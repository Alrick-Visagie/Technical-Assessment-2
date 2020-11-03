import { LoginServiceService } from './../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Login } from './../models/login.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginList: Login[];
  Username: string;
  Password: string;
  ID: number;

  constructor(private service: LoginServiceService) { }

  ngOnInit(): void {
  }

  submitLogin(form: NgForm): void {
    this.getLogins();
  }

  getLogins(): void {
    this.service.getLogins().subscribe(
      res => {
        this.loginList = res as Login[];
        this.checkLogin();
      },
      err => {
        console.log(err);
      }
    );
    console.log(this.loginList);
  }

  checkLogin(): boolean {
    return this.loginList.some(function(user) 
    {
      return user.Username === this.Username;
    });
  }

}

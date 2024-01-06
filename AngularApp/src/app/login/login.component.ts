import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpServices } from '../services/common.http.services';

const loginurl='http://localhost:16534/api/Authentication/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http:HttpClient, 
    private route:Router,
    private commonhttpservice:CommonHttpServices){
  }
token:any=[];
  OnLogin(userCredentials:{userid:string, password:string}){
    this.token=this.commonhttpservice.postRequest(loginurl,userCredentials);
    console.log( this.token);
    this.route.navigate(['/dashboard']);
  }
}

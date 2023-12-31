import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){

  }


  title = 'AngularApp';
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  OnLogin(userCredentials:{userid:string, password:string}){
console.log("User ID="+userCredentials.userid);
console.log("Password="+userCredentials.password);
this.http.post('http://localhost:16534/api/Authentication/Login',userCredentials)
.subscribe((res)=>{
  // res.set('Access-Control-Allow-Origin', 'http://localhost:16534');
  console.log(res);
});
  }
}

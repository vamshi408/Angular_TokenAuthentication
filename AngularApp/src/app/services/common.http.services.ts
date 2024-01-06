import {  HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({  
    providedIn: 'root',  
  })  
  export class CommonHttpServices{

    constructor(private http:HttpClient){}

getRequest(url:string){
this.http.get(url);
}
token:any;
postRequest(url:string,body:any):any{
    this.http.post(url,body).subscribe((res)=> {
        this.token=res,console.log(res)});
        return this.token;
}

  }
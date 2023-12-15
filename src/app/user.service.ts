import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalstorageService } from './localstorageservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (private http:HttpClient, @Inject(DOCUMENT) private _doc: Document,private localStorageService:LocalstorageService){
   
  }

  apiUrl ='http://localhost:3000/api/v1/users';
  
  getWindow(): Window | null {
    return this._doc.defaultView;
  }

  getLocation(): Location {
    return this._doc.location;
  }

  createElement(tag: string): HTMLElement {
    return this._doc.createElement(tag);
  }
  AuthenticateUser(inputData:any){
    return this.http.post(this.apiUrl+'/loginuser',inputData);
  }
  ProceedRegister(inputData:any){
    return this.http.post(this.apiUrl,inputData);
  }

  IsLoggedIn(){
    return this.localStorageService.getItem('username')!= null
  }
  logout(){
    this.localStorageService.removeItem('username');
  }

}

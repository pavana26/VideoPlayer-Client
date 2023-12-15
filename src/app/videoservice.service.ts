import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalstorageService } from './localstorageservice.service';

@Injectable({
  providedIn: 'root'
})

export class VideoserviceService {

  constructor(private http:HttpClient,private localStorageService:LocalstorageService) { }

  apiUrl ='http://localhost:3000/api/v1/uploadVideo';

  uploadAndSave(formData:any){
    return  this.http.post(this.apiUrl,formData);
  }
  getFileLocation(){
    return this.localStorageService.getItem('filelocation')
  }
}

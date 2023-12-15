import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { LocalstorageService } from '../localstorageservice.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrl: './videoplayer.component.css'
})
export class VideoplayerComponent {

  constructor(private localStorage: LocalstorageService){}
  userDisplayName:string | null="";
  ngOnInit(){
    this.userDisplayName = this.localStorage.getItem('videoname');
  }
  api: VgApiService = new VgApiService;

  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.autoplay.bind(this)
    )
  }

  autoplay() {
    this.api.play();

  }
  getVideoURL(){
    const url ='http://localhost:3000/api/v1/uploadVideo/'+this.localStorage.getItem('videoname');
    return url;
  }
}

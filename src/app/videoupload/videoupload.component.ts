import { Component } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { FormBuilder, Validators } from '@angular/forms';
import { VideoserviceService } from '../videoservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorageservice.service';

@Component({
  selector: 'app-videoupload',
  templateUrl: './videoupload.component.html',
  styleUrl: './videoupload.component.css'
})
export class VideouploadComponent {

  constructor(private builder: FormBuilder, private videoService: VideoserviceService, private toastr: ToastrService,private localStorageService:LocalstorageService, private router: Router) { }

  fileUploadForm = this.builder.group({
    fileDetails: this.builder.control('', Validators.required),
  })
  public dropped(file: NgxFileDropEntry[]) {

    // Is it a file?
    if (file[0].fileEntry.isFile) {

      const fileEntry = file[0].fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        // Here you can access the real file

        const formData = new FormData();
        let response: any;
        formData.append('file', file, file.name);
        formData.append('videoname', file.name);
        this.videoService.uploadAndSave(formData).subscribe(res => {
          response = res;
          if (response.result === "success") {
            this.localStorageService.setItem('videoname',file.name)
            this.toastr.success("Uploaded successfully");
            this.router.navigate(['playVideo']);
          }
        });
      });

    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }
}

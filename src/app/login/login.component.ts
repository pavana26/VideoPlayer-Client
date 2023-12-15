import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { LocalstorageService } from '../localstorageservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private builder:FormBuilder,private toastr:ToastrService,private userService: UserService,private router:Router,private localStorageService:LocalstorageService ){
    localStorageService.clear();
  }

  loginForm = this.builder.group({
    username: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required)
  })
  
  userdata : any;

  proceedLogin(){
    if(this.loginForm.valid){
      this.userService.AuthenticateUser(this.loginForm.value).subscribe(res =>{
        this.userdata = res;
        if(this.userdata.username){
          this.localStorageService.setItem('username',this.userdata.username);
          this.router.navigate(['uploadVideo']);
        }else{
          //throw invalid error credentials
          this.toastr.error('Invalid credentials');

        }
      })
    }else{
      //display error
      this.toastr.warning('Please enter valid data')
    }
  }

}

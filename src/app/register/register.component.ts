import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private builder:FormBuilder,private toastr: ToastrService,private userService: UserService,private router:Router ){
  }



  registerForm = this.builder.group({
    username: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required),
    email: this.builder.control('',Validators.compose([Validators.required,Validators.email]))

  })
  result :any;
  proceedRegistration(){
    if(this.registerForm.valid){
      this.userService.ProceedRegister(this.registerForm.value).subscribe(res =>{
        this.toastr.success("Registered successfully");
        this.router.navigate(['login']);
      })
    }else{
      //display error
      this.toastr.warning('Please enter valid data');
    }
  }
}

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerc',
  templateUrl: './headerc.component.html',
  styleUrl: './headerc.component.css'
})
export class HeadercComponent {
  constructor(public userService:UserService,private router:Router ){}
  userLoggedIn(){
    return this.userService.IsLoggedIn();
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['login']);
  }

}

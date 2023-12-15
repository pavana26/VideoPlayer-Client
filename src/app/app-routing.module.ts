import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VideouploadComponent } from './videoupload/videoupload.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: '',component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'uploadVideo',component: VideouploadComponent, canActivate: [authGuard] },
  { path: 'playVideo',component: VideoplayerComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularUI';

  static isBrowser = new BehaviorSubject<boolean>(true);

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
}

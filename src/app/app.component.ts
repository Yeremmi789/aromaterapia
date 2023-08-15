import { Component } from '@angular/core';
import {Router } from '@angular/router';
import {filter} from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

declare var gtag:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aromaterapia';

  // constructor(
  //   private router: Router
  // ) {
  //   const navEndEvents$ = this.router.events
  //   .pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   );

  //   navEndEvents$.subscribe((event: NavigationEnd) => {
  //     gtag('config', 'G-7PKHNW13RK', {
  //       'page_path': event.urlAfterRedirects
  //     });
  //   });
  // }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-7PKHNW13RK', {
          'page_title': event.urlAfterRedirects,
          'page_path': event.urlAfterRedirects
          
        });
      }
    });
  }

  
}

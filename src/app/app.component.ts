import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private authService: AuthService, router: Router) {
   authService.user$.subscribe(user => {
     if (user) {
       let returnUrl = localStorage.getItem('returnUrl');
       router.navigateByUrl(returnUrl);
     }
   });
 }
}

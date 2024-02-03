import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  isAuthenticated = false;
  private userSub: Subscription;
  
  constructor(private authService: AuthService){}
  
  ngOnInit() {
   this. userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
   });
    window.addEventListener('DOMContentLoaded', event => {

      // Toggle the side navigation
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
          // Uncomment Below to persist sidebar toggle between refreshes
          // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          //     document.body.classList.toggle('sb-sidenav-toggled');
          // }
          sidebarToggle.addEventListener('click', event => {
              event.preventDefault();
              document.body.classList.toggle('sb-sidenav-toggled');
              localStorage.setItem('sb|sidebar-toggle', new Boolean(document.body.classList.contains('sb-sidenav-toggled')).toString());
          });
      } 
  });
  }
onLogout() {
  this.authService.logout();
}

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

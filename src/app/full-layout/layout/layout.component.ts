import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from '../../auth/auth/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit{
  // Part of sidebar setup
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = false;

  // part of authentification process 
  isAuthenticated = false;
  private userSub: Subscription;
  userDetails = {} as User;
      
  constructor(
    private authService: AuthService,
    private observer: BreakpointObserver
    ){}
  

  ngOnInit() {

       // Part of the authentification process - controlling link shown
   this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.userDetails = user;
   });
   
    // Part of the sidebar layout process - controlling sidebar
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

 

  }

  // controling toggle button
  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

onLogout() {
  this.authService.logout()
}

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  // myScriptElement: HTMLScriptElement;
  title = 'rg-safety-app';

  constructor(private authService: AuthService){

    // this.myScriptElement = document.createElement("script");
    // this.myScriptElement.src = "/src/assets/customJs/scripts.js";
    // document.body.appendChild(this.myScriptElement);
  }  
  ngOnInit() {
    this.authService.autoLogin();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // myScriptElement: HTMLScriptElement;

  title = 'rg-safety-app';

  constructor(){

    // this.myScriptElement = document.createElement("script");
    // this.myScriptElement.src = "/src/assets/customJs/scripts.js";
    // document.body.appendChild(this.myScriptElement);
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData} from '../auth.service';
import { error } from 'jquery';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(
      private router: Router,
      private authService: AuthService) {}

    onSwitchMode() {
      this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
      if (!form.valid) {
        return;
      }
      const name = form.value.name;
      const email = form.value.email;
      const password = form.value.password;

      let autObs: Observable<AuthResponseData>;

      this.isLoading = true;

      if(this.isLoginMode){
        this.router.navigate(['/'])
        autObs = this.authService.login(email, password);       
      } else {
          autObs = this.authService.signup(name, email , password)
          
      }
      autObs.subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
      form.reset();
    }
}

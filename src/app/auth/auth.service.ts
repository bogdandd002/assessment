import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, tap } from 'rxjs';
import { throwError } from 'rxjs';
import { User } from './auth/user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  status: boolean;
  email: string;
  localId: number;
  message: string;
  token: string;
  expiresIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  user$ : Observable<User> = this.user.asObservable();

  private tokenExpirationTimer: any;

 constructor(private http: HttpClient, private router: Router) { }

  signup(name:string, email: string, password: string) {
    return this.http.post<AuthResponseData>('http://127.0.0.1:8000/api/auth/register',
    {
      name: name,
      email: email,
      password: password,
      returnSecureToken: true

    }
    ).pipe(catchError(this.handleError), 
    tap(resData => {
      this.handleAuthentication(
        resData.status,
        resData.localId,
        resData.email,   
        resData.token, 
        +resData.expiresIn);
        }
    )
    );
    this.router.navigate(['/auth'])
  }
 
  login(email: string, password: string) {
   return this.http.post<AuthResponseData>('http://127.0.0.1:8000/api/auth/login',
    {
    email: email,
    password: password,
    returnSecureToken: true
    }   
    ).pipe(catchError(this.handleError),
    tap(resData => {
      this.handleAuthentication(
        resData.status,
        resData.localId,
        resData.email,   
        resData.token, 
        +resData.expiresIn
        );
        this.router.navigate(['/'])
    })
    );
    
  }

  autoLogin() {
    const userData: {
      email: string;
      localId: number;
      status: boolean;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loaddedUser = new User(
      userData.status, 
      userData.localId, 
      userData.email, 
      userData._token, 
      new Date (userData._tokenExpirationDate)
    );
    if (loaddedUser.token){
      this.user.next(loaddedUser);
      const expirationDuration = 
      new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()    
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/'])
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration)
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    status: boolean,
    userId: number,
    email: string, 
    token: string, 
    expiresIn: number
    ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(
        status,
        userId,
        email, 
        token, 
        expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn  * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
        
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknow error ocurred!';
      if(!errorRes.error){
        return throwError(errorMessage);
      }

      switch (errorRes.error.message){
        case 'Email_exist': 
          errorMessage = 'This email already exists!';
          break;
        case 'Invalid_credentials':
          errorMessage = 'Invalid login credentials!'
      }
      return throwError(errorMessage);

    }
  }

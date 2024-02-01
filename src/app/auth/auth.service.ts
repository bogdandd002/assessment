import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

interface AuthResponseData {
  status: boolean;
  message: string;
  toke: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor(private http: HttpClient) { }

  signup(name:string, email: string, password: string) {
    return this.http.post<AuthResponseData>('http://127.0.0.1:8000/api/auth/register',
    {
      name: name,
      email: email,
      password: password,
      returnSecureToken: true

    }
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknow error ocurred!';
      if(!errorRes.error){
        return throwError(errorMessage);
      }

      switch (errorRes.error.message){
        case 'Email_exist': 
          errorMessage = 'This email already exists!';
      }
      return throwError(errorMessage);

    })
    );
  }
 
}

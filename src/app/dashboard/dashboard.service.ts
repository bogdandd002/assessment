import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RamsCount } from './rams_count.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


 countRams(): Observable <RamsCount>{

  return this.http.get<RamsCount>(this.apiUrl + "/countrams")
 }

}

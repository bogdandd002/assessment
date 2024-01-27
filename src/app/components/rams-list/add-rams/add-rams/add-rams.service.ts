import { Injectable } from '@angular/core';
import { Rams } from '../../../components-models/rams';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddRamsService {

  private apiUrl = environment.apiUrl;
  // private apiUrl = "http:/localhost:3000"
  private rams: Rams[] = [];

 constructor(private http: HttpClient){

  //   // let savedrams = localStorage.getItem("rams");
  //   // this.rams = savedrams? JSON.parse(savedrams) : [];
 }

  // CRUD

  getRams(): Observable<Rams[]> {
    return this.http.get<Rams[]>(this.apiUrl + "/rams");
  }

  getRam(id: string): Observable<Rams> {
    return this.http.get<Rams>(this.apiUrl + "/ram");
  }

  addRams(ram: Rams): Observable <void> {

    return this.http.post<void>(this.apiUrl + "/ram", ram)
    ram.id = Date.now().toString();
    this.rams.push(ram);
    // localStorage.setItem("rams", JSON.stringify(this.rams));
  }

  deleteRams(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/rams" + id);
    // localStorage.setItem("rams", JSON.stringify(this.rams));
  }

  reviseRams(id: string, updatedram: Rams): Observable <void> {
    return this.http.put<void>(this.apiUrl + "/ram" + id, updatedram)
    
    // localStorage.setItem("rams", JSON.stringify(this.rams));
  }
  
}


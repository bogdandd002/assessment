import { Injectable } from '@angular/core';
import { Rams } from '../../../components-models/rams';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';
import { switchMap, tap } from 'rxjs/operators';



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

  // getRams() {
  //   return this.http.get<any>(this.apiUrl+ '/api/rams');
  // }
  getRams(): Observable<Rams[]> {
    return this.http.get<Rams[]>(this.apiUrl + "/rams")
  }

  getRam(id): Observable<Rams> {
    return this.http.get<Rams>(this.apiUrl + "/rams/" + id);
  }

  addRams(ram: Rams): Observable <void> {

    return this.http.post<void>(this.apiUrl + "/rams", ram)
    // this.rams.push(ram);
    // localStorage.setItem("rams", JSON.stringify(this.rams));
  }

  deleteRams(id): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/rams/" + id)
      }
     
    // localStorage.setItem("rams", JSON.stringify(this.rams));
  

  reviseRams(id, updatedram: Rams): Observable <void> {
    return this.http.put<void>(this.apiUrl + "/rams/" + id, updatedram)
    
    // localStorage.setItem("rams", JSON.stringify(this.rams));;;
  }
  
}


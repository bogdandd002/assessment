import { Injectable } from '@angular/core';
import { Subcontractors } from '../../components-models/subcontractors';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rams } from '../../components-models/rams';

@Injectable({
  providedIn: 'root'
})
export class AddSubcontractorService {
  
  private apiUrl = environment.apiUrl;
  private subcon: Subcontractors [] = [];

  constructor(private http: HttpClient){
    // let savedsubcon = localStorage.getItem("subcon");
    // this.subcon = savedsubcon? JSON.parse(savedsubcon) : [];
  }

  // CRUD

  getsubcon():Observable<Subcontractors[]> {
    return this.http.get<Subcontractors[]>(this.apiUrl + "/subcon");
  }

  getSub(id: string): Observable<Subcontractors> {
    return this.http.get<Subcontractors>(this.apiUrl + "/subcon");
  }

  addsubcon(sub: Subcontractors): Observable <void> {

    return this.http.post<void>(this.apiUrl + "/subcon", sub)

    // this.subcon.push(sub);
    // localStorage.setItem("subcon", JSON.stringify(this.subcon));
  }

  deletesubcon(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/subcon/" + id);
    // let index = this.subcon.findIndex(res => res.id === id);
    // this.subcon.splice(index,1)
    // localStorage.setItem("subcon", JSON.stringify(this.subcon));
  }

  revisesubcon(id: string, editSubcon: Subcontractors): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/subcon" + id, editSubcon)
    
    // let index = this.subcon.findIndex(res => res.id === id);
    // this.subcon[index] = updatedram;
    // localStorage.setItem("subcon", JSON.stringify(this.subcon));
  }
  
}


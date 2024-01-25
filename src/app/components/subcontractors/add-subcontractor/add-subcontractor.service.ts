import { Injectable } from '@angular/core';
import { Subcontractors } from '../../components-models/subcontractors';

@Injectable({
  providedIn: 'root'
})
export class AddSubcontractorService {

  private subcon: Subcontractors [] = [];

  constructor(){
    let savedsubcon = localStorage.getItem("subcon");
    this.subcon = savedsubcon? JSON.parse(savedsubcon) : [];
  }

  // CRUD

  getsubcon(): Subcontractors[] {
    return this.subcon;
  }

  getSub(id: string): Subcontractors | undefined {
    return this.subcon.find(res => res.id === id);
  }

  addsubcon(sub: Subcontractors): void {

    sub.id = Date.now().toString();

    this.subcon.push(sub);
    localStorage.setItem("subcon", JSON.stringify(this.subcon));
  }

  deletesubcon(id: string): void {
    let index = this.subcon.findIndex(res => res.id === id);
    this.subcon.splice(index,1)
    localStorage.setItem("subcon", JSON.stringify(this.subcon));
  }

  revisesubcon(id: string, updatedram: Subcontractors): void {
    let index = this.subcon.findIndex(res => res.id === id);
    this.subcon[index] = updatedram;
    localStorage.setItem("subcon", JSON.stringify(this.subcon));
  }
  
}


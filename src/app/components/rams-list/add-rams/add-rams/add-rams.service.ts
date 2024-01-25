import { Injectable } from '@angular/core';
import { Rams } from '../../../components-models/rams';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddRamsService {

  private rams: Rams[] = [];

  constructor(){
    let savedrams = localStorage.getItem("rams");
    this.rams = savedrams? JSON.parse(savedrams) : [];
  }

  // CRUD

  getRams(): Rams[] {
    return this.rams;
  }

  getRam(id: string): Rams | undefined {
    return this.rams.find(res => res.id === id);
  }

  addRams(ram: Rams): void {

    ram.id = Date.now().toString();

    this.rams.push(ram);
    localStorage.setItem("rams", JSON.stringify(this.rams));
  }

  deleteRams(id: string): void {
    let index = this.rams.findIndex(res => res.id === id);
    this.rams.splice(index,1)
    localStorage.setItem("rams", JSON.stringify(this.rams));
  }

  reviseRams(id: string, updatedram: Rams): void {
    let index = this.rams.findIndex(res => res.id === id);
    this.rams[index] = updatedram;
    localStorage.setItem("rams", JSON.stringify(this.rams));
  }
  
}


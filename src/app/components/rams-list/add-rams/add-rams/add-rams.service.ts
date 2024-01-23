import { Injectable } from '@angular/core';
import { Rams } from '../../../components-models/rams';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddRamsService {

  private rams: Rams[] = [];

  constructor(private router: Router,){
    let savedRams = localStorage.getItem("rams");
    this.rams = savedRams? JSON.parse(savedRams) : [];
  }

  //CRUD

  getRams(): Rams[]{
    return this.rams;
  }
  
  getRam(id): Rams | undefined{
    return this.rams.find(res => res.id === id);
  }

  addRams(rams: Rams): void{
    this.rams.push(rams);
   localStorage.setItem("rams", JSON.stringify(this.rams));
   this.router.navigate(['/rams']);
  }

  deleteRams(id): void{
    let index = this.rams.findIndex(res => res.id === id);
    this.rams.slice(index, 1);
    localStorage.setItem("rams", JSON.stringify(this.rams));
  }
  reviseRams(reviseRams: Rams): void{
    let index = this.rams.findIndex (res => res.id === reviseRams.id);
    this.rams[index] = reviseRams;
    localStorage.setItem("rams", JSON.stringify(this.rams));
  }
}

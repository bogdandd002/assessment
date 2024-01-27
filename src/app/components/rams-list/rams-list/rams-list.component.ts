import { Component, OnInit } from '@angular/core';
import { Rams } from '../../components-models/rams';
import { Router, RouterModule } from '@angular/router';
import { AddRamsService } from '../add-rams/add-rams/add-rams.service';

@Component({
  selector: 'app-rams-list',
  templateUrl: './rams-list.component.html',
  styleUrl: './rams-list.component.css'
})
export class RamsListComponent implements OnInit{

  rams: Rams[] = [];

  constructor(
    private router: Router,
    private addRams: AddRamsService){}

  ngOnInit(): void {

    this.addRams.getRams().subscribe(data => {
      this.rams = data;
    });
  }

  newRams(){
    this.router.navigate(['/addrams']);
  }

  deleteRam(id: string){
    this.addRams.deleteRams(id).subscribe(() => {
      console.log("Delete request got procesed")
    });
  }

}
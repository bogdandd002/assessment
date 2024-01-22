import { Component, OnInit } from '@angular/core';
import { Rams } from '../../components-models/rams';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rams-list',
  templateUrl: './rams-list.component.html',
  styleUrl: './rams-list.component.css'
})
export class RamsListComponent implements OnInit{

  newRamsTitle: string = " ";
  newRamsRev: number = 0;
  newRevDate: Date = new Date();
  newSubcon: string = " ";
  newFileLoc: string = " ";

  constructor(private router: Router) { 
  }

  rams: Rams [] = []

  ngOnInit(): void {
    let savedRams = localStorage.getItem("rams")

    this.rams = savedRams ? JSON.parse(savedRams) : []
  }
  
addRams (){

  this.router.navigate(['/addrams']);
  // if(this.newRamsTitle.trim().length && this.newRevDate){
  //   let newRams: Rams = {
  //     id:1,
  //     name: this.newRamsTitle,
  //     subcon: this.newSubcon,
  //     rev: this.newRamsRev,
  //     rev_date: this.newRevDate,
  //     status: {
  //       approved : false,
  //       rejected_w_comments : false,
  //       revised_waiting_comments: false
  //     },
  //     file_location: this.newFileLoc
  //   }

  //   this.rams.push(newRams)

  //   localStorage.setItem("rams", JSON.stringify(this.rams))
  // }
}

reviseRams (index: number){
  this.rams.splice(index, 1)
  localStorage.setItem("rams", JSON.stringify(this.rams))
}
}

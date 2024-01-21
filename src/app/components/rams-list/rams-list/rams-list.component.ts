import { Component } from '@angular/core';
import { Rams } from '../../components-models/rams';

@Component({
  selector: 'app-rams-list',
  templateUrl: './rams-list.component.html',
  styleUrl: './rams-list.component.css'
})
export class RamsListComponent {

  newRamsTitle: string = " ";
  newRamsRev: number = 0;
  newRevDate: Date = new Date();
  newStatus: string = " ";
  newFileLoc: string = " ";

  rams: Rams [] = []
  
addRams (){
  if(this.newRamsTitle.trim().length && this.newRevDate){
    let newRams: Rams = {
      id:1,
      name: this.newRamsTitle,
      rev: this.newRamsRev,
      rev_date: this.newRevDate,
      status: {
        approved : false,
        rejected_w_comments : false,
        revised_waiting_comments: false
      },
      file_location: this.newFileLoc
    }

    this.rams.push(newRams)
  }
}

}

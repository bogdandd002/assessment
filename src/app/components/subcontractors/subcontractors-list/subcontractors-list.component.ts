import { Component, OnInit} from '@angular/core';
import { Subcontractors } from '../../components-models/subcontractors';
import { Router } from '@angular/router';
import { AddSubcontractorService } from '../add-subcontractor/add-subcontractor.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-subcontractors-list',
  templateUrl: './subcontractors-list.component.html',
  styleUrl: './subcontractors-list.component.css'
})
export class SubcontractorsListComponent implements OnInit{

  subcon: Subcontractors[] = [];

  constructor(
    private router: Router,
    private addSubcon: AddSubcontractorService){}

  ngOnInit(): void {

    this.addSubcon.getsubcon().subscribe(data => {
      this.subcon = data;
    });
  }

  newSubcon(){
    this.router.navigate(['/addsubcon']);
  }

  deleteSubcon(id: string){
    this.addSubcon.deletesubcon(id).subscribe(() => {
      console.log("Delete request got processed")
    });
  }

}



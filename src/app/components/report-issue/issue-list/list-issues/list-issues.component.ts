import { Component, OnInit } from '@angular/core';
import { Issue } from '../../../components-models/issue';
import { Router } from '@angular/router';
import { ReportService } from '../../report.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrl: './list-issues.component.css'
})
export class ListIssuesComponent implements OnInit{

  issue: Issue [] = [];

  constructor(
    private router: Router,
    private addIssue: ReportService){}

  ngOnInit(): void {

    this.issue = this.addIssue.getIssues();
  }

  newIssue(){
    this.router.navigate(['/addissue']);
  }

  deleteSubcon(id: string){
    this.addIssue.closedIssue(id);
  }

}


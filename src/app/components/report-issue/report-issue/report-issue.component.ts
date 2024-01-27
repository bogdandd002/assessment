import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Issue } from '../../components-models/issue';
import { Subcontractors } from '../../components-models/subcontractors';
import { ReportService } from '../report.service';
import { AddSubcontractorService } from '../../subcontractors/add-subcontractor/add-subcontractor.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrl: './report-issue.component.css',
})
export class ReportIssueComponent {

  subcon: Subcontractors [] = [];
  issueForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private issueService: ReportService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private subconList: AddSubcontractorService
    ){

  }

  ngOnInit(): void {
    this.subcon = this.subconList.getsubcon();
    this.issueForm = this.formBuilder.group({
      type: ['', Validators.required],
      issueTitle: ['', Validators.required],
      issueDescrition: ['', Validators.required],
      subcon: ['', Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let issue = this.issueService.getIssue(id);

      if(issue)
        this.issueForm.patchValue(issue)
    }
  }

  onSubmit() {
    if(this.issueForm.valid){
      
      let issue: Issue = this.issueForm.value;
      issue.issueDate = new Date(Date.now());
      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        // Update
        this.issueService.closedIssue(id);
      } else {
        // New
        this.issueService.addIssue(issue);   

      }

      this.router.navigate(['/'])
    }
  }

}
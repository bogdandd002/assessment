import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './full-layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RamsListComponent } from './components/rams-list/rams-list/rams-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRamsComponent } from './components/rams-list/add-rams/add-rams/add-rams.component';
import { SubcontractorsListComponent } from './components/subcontractors/subcontractors-list/subcontractors-list.component';
import { AddSubcontractorComponent } from './components/subcontractors/add-subcontractor/add-subcontractor/add-subcontractor.component';
import { ReportIssueComponent } from './components/report-issue/report-issue/report-issue.component';
import { ListIssuesComponent } from './components/report-issue/issue-list/list-issues/list-issues.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from 'react-bootstrap';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    RamsListComponent,
    AddRamsComponent,
    SubcontractorsListComponent,
    AddSubcontractorComponent,
    ReportIssueComponent,
    ListIssuesComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

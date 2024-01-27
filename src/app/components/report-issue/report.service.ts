import { Injectable } from '@angular/core';
import { Issue } from '../components-models/issue';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private issue: Issue [] = [];

  constructor(){
    let savedissues = localStorage.getItem("issues");
    this.issue = savedissues? JSON.parse(savedissues) : [];
  }

  // CRUD

  getIssues(): Issue [] {
    return this.issue;
  }

  getIssue(id: string): Issue | undefined {
    return this.issue.find(res => res.id === id);
  }

  addIssue(sub: Issue ): void {

    sub.id = Date.now().toString();
    this.issue.push(sub);
    localStorage.setItem("issues", JSON.stringify(this.issue));
  }

  // closeIssue(id: string): void {
  //   let index = this.issue.findIndex(res => res.id === id);
  //   this.issue
  //   localStorage.setItem("issues", JSON.stringify(this.issue));
  // }

  closedIssue(id: string): void {
    let index = this.issue.findIndex(res => res.id === id);
    this.issue[index].issueClosingDate = new Date(Date.now());
    localStorage.setItem("issue", JSON.stringify(this.issue));
  }
  
}

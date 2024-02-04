import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./full-layout/layout/layout.component";
import { RamsListComponent } from "./components/rams-list/rams-list/rams-list.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { AddRamsComponent } from "./components/rams-list/add-rams/add-rams/add-rams.component";
import { AddSubcontractorComponent } from "./components/subcontractors/add-subcontractor/add-subcontractor/add-subcontractor.component";
import { SubcontractorsListComponent } from "./components/subcontractors/subcontractors-list/subcontractors-list.component";
import { ReportIssueComponent } from "./components/report-issue/report-issue/report-issue.component";
import { ListIssuesComponent } from "./components/report-issue/issue-list/list-issues/list-issues.component";
import { AuthComponent } from "./auth/auth/auth.component";
import { AuthGuard } from "./auth/auth/auth.guard";


const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'rams', component: RamsListComponent},
    {path: 'addrams', component: AddRamsComponent, canActivate:[AuthGuard]},
    {path:"edit/:id", component: AddRamsComponent, canActivate:[AuthGuard]},
    {path: 'subcontractors', component: SubcontractorsListComponent},
    {path:"edit_sub/:id", component: AddSubcontractorComponent, canActivate:[AuthGuard]},
    {path: 'addsubcon', component: AddSubcontractorComponent, canActivate:[AuthGuard]},
    {path: 'addissue', component: ReportIssueComponent, canActivate:[AuthGuard]},
    {path:"close/:id", component: ReportIssueComponent, canActivate:[AuthGuard]},
    {path: 'issues', component: ListIssuesComponent},
    {path: 'auth', component: AuthComponent},
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./full-layout/layout/layout.component";
import { RamsListComponent } from "./components/rams-list/rams-list/rams-list.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { AddRamsComponent } from "./components/rams-list/add-rams/add-rams/add-rams.component";
import { AddSubcontractorComponent } from "./components/subcontractors/add-subcontractor/add-subcontractor/add-subcontractor.component";
import { SubcontractorsListComponent } from "./components/subcontractors/subcontractors-list/subcontractors-list.component";


const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'rams', component: RamsListComponent},
    {path: 'addrams', component: AddRamsComponent},
    {path:"edit/:id", component: AddRamsComponent},
    {path: 'subcontractors', component: SubcontractorsListComponent},
    {path: 'addsubcon', component: AddSubcontractorComponent},
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
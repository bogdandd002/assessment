import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./full-layout/layout/layout.component";
import { RamsListComponent } from "./components/rams-list/rams-list/rams-list.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { AddRamsComponent } from "./components/rams-list/add-rams/add-rams/add-rams.component";


const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'rams', component: RamsListComponent},
    {path: 'addrams', component: AddRamsComponent}
       
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
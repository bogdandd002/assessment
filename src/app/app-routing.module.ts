import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./full-layout/layout/layout.component";
import { RamsListComponent } from "./components/rams-list/rams-list/rams-list.component";


const routes: Routes = [
    { path:'rams', component: RamsListComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
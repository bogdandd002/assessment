import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './full-layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RamsListComponent } from './components/rams-list/rams-list/rams-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRamsComponent } from './components/rams-list/add-rams/add-rams/add-rams.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    RamsListComponent,
    AddRamsComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

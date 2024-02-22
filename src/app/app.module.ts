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
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner/loading-spinner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { FlexModule } from '@angular/flex-layout';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { DropdownModule, ProgressModule,  WidgetModule, GridModule, AvatarModule } from '@coreui/angular-pro';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { SmartTableModule, SharedModule, ButtonModule, TableModule, UtilitiesModule } from '@coreui/angular-pro';



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
    AuthComponent,
    LoadingSpinnerComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggle,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    FlexModule,
    IconModule,
    DropdownModule,
    ProgressModule,
    SharedModule,
    WidgetModule,
    IconModule,
    ChartjsModule,
    GridModule,
    SmartTableModule,
    ButtonModule,
    TableModule,
    UtilitiesModule,
    AvatarModule
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

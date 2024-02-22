import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { RamsCount } from '../rams_count.interface';
import { cilChartPie } from '@coreui/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  num: RamsCount;
  isLoading=false;
  icons = { cilChartPie};

  constructor (private dashServ: DashboardService){}

  ngOnInit() {
    this.isLoading=true;
    this.dashServ.countRams().subscribe(data => {
      this.num = data;
      this.isLoading=false;
    });
  }
  isObject(value: any): boolean { return typeof value === 'object'; }
 }

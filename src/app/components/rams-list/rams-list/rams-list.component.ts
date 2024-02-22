import { Component, OnInit } from '@angular/core';
import { Rams } from '../../components-models/rams';
import { Router } from '@angular/router';
import { AddRamsService } from '../add-rams/add-rams/add-rams.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { IColumn, IItem } from '@coreui/angular-pro';
import usersData from './data';

@Component({
  selector: 'app-rams-list',
  templateUrl: './rams-list.component.html',
  styleUrl: './rams-list.component.css'
})


export class RamsListComponent implements OnInit{

   // part of authentification process 
   isAuthenticated = false;
   private userSub: Subscription;

  rams: Rams[] = [];
  isLoading = false;
  num : number;
  constructor(
    private authService: AuthService,
    private router: Router,
    private addRams: AddRamsService){}

  ngOnInit(): void {

         // Part of the authentification process - controlling link shown
   this. userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
  });
      this.isLoading = true;
    this.addRams.getRams().subscribe(data => {
      this.rams = data
      console.log(this.rams.length)
      if(this.rams.length < 5)
        {this.num = this.rams.length;} else{this.num = 5}
      this.isLoading = false;
    });
   
  }

  columns: (IColumn | string)[] = [
    {
      key: 'ramsTitle',
      _style: { width: '20%' },
      _props: { color: 'primary', class: 'fw-bold' },
    },
    { key: 'revNumber', filter: false, sorter: false, _style: { width: '10%' }, _classes: 'text-muted small' },
    { key: 'ramsSubcon', filter: true, sorter: true, _style: { width: '15%' }, _classes: 'text-muted small', label:'Subcontractor' },
    { key: 'ramsStatus', _style: { width: '15%' } },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'show2',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ]

  getBadge(status: string) {
    switch (status) {
      case 'Approved':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }

  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }

  newRams(){
    this.router.navigate(['/addrams']);
  }

  deleteRam(id: number){
    this.addRams.deleteRams(id).subscribe(() => {
      this.ngOnInit();
    });
  }

}
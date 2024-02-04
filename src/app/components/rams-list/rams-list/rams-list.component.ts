import { Component, OnInit } from '@angular/core';
import { Rams } from '../../components-models/rams';
import { Router } from '@angular/router';
import { AddRamsService } from '../add-rams/add-rams/add-rams.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';

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
      console.log('data 1'+ data)
      this.isLoading = false;
    });
  }

  newRams(){
    this.router.navigate(['/addrams']);
  }

  deleteRam(id: string){
    this.addRams.deleteRams(id).subscribe(() => {
      this.ngOnInit();
    });
  }

}
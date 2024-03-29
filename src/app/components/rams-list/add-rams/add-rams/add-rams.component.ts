import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddRamsService } from './add-rams.service';
import { Rams } from '../../../components-models/rams';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-rams',
  templateUrl: './add-rams.component.html',
  styleUrl: './add-rams.component.css'
})
export class AddRamsComponent implements OnInit {

  ramsForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private ramsService: AddRamsService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.ramsForm = this.formBuilder.group({
      ramsTitle: ['', Validators.required],
      ramsSubcon: ['', Validators.required],
      revNumber: ['', Validators.required],
      revDate: ['', Validators.required],
      ramsStatus: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let rams = this.ramsService.getRam(id)

      if(rams)
        this.ramsForm.patchValue(rams)
    }
  }

  onSubmit() {
    if(this.ramsForm.valid){

      let rams: Rams = this.ramsForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        // Update
        this.ramsService.reviseRams(id, rams)
      } else {
        // New
        this.ramsService.addRams(rams)   

      }

      this.router.navigate(['/rams'])
    }
  }

}

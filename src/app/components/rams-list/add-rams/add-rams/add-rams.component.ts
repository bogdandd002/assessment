import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddRamsService } from './add-rams.service';
import { Rams } from '../../../components-models/rams';

@Component({
  selector: 'app-add-rams',
  templateUrl: './add-rams.component.html',
  styleUrl: './add-rams.component.css'
})
export class AddRamsComponent implements OnInit {

  newRamForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private ramsService: AddRamsService){

  }

  ngOnInit(): void {
    this.newRamForm =this.formBuilder.group({
      ramsId: [''],
      ramsTitle: ['', Validators.required],
      subconName: ['', Validators.required],
      revNo: ['', Validators.required],
      revDate: ['', Validators.required],
      approved: [''],
      rejected: [''],
      pending: [''],
      fileLoc: [''],

    })
  }

  onSubmit() {
    if (this.newRamForm.valid){
      
      let rams: Rams = this.newRamForm.value;
      this.ramsService.addRams(rams)

    }
  }
}

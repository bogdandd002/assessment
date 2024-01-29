import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subcontractors } from '../../../components-models/subcontractors';
import { AddSubcontractorService } from '../add-subcontractor.service';

@Component({
  selector: 'app-add-subcontractor',
  templateUrl: './add-subcontractor.component.html',
  styleUrl: './add-subcontractor.component.css'
})
export class AddSubcontractorComponent {

  subconForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private subconService: AddSubcontractorService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.subconForm = this.formBuilder.group({
      subconName: ['', Validators.required],
      subconActivity: ['', Validators.required],
      startDate: ['', Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let rams = this.subconService.getSub(id)

      if(rams)
        this.subconForm.patchValue(rams)
    }
  }

  onSubmit() {
    if(this.subconForm.valid){

      let rams: Subcontractors = this.subconForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        // Update
        this.subconService.revisesubcon(id, rams).subscribe(() => {
          console.log("Update request processed")
        })
      } else {
        // New
        this.subconService.addsubcon(rams).subscribe(() => {
          console.log("New Subcontractor added")
        })   

      }

      this.router.navigate(['/subcontractors'])
    }
  }

}


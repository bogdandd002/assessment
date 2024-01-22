import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-rams',
  templateUrl: './add-rams.component.html',
  styleUrl: './add-rams.component.css'
})
export class AddRamsComponent {

  newRam: FormGroup = new FormGroup({});

  onSubmit() {
    
  }
}

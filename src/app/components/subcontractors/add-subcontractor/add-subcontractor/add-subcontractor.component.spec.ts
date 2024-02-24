import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcontractorComponent } from './add-subcontractor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../../../app.module';

describe('AddSubcontractorComponent', () => {
  let component: AddSubcontractorComponent;
  let fixture: ComponentFixture<AddSubcontractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        AppModule],
      declarations: [AddSubcontractorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSubcontractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

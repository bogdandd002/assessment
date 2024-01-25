import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontractorsListComponent } from './subcontractors-list.component';

describe('SubcontractorsListComponent', () => {
  let component: SubcontractorsListComponent;
  let fixture: ComponentFixture<SubcontractorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcontractorsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcontractorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

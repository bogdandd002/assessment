import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontractorsListComponent } from './subcontractors-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../../app.module';

describe('SubcontractorsListComponent', () => {
  let component: SubcontractorsListComponent;
  let fixture: ComponentFixture<SubcontractorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        AppModule],
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRamsComponent } from './add-rams.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../../../app.module';

describe('AddRamsComponent', () => {
  let component: AddRamsComponent;
  let fixture: ComponentFixture<AddRamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        AppModule],
      declarations: [AddRamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

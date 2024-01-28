
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RamsListComponent } from './rams-list.component';

describe('RamsListComponent', () => {
  let component: RamsListComponent;
  let fixture: ComponentFixture<RamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RamsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

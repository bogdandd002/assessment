import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIssuesComponent } from './list-issues.component';
import { AppModule } from '../../../../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListIssuesComponent', () => {
  let component: ListIssuesComponent;
  let fixture: ComponentFixture<ListIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        AppModule],
      declarations: [ListIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

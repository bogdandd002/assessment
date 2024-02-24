import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIssueComponent } from './report-issue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../../app.module';

describe('ReportIssueComponent', () => {
  let component: ReportIssueComponent;
  let fixture: ComponentFixture<ReportIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        AppModule],
      declarations: [ReportIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

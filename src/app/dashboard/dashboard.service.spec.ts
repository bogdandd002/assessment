import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { AppModule } from '../app.module';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

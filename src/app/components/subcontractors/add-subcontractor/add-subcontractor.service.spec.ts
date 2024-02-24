import { TestBed } from '@angular/core/testing';

import { AddSubcontractorService } from './add-subcontractor.service';
import { AppModule } from '../../../app.module';

describe('AddSubcontractorService', () => {
  let service: AddSubcontractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule],
    });
    service = TestBed.inject(AddSubcontractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

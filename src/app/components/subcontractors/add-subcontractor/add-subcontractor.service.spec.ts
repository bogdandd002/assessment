import { TestBed } from '@angular/core/testing';

import { AddSubcontractorService } from './add-subcontractor.service';

describe('AddSubcontractorService', () => {
  let service: AddSubcontractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSubcontractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

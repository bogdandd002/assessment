import { TestBed } from '@angular/core/testing';

import { AddRamsService } from './add-rams.service';

describe('AddRamsService', () => {
  let service: AddRamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddRamsService } from './add-rams.service';
import { AppModule } from '../../../../app.module';

describe('AddRamsService', () => {
  let service: AddRamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule],
    });
    service = TestBed.inject(AddRamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

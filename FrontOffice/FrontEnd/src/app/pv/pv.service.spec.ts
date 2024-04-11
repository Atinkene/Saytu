import { TestBed } from '@angular/core/testing';

import { PvService } from './pv.service';

describe('PvService', () => {
  let service: PvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SispService } from './sisp.service';

describe('SispService', () => {
  let service: SispService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SispService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

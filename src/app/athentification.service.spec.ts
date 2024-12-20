import { TestBed } from '@angular/core/testing';

import { AthentificationService } from './athentification.service';

describe('AthentificationService', () => {
  let service: AthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

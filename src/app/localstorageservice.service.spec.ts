import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from './localstorageservice.service';

describe('LocalstorageserviceService', () => {
  let service: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

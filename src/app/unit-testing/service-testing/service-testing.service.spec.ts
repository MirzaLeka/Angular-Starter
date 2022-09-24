import { TestBed } from '@angular/core/testing';

import { ServiceTestingService } from './service-testing.service';

describe('ServiceTestingService', () => {
  let service: ServiceTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

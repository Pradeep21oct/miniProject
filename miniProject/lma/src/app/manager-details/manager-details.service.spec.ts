import { TestBed } from '@angular/core/testing';

import { ManagerDetailsService } from './manager-details.service';

describe('ManagerDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerDetailsService = TestBed.get(ManagerDetailsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NewLeaveApplicationService } from './new-leave-application.service';

describe('NewLeaveApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewLeaveApplicationService = TestBed.get(NewLeaveApplicationService);
    expect(service).toBeTruthy();
  });
});

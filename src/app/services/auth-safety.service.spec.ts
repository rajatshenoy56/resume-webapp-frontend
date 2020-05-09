import { TestBed } from '@angular/core/testing';

import { AuthSafetyService } from './auth-safety.service';

describe('AuthSafetyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSafetyService = TestBed.get(AuthSafetyService);
    expect(service).toBeTruthy();
  });
});

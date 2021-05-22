import { TestBed } from '@angular/core/testing';

import { ProfileSerService } from './profile-ser.service';

describe('ProfileSerService', () => {
  let service: ProfileSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

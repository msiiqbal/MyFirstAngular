import { TestBed } from '@angular/core/testing';

import { SerTest2Service } from './ser-test2.service';

describe('SerTest2Service', () => {
  let service: SerTest2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerTest2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

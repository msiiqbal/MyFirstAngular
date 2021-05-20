import { TestBed } from '@angular/core/testing';

import { SerTest1Service } from './ser-test1.service';

describe('SerTest1Service', () => {
  let service: SerTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerTest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

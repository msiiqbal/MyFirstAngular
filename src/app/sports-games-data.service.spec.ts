import { TestBed } from '@angular/core/testing';

import { SportsGamesDataService } from './sports-games-data.service';

describe('SportsGamesDataService', () => {
  let service: SportsGamesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsGamesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

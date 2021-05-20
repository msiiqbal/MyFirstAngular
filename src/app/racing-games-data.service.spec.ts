import { TestBed } from '@angular/core/testing';

import { RacingGamesDataService } from './racing-games-data.service';

describe('RacingGamesDataService', () => {
  let service: RacingGamesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacingGamesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

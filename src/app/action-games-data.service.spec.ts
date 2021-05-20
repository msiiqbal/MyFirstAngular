import { TestBed } from '@angular/core/testing';

import { ActionGamesDataService } from './action-games-data.service';

describe('ActionGamesDataService', () => {
  let service: ActionGamesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionGamesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

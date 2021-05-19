import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingGamesComponent } from './racing-games.component';

describe('RacingGamesComponent', () => {
  let component: RacingGamesComponent;
  let fixture: ComponentFixture<RacingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacingGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

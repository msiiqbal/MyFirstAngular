import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsGamesComponent } from './sports-games.component';

describe('SportsGamesComponent', () => {
  let component: SportsGamesComponent;
  let fixture: ComponentFixture<SportsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

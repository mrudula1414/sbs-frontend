import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlisthomeComponent } from './watchlisthome.component';

describe('WatchlisthomeComponent', () => {
  let component: WatchlisthomeComponent;
  let fixture: ComponentFixture<WatchlisthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlisthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlisthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

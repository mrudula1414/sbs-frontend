import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplewatchlistsComponent } from './multiplewatchlists.component';

describe('MultiplewatchlistsComponent', () => {
  let component: MultiplewatchlistsComponent;
  let fixture: ComponentFixture<MultiplewatchlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplewatchlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplewatchlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbuttonComponent } from './detailsbutton.component';

describe('DetailsbuttonComponent', () => {
  let component: DetailsbuttonComponent;
  let fixture: ComponentFixture<DetailsbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

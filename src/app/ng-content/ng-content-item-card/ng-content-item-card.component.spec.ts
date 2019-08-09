import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentItemCardComponent } from './ng-content-item-card.component';

describe('NgContentItemCardComponent', () => {
  let component: NgContentItemCardComponent;
  let fixture: ComponentFixture<NgContentItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

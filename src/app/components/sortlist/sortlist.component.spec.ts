import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortlistComponent } from './sortlist.component';

describe('SortlistComponent', () => {
  let component: SortlistComponent;
  let fixture: ComponentFixture<SortlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

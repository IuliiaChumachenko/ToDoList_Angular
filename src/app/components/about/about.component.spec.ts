import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblutComponent } from './ablut.component';

describe('AblutComponent', () => {
  let component: AblutComponent;
  let fixture: ComponentFixture<AblutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

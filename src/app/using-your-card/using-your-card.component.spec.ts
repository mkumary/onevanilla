import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingYourCardComponent } from './using-your-card.component';

describe('UsingYourCardComponent', () => {
  let component: UsingYourCardComponent;
  let fixture: ComponentFixture<UsingYourCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingYourCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingYourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

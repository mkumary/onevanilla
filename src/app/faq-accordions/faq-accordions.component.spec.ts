import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAccordionsComponent } from './faq-accordions.component';

describe('FaqAccordionsComponent', () => {
  let component: FaqAccordionsComponent;
  let fixture: ComponentFixture<FaqAccordionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqAccordionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

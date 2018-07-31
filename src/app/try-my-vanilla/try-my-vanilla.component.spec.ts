import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryMyVanillaComponent } from './try-my-vanilla.component';

describe('TryMyVanillaComponent', () => {
  let component: TryMyVanillaComponent;
  let fixture: ComponentFixture<TryMyVanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryMyVanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryMyVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ele1Component } from './ele1.component';

describe('Ele1Component', () => {
  let component: Ele1Component;
  let fixture: ComponentFixture<Ele1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ele1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ele1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

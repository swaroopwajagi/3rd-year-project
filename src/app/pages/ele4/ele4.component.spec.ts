import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ele4Component } from './ele4.component';

describe('Ele4Component', () => {
  let component: Ele4Component;
  let fixture: ComponentFixture<Ele4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ele4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ele4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

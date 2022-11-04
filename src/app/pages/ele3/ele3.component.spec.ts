import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ele3Component } from './ele3.component';

describe('Ele3Component', () => {
  let component: Ele3Component;
  let fixture: ComponentFixture<Ele3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ele3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ele3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

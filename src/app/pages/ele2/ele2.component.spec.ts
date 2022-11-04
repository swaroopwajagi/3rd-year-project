import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ele2Component } from './ele2.component';

describe('Ele2Component', () => {
  let component: Ele2Component;
  let fixture: ComponentFixture<Ele2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ele2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ele2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

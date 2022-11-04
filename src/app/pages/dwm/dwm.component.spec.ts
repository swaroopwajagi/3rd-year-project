import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmComponent } from './dwm.component';

describe('DwmComponent', () => {
  let component: DwmComponent;
  let fixture: ComponentFixture<DwmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

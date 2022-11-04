import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DspdComponent } from './dspd.component';

describe('DspdComponent', () => {
  let component: DspdComponent;
  let fixture: ComponentFixture<DspdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DspdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

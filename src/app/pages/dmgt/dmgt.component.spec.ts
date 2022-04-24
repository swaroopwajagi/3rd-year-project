import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmgtComponent } from './dmgt.component';

describe('DmgtComponent', () => {
  let component: DmgtComponent;
  let fixture: ComponentFixture<DmgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

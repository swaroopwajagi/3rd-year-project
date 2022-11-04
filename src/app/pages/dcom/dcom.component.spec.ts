import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcomComponent } from './dcom.component';

describe('DcomComponent', () => {
  let component: DcomComponent;
  let fixture: ComponentFixture<DcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

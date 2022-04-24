import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeamComponent } from './deam.component';

describe('DeamComponent', () => {
  let component: DeamComponent;
  let fixture: ComponentFixture<DeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

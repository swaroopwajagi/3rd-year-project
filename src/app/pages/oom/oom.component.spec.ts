import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OomComponent } from './oom.component';

describe('OomComponent', () => {
  let component: OomComponent;
  let fixture: ComponentFixture<OomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdComponent } from './esd.component';

describe('EsdComponent', () => {
  let component: EsdComponent;
  let fixture: ComponentFixture<EsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

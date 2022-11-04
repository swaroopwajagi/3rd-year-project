import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImflComponent } from './imfl.component';

describe('ImflComponent', () => {
  let component: ImflComponent;
  let fixture: ComponentFixture<ImflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImflComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

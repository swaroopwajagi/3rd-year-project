import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepmComponent } from './sepm.component';

describe('SepmComponent', () => {
  let component: SepmComponent;
  let fixture: ComponentFixture<SepmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

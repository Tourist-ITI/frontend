import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsThePlanComponent } from './this-is-the-plan.component';

describe('ThisIsThePlanComponent', () => {
  let component: ThisIsThePlanComponent;
  let fixture: ComponentFixture<ThisIsThePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisIsThePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisIsThePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

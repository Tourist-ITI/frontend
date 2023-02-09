import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSignUpComponent } from './expert-sign-up.component';

describe('ExpertSignUpComponent', () => {
  let component: ExpertSignUpComponent;
  let fixture: ComponentFixture<ExpertSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

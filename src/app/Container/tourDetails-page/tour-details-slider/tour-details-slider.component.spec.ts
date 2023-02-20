import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsSliderComponent } from './tour-details-slider.component';

describe('TourDetailsSliderComponent', () => {
  let component: TourDetailsSliderComponent;
  let fixture: ComponentFixture<TourDetailsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

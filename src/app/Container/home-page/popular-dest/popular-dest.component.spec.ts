import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDestComponent } from './popular-dest.component';

describe('PopularDestComponent', () => {
  let component: PopularDestComponent;
  let fixture: ComponentFixture<PopularDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

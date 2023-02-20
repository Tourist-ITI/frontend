import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerTipsComponent } from './traveler-tips.component';

describe('TravelerTipsComponent', () => {
  let component: TravelerTipsComponent;
  let fixture: ComponentFixture<TravelerTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelerTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelerTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

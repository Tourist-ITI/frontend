import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsToBookComponent } from './reasons-to-book.component';

describe('ReasonsToBookComponent', () => {
  let component: ReasonsToBookComponent;
  let fixture: ComponentFixture<ReasonsToBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsToBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonsToBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

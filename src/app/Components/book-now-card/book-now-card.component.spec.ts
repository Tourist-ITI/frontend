import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowCardComponent } from './book-now-card.component';

describe('BookNowCardComponent', () => {
  let component: BookNowCardComponent;
  let fixture: ComponentFixture<BookNowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNowCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

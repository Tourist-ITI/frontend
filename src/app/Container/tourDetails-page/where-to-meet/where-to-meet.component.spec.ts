import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToMeetComponent } from './where-to-meet.component';

describe('WhereToMeetComponent', () => {
  let component: WhereToMeetComponent;
  let fixture: ComponentFixture<WhereToMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereToMeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereToMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

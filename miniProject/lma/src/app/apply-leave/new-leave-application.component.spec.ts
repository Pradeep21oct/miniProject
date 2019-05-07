import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeaveApplicationComponent } from './new-leave-application.component';

describe('NewLeaveApplicationComponent', () => {
  let component: NewLeaveApplicationComponent;
  let fixture: ComponentFixture<NewLeaveApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLeaveApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeaveApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

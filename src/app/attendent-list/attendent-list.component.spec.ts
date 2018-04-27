import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendentListComponent } from './attendent-list.component';

describe('AttendentListComponent', () => {
  let component: AttendentListComponent;
  let fixture: ComponentFixture<AttendentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAsistirComponent } from './landing-asistir.component';

describe('LandingAsistirComponent', () => {
  let component: LandingAsistirComponent;
  let fixture: ComponentFixture<LandingAsistirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAsistirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAsistirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

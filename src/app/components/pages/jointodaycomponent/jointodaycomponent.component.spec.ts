import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointodaycomponentComponent } from './jointodaycomponent.component';

describe('JointodaycomponentComponent', () => {
  let component: JointodaycomponentComponent;
  let fixture: ComponentFixture<JointodaycomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JointodaycomponentComponent]
    });
    fixture = TestBed.createComponent(JointodaycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

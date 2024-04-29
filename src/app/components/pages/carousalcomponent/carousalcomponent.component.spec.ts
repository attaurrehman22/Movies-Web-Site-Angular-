import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalcomponentComponent } from './carousalcomponent.component';

describe('CarousalcomponentComponent', () => {
  let component: CarousalcomponentComponent;
  let fixture: ComponentFixture<CarousalcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousalcomponentComponent]
    });
    fixture = TestBed.createComponent(CarousalcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

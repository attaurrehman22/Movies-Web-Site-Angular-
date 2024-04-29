import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingandfreetowatchComponent } from './trendingandfreetowatch.component';

describe('TrendingandfreetowatchComponent', () => {
  let component: TrendingandfreetowatchComponent;
  let fixture: ComponentFixture<TrendingandfreetowatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingandfreetowatchComponent]
    });
    fixture = TestBed.createComponent(TrendingandfreetowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

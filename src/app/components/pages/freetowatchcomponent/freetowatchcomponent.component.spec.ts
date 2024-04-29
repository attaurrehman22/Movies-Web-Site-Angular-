import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetowatchcomponentComponent } from './freetowatchcomponent.component';

describe('FreetowatchcomponentComponent', () => {
  let component: FreetowatchcomponentComponent;
  let fixture: ComponentFixture<FreetowatchcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreetowatchcomponentComponent]
    });
    fixture = TestBed.createComponent(FreetowatchcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

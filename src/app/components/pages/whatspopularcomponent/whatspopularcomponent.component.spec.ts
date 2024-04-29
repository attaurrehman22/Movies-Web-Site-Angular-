import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatspopularcomponentComponent } from './whatspopularcomponent.component';

describe('WhatspopularcomponentComponent', () => {
  let component: WhatspopularcomponentComponent;
  let fixture: ComponentFixture<WhatspopularcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatspopularcomponentComponent]
    });
    fixture = TestBed.createComponent(WhatspopularcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

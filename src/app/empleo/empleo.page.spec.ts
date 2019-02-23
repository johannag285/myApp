import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleoPage } from './empleo.page';

describe('EmpleoPage', () => {
  let component: EmpleoPage;
  let fixture: ComponentFixture<EmpleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
